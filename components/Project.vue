<template>
  <section
    class="project"
    data-aos
  >
    <div class="container">
      <div
        class="left"
      >
        Project /
      </div>
      <div class="right">
        <ul>
          <ProjectCard
            v-for="item in data"
            :key="item._id"
            :project="item"
          />
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type Idata = {
  _id: number,
  title: string,
  image: string,
  tags: string[],
  link: string
}

const data = ref<Array<Idata>>(myData.project)
</script>

<style lang="sass" scoped>
  @import @/assets/style/page/project
  .project
    .right
      opacity: 0
      transform: translateY(20%)
    &.aos-animate
      .right
        opacity: 1
        transform: translateY(0)
        transition: opacity 1s, transform 1s
</style>
