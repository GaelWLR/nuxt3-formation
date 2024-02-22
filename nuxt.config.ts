import path from "path";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["normalize.css/normalize.css", "@/assets/styles/index.scss"],
  modules: ["nuxt-graphql-client"],
  runtimeConfig: {
    public: {
      GQL_HOST: "https://rickandmortyapi.com/graphql",
      httpHost: "https://rickandmortyapi.com/api",
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          includePaths: [path.resolve(__dirname, "assets/styles/")],
        },
      },
    },
    plugins: [
      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        iconDirs: [path.resolve(__dirname, "assets/icons")],
        // Specify symbolId format
        symbolId: "icon-[dir]-[name]",
      }),
    ],
  },
});
