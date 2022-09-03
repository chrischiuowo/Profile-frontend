<template>
  <li ref="li">
    <a
      :href="project.link"
      target="_blank"
    >
      <div class="image-outer">
        <div class="image">
          <img
            :src="project.image"
            alt="project"
          >
        </div>
      </div>
      <div class="title">
        {{ project.title }}
      </div>
      <div class="tag">
        <p
          v-for="(tag, index) in project.tags"
          :key="index + 'tag'"
        >
          {{ tag }}
        </p>
      </div>
    </a>
  </li>
</template>

<script setup lang="ts">
const li = ref<HTMLElement>(null)

defineProps({
  project: {
    type: Object,
    required: true
  }
})

onMounted(() => {
  useProjectCardGsap(li.value)
})
</script>

<style lang="sass" scoped>
  @import @/assets/style/components/projectCard
</style>
