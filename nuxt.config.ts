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
  // Nitro configuration
  nitro: {
    preset: 'netlify',
    // More explicit external handling
    externals: {
      inline: ['nitropack'],
      external: [
        'consola',
        'unenv',
        'unstorage',
      ]
    },
    // Prevent server-only modules from being bundled
    moduleSideEffects: ['unenv/runtime/polyfill/fetch.node'],
  },

  // Vite configuration
  vite: {
    build: {
      rollupOptions: {
        external: [
          /^node:.*/, 
          /^nitropack.*/, 
          /^@netlify.*/,
          /^unified.*/,
          /^remark.*/
        ]
      }
    },
    optimizeDeps: {
      exclude: ['nitropack', 'fsevents']
    }
  },

  // Build configuration
  build: {
    transpile: ['nitropack'],
  },

  // Watch configuration
  watch: [
    '!**/{node_modules,dist,build}/**'
  ],

  experimental: {
    // Enable more stable bundling
    payloadExtraction: true
  }
})
