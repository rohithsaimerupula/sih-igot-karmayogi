import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        igot: {
          navy: '#08214D',
          primary: '#1E50A0',
          darkBlue: '#0E3A75',
          lightBlue: '#E8F1FC',
          accentOrange: '#F26522',
          gold: '#FFB800',
          badgeGreen: '#10B981',
          bgGray: '#F4F7FC',
          borderGray: '#E2E8F0',
          textDark: '#1E293B',
          textMuted: '#64748B'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
export default config
