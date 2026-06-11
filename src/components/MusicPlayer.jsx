import { useEffect, useRef, useState } from 'react'
import { FiPause, FiPlay } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { config } from '../data/config'

/**
 * Player de música minimalista e premium, fixo no canto inferior.
 * 👉 SUBSTITUA: coloque o arquivo de música em /public/audio/musica.mp3
 * (ou ajuste `musicFile` em src/data/config.js).
 *
 * `boost`: quando true, aumenta sutilmente o volume (usado no clímax do Capítulo 8).
 */
export default function MusicPlayer({ boost = false }) {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    const target = boost ? 0.85 : 0.45
    audio.volume += (target - audio.volume) * 0.5
    const fade = setInterval(() => {
      if (Math.abs(audio.volume - target) < 0.01) {
        audio.volume = target
        clearInterval(fade)
        return
      }
      audio.volume += (target - audio.volume) * 0.1
    }, 80)
    return () => clearInterval(fade)
  }, [boost])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    const onTime = () => {
      if (audio.duration) setProgress(audio.currentTime / audio.duration)
    }
    audio.addEventListener('timeupdate', onTime)
    return () => audio.removeEventListener('timeupdate', onTime)
  }, [])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
    } else {
      audio.volume = 0.45
      audio.play().catch(() => {})
    }
    setPlaying(!playing)
  }

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <audio ref={audioRef} loop src={config.musicFile} />

      <motion.button
        onClick={toggle}
        whileTap={{ scale: 0.95 }}
        className="group flex items-center gap-3 rounded-full border border-gold/25 bg-night/60 py-2 pl-2 pr-4 text-cream/80 backdrop-blur-md transition-colors hover:border-gold/60 hover:text-cream"
        aria-label={playing ? 'Pausar música' : 'Tocar música'}
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-gold/30 to-blush/20">
          {playing ? <FiPause size={13} /> : <FiPlay size={13} className="ml-0.5" />}
        </span>

        <span className="hidden flex-col items-start sm:flex">
          <span className="text-xs font-light tracking-wide">{config.musicTitle}</span>
          <span className="mt-1 h-[2px] w-24 overflow-hidden rounded-full bg-cream/15">
            <span
              className="block h-full rounded-full bg-gradient-to-r from-gold to-blush transition-[width] duration-300"
              style={{ width: `${progress * 100}%` }}
            />
          </span>
        </span>
      </motion.button>
    </div>
  )
}
