import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "index.ts",
      name: "whatsappMardownParser",
      fileName: (format) => {
        if (format === "es") return "index.es.js";
        if (format === "umd") return "index.umd.js";
        return `index.${format}.js`;
      },
      formats: ["es", "umd"],
    },
    rollupOptions: {
      // prevent bundling dependencies
      external: [],
    },
  },
});
