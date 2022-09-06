import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    buildAssetsDir: '/chris/'
  },
  css: ['@/assets/style/style.sass'],
  plugins: [
    { src: '@/plugins/aos', mode: 'client' }
  ]
})
