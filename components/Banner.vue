<template>
  <section
    class="banner"
    data-aos
  >
    <div class="banner-container">
      <div>
        <div class="banner-cover">
          <div class="cover-wrap">
            <div class="cover-content">
              <div class="mask" />
              <video
                src="@/assets/image/video.mp4"
                type="video/mp4"
                autoplay
                muted
                loop
              />
            </div>
          </div>
        </div>
        <div class="banner-text">
          <p class="slogan-1">
            <span>
              Welcome Chris's Website
            </span>
          </p>
          <p class="slogan-2">
            <span>
              Let's Go Explore
            </span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
onMounted(() => {
  // all gsap
  usePageGsap()
  // video slow
  const video = (document.querySelector('section.banner video') as HTMLVideoElement)
  video.playbackRate = 0.5
})
</script>

<style lang="sass" scoped>
  @import @/assets/style/page/banner
</style>
