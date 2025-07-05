import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  theme: {
    extend: {
      fontFamily: {
        grotesk: ['"Cabinet Grotesk"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
};