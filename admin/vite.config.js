import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: { port: 5174 },
  base: './', // 👈 Required for correct asset loading on Netlify
  build: {
    rollupOptions: {
      external: ['axios'], // Keeps build from breaking if axios isn't resolved
    },
  },
})
