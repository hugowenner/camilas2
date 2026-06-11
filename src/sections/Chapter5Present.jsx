import { motion } from 'framer-motion'
import StarField from '../components/StarField'
import PhotoPlaceholder from '../components/PhotoPlaceholder'
import RevealLines from '../components/RevealLines'
import { config } from '../data/config'

/**
 * CAPÍTULO 5 — O PRESENTE
 * Fotos recentes e o reconhecimento dos altos e baixos vividos juntos.
 */
export default function Chapter5Present() {
  const { lines, photos, closing } = config.present
  const tilts = [-2, 1.5, -1]

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 py-32">
      <StarField density={80} />

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-16">
        <RevealLines lines={lines} variant="serif-lg" />

        {/* 👉 Fotos: edite em src/data/config.js -> present.photos */}
        <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
          <PhotoPlaceholder
            src={photos[0].src}
            alt={photos[0].alt}
            label={photos[0].label}
            className="aspect-square"
            tilt={tilts[0]}
          />
          <PhotoPlaceholder
            src={photos[1].src}
            alt={photos[1].alt}
            label={photos[1].label}
            className="aspect-square translate-y-6"
            tilt={tilts[1]}
          />
          <PhotoPlaceholder
            src={photos[2].src}
            alt={photos[2].alt}
            label={photos[2].label}
            className="col-span-2 aspect-[2/1] sm:col-span-1 sm:aspect-square"
            tilt={tilts[2]}
          />
        </div>

        <div className="mt-8 max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="font-display text-2xl font-semibold text-cream/70 sm:text-3xl"
          >
            {closing[0]}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            className="mt-4 font-display text-3xl font-semibold italic text-gold sm:text-4xl"
          >
            {closing[1]}
          </motion.p>
        </div>
      </div>
    </section>
  )
}
