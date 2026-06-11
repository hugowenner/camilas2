/**
 * Camada de luz ambiente quente — transforma o fundo de "espaço profundo"
 * em "noite romântica": gradientes suaves dourados e rosados sobre o void.
 * Fica fixa atrás de todo o conteúdo (ver App.jsx).
 */
export default function RomanticGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      {/* Base: degradê de noite (preto -> roxo muito escuro) */}
      <div className="absolute inset-0 bg-gradient-to-b from-void via-night to-plum" />

      {/* Glow dourado superior, tipo "luz de vela distante" */}
      <div className="absolute -top-1/4 left-1/4 h-[60vmax] w-[60vmax] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,122,0.10)_0%,transparent_65%)] blur-2xl" />

      {/* Glow rosado, lado direito */}
      <div className="absolute top-1/3 right-0 h-[55vmax] w-[55vmax] translate-x-1/3 rounded-full bg-[radial-gradient(circle,rgba(232,180,184,0.08)_0%,transparent_65%)] blur-2xl" />

      {/* Glow quente inferior, sensação acolhedora */}
      <div className="absolute bottom-0 left-1/2 h-[70vmax] w-[70vmax] -translate-x-1/2 translate-y-1/3 rounded-full bg-[radial-gradient(circle,rgba(232,146,124,0.06)_0%,transparent_70%)] blur-2xl" />

      {/* Vinheta para manter profundidade nas bordas */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(5,5,5,0.55)_100%)]" />
    </div>
  )
}
