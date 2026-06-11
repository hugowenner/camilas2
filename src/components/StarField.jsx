import { useMemo } from 'react'

/**
 * Campo de estrelas decorativo de fundo (independente das "estrelas da família").
 * density controla quantas estrelas pequenas aparecem por seção.
 */
export default function StarField({ density = 80, className = '' }) {
  const stars = useMemo(() => {
    return Array.from({ length: density }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      delay: Math.random() * 6,
      duration: 3 + Math.random() * 4,
      opacity: Math.random() * 0.6 + 0.2,
    }))
  }, [density])

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full bg-cream animate-twinkle"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  )
}
