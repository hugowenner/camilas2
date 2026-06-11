import { motion, AnimatePresence } from 'framer-motion'
import StarField from '../components/StarField'
import HeartConstellation from '../components/HeartConstellation'
import HeartParticles from '../components/HeartParticles'
import { config } from '../data/config'

/**
 * CAPÍTULO 8 — FINAL
 * As três estrelas formam um coração no céu. Encerramento emocional.
 *
 * `climax`: ativado pelo App.jsx quando o scroll chega perto do fim —
 * intensifica brilho, partículas e a trilha sonora, criando a sensação
 * de "fim de capítulo" e "início de uma nova vida".
 */
export default function Chapter8Final({ climax = false }) {
  const { lines, closing, newChapter } = config.final

  return (
    <section className="relative flex min-h-[180vh] w-full flex-col items-center justify-center overflow-hidden px-6 py-32">
      <StarField density={150} />
      <HeartParticles density={climax ? 16 : 7} intensity={climax ? 2.2 : 1.4} />

      {/* Brilho de clímax — intensifica quando o coração se completa */}
      <AnimatePresence>
        {climax && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.5, ease: 'easeOut' }}
            className="pointer-events-none absolute left-1/2 top-1/2 h-[65vmax] w-[65vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,122,0.14)_0%,rgba(232,180,184,0.08)_40%,transparent_70%)] blur-2xl"
          />
        )}
      </AnimatePresence>

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center gap-16 text-center">
        <div className="flex flex-col gap-8">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1.2, delay: i * 0.6, ease: 'easeOut' }}
              className="font-display text-2xl font-medium italic text-cream/80 sm:text-3xl"
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* Coração formado pelas três estrelas */}
        <HeartConstellation />

        <div className="flex flex-col gap-6">
          {closing.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1.2, delay: i * 0.6, ease: 'easeOut' }}
              className={
                i === closing.length - 1
                  ? 'font-display text-2xl font-bold italic text-gold sm:text-3xl'
                  : 'font-display text-xl font-semibold text-cream/70 sm:text-2xl'
              }
            >
              {line}
            </motion.p>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.6, delay: 0.4, ease: 'easeOut' }}
          className="mt-8 bg-gradient-to-r from-gold via-cream to-blush bg-clip-text font-display text-4xl font-bold text-transparent sm:text-6xl"
        >
          Eu amo você, {config.partnerName}.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.4, delay: 1, ease: 'easeOut' }}
          className="flex items-center justify-center gap-3 font-display text-3xl font-semibold text-cream sm:text-4xl"
        >
          Feliz Dia dos Namorados
          <svg viewBox="0 0 32 29" className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true">
            <path
              fill="url(#finalHeartGradient)"
              d="M23.6,0c-3.4,0-6.3,2.1-7.6,5C14.7,2.1,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2 c6.2-9.3,16-12,16-21.2C32,3.8,28.2,0,23.6,0z"
            />
            <defs>
              <linearGradient id="finalHeartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D4AF7A" />
                <stop offset="100%" stopColor="#E8B4B8" />
              </linearGradient>
            </defs>
          </svg>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.4, delay: 1.6, ease: 'easeOut' }}
          className="mt-4 text-sm uppercase tracking-[0.4em] text-gold/60"
        >
          Com amor, {config.authorName}
        </motion.p>

        {/* Sensação de "fim de capítulo" e "início de uma nova vida" */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.6, delay: 2.4, ease: 'easeOut' }}
          className="mt-2 font-display text-sm italic text-cream/40"
        >
          {newChapter}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.6, delay: 2.8, ease: 'easeOut' }}
          className="text-xs uppercase tracking-[0.5em] text-blush/40"
        >
          {config.specialDateLabel}
        </motion.p>
      </div>
    </section>
  )
}
