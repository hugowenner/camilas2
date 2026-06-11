import { useState } from 'react'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import FamilyStars from './FamilyStars'

/**
 * Controla a contagem de "estrelas da família" (1, 2, 3 ou 4) com base no
 * progresso geral do scroll, mantendo um único elemento fixo discreto
 * presente ao longo de toda a experiência (a partir do Capítulo 1).
 *
 * 1 → apenas "eu" · 2 → o casal · 3 → a Maggie já caminha conosco
 * (capítulo "Quem caminhou conosco") · 4 → o bebê a caminho (a surpresa)
 */
export default function GlobalFamilyStars() {
  const { scrollYProgress } = useScroll()
  const [count, setCount] = useState(1)

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    if (value < 0.09) setCount(1)
    else if (value < 0.38) setCount(2)
    else if (value < 0.58) setCount(3)
    else setCount(4)
  })

  return <FamilyStars count={count} />
}
