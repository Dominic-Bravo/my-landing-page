/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary, #1e90ff)',
        secondary: 'var(--secondary, #ffb300)',
        accent: 'var(--accent, #00bfae)',
      },
    },
  },
  plugins: [],
};
