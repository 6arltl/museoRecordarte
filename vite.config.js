import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        museo: "./obras.html", // Poné acá el nombre real de tu archivo
        ausencia: "./ausencia.html",
      },
    },
  },
});
