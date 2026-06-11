import { motion } from 'framer-motion'
import StarField from '../components/StarField'
import PhotoPlaceholder from '../components/PhotoPlaceholder'
import { config } from '../data/config'

/**
 * CAPÍTULO 4 — NOSSAS VIAGENS
 * Linha cósmica / rota com as duas estrelas percorrendo,
 * fotos, nomes de destino e datas ao longo do caminho,
 * encerrando com a frase de destaque.
 *
 * 👉 Edite os destinos em src/data/config.js -> travels.destinations
 */
export default function Chapter4Travels() {
  const { intro, destinations, highlight } = config.travels

  return (
    <section className="relative w-full overflow-hidden px-6 py-32">
      <StarField density={100} />

      <div className="relative z-10 mx-auto mb-24 max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="font-display text-3xl font-light italic text-cream sm:text-4xl"
        >
          {intro[0]}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          className="mt-4 font-display text-3xl font-light text-gold sm:text-4xl"
        >
          {intro[1]}
        </motion.p>
      </div>

      {/* Rota cósmica */}
      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="relative">
          {/* Linha da rota */}
          <svg
            className="absolute left-0 top-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <motion.path
              d="M 5 5 C 30 25, 70 25, 50 50 C 30 75, 70 75, 95 95"
              fill="none"
              stroke="url(#routeGradient)"
              strokeWidth="0.15"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 3, ease: 'easeInOut' }}
            />
            <defs>
              <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D4AF7A" stopOpacity="0.06" />
                <stop offset="50%" stopColor="#D4AF7A" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#E8B4B8" stopOpacity="0.25" />
              </linearGradient>
            </defs>
          </svg>

          {/* Paradas / fotos ao longo da rota */}
          <div className="relative grid grid-cols-1 gap-16 py-12 sm:grid-cols-2 sm:gap-24">
            {destinations.map((stop, i) => (
              <motion.div
                key={stop.label + i}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1, delay: i * 0.15, ease: 'easeOut' }}
                className={`flex flex-col items-center gap-4 ${i % 2 === 1 ? 'sm:translate-y-16' : ''}`}
              >
                {/* Marcador da viagem na rota */}
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-br from-gold to-blush animate-glowPulse" />
                  <span className="text-xs uppercase tracking-[0.35em] text-gold/70">
                    {stop.date}
                  </span>
                </div>

                {/* 👉 Foto: edite em src/data/config.js -> travels.destinations */}
                <PhotoPlaceholder
                  src={stop.photo.src}
                  alt={stop.photo.alt}
                  label={stop.photo.label}
                  className="aspect-square w-full max-w-[340px]"
                  tilt={i % 2 === 0 ? -2 : 2}
                />

                <div className="flex flex-col items-center gap-1 text-center">
                  <span className="font-display text-xl italic text-cream/60">{stop.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Frase de destaque com animação especial */}
      <div className="relative z-10 mx-auto mt-32 flex max-w-3xl flex-col items-center gap-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="font-display text-2xl font-light leading-relaxed text-cream/70 sm:text-3xl"
        >
          {highlight.before}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.6, filter: 'blur(5px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.6, delay: 0.6, ease: 'easeOut' }}
          className="mt-10"
        >
          <p className="font-display text-3xl font-light leading-snug text-cream sm:text-5xl">
            {highlight.lead}
            <br /> {highlight.leadBreak}
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.6, delay: 1.6, ease: 'easeOut' }}
          className="bg-gradient-to-r from-gold via-cream to-blush bg-clip-text font-display text-4xl font-medium italic text-transparent sm:text-6xl"
        >
          {highlight.final}
        </motion.p>
      </div>
    </section>
  )
}
