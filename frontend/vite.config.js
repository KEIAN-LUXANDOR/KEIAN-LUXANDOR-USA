import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // Every request that starts with /api is sent to the Spring Boot backend.
    proxy: {
      '/api': 'http://localhost:8080',
    },
  },
});