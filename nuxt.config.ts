// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  pages: true,
  ssr: true,
  css: [],
  plugins: [],
  modules: [
    '@nuxt/ui'
  ],
  nitro: {
    // Use modern Netlify Edge preset instead of legacy
    preset: 'netlify-edge',
    // Disable legacy compatibility mode
    compatibilityDate: '2024-02-15',
    // External module handling
    externals: {
      external: ['nitropack', 'nitropa'],
      inline: []
    }
  },

  vite: {
    build: {
      rollupOptions: {
        external: [
          'nitropack',
          'nitropa',
          /^node:/,
          /^netlify-lambda/
        ]
      }
    }
  }
})
