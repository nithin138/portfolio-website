/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          dark: '#1d4ed8',
          light: '#3B82F6',
        },
        secondary: {
          DEFAULT: '#7C3AED',
          light: '#A78BFA',
        },
        'bg-main': '#0a0a0a',
        'bg-section': '#0f0f0f',
        'bg-card': '#111111',
        'text-primary': '#ffffff',
        'text-secondary': '#9ca3af',
        'text-muted': '#4b5563',
        'border-default': '#1f1f1f',
        success: '#10B981',
        error: '#EF4444',
        warning: '#F59E0B',
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(to right, #2563EB, #7C3AED)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 8s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      boxShadow: {
        'card': '0 8px 32px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 16px 48px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};
