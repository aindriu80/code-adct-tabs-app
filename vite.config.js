import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import FullReload from 'vite-plugin-full-reload';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: {
      key: fs.readFileSync('./.cert/key.pem'),
      cert: fs.readFileSync('./.cert/cert.pem'),
    },
  },
  plugins: [react(), FullReload(['config/routes.rb', 'app/views/**/*'])],
});
