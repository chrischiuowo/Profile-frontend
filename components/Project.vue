<template>
  <section
    class="project"
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
</style>
