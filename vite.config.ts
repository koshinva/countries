import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/countries/',
  resolve: {
    alias: {
      components: '/src/components',
      hooks: '/src/hooks',
      utils: '/src/utils',
      assets: '/src/assets',
      ui: '/src/ui',
      types: '/src/types',
      styles: '/src/styles',
      store: '/src/store',
      api: '/src/api',
    }
  }
})
