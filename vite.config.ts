import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/fallout-dnd/',
  server: {
    port: 8000,
    open: true, // Öffnet automatisch den Browser
  },
})
