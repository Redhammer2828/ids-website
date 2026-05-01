/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy:  { DEFAULT: '#0D3B8E', dark: '#091F52', mid: '#1A4FA8' },
        blue:  { DEFAULT: '#1565C0', light: '#1976D2' },
        cyan:  { DEFAULT: '#29ABE2', light: '#4DC3F0', dim: '#E3F4FC' },
        slate: { DEFAULT: '#F0F7FF', mid: '#D6E8F7', dark: '#A8C7E8' },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        head:    ['Rajdhani', 'sans-serif'],
        body:    ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
