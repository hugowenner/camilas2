import { motion, AnimatePresence } from 'framer-motion'

/**
 * As "estrelas da família" — o motivo visual central da experiência.
 * count: 1 (apenas "eu"), 2 (o casal), 3 (a Maggie já caminha conosco)
 * ou 4 (com o bebê a caminho).
 * Aparece discretamente fixo no canto de cada seção, exceto quando `inline`.
 */
export default function FamilyStars({ count = 1, inline = false, size = 'md' }) {
  const sizes = {
    sm: { big: 6, small: 4, tiny: 3, gap: 14 },
    md: { big: 9, small: 6, tiny: 4, gap: 20 },
    lg: { big: 16, small: 10, tiny: 6, gap: 34 },
  }
  const s = sizes[size]

  const positions = [
    { x: 0, y: 0, dim: s.big, tone: 'from-cream to-gold' }, // estrela principal ("eu")
    { x: s.gap, y: -4, dim: s.big, tone: 'from-cream to-gold' }, // segunda estrela (o casal)
    { x: s.gap * 0.45, y: s.gap * 0.7, dim: s.small, tone: 'from-cream to-ember' }, // a Maggie, mais antiga e discreta
    { x: s.gap * 1.7, y: 5, dim: s.tiny, tone: 'from-cream to-blush' }, // a nova estrela, o bebê
  ]

  return (
    <div
      className={
        inline
          ? 'relative flex items-center justify-center'
          : 'fixed top-6 right-6 z-40 flex items-center justify-center opacity-70 md:top-8 md:right-10'
      }
      style={{ width: s.gap * 2.6, height: s.big * 2.4 }}
      aria-hidden="true"
    >
      <AnimatePresence>
        {positions.slice(0, count).map((pos, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: i * 0.3, ease: 'easeOut' }}
            className={`absolute rounded-full bg-gradient-to-br ${pos.tone} animate-glowPulse`}
            style={{
              width: pos.dim,
              height: pos.dim,
              left: `calc(50% + ${pos.x}px)`,
              top: `calc(50% + ${pos.y}px)`,
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}
