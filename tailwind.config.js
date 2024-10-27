import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx,md}',
    './src/views/**/*.{vue,js,ts,jsx,tsx,md}',
    './src/components/**/*.{vue,js,ts,jsx,tsx,md}',
  ],
  theme: {
    extend: {},
    screens: {
      sm: { min: '390px', max: '819px' },
      md: { min: '820px' },
      lg: { min: '1080px' },
    },
    fontFamily: {
      sans: ['Noto Sans KR', 'Roboto', 'ui-sans-serif', 'system-ui'],
    },
  },
  plugins: [typography],
}
