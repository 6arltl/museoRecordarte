import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        pagina1: resolve(__dirname, "nombre-de-tu-pagina-1.html"),
        pagina2: resolve(__dirname, "nombre-de-tu-pagina-2.html"),
        pagina3: resolve(__dirname, "nombre-de-tu-pagina-3.html"),
      },
    },
  },
});
