---
description: Dark mode
---

Quiero migrar este portfolio a un dark theme premium, manteniendo diseño elegante y legible.

Contexto técnico:
- Next.js + Tailwind
- darkMode: "class"
- hay variables :root/.dark en globals.css
- existen colores hardcoded en varios componentes y estilos globales
- NO quiero un cambio superficial de fondo; quiero consistencia total

Tu tarea:
1) Inventariar colores hardcoded y estilos que impiden dark mode consistente
2) Proponer estrategia por fases (sin romper UI)
3) Definir tokens/colores semánticos reutilizables
4) Señalar conflictos globales (body, text-gray overrides, bg-white overrides, etc.)
5) Proponer orden exacto de implementación
6) Estimar riesgo por archivo
7) Ejecutar SOLO la fase 1 después de que me muestres el plan

Incluí checklist de QA:
- mobile/desktop
- hover/focus
- contraste
- modales/overlays
- sliders/swiper
- iconos
- imágenes y overlays