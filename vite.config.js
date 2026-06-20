import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'
import path from 'path';

export default defineConfig({
  base: '/static/', // This should match Django's settings.STATIC_URL
  build: {
    // Where Vite will save its output files.
    // This should be something in your settings.STATICFILES_DIRS
    outDir: path.resolve(__dirname, './static'),
    emptyOutDir: false, // Preserve the outDir to not clobber Django's other files.
    manifest: "manifest.json",
    rollupOptions: {
      input: {
        'index': path.resolve(__dirname, './frontend/index.js'),
        'style': path.resolve(__dirname, './frontend/style.css'), 
      },
      output: {
        entryFileNames: `js/[name]-bundle.js`,
        assetFileNames: `css/[name].css`,
      },
    },
  },
  plugins: [
    tailwindcss()
  ],
  server: {
    cors: true,
    origin: 'http://localhost:8000',
    strictPort: true,
  }
});