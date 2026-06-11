import { motion } from 'framer-motion'
import StarField from '../components/StarField'
import PhotoPlaceholder from '../components/PhotoPlaceholder'
import { config } from '../data/config'

/**
 * CAPÍTULO 2 — O COMEÇO
 * Timeline vertical elegante marcando o início da relação.
 */
export default function Chapter2Beginning() {
  const { timeline, photo } = config.beginning

  return (
    <section
      id="capitulo-2"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6 py-32"
    >
      <StarField density={70} />

      <div className="relative z-10 grid w-full max-w-5xl grid-cols-1 items-center gap-16 md:grid-cols-2">
        <div className="flex flex-col items-start gap-10">
          {/* Linha do tempo */}
          <div className="relative flex flex-col gap-12 pl-8">
            <span className="absolute left-[7px] top-2 h-full w-px bg-gradient-to-b from-gold/60 via-blush/30 to-transparent" />

            {timeline.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 1, delay: i * 0.4, ease: 'easeOut' }}
                className="relative"
              >
                <span className="absolute -left-8 top-2 h-3 w-3 rounded-full bg-gradient-to-br from-cream to-gold animate-glowPulse" />
                <p className="font-display text-2xl font-semibold leading-relaxed text-cream sm:text-3xl">
                  {line}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 👉 Foto: edite em src/data/config.js -> beginning.photo */}
        <PhotoPlaceholder
          src={photo.src}
          alt={photo.alt}
          label={photo.label}
          caption={photo.caption}
          className="aspect-[3/4] w-full"
          tilt={-2}
        />
      </div>
    </section>
  )
}
