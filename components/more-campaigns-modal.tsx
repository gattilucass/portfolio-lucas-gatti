"use client"

import { useState, useEffect, useCallback } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import {
  X,
  ExternalLink,
  Eye,
  Megaphone,
  Sparkles,
  Wand2,
  Palette,
  Bot,
  PenTool,
  Layout,
  Camera,
  Share2,
} from "lucide-react"
import Image from "next/image"

/* ================================================================== */
/*  DATA MODEL                                                        */
/* ================================================================== */
interface Campaign {
  title: string
  description: string
  type: "image" | "video"
  src: string
  link?: string
  showLink?: boolean
  badge?: string
  tools?: string[]
  fullDescription?: string
}

const campaigns: Campaign[] = [
  /* ─── CASE STUDIES (showLink: true) ─── */
  {
    title: "Campaña Verano Seguro",
    description: "Campaña estacional con foco en conversión directa vía Meta Ads.",
    type: "video",
    src: "/images/verano-seguro.jpg",
    link: "https://www.canva.com/design/DAF6UILhiH8/_SVw_8O5vvDRmTyRf3O_fw/edit",
    showLink: true,
    tools: ["Canva", "Meta Ads", "Photoshop"],
  },
  {
    title: "Anuncios Carrusel — Instagram",
    description: "Serie de imágenes para carrusel y fotos flash para historias.",
    type: "image",
    src: "/images/carrusel-foto.jpg",
    link: "https://www.canva.com/design/DAF3v-WTdXY/tbewIwhGd7jdOTAVW2BJew/edit",
    showLink: true,
    tools: ["Canva", "Instagram", "Illustrator"],
  },
  /* ─── PREVIEWS (showLink: false) ─── */
  {
    title: "Seguro de Viaje a Brasil",
    description: "Video promocional para seguro de viaje, destacando coberturas y beneficios.",
    type: "video",
    src: "/images/viaje-brasil.jpg",
    showLink: false,
    badge: "Preview creativa",
    tools: ["Photoshop", "Canva", "Premiere Pro"],
    fullDescription:
      "Pieza visual diseñada para transmitir confianza y aventura. Combina fotografía real con tipografía expresiva y gradientes cálidos, pensada para conectar emocionalmente con viajeros jóvenes.",
  },
  {
    title: "Promociones para Estética",
    description: "Diseño de promociones especiales para tratamientos faciales.",
    type: "image",
    src: "/images/promo-estetica.png",
    showLink: false,
    badge: "Concepto visual",
    tools: ["Photoshop", "Canva", "Figma"],
    fullDescription:
      "Concepto visual para promoción de tratamientos estéticos. Paleta sofisticada en tonos rosados y dorados, con composición limpia que prioriza el producto y la elegancia del servicio.",
  },
  {
    title: "Cotización de Seguro para Auto",
    description: "Video explicativo sobre cotización y contratación de seguro automotor.",
    type: "video",
    src: "/images/como-cotizar.jpg",
    showLink: false,
    badge: "Pieza destacada",
    tools: ["Premiere Pro", "Canva", "Photoshop"],
    fullDescription:
      "Video instructivo que simplifica el proceso de cotización de seguros de auto. Diseñado para reducir la fricción del usuario y aumentar las conversiones, con un lenguaje claro y directo.",
  },
  {
    title: "Colaboración con MODO",
    description: "Anuncio colaborativo con MODO sobre descuentos en combustible.",
    type: "video",
    src: "/images/promo-nafta.jpg",
    showLink: false,
    badge: "Pieza destacada",
    tools: ["Canva", "Photoshop", "Meta Ads"],
    fullDescription:
      "Anuncio colaborativo que comunica promociones de descuento en combustible con diferentes bancos a través de MODO. Diseño orientado a captar atención rápida en feed con datos concretos de ahorro.",
  },
  {
    title: "Lanzamiento Renault Kardian",
    description: "Video para lanzamiento de nuevo modelo, destacando características clave.",
    type: "video",
    src: "/images/nuevo-kardian.jpg",
    showLink: false,
    badge: "Preview creativa",
    tools: ["Premiere Pro", "Photoshop", "Canva"],
    fullDescription:
      "Pieza audiovisual para el lanzamiento del nuevo Renault Kardian. Combina tomas del vehículo con motion graphics y tipografía dinámica para transmitir innovación y potencia.",
  },
]

/* ================================================================== */
/*  TOOL ICONS                                                        */
/* ================================================================== */
const toolIconMap: Record<string, React.ReactNode> = {
  Canva: <Palette size={13} />,
  Photoshop: <Wand2 size={13} />,
  "Premiere Pro": <Camera size={13} />,
  Illustrator: <PenTool size={13} />,
  Figma: <Layout size={13} />,
  "Meta Ads": <Share2 size={13} />,
  Instagram: <Camera size={13} />,
  ChatGPT: <Bot size={13} />,
  Midjourney: <Sparkles size={13} />,
}

/* ================================================================== */
/*  ANIMATION VARIANTS (Apple-level polish)                           */
/* ================================================================== */
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.35, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.25, ease: "easeIn" } },
}

const modalVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 16,
    transition: { duration: 0.25, ease: [0.4, 0, 1, 1] },
  },
}

const subModalVariants = {
  hidden: { opacity: 0, scale: 0.94, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: 12,
    transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
}

/* ================================================================== */
/*  COMPONENT                                                         */
/* ================================================================== */
export default function MoreCampaignsModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [preview, setPreview] = useState<Campaign | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  // Body scroll lock + hide navbar
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

  // Escape key
  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (preview) setPreview(null)
        else setIsOpen(false)
      }
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [isOpen, preview])

  const closeAll = useCallback(() => {
    setPreview(null)
    setIsOpen(false)
  }, [])

  /* ================================================================ */
  /*  RENDER CARD                                                     */
  /* ================================================================ */
  const renderCard = (c: Campaign, i: number) => {
    const isCaseStudy = c.showLink === true

    return (
      <motion.div
        key={c.title}
        custom={i}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
          isCaseStudy
            ? "bg-white dark:bg-white/[0.06] ring-1 ring-gray-200/80 dark:ring-white/10 hover:ring-violet-400/50 dark:hover:ring-violet-500/30"
            : "bg-white dark:bg-white/[0.04] ring-1 ring-gray-200/60 dark:ring-white/[0.06] hover:ring-gray-300 dark:hover:ring-white/15"
        } transition-all duration-500`}
        onClick={() => {
          if (isCaseStudy && c.link) {
            window.open(c.link, "_blank", "noopener,noreferrer")
          } else {
            setPreview(c)
          }
        }}
      >
        {/* Image area */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={c.src}
            alt={c.title}
            fill
            className={`object-cover transition-all duration-700 ease-out ${
              isCaseStudy
                ? "group-hover:scale-110"
                : "group-hover:scale-[1.04] group-hover:blur-[2px]"
            }`}
          />

          {/* Overlay gradient — always visible, stronger on hover */}
          <div
            className={`absolute inset-0 transition-all duration-500 ${
              isCaseStudy
                ? "bg-gradient-to-t from-black/60 via-black/10 to-transparent group-hover:from-black/70"
                : "bg-gradient-to-t from-black/50 via-black/5 to-transparent group-hover:from-black/60 group-hover:via-black/20"
            }`}
          />

          {/* Badge — previews only */}
          {!isCaseStudy && c.badge && (
            <div className="absolute top-3 left-3 z-10">
              <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold font-poppins px-2.5 py-1 rounded-full bg-white/90 dark:bg-white/15 dark:backdrop-blur-md text-gray-700 dark:text-gray-200 shadow-sm">
                <Sparkles size={11} className="text-amber-500 dark:text-amber-400" />
                {c.badge}
              </span>
            </div>
          )}

          {/* Case study — top-right label */}
          {isCaseStudy && (
            <div className="absolute top-3 right-3 z-10">
              <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold font-poppins px-2.5 py-1 rounded-full bg-violet-600/90 text-white shadow-md backdrop-blur-sm">
                Case Study
              </span>
            </div>
          )}

          {/* Center hover CTA */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
            {isCaseStudy ? (
              <motion.span
                initial={false}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-900 rounded-full font-semibold text-sm font-poppins shadow-xl shadow-black/20 group-hover:scale-100 scale-90 transition-transform duration-500"
              >
                Ver campaña completa
                <ExternalLink size={15} />
              </motion.span>
            ) : (
              <motion.span
                initial={false}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/15 backdrop-blur-md text-white rounded-full font-medium text-sm font-poppins ring-1 ring-white/25 shadow-xl shadow-black/20 group-hover:scale-100 scale-90 transition-transform duration-500"
              >
                <Eye size={15} />
                Ver preview
              </motion.span>
            )}
          </div>

          {/* Bottom text over image */}
          <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
            <h3 className="text-white font-semibold text-sm sm:text-base font-poppins leading-snug drop-shadow-md">
              {c.title}
            </h3>
            <p className="text-white/70 text-[11px] sm:text-xs font-poppins mt-0.5 line-clamp-1">
              {c.description}
            </p>
          </div>
        </div>

        {/* Footer bar */}
        <div className="px-4 py-3 flex items-center justify-between border-t border-gray-100 dark:border-white/[0.06]">
          {/* Tools */}
          {c.tools && (
            <div className="flex items-center gap-1.5 flex-wrap">
              {c.tools.slice(0, 3).map((tool) => (
                <span
                  key={tool}
                  className="inline-flex items-center gap-1 text-[10px] font-medium font-poppins px-2 py-0.5 rounded-md bg-gray-100 dark:bg-white/[0.06] text-gray-500 dark:text-gray-400"
                >
                  {toolIconMap[tool] || <Palette size={11} />}
                  {tool}
                </span>
              ))}
            </div>
          )}

          {/* CTA hint */}
          {isCaseStudy ? (
            <span className="text-[10px] sm:text-[11px] font-semibold text-violet-600 dark:text-violet-400 font-poppins flex items-center gap-1 group-hover:gap-1.5 transition-all">
              Ver completa
              <ExternalLink size={12} className="transition-transform group-hover:translate-x-0.5" />
            </span>
          ) : (
            <span className="text-[10px] sm:text-[11px] text-gray-400 dark:text-gray-500 italic font-poppins">
              Explorar
            </span>
          )}
        </div>
      </motion.div>
    )
  }

  /* ================================================================ */
  /*  MAIN MODAL                                                      */
  /* ================================================================ */
  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            onClick={() => {
              if (preview) setPreview(null)
              else setIsOpen(false)
            }}
          />

          {/* Modal panel */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="relative z-[10000] w-[95vw] max-w-5xl h-[88vh] bg-white dark:bg-[hsl(235,30%,10%)] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-black/40 dark:shadow-black/60 flex flex-col ring-1 ring-black/5 dark:ring-white/10"
          >
            {/* ---- Header ---- */}
            <div className="shrink-0 px-5 sm:px-7 py-4 sm:py-5 flex items-center justify-between border-b border-gray-100 dark:border-white/[0.07] bg-gray-50/60 dark:bg-white/[0.02]">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center shrink-0 shadow-lg shadow-violet-500/25">
                  <Megaphone size={19} className="text-white" />
                </div>
                <div className="min-w-0">
                  <h2 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white font-poppins truncate">
                    Campañas Publicitarias
                  </h2>
                  <p className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 font-poppins">
                    Case studies y exploraciones creativas
                  </p>
                </div>
              </div>

              {/* Close */}
              <button
                onClick={closeAll}
                className="w-9 h-9 rounded-xl flex items-center justify-center border border-gray-200 dark:border-white/10 text-gray-400 dark:text-gray-500 hover:bg-red-50 dark:hover:bg-red-500/10 hover:border-red-200 dark:hover:border-red-500/30 hover:text-red-500 dark:hover:text-red-400 transition-all shadow-sm"
              >
                <X size={18} strokeWidth={2.5} />
              </button>
            </div>

            {/* ---- Section divider ---- */}
            <div className="shrink-0 px-5 sm:px-7 pt-5 pb-2">
              <div className="flex items-center gap-2 mb-1">
                <div className="h-px flex-1 bg-gradient-to-r from-violet-500/40 to-transparent" />
                <span className="text-[10px] sm:text-[11px] font-bold font-poppins uppercase tracking-[0.15em] text-violet-600 dark:text-violet-400">
                  {campaigns.length} piezas
                </span>
                <div className="h-px flex-1 bg-gradient-to-l from-violet-500/40 to-transparent" />
              </div>
            </div>

            {/* ---- Cards grid (scrollable) ---- */}
            <div className="flex-1 overflow-y-auto px-5 sm:px-7 pb-6 custom-scrollbar">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {campaigns.map((c, i) => renderCard(c, i))}
              </div>

              {/* Footer note */}
              <div className="mt-8 text-center">
                <p className="text-[11px] sm:text-xs text-gray-400 dark:text-gray-500 font-poppins italic">
                  Nuevas piezas se agregan regularmente
                </p>
              </div>
            </div>
          </motion.div>

          {/* ================================================================ */}
          {/*  PREVIEW SUB-MODAL                                               */}
          {/* ================================================================ */}
          <AnimatePresence>
            {preview && (
              <motion.div
                className="fixed inset-0 z-[10001] flex items-center justify-center p-3 sm:p-6"
                variants={backdropVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* Sub-backdrop */}
                <div
                  className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                  onClick={() => setPreview(null)}
                />

                {/* Sub-modal panel */}
                <motion.div
                  variants={subModalVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onClick={(e) => e.stopPropagation()}
                  className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[hsl(235,30%,11%)] rounded-2xl shadow-2xl shadow-black/50 ring-1 ring-black/5 dark:ring-white/10"
                >
                  {/* Close */}
                  <button
                    onClick={() => setPreview(null)}
                    className="absolute top-3 right-3 z-20 w-8 h-8 rounded-xl flex items-center justify-center bg-black/40 backdrop-blur-md text-white/80 hover:bg-red-500/80 hover:text-white transition-all"
                  >
                    <X size={16} strokeWidth={2.5} />
                  </button>

                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={preview.src}
                      alt={preview.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    {/* Badge overlay */}
                    {preview.badge && (
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold font-poppins px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white ring-1 ring-white/20 shadow-lg">
                          <Sparkles size={12} className="text-amber-400" />
                          {preview.badge}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-7 space-y-5">
                    {/* Title + description */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white font-poppins mb-2">
                        {preview.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 font-poppins leading-relaxed">
                        {preview.fullDescription || preview.description}
                      </p>
                    </div>

                    {/* Tools used */}
                    {preview.tools && preview.tools.length > 0 && (
                      <div>
                        <h4 className="text-[11px] font-bold font-poppins uppercase tracking-[0.12em] text-gray-400 dark:text-gray-500 mb-2.5">
                          Herramientas utilizadas
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {preview.tools.map((tool) => (
                            <span
                              key={tool}
                              className="inline-flex items-center gap-1.5 text-xs font-medium font-poppins px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-white/[0.06] text-gray-600 dark:text-gray-300 ring-1 ring-gray-200/50 dark:ring-white/[0.06]"
                            >
                              {toolIconMap[tool] || <Palette size={13} />}
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Notice */}
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-violet-50/50 dark:bg-violet-500/[0.06] ring-1 ring-violet-200/50 dark:ring-violet-500/10">
                      <div className="w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-500/15 flex items-center justify-center shrink-0 mt-0.5">
                        <Megaphone size={15} className="text-violet-600 dark:text-violet-400" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-[13px] text-gray-600 dark:text-gray-300 font-poppins leading-relaxed">
                          Este contenido forma parte de una campaña real desarrollada para un cliente.
                        </p>
                        <p className="text-[11px] text-gray-400 dark:text-gray-500 font-poppins mt-1.5">
                          Material completo disponible bajo solicitud.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )

  /* ================================================================ */
  /*  TRIGGER BUTTON                                                  */
  /* ================================================================ */
  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.97 }}
        className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-full font-semibold text-sm font-poppins shadow-lg shadow-violet-600/25 hover:shadow-xl hover:shadow-violet-600/35 transition-shadow duration-300 overflow-hidden"
      >
        {/* Shine effect */}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
        <Megaphone size={17} className="relative z-10" />
        <span className="relative z-10">Ver más campañas</span>
      </motion.button>

      {mounted && createPortal(modalContent, document.body)}
    </>
  )
}
