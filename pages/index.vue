<template>
  <div
    class="page-all"
    data-aos
  >
    <div id="cover">
      <div class="color-cover" />
      <div class="noice-cover" />
    </div>
    <main>
      <Banner />
      <About />
      <Project />
      <Contact />
    </main>
  </div>
</template>

<script setup lang="ts">
// setting head
useHead({
  title: 'Chris\'s Website',
  viewport: 'width=device-width, initial-scale=1',
  charset: 'utf-8',
  meta: [
    {
      name: 'description',
      content: 'I\'m Chris. 目前使用 Vue / Nuxt / Node / Express 做開發。'
    },
    {
      name: 'keywords',
      content: 'web design / frontend / node.js / express.js / nuxt.js / vue 3'
    }
  ],
  link: [{ rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css' }]
})

onMounted(() => {
  // all gsap
  usePageGsap()
})
</script>

<style lang="sass" scoped>
</style>
