<template>
  <div class="circle-wrap">
    <div
      ref="circle"
      class="circle"
      :data-value="skill.score"
    >
      <span>
        0%
      </span>
    </div>
    <div class="circle-t">
      {{ skill.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
const circle = ref<HTMLElement>(null)

defineProps({
  skill: {
    type: Object,
    required: true
  }
})

onMounted(() => {
  useAboutCircleGsap(circle.value)
})
</script>

<style lang="sass" scoped>
  @import @/assets/style/base/variables
  @import @/assets/style/base/mixin
  .circle-wrap
    width: 100px
    text-align: center
    margin: 10px
  .circle
    width: 100%
    height: 100px
    display: flex
    align-items: center
    justify-content: center
    border-radius: 50%
    position: relative
    --value: 0%
    background: conic-gradient(royalblue var(--value), 0, rgba(#000, .5))
    &::after
      content: ''
      width: calc(100% - 20px)
      height: calc(100% - 20px)
      border-radius: 50%
      background-color: #000
      position: absolute
      left: 50%
      top: 50%
      transform: translate(-50%, -50%)
    span
      font-size: px(25)
      font-weight: 600
      color: #fff
      position: relative
      z-index: 1
  .circle-t
    width: 100%
    font-size: px(18)
    font-weight: 600
    margin-top: 20px
  +rwdmax(767)
    .circle-wrap
      width: 80px
    .circle
      height: 80px
      span
        font-size: px(16)
    .circle-t
      font-size: px(14)
      margin-top: 15px
</style>
