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
    // Switch back to regular preset since edge is causing polyfill issues
    preset: 'netlify',
    externals: {
      external: [
        'nitropack',
        'nitropa',
        '_deno-env-polyfill'
      ]
    },
    moduleSideEffects: ['unenv/runtime/polyfill/fetch.node'],
  },

  vite: {
    build: {
      rollupOptions: {
        external: [
          'nitropack',
          'nitropa',
          /^node:/,
          /_deno-env-polyfill/,
          /^netlify-(edge|lambda)/
        ]
      }
    },
    optimizeDeps: {
      exclude: ['nitropack', 'nitropa']
    }
  },
})
