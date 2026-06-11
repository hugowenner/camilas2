import { motion } from 'framer-motion'

/**
 * Revela linhas de texto uma a uma conforme entram na viewport,
 * criando o ritmo de "pausas" pedido no roteiro.
 *
 * lines: array de strings, cada item é uma "pausa" do roteiro.
 * variant: 'serif-lg' | 'serif-xl' | 'body'
 */
export default function RevealLines({ lines, variant = 'serif-lg', align = 'center', gap = 'gap-6' }) {
  const variants = {
    'serif-lg': 'font-display text-2xl sm:text-3xl md:text-4xl font-medium leading-relaxed',
    'serif-xl': 'font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight',
    body: 'font-sans text-base sm:text-lg font-medium leading-relaxed text-cream/80',
  }

  const alignments = {
    center: 'text-center items-center',
    left: 'text-left items-start',
  }

  return (
    <div className={`flex flex-col ${gap} ${alignments[align]}`}>
      {lines.map((line, i) => (
        <motion.p
          key={i}
          initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, delay: i * 0.35, ease: 'easeOut' }}
          className={`${variants[variant]} max-w-3xl text-cream`}
        >
          {line}
        </motion.p>
      ))}
    </div>
  )
}
