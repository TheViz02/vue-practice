/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';

export default {
  content: [
    './index.html',
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto Slab', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#2C3639",
          "secondary": "#3F4E4F",
          "accent": "#0ea5e9",
          "neutral": "#DCD7C9",
          "base-100": "#6b7280",
          "info": "#06b6d4",
          "success": "#0f766e",
          "warning": "#facc15",
          "error": "#be123c",
        },
      },
    ],
  },
  plugins: [
    forms,
    typography,
    daisyui
  ],
}

