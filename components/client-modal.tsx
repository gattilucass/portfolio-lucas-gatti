"use client"

import React, { ReactNode, useEffect } from "react"
import ReactModal from "react-modal"

interface ClientModalProps {
  isOpen: boolean
  onRequestClose: () => void
  children: ReactNode
}

export default function ClientModal({
  isOpen,
  onRequestClose,
  children,
}: ClientModalProps) {
  useEffect(() => {
    ReactModal.setAppElement("body")
  }, [])

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
      overlayClassName="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
      className="relative z-50 bg-white rounded-lg p-6 max-w-xl mx-auto outline-none"
    >
      {/* Botón de cierre */}
      <button
        onClick={onRequestClose}
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        aria-label="Cerrar"
      >
        ✕
      </button>

      {children}
    </ReactModal>
  )
}
