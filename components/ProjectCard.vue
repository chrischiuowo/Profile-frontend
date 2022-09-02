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
@import @/assets/style/base/variables
@import @/assets/style/base/mixin
li
  width: calc(33.333% - 40px)
  color: #fff
  margin: 0 20px 40px
  a
    display: block
  .image-outer
    width: 100%
    position: relative
    overflow: hidden
    box-shadow: 0 2px 10px rgba(#fff, .3)
    &::before
      content: ''
      display: block
      width: 100%
      height: 0
      padding-bottom: 50%
    .image
      width: 100%
      height: 140%
      position: absolute
      left: 0
      top: -40%
    img
      width: 100%
      height: 100%
      object-fit: cover
      object-position: center
      position: relative
  .title
    font-size: px(18)
    font-weight: 600
    letter-spacing: 1.6px
    line-height: 1.4
    margin-top: 20px
  .tag
    display: inline-flex
    flex-wrap: wrap
    margin-top: 15px
    p
      font-size: px(14)
      line-height: 1.4
      letter-spacing: 1.6px
    p:not(:last-child)
      margin-right: 6px
      &::after
        content: ', '
  +rwdmax(768)
    width: calc(50% - 40px)
  +rwdmax(650)
    width: 100%
    margin: 0 0 40px
</style>
