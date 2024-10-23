import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {},
    screens: {
      sm: { min: "390px", max: "819px" },
      md: { min: "820px", max: "1023px" },
      lg: { min: "1080px" },
    },
    fontFamily: {
      "sans": ['Noto Sans KR', 'Roboto', 'ui-sans-serif', 'system-ui']
    }
  },

  plugins: []
} as Config;
