import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  base: "/",
  plugins: [svgr(), react()],
  server: {
    port: process.env.PORT || 3000, 
    strictPort: true,
    host: true,
    origin: process.env.ORIGIN || "http://localhost:3000", 
  },
  preview: {
    port: process.env.PREVIEW_PORT || 3000, 
    strictPort: true,
  },
  define: {
    "process.env.BASE_URL": JSON.stringify(process.env.BASE_URL),
  },
});