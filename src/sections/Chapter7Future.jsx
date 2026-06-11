import { motion } from 'framer-motion'
import StarField from '../components/StarField'
import { config } from '../data/config'

/**
 * CAPÍTULO 7 — O FUTURO
 * Fundo espacial mais profundo e denso, encerrando com a frase em tela cheia.
 */
export default function Chapter7Future() {
  const { lines, certainty, final } = config.future

  return (
    <section className="relative flex min-h-[160vh] w-full flex-col items-center justify-center overflow-hidden px-6 py-32">
      <StarField density={180} />

      {/* Camada extra de profundidade */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(212,175,122,0.08)_0%,transparent_60%)]" />

      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-10 text-center">
        <div className="flex flex-col gap-8">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1, delay: i * 0.4, ease: 'easeOut' }}
              className="font-display text-xl font-medium italic text-cream/60 sm:text-2xl"
            >
              {line}
            </motion.p>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.2, delay: 1.8, ease: 'easeOut' }}
          className="mt-12 font-display text-2xl font-semibold text-cream sm:text-3xl"
        >
          {certainty}
        </motion.p>

        {/* Frase em tela cheia */}
        <motion.p
          initial={{ opacity: 0, scale: 0.85, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 2, delay: 0.3, ease: 'easeOut' }}
          className="mt-12 bg-gradient-to-r from-gold via-cream to-blush bg-clip-text font-display text-4xl font-bold leading-tight text-transparent sm:text-6xl md:text-7xl"
        >
          {final[0]}
          <br /> {final[1]}
        </motion.p>
      </div>
    </section>
  )
}
