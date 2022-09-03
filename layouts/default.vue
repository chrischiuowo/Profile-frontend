<template>
  <div class="layout-container">
    <Header />
    <slot />
  </div>
</template>

<script setup>
import DeviceDetector from 'device-detector-js'

const checkIsApple = () => {
  const deviceDetector = new DeviceDetector()
  const userAgent = navigator.userAgent
  const device = deviceDetector.parse(userAgent)
  if (device.device.brand === 'Apple') return
  document.body.classList.add('scrollbar-style')
}

onMounted(() => {
  checkIsApple()
})
</script>
