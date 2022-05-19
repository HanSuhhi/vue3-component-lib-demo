/// <reference types="vitest" />
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import * as path from "path";
import dts from "vite-plugin-dts";
import Delete from "rollup-plugin-delete";
import postcssMixins from "postcss-mixins";
import postcssRem from "postcss-rem";

// https://vitejs.dev/config/
export default defineConfig({
  base:"./",
  plugins: [
    dts({
      outputDir: "dist",
      staticImport: true,
      insertTypesEntry: true,
    }),
    vue(),
  ],
  build: {
    lib: {
      entry: path.resolve("src/index.ts"),
      name: "AtypicalUI",
      fileName: format => `atypical.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
      plugins: [
        Delete({
          targets: ["dist/{env.d.ts}", "dist/*.{ico,txt,html}"],
          hook: "generateBundle",
        }),
      ],
    },
  },
  css: {
    postcss: {
      plugins: [
        postcssRem,
        postcssMixins,
      ],
    },
  },
  test: {
    environment: "happy-dom",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
