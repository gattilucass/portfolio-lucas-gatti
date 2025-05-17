"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink } from "lucide-react"
import Image from "next/image"

interface Campaign {
  title: string
  description: string
  type: "image" | "video"
  src: string
  link?: string
  stats?: {
    views?: string
    engagement?: string
    conversion?: string
  }
}

export default function MoreCampaignsModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<"all" | "image" | "video">("all")

  const campaigns: Campaign[] = [
    {
      title: "Campaña Verano Seguro",
      description: "Campaña estacional con colores vivos y elementos veraniegos para seguros de auto.",
      type: "image",
      src: "/placeholder.svg?height=600&width=800",
      link: "https://www.canva.com/design/DAGhCWH0sVQ/vQ_zWijJKFyjJW7l3u2oBA/edit",
      stats: {
        views: "38.500+",
        engagement: "7.8%",
        conversion: "4.2%",
      },
    },
    {
      title: "Anuncios Carrusel para Instagram",
      description: "Serie de imágenes para campaña tipo carrusel y fotos tipo flash para historias de Instagram.",
      type: "image",
      src: "/placeholder.svg?height=600&width=800",
      link: "https://www.canva.com/design/DAF3v-WTdXY/tbewIwhGd7jdOTAVW2BJew/edit",
      stats: {
        views: "45.000+",
        engagement: "8.2%",
        conversion: "3.5%",
      },
    },
    {
      title: "Seguro de Viaje Europa",
      description: "Video promocional para seguro de viaje en Europa, destacando coberturas y beneficios.",
      type: "video",
      src: "/placeholder.svg?height=600&width=800",
      link: "https://drive.google.com/file/d/1b2FsLo8_Fvku4kewT2N7dO2LtzhZodLE/view",
      stats: {
        views: "32.000+",
        engagement: "7.5%",
        conversion: "4.2%",
      },
    },
    {
      title: "Promociones para Estética",
      description: "Diseño de promociones especiales para página de estética, enfocado en tratamientos faciales.",
      type: "image",
      src: "/placeholder.svg?height=600&width=800",
      link: "https://drive.google.com/file/d/1PVYnD0g2tGlIvUgYwdH8abOAs8Ab8kIE/view",
      stats: {
        views: "18.500+",
        engagement: "9.3%",
        conversion: "5.1%",
      },
    },
    {
      title: "Cotización de Seguro para Auto",
      description: "Video explicativo sobre el proceso de cotización y contratación de seguro para automóviles.",
      type: "video",
      src: "/placeholder.svg?height=600&width=800",
      link: "https://drive.google.com/file/d/1TXWBeFtlkLfjDgb-QFOiRpa5OvhccTny/view",
      stats: {
        views: "28.700+",
        engagement: "6.8%",
        conversion: "3.9%",
      },
    },
    {
      title: "Colaboración con MODO",
      description: "Anuncio colaborativo con MODO sobre descuentos en combustible con diferentes bancos.",
      type: "video",
      src: "/placeholder.svg?height=600&width=800",
      link: "https://drive.google.com/file/d/1nrcS4Ue8iOJcHwJzlo5XT5C9f2zVzMJs/view",
      stats: {
        views: "52.300+",
        engagement: "8.7%",
        conversion: "4.8%",
      },
    },
    {
      title: "Anuncios para Seguros de Motos",
      description: "Serie de anuncios específicos para seguros de motos, destacando coberturas y precios competitivos.",
      type: "image",
      src: "/placeholder.svg?height=600&width=800",
      link: "https://drive.google.com/file/d/1SFQ06GEDCU7IVvSGLMdTDT4SEvNfltT4/view",
      stats: {
        views: "35.600+",
        engagement: "7.9%",
        conversion: "4.5%",
      },
    },
  ]

  const filteredCampaigns = campaigns.filter((campaign) => {
    if (activeTab === "all") return true
    return campaign.type === activeTab
  })

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Ver más campañas <ExternalLink size={18} className="ml-2" />
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
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl overflow-hidden max-w-6xl w-full max-h-[90vh] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-5 rounded-t-2xl">
                <h3 className="text-xl font-semibold text-white font-playfair">Más Campañas Publicitarias</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-white/80 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-6 border-b">
                <div className="flex gap-4 justify-center">
                  <button
                    onClick={() => setActiveTab("all")}
                    className={`px-4 py-2 rounded-full transition-colors ${
                      activeTab === "all"
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    Todas
                  </button>
                  <button
                    onClick={() => setActiveTab("image")}
                    className={`px-4 py-2 rounded-full transition-colors ${
                      activeTab === "image"
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    Imágenes
                  </button>
                  <button
                    onClick={() => setActiveTab("video")}
                    className={`px-4 py-2 rounded-full transition-colors ${
                      activeTab === "video"
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    Videos
                  </button>
                </div>
              </div>

              <div className="overflow-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[calc(90vh-8rem)]">
                {filteredCampaigns.map((campaign, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-gray-50 rounded-lg overflow-hidden shadow-sm group"
                  >
                    <div className="aspect-video relative">
                      <Image
                        src={campaign.src || "/placeholder.svg"}
                        alt={campaign.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-3 right-3">
                        <span
                          className={`text-xs font-bold px-3 py-1 rounded-full ${
                            campaign.type === "video" ? "bg-blue-500 text-white" : "bg-purple-500 text-white"
                          }`}
                        >
                          {campaign.type === "video" ? "Video" : "Imagen"}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <a
                          href={campaign.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/90 text-gray-900 rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                        >
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 font-playfair">{campaign.title}</h4>
                      <p className="text-gray-700 text-sm mb-4 font-poppins">{campaign.description}</p>

                      {campaign.stats && (
                        <div className="grid grid-cols-3 gap-2 mt-4 text-center">
                          <div className="bg-gray-100 p-2 rounded">
                            <span className="block text-xs text-gray-500">Vistas</span>
                            <span className="font-semibold text-purple-700">{campaign.stats.views}</span>
                          </div>
                          <div className="bg-gray-100 p-2 rounded">
                            <span className="block text-xs text-gray-500">Engagement</span>
                            <span className="font-semibold text-blue-700">{campaign.stats.engagement}</span>
                          </div>
                          <div className="bg-gray-100 p-2 rounded">
                            <span className="block text-xs text-gray-500">Conversión</span>
                            <span className="font-semibold text-green-700">{campaign.stats.conversion}</span>
                          </div>
                        </div>
                      )}

                      <a
                        href={campaign.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-4 text-sm text-purple-600 hover:text-purple-800 font-medium transition-colors group"
                      >
                        Ver campaña completa{" "}
                        <span className="ml-1 transform group-hover:translate-x-1 transition-transform">
                          <ExternalLink size={14} />
                        </span>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
