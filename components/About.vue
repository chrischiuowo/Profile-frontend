<template>
  <section
    id="about"
    class="about"
    data-aos
    data-aos-offset="100"
  >
    <div class="container">
      <div class="left">
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
              持續學習新的技術，<br>
              持續學習新的知識，<br>
              保持對程式的熱誠，<br>
              等待努力開花結果，<br>
              一分耕耘一分收穫。
            </p>
          </div>
        </div>
        <div class="skill">
          <div
            v-for="item in data"
            :key="item._id"
            class="circle-wrap"
          >
            <div
              class="circle"
              :data-value="item.score"
            >
              <span>
                0%
              </span>
            </div>
            <div class="circle-t">
              {{ item.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const data = ref(myData.skill)
</script>

<style lang="sass" scoped>
  @import @/assets/style/page/about
  // aos
  .about
    .info
      div
        overflow: hidden
      p
        opacity: 0
        transform: translate(0, 50px)
    .skill
      opacity: 0
    &.aos-animate
      .info
        p
          opacity: 1
          transform: translate(0, 0)
          transition-property: opacity, transform
          transition-duration: .8s
          transition-timing-function: var(--trans-timing)
        @for $i from 1 through 10
          div:nth-child(#{$i})
            p
              transition-delay: ($i * 0.2s)
      .skill
        opacity: 1
        transition: opacity .8s .8s
</style>
