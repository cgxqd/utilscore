import { defineConfig } from "vite";
export default defineConfig({
  optimizeDeps: {
    include: [
      "element-plus",
      "sweetalert",
      "number-precision",
      "@cgxqd/loadjs",
      "promise-polyfill",
      "vue-console-feed",
      "mousetrap",
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".styl", ".vue", ".json"],
  },
});
