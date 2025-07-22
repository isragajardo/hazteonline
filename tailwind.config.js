// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      /* 🎨 Tokens de color basados en variables CSS */
      colors: {
        bg: 'var(--bg)',       // class="bg-bg"
        text: 'var(--text)',   // class="text-text"
        accent: 'var(--accent)'// class="bg-accent" o "text-accent"
      },
      /* 🌀 Animaciones personalizadas */
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
    },
  },
  plugins: [],
};
