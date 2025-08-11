import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // base: '/buckeyefloors-web/', // 👈 THIS is the key addition
  plugins: [react()],
})
