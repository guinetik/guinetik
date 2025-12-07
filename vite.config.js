import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import viteCompression from 'vite-plugin-compression';

/**
 * Vite configuration with performance optimizations:
 * - Brotli compression for better compression ratios
 * - Gzip fallback for broader browser support
 * - Code splitting via dynamic imports
 */
export default defineConfig({
  server: {
    port: 9999,
  },
  plugins: [
    solidPlugin(),
    
    // Brotli compression (best compression, modern browsers)
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 1024, // Only compress files > 1KB
      deleteOriginFile: false,
    }),
    
    // Gzip compression (fallback for older browsers)
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 1024,
      deleteOriginFile: false,
    }),
  ],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
    // Enable chunk size warnings
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        // Manual chunks for better caching
        manualChunks: {
          vendor: ['solid-js'],
          icons: ['solid-icons'],
        },
      },
    },
  },
});
