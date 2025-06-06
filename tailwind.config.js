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
      }
    },
  },
  plugins: [],
}