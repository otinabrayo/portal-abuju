import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const isGitHubPages = process.env.DEPLOY_TARGET === 'gh-pages';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? '/portal-abuju/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})
