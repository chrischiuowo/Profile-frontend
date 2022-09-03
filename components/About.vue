<template>
  <section
    class="about"
  >
    <div class="container">
      <div
        class="left"
      >
        About /
      </div>
      <div class="right">
        <div class="info">
          <div>
            <p class="en">
              I'm Chris
            </p>
          </div>
          <div>
            <p class="ch">
              邱葦宸
            </p>
          </div>
          <div>
            <p class="line" />
          </div>
          <div>
            <p class="slogan">
              No pain, no gain
            </p>
          </div>
          <div>
            <p class="content">
              持續學習新的技術，
              持續學習新的知識，<br>
              保持對程式的熱誠，
              等待努力開花結果，<br>
              一分耕耘一分收穫。
            </p>
          </div>
        </div>
        <div class="skill">
          <AboutCircle
            v-for="item in data"
            :key="item._id"
            :skill="item"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type Idata = {
  _id: number,
  title: string,
  score: number
}

const data = ref<Array<Idata>>(myData.skill)
</script>

<style lang="sass" scoped>
  @import @/assets/style/page/about
</style>
