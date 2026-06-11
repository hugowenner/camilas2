/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#050505',
        night: '#0B0710',
        plum: '#1A0E1F',
        cream: '#F5F1E8',
        gold: '#D4AF7A',
        blush: '#E8B4B8',
        ember: '#E8927C',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.85)' },
          '50%': { opacity: '1', transform: 'scale(1.15)' },
        },
        drift: {
          '0%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(8px, -10px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        glowPulse: {
          '0%, 100%': { filter: 'drop-shadow(0 0 4px rgba(212,175,122,0.6))' },
          '50%': { filter: 'drop-shadow(0 0 10px rgba(212,175,122,0.95))' },
        },
        floatHeart: {
          '0%': { transform: 'translateY(0) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '0.5' },
          '90%': { opacity: '0.5' },
          '100%': { transform: 'translateY(-120px) rotate(8deg)', opacity: '0' },
        },
        ambientShift: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        twinkle: 'twinkle 4s ease-in-out infinite',
        drift: 'drift 12s ease-in-out infinite',
        glowPulse: 'glowPulse 3s ease-in-out infinite',
        floatHeart: 'floatHeart 14s ease-in-out infinite',
        ambientShift: 'ambientShift 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
