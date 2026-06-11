import { motion } from 'framer-motion'
import StarField from '../components/StarField'
import RevealLines from '../components/RevealLines'
import MemoryPolaroid from '../components/MemoryPolaroid'
import { config } from '../data/config'

/**
 * CAPÍTULO 4.5 — PEQUENOS MOMENTOS
 * Álbum/mural de memórias soltas: fotos do dia a dia que não cabem
 * na linha do tempo principal, surgindo conforme o scroll.
 *
 * 👉 Fotos: coloque os arquivos em /public/photos/foto01.jpeg ... foto29.jpeg
 * Edite título, introdução e legendas em src/data/config.js -> memoryAlbum
 */
export default function ChapterMemoryAlbum() {
  const { title, intro, photoCount, captions } = config.memoryAlbum
  const base = import.meta.env.BASE_URL

  const photos = Array.from({ length: photoCount }, (_, i) => ({
    src: `${base}photos/foto${String(i + 1).padStart(2, '0')}.jpeg`,
    alt: `Lembrança ${i + 1}`,
  }))

  // Divide as fotos em grupos, intercalando frases curtas entre eles
  const groupCount = captions.length + 1
  const baseSize = Math.floor(photos.length / groupCount)
  const remainder = photos.length % groupCount
  const groups = []
  let cursor = 0
  for (let g = 0; g < groupCount; g++) {
    const size = baseSize + (g < remainder ? 1 : 0)
    groups.push(photos.slice(cursor, cursor + size))
    cursor += size
  }

  return (
    <section className="relative w-full overflow-hidden px-6 py-32">
      <StarField density={70} />

      {/* Glow quente discreto, mantendo a continuidade emocional da seção anterior */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 3, ease: 'easeOut' }}
        className="pointer-events-none absolute left-1/2 top-0 h-[60vmax] w-[60vmax] -translate-x-1/2 -translate-y-1/3 rounded-full blur-2xl"
        style={{
          background:
            'radial-gradient(circle, rgba(212,175,122,0.10) 0%, rgba(232,180,184,0.06) 45%, transparent 75%)',
        }}
      />

      <div className="relative z-10 mx-auto mb-16 max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-6 font-display text-3xl font-light italic text-gold sm:text-4xl md:text-5xl"
        >
          {title}
        </motion.p>
        <RevealLines lines={intro} variant="serif-lg" gap="gap-6" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {groups.map((group, g) => (
          <div key={g}>
            <div className="columns-2 gap-4 sm:columns-3 sm:gap-6 lg:columns-4">
              {group.map((photo, i) => (
                <MemoryPolaroid
                  key={photo.src}
                  src={photo.src}
                  alt={photo.alt}
                  index={g * baseSize + i}
                />
              ))}
            </div>

            {captions[g] && (
              <motion.p
                initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="my-12 text-center font-display text-xl italic text-cream/60 sm:text-2xl md:my-16 md:text-3xl"
              >
                {captions[g]}
              </motion.p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
