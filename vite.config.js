import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.REACT_FILM_APP_TOKEN': JSON.stringify(env.REACT_FILM_APP_TOKEN),
      'process.env.REACT_FILM_APP_BASE_URL': JSON.stringify(env.REACT_FILM_APP_BASE_URL),
      'process.env.REACT_FILM_APP_GENRE_URL': JSON.stringify(env.REACT_FILM_APP_GENRE_URL)
    },
    plugins: [react()],
  }
})