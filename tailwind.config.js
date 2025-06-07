/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af',      // для акцентів (заголовки, лінки)
        secondary: '#64748b',    // для другорядного тексту
        success: '#16a34a',      // повідомлення про успіх
        warning: '#eab308',      // попередження
        danger:  '#dc2626',      // помилки
        grayText: '#1e293b',     // основний текст (темно-сірий)
        muted: '#94a3b8',        // приглушений текст
      },

      animation: {
        'fade-in': 'fadeIn 1s ease-in-out forwards',
        "move-from-left": "moveFromLeft 1s ease-in-out forwards",
        "blur": "blur 1s ease-in-out forwards"
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },

        moveFromLeft: {
          '0%': {transform: 'translateX(-400px)', opacity: '0'},
          '100%': {transform: 'translateX(0)', opacity: '1'}
        },

        blur: {
          '0%': {opacity: '0', transform: 'translateX(-50px)', filter: 'blur(5px)'},
          '100%': {opacity: '1', transform: 'translateX(0)', filter: 'blur(0)'}
        }
      }
    },
  },
  plugins: [],
}