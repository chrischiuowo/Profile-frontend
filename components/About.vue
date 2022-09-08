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
          <div class="en">
            <p>
              I'm Chris
            </p>
          </div>
          <div class="ch">
            <p>
              邱葦宸
            </p>
          </div>
          <div class="line" />
          <div class="slogan">
            <p>
              No pain, no gain
            </p>
          </div>
          <div class="content">
            <p>
              持續學習新的技術，
              持續學習新的知識，<br>
              保持對程式的熱誠，
              等待努力開花結果，<br>
              一分耕耘一分收穫。
            </p>
          </div>
        </div>
        <div class="info">
          <div class="job">
            <ul>
              <li
                v-for="item in data"
                :key="item._id"
              >
                <p><i>－</i> {{ item.title }}</p>
                <span>{{ item.desc }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flower f1"
      data-aos
      data-aos-once="false"
    >
      <img
        src="@/assets/image/f1.png"
        alt="flower"
      >
    </div>
    <div
      class="flower f2"
      data-aos
      data-aos-once="false"
    >
      <img
        src="@/assets/image/f2.png"
        alt="flower"
      >
    </div>
  </section>
</template>

<script setup lang="ts">
type Idata = {
  _id: number,
  title: string,
  desc: string,
}

const data = ref<Array<Idata>>(myData.skill)
</script>

<style lang="sass" scoped>
  @import @/assets/style/page/about
</style>
