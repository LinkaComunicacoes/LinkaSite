import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: '#7C3AED',
          light: '#A855F7',
        },
        pink: {
          DEFAULT: '#EC4899',
          light: '#F472B6',
        },
        card: '#1a1a1a',
        border: '#2a2a2a',
        bg: '#0d0d0d',
      },
      fontFamily: {
        sans: ['Segoe UI', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
