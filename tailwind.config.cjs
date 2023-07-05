const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Merriweather', sans-serif", ...defaultTheme.fontFamily.sans],
        mono: [
          "'JetBrains Mono Variable', sans-serif;",
          ...defaultTheme.fontFamily.mono,
        ],
      },
    },
  },
  plugins: [],
};
