import { motion } from 'framer-motion'

/**
 * As estrelas da família traçam caminhos luminosos que se transformam
 * em um coração no céu: o casal e a Maggie nos vértices do coração, e
 * uma quarta luz, menor e mais nova, surgindo por último em seu centro —
 * o bebê que está chegando.
 */
export default function HeartConstellation() {
  // Caminho de um coração suave, desenhado em viewBox 0 0 200 180
  const heartPath =
    'M100,165 C20,110 5,70 5,45 C5,15 30,5 50,5 C75,5 95,25 100,45 C105,25 125,5 150,5 C170,5 195,15 195,45 C195,70 180,110 100,165 Z'

  return (
    <div className="relative mx-auto aspect-[10/9] w-full max-w-xl">
      <svg viewBox="0 0 200 180" className="h-full w-full overflow-visible" aria-hidden="true">
        <defs>
          <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF7A" />
            <stop offset="50%" stopColor="#F5F1E8" />
            <stop offset="100%" stopColor="#E8B4B8" />
          </linearGradient>
          <filter id="heartGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Traço luminoso do coração, desenhado lentamente */}
        <motion.path
          d={heartPath}
          fill="none"
          stroke="url(#heartGradient)"
          strokeWidth="1"
          strokeLinecap="round"
          filter="url(#heartGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 4, ease: 'easeInOut' }}
        />

        {/* Preenchimento sutil que aparece após o traço */}
        <motion.path
          d={heartPath}
          fill="url(#heartGradient)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.06 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 3, delay: 3, ease: 'easeInOut' }}
        />

        {/* O casal e a Maggie, posicionados ao longo do coração */}
        {[
          { cx: 50, cy: 5, r: 2.6 },
          { cx: 150, cy: 5, r: 2.6 },
          { cx: 100, cy: 165, r: 1.8 },
        ].map((star, i) => (
          <motion.circle
            key={i}
            cx={star.cx}
            cy={star.cy}
            r={star.r}
            fill="#F5F1E8"
            filter="url(#heartGlow)"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: [0, 1.4, 1] }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.5, delay: 4 + i * 0.4, ease: 'easeOut' }}
          />
        ))}

        {/* A nova luz, menor, surgindo por último no centro do coração: o bebê */}
        <motion.circle
          cx={100}
          cy={92}
          r={1.6}
          fill="#E8B4B8"
          filter="url(#heartGlow)"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: [0, 1, 0.85, 1], scale: [0, 1.6, 1, 1.15, 1] }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 3, delay: 5.6, ease: 'easeOut' }}
        />
      </svg>
    </div>
  )
}
