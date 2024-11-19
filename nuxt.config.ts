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
    // This is what replaces target: 'static'
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
    static: true,
    preset: 'netlify'
  },
})
