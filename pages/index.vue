<template>
  <div
    class="page-all"
    data-aos
  >
    <div id="main-cover">
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
onMounted(() => {
  // all gsap
  usePageGsap()
})
</script>

<style lang="sass" scoped>
</style>
