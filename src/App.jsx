import { useState } from 'react'
import { motion, useMotionValueEvent, useScroll, useSpring } from 'framer-motion'
import useLenis from './hooks/useLenis'
import Chapter1Encounter from './sections/Chapter1Encounter'
import Chapter2Beginning from './sections/Chapter2Beginning'
import Chapter3Memories from './sections/Chapter3Memories'
import Chapter4Travels from './sections/Chapter4Travels'
import ChapterMemoryAlbum from './sections/ChapterMemoryAlbum'
import ChapterCompanion from './sections/ChapterCompanion'
import Chapter5Present from './sections/Chapter5Present'
import Chapter6Surprise from './sections/Chapter6Surprise'
import Chapter7Future from './sections/Chapter7Future'
import Chapter8Final from './sections/Chapter8Final'
import MusicPlayer from './components/MusicPlayer'
import GlobalFamilyStars from './components/GlobalFamilyStars'
import RomanticGlow from './components/RomanticGlow'
import HeartParticles from './components/HeartParticles'

export default function App() {
  useLenis()

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    mass: 0.3,
  })

  // Clímax sonoro/visual ao chegar no final (três corações)
  const [climax, setClimax] = useState(false)
  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    setClimax(value > 0.92)
  })

  return (
    <div className="relative bg-void">
      {/* Iluminação ambiente quente — "noite romântica" em vez de "espaço profundo" */}
      <RomanticGlow />

      {/* Partículas em formato de coração, extremamente discretas, em toda a jornada */}
      <HeartParticles density={5} className="fixed" />

      {/* Barra de progresso da jornada */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed left-0 top-0 z-50 h-[2px] w-full origin-left bg-gradient-to-r from-gold via-cream to-blush"
      />

      <div className="grain-overlay" />

      {/* Estrelas da família — discretas em todas as seções a partir do Capítulo 1 */}
      <GlobalFamilyStars />

      {/* 👉 Música de fundo — adicione o arquivo em /public/audio/musica.mp3 (ver src/data/config.js) */}
      <MusicPlayer boost={climax} />

      <main className="relative z-10">
        <Chapter1Encounter />
        <Chapter2Beginning />
        <Chapter3Memories />
        <Chapter4Travels />
        <ChapterMemoryAlbum />
        <ChapterCompanion />
        <Chapter5Present />
        <Chapter6Surprise />
        <Chapter7Future />
        <Chapter8Final climax={climax} />
      </main>
    </div>
  )
}
