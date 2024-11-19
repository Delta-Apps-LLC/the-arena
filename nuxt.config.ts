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
  build: {
    transpile: [],
  },
  // Nitro configuration for static generation
  nitro: {
    preset: 'netlify',
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },
})
