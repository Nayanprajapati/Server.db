import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Change the port if needed
    open: true, // Open browser on server start
  },
  build: {
    outDir: "dist",
  },
});
