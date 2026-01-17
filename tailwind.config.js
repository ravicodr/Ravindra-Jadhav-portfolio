/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'space-black': '#0a0e27',
        'deep-blue': '#1a1f3a',
        'cosmic-purple': '#6366f1',
        'nebula-pink': '#ec4899',
        'star-white': '#ffffff',
        'galaxy-blue': '#3b82f6',
        'moon-glow': '#fbbf24',
        'text-white': '#e5e7eb',
        'text-dim': '#9ca3af',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
      animation: {
        'galaxy-float': 'galaxyFloat 40s infinite ease-in-out',
        'shoot': 'shoot 3s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        galaxyFloat: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(30px, -30px) scale(1.1)' },
          '50%': { transform: 'translate(-20px, 20px) scale(0.95)' },
          '75%': { transform: 'translate(40px, 40px) scale(1.05)' },
        },
        shoot: {
          '0%': { opacity: '1', transform: 'translateX(0) translateY(0)' },
          '100%': { opacity: '0', transform: 'translateX(-300px) translateY(300px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(99, 102, 241, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
