import { motion } from 'framer-motion'
import StarField from '../components/StarField'
import PhotoPlaceholder from '../components/PhotoPlaceholder'
import RevealLines from '../components/RevealLines'
import HeartParticles from '../components/HeartParticles'
import { config } from '../data/config'

/**
 * CAPÍTULO 6 — A SURPRESA MAIS BONITA
 * O ritmo desacelera, as estrelas param, surge a terceira estrela (o bebê).
 * A atmosfera muda: a luz fica mais quente e rosada, marcando a descoberta.
 */
export default function Chapter6Surprise() {
  const { lines, reveal, familyGrowing, photos } = config.surprise

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 py-32">
      {/* Campo de estrelas mais escasso, transmitindo silêncio */}
      <StarField density={40} />

      {/* Mudança de atmosfera: o universo escuro se torna acolhedor quando a terceira estrela nasce */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 4, delay: 0.6, ease: 'easeOut' }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[80vmax] w-[80vmax] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
        style={{
          background:
            'radial-gradient(circle, rgba(255,190,210,0.14) 0%, rgba(255,220,180,0.10) 40%, transparent 72%)',
        }}
      />

      {/* Segunda camada de calor, mais profunda, reforçando a sensação de "novo começo" */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 5, delay: 1.4, ease: 'easeOut' }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[55vmax] w-[55vmax] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
        style={{
          background:
            'radial-gradient(circle, rgba(212,175,122,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Poeira luminosa e corações discretos, mais presentes neste momento */}
      <HeartParticles density={14} intensity={2.2} />

      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-16 text-center">
        <RevealLines lines={lines} variant="serif-xl" gap="gap-10" />

        {/* As duas estrelas, paradas, e o nascimento da terceira */}
        <div className="relative flex h-24 w-full items-center justify-center">
          <motion.span
            initial={{ opacity: 0.9 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="absolute h-3 w-3 -translate-x-8 rounded-full bg-gradient-to-br from-cream to-gold"
          />
          <motion.span
            initial={{ opacity: 0.9 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="absolute h-3 w-3 translate-x-4 rounded-full bg-gradient-to-br from-cream to-gold"
          />

          {/* Terceira estrela — surge com brilho emocional */}
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 2, delay: 1, ease: 'easeOut' }}
            className="absolute h-2 w-2 translate-x-12 translate-y-2 rounded-full bg-gradient-to-br from-blush to-gold shadow-[0_0_30px_rgba(232,180,184,0.9)]"
          />

          {/* Onda de luz expandindo no nascimento da estrela */}
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: [0, 0.6, 0], scale: [0.5, 4, 6] }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 3, delay: 1, ease: 'easeOut' }}
            className="absolute h-2 w-2 translate-x-12 translate-y-2 rounded-full border border-blush/40"
          />

          {/* Segunda onda, mais ampla, reforça o momento de descoberta */}
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: [0, 0.3, 0], scale: [0.5, 8, 10] }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 4, delay: 1.3, ease: 'easeOut' }}
            className="absolute h-2 w-2 translate-x-12 translate-y-2 rounded-full border border-gold/30"
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 24, scale: 0.96, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 2.2, delay: 1.6, ease: 'easeOut' }}
          className="bg-gradient-to-r from-gold via-cream to-blush bg-clip-text font-display text-3xl font-light italic text-transparent drop-shadow-[0_0_25px_rgba(232,180,184,0.35)] sm:text-4xl md:text-5xl"
        >
          {reveal}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.4, delay: 2, ease: 'easeOut' }}
          className="font-display text-lg italic text-cream/60 sm:text-xl"
        >
          {familyGrowing}
        </motion.p>

        {/* 👉 Fotos: edite em src/data/config.js -> surprise.photos */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
          <PhotoPlaceholder
            src={photos.positiveTest.src}
            alt={photos.positiveTest.alt}
            label={photos.positiveTest.label}
            className="aspect-[4/3]"
            tilt={-2}
          />
          <PhotoPlaceholder
            src={photos.ultrasound.src}
            alt={photos.ultrasound.alt}
            label={photos.ultrasound.label}
            className="aspect-[4/3]"
            tilt={2}
          />
        </div>
      </div>
    </section>
  )
}
