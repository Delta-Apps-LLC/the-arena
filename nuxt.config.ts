// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  pages: true,
  ssr: false,
  css: [],
  plugins: [],
  modules: [
    '@nuxt/ui'
  ],
  nitro: {
    preset: 'netlify',
    // Explicitly mark nitropack as external
    externals: {
      external: ['nitropack', 'nitropa'],
      inline: [] // Empty to prevent auto-inlining
    },
  },

  vite: {
    ssr: {
      // Exclude nitropack from SSR bundling
      noExternal: true,
      external: [
        'nitropack',
        'nitropa',
      ]
    },
    build: {
      rollupOptions: {
        // Exclude from client-side bundle
        external: [
          'nitropack',
          'nitropa',
          /^node:/
        ]
      }
    },
    optimizeDeps: {
      // Exclude from dependency optimization
      exclude: ['nitropack', 'nitropa']
    }
  }
})
