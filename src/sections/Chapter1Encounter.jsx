import { motion } from 'framer-motion'
import StarField from '../components/StarField'
import PhotoPlaceholder from '../components/PhotoPlaceholder'
import RevealLines from '../components/RevealLines'
import { config } from '../data/config'

/**
 * CAPÍTULO 1 — O ENCONTRO
 * Tela escura, uma estrela, texto pausado, foto, segunda estrela surge.
 */
export default function Chapter1Encounter() {
  const { lines, photo, cta } = config.encounter

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 py-24">
      <StarField density={120} />

      {/* Estrela única central, antes do encontro */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute left-1/2 top-[18%] h-3 w-3 -translate-x-1/2 rounded-full bg-gradient-to-br from-cream to-gold animate-glowPulse"
      />

      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-10 text-center">
        <span className="font-display text-xs uppercase tracking-[0.5em] text-blush/60">
          {config.title}
        </span>

        <RevealLines lines={lines} variant="serif-xl" />

        {/* 👉 Foto: edite em src/data/config.js -> encounter.photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.4, delay: 0.4, ease: 'easeOut' }}
          className="w-full max-w-md"
        >
          <PhotoPlaceholder
            src={photo.src}
            alt={photo.alt}
            label={photo.label}
            caption={photo.caption}
            className="aspect-[4/5]"
            priority
          />
        </motion.div>

        {/* Surge a segunda estrela — o casal começa a viajar junto */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="flex items-center gap-4"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-cream to-gold animate-glowPulse" />
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-cream to-blush animate-glowPulse" />
        </motion.div>

        <motion.a
          href="#capitulo-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="group mt-6 inline-flex items-center gap-3 rounded-full border border-gold/30 px-8 py-3 text-sm uppercase tracking-[0.3em] text-cream/80 transition-all duration-500 hover:border-gold/70 hover:text-cream hover:shadow-[0_0_30px_rgba(212,175,122,0.25)]"
        >
          {cta}
        </motion.a>
      </div>
    </section>
  )
}
