import { useMemo } from 'react'

/**
 * Partículas extremamente discretas em formato de coração,
 * flutuando lentamente. Use `density` para controlar a quantidade
 * e `intensity` para destacar momentos especiais (ex.: Capítulo 6 e 8).
 */
export default function HeartParticles({ density = 6, intensity = 1, className = '' }) {
  const hearts = useMemo(() => {
    return Array.from({ length: density }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      bottom: Math.random() * 40,
      size: 6 + Math.random() * 10,
      delay: Math.random() * 14,
      duration: 12 + Math.random() * 8,
      hue: Math.random() > 0.5 ? '#E8B4B8' : '#D4AF7A',
    }))
  }, [density])

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {hearts.map((h) => (
        <svg
          key={h.id}
          viewBox="0 0 32 29"
          className="absolute animate-floatHeart"
          style={{
            left: `${h.left}%`,
            bottom: `${h.bottom}%`,
            width: `${h.size}px`,
            height: `${h.size}px`,
            opacity: 0.18 * intensity,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
          }}
        >
          <path
            fill={h.hue}
            d="M23.6,0c-3.4,0-6.3,2.1-7.6,5C14.7,2.1,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2 c6.2-9.3,16-12,16-21.2C32,3.8,28.2,0,23.6,0z"
          />
        </svg>
      ))}
    </div>
  )
}
