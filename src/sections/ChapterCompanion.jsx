import StarField from '../components/StarField'
import RevealLines from '../components/RevealLines'
import HeartParticles from '../components/HeartParticles'
import PhotoPlaceholder from '../components/PhotoPlaceholder'
import { config } from '../data/config'

/**
 * CAPÍTULO 4.5 — QUEM CAMINHOU CONOSCO
 * Pequeno capítulo dedicado à Maggie, entre as viagens e o presente.
 * Atmosfera quente e acolhedora, fotos dela em destaque com o mesmo
 * tratamento premium das demais.
 *
 * 👉 Edite textos e fotos em src/data/config.js -> companion / pet
 */
export default function ChapterCompanion() {
  const { lines } = config.companion
  const { name, age, description, photos } = config.pet
  const tilts = [-3, 2, -2]

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center gap-16 overflow-hidden px-6 py-32">
      <StarField density={70} />
      <HeartParticles density={5} intensity={1.4} />

      {/* Glow quente e acolhedor, tom âmbar */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[60vmax] w-[60vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,122,0.10)_0%,rgba(232,180,184,0.05)_45%,transparent_70%)] blur-2xl" />

      <div className="relative z-10 max-w-3xl">
        <RevealLines lines={lines} variant="serif-lg" gap="gap-8" />
      </div>

      {/* Fotos da Maggie em destaque */}
      <div className="relative z-10 grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
        {photos.map((photo, i) => (
          <PhotoPlaceholder
            key={i}
            src={photo.src}
            alt={photo.alt}
            label={photo.label}
            caption={i === 1 ? `${name}, ${age} anos` : undefined}
            className={`aspect-square ${i === 2 ? 'col-span-2 sm:col-span-1' : ''}`}
            tilt={tilts[i % tilts.length]}
          />
        ))}
      </div>

      <p className="relative z-10 max-w-md text-center font-display text-base italic text-gold/70 sm:text-lg">
        {description}
      </p>
    </section>
  )
}
