import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/iftm/pfjs/lista5/',
  plugins: [react()],
})

