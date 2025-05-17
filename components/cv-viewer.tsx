"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FileText, X, Download, ExternalLink } from "lucide-react"

export default function CVViewer() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.button
        id="cv-viewer-btn"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 font-medium"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FileText size={18} />
        Ver mi CV
      </motion.button>

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
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between bg-gray-100 px-6 py-4">
                <h3 className="text-lg font-semibold text-gray-900 font-playfair">Curriculum Vitae - Lucas Gatti</h3>
                <div className="flex items-center gap-3">
                  <a
                    href="/cv-lucas-gatti.pdf"
                    download
                    className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
                    title="Descargar CV"
                  >
                    <Download size={20} />
                  </a>
                  <a
                    href="/cv-lucas-gatti.pdf"
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
                <iframe src="/cv-lucas-gatti.pdf" className="w-full h-full" title="CV Lucas Gatti"></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
