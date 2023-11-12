import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// vite.config.js / vite.config.ts

import { createRequire } from 'node:module';
const require = createRequire( import.meta.url );



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()
    ],
    build: {
        outDir: '../wwwroot', // adjust this path as needed
        rollupOptions: {
          output: {
            entryFileNames: 'assets/index.js',
            chunkFileNames: `assets/[name].js`, // Optional: Fixed pattern for additional chunks
            assetFileNames: `assets/[name].[ext]` // Optional: Fixed pattern for other assets like CSS
           
          },},
       
    },
      

})
