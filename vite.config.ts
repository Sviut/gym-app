import path from 'path'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig(({ mode }) => {
  return {
    base: mode === 'production' ? '/gym-app/' : '/',
    plugins: [
      react(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: [
          'favicon.svg',
          'favicon.ico',
          'robots.txt',
          'apple-touch-icon.png',
        ],
        manifest: {
          name: 'Gym App',
          short_name: 'Gym App',
          description: 'My awesome Gym App',
          display: 'standalone',
          orientation: 'portrait',
          theme_color: '#ffffff',
          icons: [
            {
              src: 'pwa.webp', // WebP иконка
              sizes: '192x192',
              type: 'image/webp',
            },
            {
              src: 'pwa.webp', // WebP иконка
              sizes: '512x512',
              type: 'image/webp',
            },
          ],
        },
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  }
})
