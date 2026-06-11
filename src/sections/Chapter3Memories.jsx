import { motion } from 'framer-motion'
import StarField from '../components/StarField'
import RevealLines from '../components/RevealLines'
import HeartParticles from '../components/HeartParticles'
import PhotoPlaceholder from '../components/PhotoPlaceholder'
import { config } from '../data/config'

/**
 * CAPÍTULO 3 — AS PRIMEIRAS MEMÓRIAS
 * Texto ocupando a tela, atmosfera acolhedora, animações lentas.
 * A Maggie já caminhava ao nosso lado nesses dias — uma pequena
 * memória dela aparece aqui, antes do capítulo dedicado a ela.
 */
export default function Chapter3Memories() {
  const { lines, petIntro } = config.memories
  const petPhoto = config.pet.photos[0]

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center gap-16 overflow-hidden px-6 py-32">
      <StarField density={90} />
      <HeartParticles density={4} intensity={1.4} />

      {/* Glow acolhedor sutil ao centro */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[60vmax] w-[60vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(232,180,184,0.08)_0%,transparent_70%)] blur-2xl" />

      <div className="relative z-10 max-w-3xl">
        <RevealLines lines={lines} variant="serif-lg" gap="gap-8" />
      </div>

      {/* Pequena memória da Maggie, discreta, já fazendo parte do dia a dia */}
      <div className="relative z-10 flex w-full max-w-xs flex-col items-center gap-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
          className="font-display text-lg font-medium italic text-cream/60 sm:text-xl"
        >
          {petIntro}
        </motion.p>
        <PhotoPlaceholder
          src={petPhoto.src}
          alt={petPhoto.alt}
          label={petPhoto.label}
          caption={config.pet.name}
          className="aspect-square w-full max-w-[220px]"
          tilt={-3}
        />
      </div>
    </section>
  )
}
