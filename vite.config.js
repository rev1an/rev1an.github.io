import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react()],
   build: {
      copyPublicDir: true,
      root: './src',
      publicDir: './public',
      rollupOptions: {
         input: {
            app: './index.html',
         },
         output: {
            dir: './dist',
            entryFileNames: 'app.js',
            assetFileNames: 'app.css',
            chunkFileNames: 'chunk.js',
            manualChunks: undefined,
         },
      },
   },
});