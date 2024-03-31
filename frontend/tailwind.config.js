export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#30406e',
      },
    },
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
}
