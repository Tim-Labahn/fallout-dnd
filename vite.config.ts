import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// Define the base path for GitHub Pages
const base = '/fallout-dnd/';

export default defineConfig({
  plugins: [vue()],
  base: base, // Ensures assets are loaded correctly
  build: {
    outDir: 'dist', // Output directory for build files
  },
});
