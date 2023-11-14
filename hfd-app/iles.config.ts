//iles.config.js (or) iles.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "iles";
import Unocss from "unocss/vite";
import presetIcons from "@unocss/preset-icons";

export default defineConfig({
  modules: [
    [
      "@pinegrow/iles-module",
      {
        liveDesigner: {
          //...
          tailwindcss: {
            /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
            configPath: "tailwind.config.js",
            cssPath: "@/assets/css/tailwind.css",
            // themePath: false, // Set to false so that Design Panel is not used
            // restartOnConfigUpdate: true,
            restartOnThemeUpdate: true,
          },
        },
      },
    ],
    //...
  ],
  vite: {
    plugins: [
      Unocss({
        presets: [
          presetIcons({
            prefix: "i-", // default prefix, do not change
          }),
        ],
      }),
      //...
    ],
    resolve: {
      alias: {
        /* Must be either an object, or an array of { find, replacement, customResolver } pairs. */
        /* Refer to: https://vitejs.dev/config/shared-options.html#resolve-alias */
        /* Please ensure that you update the filenames and paths to accurately match those used in your project. */

        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "~": fileURLToPath(new URL("./src", import.meta.url)),
        "~~": fileURLToPath(new URL("./", import.meta.url)),
      },
    },
  },
});
