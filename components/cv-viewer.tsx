"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FileText, X, Download, ExternalLink } from "lucide-react"

export default function CVViewer() {
  const [isOpen, setIsOpen] = useState(false)

  // Escuchar el botón externo por ID
  useEffect(() => {
    const trigger = document.getElementById("cv-viewer-btn")
    if (trigger) {
      const handleClick = () => setIsOpen(true)
      trigger.addEventListener("click", handleClick)
      return () => trigger.removeEventListener("click", handleClick)
    }
  }, [])

  return (
    <>
      {/* Botón oculto que se activa externamente */}
      <motion.button
        id="cv-viewer-btn"
        className="hidden"
        onClick={() => setIsOpen(true)}
      >
        Ver CV
      </motion.button>

      {/* Modal CV */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] shadow-2xl"
            >
              <div className="flex items-center justify-between bg-gray-100 px-6 py-4">
                <h3 className="text-lg font-semibold text-gray-900 font-playfair">
                  Curriculum Vitae - Lucas Gatti
                </h3>
                <div className="flex items-center gap-3">
                  <a
                    href="/cvlucasgatti.pdf"
                    download
                    className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
                    title="Descargar CV"
                  >
                    <Download size={20} />
                  </a>
                  <a
                    href="/cvlucasgatti.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
                    title="Abrir en nueva pestaña"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
                    title="Cerrar"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

            <div className="p-1 h-[calc(90vh-4rem)] overflow-auto">
  {/* Mostrar preview solo en escritorio */}
  <div className="hidden sm:block w-full h-full">
    <iframe src="/cvlucasgatti.pdf" className="w-full h-full" title="CV Lucas Gatti"></iframe>
  </div>

  {/* Mensaje solo visible en móvil */}
  <div className="sm:hidden flex flex-col items-center justify-center text-center h-full p-6 text-gray-700 dark:text-gray-200">
    <p className="text-md font-medium mb-4">📱 La previsualización no está disponible en dispositivos móviles.</p>
    <p>Podés <strong>descargar</strong> el CV o <strong>abrirlo en una nueva pestaña</strong> con los botones de arriba.</p>
  </div>
</div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
