import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@flags': '/src/assets/flags',
      '@constants': '/src/constants',
      '@ui': '/src/ui',
      '@assets': '/src/assets',
      '@db': '/src/db',
      '@components': '/src/components',
      '@layouts': '/src/layouts',
      '@pages': '/src/pages',
      '@utils': '/src/utils',
      '@widgets': '/src/widgets'
    }
  }
})
