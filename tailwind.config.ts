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
        bg: {
          primary: '#0f1117',
          surface: '#161822',
          card: '#1c1e2e',
        },
        gold: {
          DEFAULT: '#c8a04e',
          bright: '#e8c96e',
          dim: '#9a7a3a',
          glow: 'rgba(200, 160, 78, 0.06)',
        },
        text: {
          primary: '#e8e4dc',
          muted: '#8a8680',
          dim: '#5a5854',
        },
        success: '#4aba7a',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #9a7a3a 0%, #c8a04e 50%, #e8c96e 100%)',
        'gold-gradient-reverse': 'linear-gradient(135deg, #e8c96e 0%, #c8a04e 50%, #9a7a3a 100%)',
        'hero-radial': 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(200, 160, 78, 0.15) 0%, transparent 60%)',
        'section-glow': 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(200, 160, 78, 0.08) 0%, transparent 70%)',
      },
      boxShadow: {
        'gold': '0 0 20px rgba(200, 160, 78, 0.15), 0 0 40px rgba(200, 160, 78, 0.05)',
        'gold-sm': '0 0 10px rgba(200, 160, 78, 0.12)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 8px 40px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(200, 160, 78, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-gold': 'pulseGold 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGold: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}
export default config
