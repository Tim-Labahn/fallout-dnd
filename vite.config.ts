import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: '/fallout-dnd/', // Ensure this is correct for your repository
  build: {
    outDir: 'docs',
  },
});
