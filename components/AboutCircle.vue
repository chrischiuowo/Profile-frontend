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
  @import @/assets/style/components/aboutCircle
</style>
