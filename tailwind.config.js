/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--primary))',           
          foreground: 'hsl(var(--primary-foreground))',
          light: '#7FDBFF',                         
          dark: '#005BB5',                          
        },

        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },

        success: '#2ECC40',     // Emerald Green
        warning: '#FFDC00',     // Golden Yellow
        danger: '#FF4136',      // Sunset Orange

        grayText: '#333333',    // Dark Charcoal
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },

        background: '#F9F9F9', // Soft White (конкретний HEX)

        foreground: 'hsl(var(--foreground))',

        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },

        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },

        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },

        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },

        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',

        chart: {
          1: '#0074D9',  // Ocean Blue
          2: '#7FDBFF',  // Sky Blue
          3: '#2ECC40',  // Emerald Green
          4: '#FF4136',  // Sunset Orange
          5: '#FFDC00',  // Golden Yellow
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out forwards',
        'move-from-left': 'moveFromLeft 1s ease-in-out forwards',
        blur: 'blur 1s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        moveFromLeft: {
          '0%': {
            transform: 'translateX(-400px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        blur: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-50px)',
            filter: 'blur(5px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
            filter: 'blur(0)',
          },
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
