import { motion } from 'framer-motion'

/**
 * Moldura "polaroid premium" para as fotos do casal — tratadas como
 * memórias preciosas: luz quente ambiente, reflexo de vidro elegante,
 * profundidade e sombra cinematográfica.
 *
 * 👉 SUBSTITUA: passe `src` com o caminho da foto real (ex: "/photos/encontro.jpg")
 * Coloque os arquivos de imagem dentro de /public/photos/
 *
 * `caption`: legenda curta exibida no rodapé da moldura (ex: data ou nome do lugar)
 * `tilt`: leve rotação para um efeito de fotografia "largada" sobre a mesa
 */
export default function PhotoPlaceholder({
  src,
  alt = 'Foto do casal',
  label = 'Substituir pela foto',
  caption,
  className = '',
  tilt = 0,
  priority = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 1.05, rotate: tilt * 2.2, filter: 'blur(5px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotate: tilt, filter: 'blur(0px)' }}
      whileHover={{ rotate: 0, scale: 1.015 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 1.6, ease: 'easeOut' }}
      className={`group relative ${className}`}
    >
      {/* Luz ambiente quente surgindo atrás da moldura, como uma lembrança que vem à tona */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 2.2, delay: 0.4, ease: 'easeOut' }}
        className="absolute -inset-4 -z-10 rounded-[1.8rem] opacity-70 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(circle, rgba(255,220,180,0.16) 0%, rgba(255,190,210,0.10) 45%, transparent 75%)',
        }}
      />

      {/* Moldura estilo polaroid */}
      <div className="relative flex h-full flex-col gap-3 rounded-2xl border border-cream/15 bg-gradient-to-b from-white/[0.09] to-white/[0.03] p-3 shadow-[0_30px_90px_-25px_rgba(0,0,0,0.85),0_0_60px_-20px_rgba(212,175,122,0.18)] transition-shadow duration-700 group-hover:shadow-[0_30px_100px_-20px_rgba(0,0,0,0.9),0_0_80px_-15px_rgba(232,180,184,0.22)] sm:p-4">
        <div className="relative flex-1 overflow-hidden rounded-xl">
          {src ? (
            <motion.img
              src={src}
              alt={alt}
              loading={priority ? 'eager' : 'lazy'}
              decoding="async"
              fetchpriority={priority ? 'high' : 'auto'}
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 2.4, ease: 'easeOut' }}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full min-h-[220px] flex-col items-center justify-center gap-2 bg-gradient-to-br from-white/[0.06] to-transparent text-center">
              <span className="font-display text-lg italic text-cream/40">{label}</span>
              <span className="px-4 text-xs uppercase tracking-[0.3em] text-gold/40">{alt}</span>
            </div>
          )}

          {/* Vinheta sutil para profundidade */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(5,5,5,0.4)_100%)]" />

          {/* Reflexo de vidro */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-60 mix-blend-overlay" />
          <div className="pointer-events-none absolute -inset-full bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 mix-blend-overlay transition-opacity duration-700 group-hover:opacity-100" />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />

          {/* Brilho dourado sutil em um canto, rosado no outro */}
          <div className="pointer-events-none absolute -left-6 -bottom-6 h-24 w-24 rounded-full bg-gold/15 opacity-40 blur-2xl transition-opacity duration-700 group-hover:opacity-70" />
          <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-blush/20 opacity-30 blur-2xl transition-opacity duration-700 group-hover:opacity-70" />
        </div>

        {caption && (
          <p className="px-1 text-center font-display text-sm italic text-cream/60 sm:text-base">
            {caption}
          </p>
        )}
      </div>
    </motion.div>
  )
}
