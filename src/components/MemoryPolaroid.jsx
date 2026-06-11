import { motion } from 'framer-motion'

/**
 * Cartão "polaroid" leve para a galeria de pequenos momentos.
 * Cada foto recebe uma leve rotação aleatória (determinística pelo índice)
 * e surge com fade + scale + blur, como uma lembrança vindo à memória.
 */
export default function MemoryPolaroid({ src, alt, index = 0, className = '' }) {
  // Rotação pseudo-aleatória, mas estável entre renders, baseada no índice
  const seed = (index * 37) % 11
  const tilt = (seed - 5) * 0.9 // entre -4.5° e 4.5°

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, rotate: tilt * 2.4, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, scale: 1, rotate: tilt, filter: 'blur(0px)' }}
      whileHover={{ rotate: 0, scale: 1.03 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.1, delay: (index % 6) * 0.08, ease: 'easeOut' }}
      className={`group relative mb-4 break-inside-avoid sm:mb-6 ${className}`}
    >
      {/* Glow dourado/rosado discreto atrás do cartão */}
      <div
        className="pointer-events-none absolute -inset-2 -z-10 rounded-2xl opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(circle, rgba(255,220,180,0.18) 0%, rgba(255,190,210,0.12) 50%, transparent 75%)',
        }}
      />

      <div className="relative overflow-hidden rounded-xl border border-cream/10 bg-gradient-to-b from-white/[0.06] to-white/[0.015] p-2 shadow-[0_18px_50px_-18px_rgba(0,0,0,0.8)]">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />

          {/* Vinheta sutil */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(5,5,5,0.35)_100%)]" />

          {/* Reflexo de vidro */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent opacity-60 mix-blend-overlay" />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
        </div>
      </div>
    </motion.div>
  )
}
