import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const branch = process.env.BRANCH_NAME

export default defineConfig({
  base: branch === 'develop' ? '/english-for-it/preview/' : '/english-for-it/',
  plugins: [react()],
  build: {
    outDir: 'build',
  }
})
