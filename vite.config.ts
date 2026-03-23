import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub project Pages URL: https://<user>.github.io/<repo>/
const repoName = 'eduai'

export default defineConfig(({ command }) => ({
  base: command === 'build' ? `/${repoName}/` : '/',
  plugins: [tailwindcss(), react()],
}))
