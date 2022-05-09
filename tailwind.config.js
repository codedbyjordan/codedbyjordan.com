module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './lib/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        baskerville: ['Libre Baskerville', 'serif'],
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg) scale(1.1)' },
          '10%': { transform: 'rotate(14deg) scale(1.2)' },
          '20%': { transform: 'rotate(-8deg) scale(1.3)' },
          '30%': { transform: 'rotate(14deg) scale(1.4)' },
          '40%': { transform: 'rotate(-4deg) scale(1.3)' },
          '50%': { transform: 'rotate(10.0deg) scale(1.2)' },
          '60%': { transform: 'rotate(0.0deg) scale(1.1)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        fade: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        wave: 'wave 2s linear',
        pulseFast: 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        fade: 'fade 1.5s linear',
      },
    },
  },
  plugins: [],
}
