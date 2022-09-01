import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['@/assets/style/style.sass'],
  plugins: [
    { src: '@/plugins/aos', mode: 'client' }
  ]
})
