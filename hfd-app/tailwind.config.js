/** @type {import('@pinegrow/tailwindcss-plugin')} */
const {
  pg_colors,
  pg_fonts,
  pg_backgrounds,
} = require("./themes/pg-tailwindcss/tokens.cjs"); // tailwind.config.[js,cjs]
// import { pg_colors, pg_fonts, pg_backgrounds } from './themes/pg-tailwindcss/tokens.mjs' // tailwind.config.[ts]
export default {
  get content() {
    const _content = [
      "./index.html",
      "./src/**/*.{html,vue,svelte,astro,js,cjs,ts,cts,mts,jsx,tsx,md,mdx}",
      //...
    ];
    return process.env.NODE_ENV === "production"
      ? _content
      : [..._content, "./_pginfo/**/*.{html,js}"]; // used by Vue Desginer for live-designing during development
  },
  //...
  theme: {
    extend: {},
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@pinegrow/tailwindcss-plugin").default({
      colors: pg_colors, // primary, secondary etc
      fonts: pg_fonts,
      backgrounds: pg_backgrounds, // bg-design-image, bg-design-image-large
    }),
    require("@tailwindcss/aspect-ratio"),
  ],
};
