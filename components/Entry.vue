<template>
  <div
    id="entry-cover"
    ref="entry"
  >
    <div class="container">
      <div class="p-wrap">
        <p>
          <span>Welcome To</span>
        </p>
        <p>
          <span>Chris's Website</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const entry = ref<HTMLElement>(null)

onMounted(() => {
  const nuxtApp = useNuxtApp()
  const titles: Array<HTMLElement> = Array.from(entry.value.querySelectorAll('p'))

  const addCls = async (element): Promise<boolean> => {
    return new Promise((resolve) => {
      element.classList.add('active')
      setTimeout(() => {
        element.classList.add('leave')
        resolve(true)
      }, 1400)
    })
  }

  const entryShow = async (): Promise<boolean> => {
    for await (const element of titles) {
      await addCls(element)
    }
    return new Promise((resolve) => {
      entry.value.classList.add('leave')
      setTimeout(() => {
        resolve(true)
      }, 800)
    })
  }

  const aosInit = async (): Promise<void> => {
    document.body.style.overflow = 'hidden'
    await entryShow().then(() => {
      document.body.style.overflow = ''
      nuxtApp.AOS.init({
        once: true,
        mirror: true
      })
    })
  }

  aosInit()
})
</script>
