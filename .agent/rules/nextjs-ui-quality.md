---
trigger: always_on
---

# Next.js UI Quality Rule (Portfolio Lucas Gatti)

- Proyecto en Next.js + React + TypeScript + Tailwind.
- Antes de modificar código, analizar impacto en mobile y desktop.
- NO hacer cambios masivos de colores sin plan por fases.
- Priorizar clases semánticas y consistencia visual.
- Mantener estética premium, minimalista y profesional (sin sobrecargar animaciones).
- Respetar accesibilidad: contraste suficiente, foco visible, targets táctiles.
- Evitar romper hydration / SSR / client components.
- Antes de proponer cambios, listar:
  1) archivos a tocar
  2) riesgo
  3) beneficio visual/funcional
- Después de cambiar código:
  - ejecutar build si el cambio es grande
  - revisar consola del navegador
  - validar desktop + mobile
- Si detectás clases hardcoded repetidas, proponer tokenización o utilidades reutilizables.
- No modificar contenido textual de portfolio sin pedir confirmación implícita del plan.