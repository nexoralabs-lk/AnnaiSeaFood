import { defineConfig } from 'vite'
import fs from 'fs'
import path from 'path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages repo name – change if your repo has a different name
const REPO_NAME = 'Annai'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? `/${REPO_NAME}/` : '/',
  plugins: [
    react(),
    tailwindcss(),
    // Copy index.html to 404.html so GitHub Pages serves the SPA on direct/refresh
    {
      name: 'copy-404',
      closeBundle() {
        const outDir = path.resolve(process.cwd(), 'dist')
        const indexPath = path.join(outDir, 'index.html')
        const copyPath = path.join(outDir, '404.html')
        if (fs.existsSync(indexPath)) {
          fs.copyFileSync(indexPath, copyPath)
        }
      },
    },
  ],
})
