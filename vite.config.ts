import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';

import * as path from 'path';

const srcPath = path.resolve(__dirname, './src');


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  build: {
    lib: {
      entry: path.resolve(srcPath, 'lib/main.ts'),
      name: 'ViteMapbox',
      fileName: (format) => `vite-mapbox.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})

