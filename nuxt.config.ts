// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true,
  pages: true,
  css: [],
  plugins: [],
  modules: [
    '@nuxt/ui'
  ],
  build: {
    transpile: ['nitropack'],
  },
  // Nitro configuration
  nitro: {
    preset: 'netlify',
    // Prevent module resolution issues
    externals: {
      inline: ['nitropack']
    }
  },
  // Vite configuration
  vite: {
    build: {
      rollupOptions: {
        external: [/^nitropack/]
      }
    }
  },
})
