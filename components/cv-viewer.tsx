"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import { X, Download, ExternalLink, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, FileText, Loader2 } from "lucide-react"

/* ------------------------------------------------------------------ */
/*  Global type for pdf.js loaded from CDN                            */
/* ------------------------------------------------------------------ */
declare global {
  interface Window {
    pdfjsLib: any
  }
}

const PDFJS_VERSION = "4.0.379"
const PDFJS_CDN = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS_VERSION}`

/* ------------------------------------------------------------------ */
/*  Dynamically load pdf.js from CDN (once)                           */
/* ------------------------------------------------------------------ */
let pdfJsPromise: Promise<any> | null = null

function loadPdfJs(): Promise<any> {
  if (pdfJsPromise) return pdfJsPromise
  pdfJsPromise = new Promise((resolve, reject) => {
    if (typeof window !== "undefined" && window.pdfjsLib) {
      resolve(window.pdfjsLib)
      return
    }
    const script = document.createElement("script")
    script.src = `${PDFJS_CDN}/pdf.min.mjs`
    script.type = "module"
    script.onload = () => {
      // pdf.min.mjs exposes pdfjsLib on window
      const check = () => {
        if (window.pdfjsLib) {
          window.pdfjsLib.GlobalWorkerOptions.workerSrc = `${PDFJS_CDN}/pdf.worker.min.mjs`
          resolve(window.pdfjsLib)
        } else {
          setTimeout(check, 50)
        }
      }
      check()
    }
    script.onerror = () => {
      pdfJsPromise = null
      reject(new Error("Failed to load PDF.js"))
    }
    document.head.appendChild(script)
  })
  return pdfJsPromise
}

/* ------------------------------------------------------------------ */
/*  Alternative: load the classic UMD build                           */
/* ------------------------------------------------------------------ */
function loadPdfJsClassic(): Promise<any> {
  if (pdfJsPromise) return pdfJsPromise
  pdfJsPromise = new Promise((resolve, reject) => {
    if (typeof window !== "undefined" && window.pdfjsLib) {
      resolve(window.pdfjsLib)
      return
    }
    const script = document.createElement("script")
    script.src = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js`
    script.onload = () => {
      if (window.pdfjsLib) {
        window.pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`
        resolve(window.pdfjsLib)
      } else {
        reject(new Error("pdfjsLib not found on window"))
      }
    }
    script.onerror = () => {
      pdfJsPromise = null
      reject(new Error("Failed to load PDF.js"))
    }
    document.head.appendChild(script)
  })
  return pdfJsPromise
}

/* ================================================================== */
/*  CVViewer Component                                                */
/* ================================================================== */
export default function CVViewer() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [scale, setScale] = useState(1.0)
  const canvasContainerRef = useRef<HTMLDivElement>(null)
  const pdfDocRef = useRef<any>(null)
  const renderingRef = useRef(false)

  // SSR safety
  useEffect(() => {
    setMounted(true)
  }, [])

  // Trigger listener
  useEffect(() => {
    const trigger = document.getElementById("cv-viewer-btn")
    if (trigger) {
      const handleClick = () => setIsOpen(true)
      trigger.addEventListener("click", handleClick)
      return () => trigger.removeEventListener("click", handleClick)
    }
  }, [])

  // Hide navbar when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.setAttribute("data-modal-open", "true")
      document.body.style.overflow = "hidden"
    } else {
      document.body.removeAttribute("data-modal-open")
      document.body.style.overflow = ""
    }
    return () => {
      document.body.removeAttribute("data-modal-open")
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [isOpen])

  /* ---------------------------------------------------------------- */
  /*  Render a single page to canvas                                  */
  /* ---------------------------------------------------------------- */
  const renderPage = useCallback(async (pdf: any, pageNum: number, container: HTMLDivElement, renderScale: number) => {
    const page = await pdf.getPage(pageNum)
    const viewport = page.getViewport({ scale: renderScale })

    // Create wrapper
    const pageDiv = document.createElement("div")
    pageDiv.className = "pdf-page-wrapper mb-4 last:mb-0 mx-auto shadow-lg rounded-lg overflow-hidden"
    pageDiv.style.width = `${viewport.width}px`
    pageDiv.style.maxWidth = "100%"

    const canvas = document.createElement("canvas")
    const context = canvas.getContext("2d")
    if (!context) return

    // High DPI support
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = viewport.width * dpr
    canvas.height = viewport.height * dpr
    canvas.style.width = `${viewport.width}px`
    canvas.style.height = `${viewport.height}px`
    context.scale(dpr, dpr)

    pageDiv.appendChild(canvas)
    container.appendChild(pageDiv)

    await page.render({ canvasContext: context, viewport }).promise
  }, [])

  /* ---------------------------------------------------------------- */
  /*  Render all pages                                                */
  /* ---------------------------------------------------------------- */
  const renderAllPages = useCallback(async (renderScale?: number) => {
    const container = canvasContainerRef.current
    if (!container || !pdfDocRef.current || renderingRef.current) return

    renderingRef.current = true
    container.innerHTML = ""
    const pdf = pdfDocRef.current
    const s = renderScale ?? scale

    // Calculate optimal scale based on container width
    const firstPage = await pdf.getPage(1)
    const baseViewport = firstPage.getViewport({ scale: 1.0 })
    const containerWidth = container.clientWidth - 32 // padding
    const autoScale = Math.min(containerWidth / baseViewport.width, 2.0)
    const finalScale = autoScale * s

    for (let i = 1; i <= pdf.numPages; i++) {
      await renderPage(pdf, i, container, finalScale)
    }
    renderingRef.current = false
  }, [scale, renderPage])

  /* ---------------------------------------------------------------- */
  /*  Load PDF when modal opens                                       */
  /* ---------------------------------------------------------------- */
  useEffect(() => {
    if (!isOpen) {
      // Reset state
      pdfDocRef.current = null
      setLoading(true)
      setError(false)
      setTotalPages(0)
      setCurrentPage(1)
      setScale(1.0)
      return
    }

    let cancelled = false

    const load = async () => {
      try {
        setLoading(true)
        setError(false)

        // Try the modern ESM build first, fallback to classic UMD
        let pdfjsLib: any
        try {
          pdfjsLib = await loadPdfJs()
        } catch {
          pdfJsPromise = null
          pdfjsLib = await loadPdfJsClassic()
        }

        if (cancelled) return

        const pdf = await pdfjsLib.getDocument("/cvlucasgatti.pdf").promise
        if (cancelled) return

        pdfDocRef.current = pdf
        setTotalPages(pdf.numPages)
        setLoading(false)
      } catch (err) {
        console.error("PDF load error:", err)
        if (!cancelled) {
          setError(true)
          setLoading(false)
        }
      }
    }

    load()
    return () => { cancelled = true }
  }, [isOpen])

  /* ---------------------------------------------------------------- */
  /*  Render when PDF loaded or scale changes                         */
  /* ---------------------------------------------------------------- */
  useEffect(() => {
    if (!loading && !error && pdfDocRef.current) {
      renderAllPages()
    }
  }, [loading, error, scale, renderAllPages])

  // Re-render on window resize
  useEffect(() => {
    if (!isOpen || loading || error) return
    let timeout: ReturnType<typeof setTimeout>
    const handleResize = () => {
      clearTimeout(timeout)
      timeout = setTimeout(() => renderAllPages(), 200)
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
      clearTimeout(timeout)
    }
  }, [isOpen, loading, error, renderAllPages])

  /* ---------------------------------------------------------------- */
  /*  Zoom controls                                                   */
  /* ---------------------------------------------------------------- */
  const zoomIn = () => setScale(s => Math.min(s + 0.25, 2.5))
  const zoomOut = () => setScale(s => Math.max(s - 0.25, 0.5))

  if (!mounted) return (
    <button id="cv-viewer-btn" className="hidden" onClick={() => setIsOpen(true)}>
      Ver CV
    </button>
  )

  /* ---------------------------------------------------------------- */
  /*  Modal content                                                   */
  /* ---------------------------------------------------------------- */
  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          onClick={() => setIsOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/85 backdrop-blur-md" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-[10000] w-[95vw] max-w-4xl h-[90vh] bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-2xl shadow-black/40 dark:shadow-black/70 flex flex-col"
          >
            {/* ---- Header ---- */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-gray-200/80 dark:border-white/10 bg-gray-50/80 dark:bg-white/5 backdrop-blur-sm shrink-0">
              {/* Title */}
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shrink-0 shadow-md shadow-violet-500/20">
                  <FileText size={18} className="text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white font-poppins truncate">
                    Curriculum Vitae
                  </h3>
                  <p className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 truncate">
                    Lucas Gatti{totalPages > 0 ? ` — ${totalPages} ${totalPages === 1 ? "página" : "páginas"}` : ""}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
                {/* Zoom controls */}
                <div className="hidden sm:flex items-center gap-1 mr-2 px-2 py-1 rounded-lg bg-gray-100 dark:bg-white/10">
                  <button
                    onClick={zoomOut}
                    className="p-1.5 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors disabled:opacity-30"
                    title="Alejar"
                    disabled={scale <= 0.5}
                  >
                    <ZoomOut size={16} />
                  </button>
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-300 w-10 text-center tabular-nums">
                    {Math.round(scale * 100)}%
                  </span>
                  <button
                    onClick={zoomIn}
                    className="p-1.5 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors disabled:opacity-30"
                    title="Acercar"
                    disabled={scale >= 2.5}
                  >
                    <ZoomIn size={16} />
                  </button>
                </div>

                <a
                  href="/cvlucasgatti.pdf"
                  download
                  className="p-2 sm:p-2.5 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white transition-all"
                  title="Descargar CV"
                >
                  <Download size={18} />
                </a>
                <a
                  href="/cvlucasgatti.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-2.5 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white transition-all"
                  title="Abrir en nueva pestaña"
                >
                  <ExternalLink size={18} />
                </a>

                {/* Close button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="ml-1 w-9 h-9 rounded-xl flex items-center justify-center border border-gray-200 dark:border-white/15 text-gray-500 dark:text-gray-400 hover:bg-red-50 dark:hover:bg-red-500/10 hover:border-red-200 dark:hover:border-red-500/30 hover:text-red-600 dark:hover:text-red-400 transition-all shadow-sm"
                  title="Cerrar"
                >
                  <X size={18} strokeWidth={2.5} />
                </button>
              </div>
            </div>

            {/* ---- PDF Content ---- */}
            <div className="flex-1 overflow-auto bg-gray-200/60 dark:bg-black/30 relative">
              {loading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                  >
                    <Loader2 size={36} className="text-violet-500" />
                  </motion.div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    Cargando documento...
                  </p>
                </div>
              )}

              {error && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-6">
                  <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-white/10 flex items-center justify-center">
                    <FileText size={32} className="text-gray-400 dark:text-gray-500" />
                  </div>
                  <div className="text-center">
                    <p className="text-base font-medium text-gray-700 dark:text-gray-300 mb-1">
                      No se pudo cargar la vista previa
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                      Podés descargar el CV o abrirlo en una nueva pestaña
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href="/cvlucasgatti.pdf"
                      download
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-violet-600 hover:bg-violet-700 text-white rounded-xl font-medium text-sm transition-colors shadow-md shadow-violet-600/20"
                    >
                      <Download size={16} />
                      Descargar CV
                    </a>
                    <a
                      href="/cvlucasgatti.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/15 text-gray-700 dark:text-gray-200 rounded-xl font-medium text-sm transition-colors"
                    >
                      <ExternalLink size={16} />
                      Abrir en pestaña
                    </a>
                  </div>
                </div>
              )}

              {/* Canvas container - PDF pages rendered here */}
              <div
                ref={canvasContainerRef}
                className="p-4 sm:p-6 flex flex-col items-center"
                style={{ minHeight: loading || error ? 0 : "auto" }}
              />
            </div>

            {/* ---- Footer (mobile zoom + page info) ---- */}
            {!loading && !error && totalPages > 0 && (
              <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 border-t border-gray-200/80 dark:border-white/10 bg-gray-50/80 dark:bg-white/5 shrink-0">
                {/* Mobile zoom */}
                <div className="flex sm:hidden items-center gap-1">
                  <button
                    onClick={zoomOut}
                    className="p-1.5 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors disabled:opacity-30"
                    disabled={scale <= 0.5}
                  >
                    <ZoomOut size={15} />
                  </button>
                  <span className="text-[11px] font-medium text-gray-500 dark:text-gray-400 w-9 text-center tabular-nums">
                    {Math.round(scale * 100)}%
                  </span>
                  <button
                    onClick={zoomIn}
                    className="p-1.5 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors disabled:opacity-30"
                    disabled={scale >= 2.5}
                  >
                    <ZoomIn size={15} />
                  </button>
                </div>
                <div className="hidden sm:block" />

                <p className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400">
                  {totalPages} {totalPages === 1 ? "página" : "páginas"} — PDF
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  return (
    <>
      <button
        id="cv-viewer-btn"
        className="hidden"
        onClick={() => setIsOpen(true)}
      >
        Ver CV
      </button>
      {mounted && createPortal(modalContent, document.body)}
    </>
  )
}
