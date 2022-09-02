<template>
  <header
    id="header"
    data-aos
  >
    <div class="logo">
      <a href="/">
        <i class="fa-solid fa-face-smile" />
      </a>
    </div>
    <ul>
      <li>
        <a
          href="javascript:;"
          @click="scrollTo('section.about')"
        >
          About
        </a>
      </li>
      <li>
        <a
          href="javascript:;"
          @click="scrollTo('section.project')"
        >
          Project
        </a>
      </li>
      <li>
        <a
          href="javascript:;"
          @click="scrollTo('section.contact')"
        >
          Contact
        </a>
      </li>
    </ul>
    <div class="tool">
      <div class="fake-line">
        <div />
        <div />
      </div>
      <a
        href="javascript:;"
        @click="scrollTop()"
      >
        <i class="fa-solid fa-caret-up" />
      </a>
    </div>
  </header>
</template>

<style lang="sass" scoped>
  #header
    .logo
      transform: scale(.7)
      opacity: 0
    ul
      li
        overflow: hidden
      a
        opacity: 0
        transform: translateY(150%) skewY(5deg)
    .tool .fake-line
      opacity: 0
      clip-path: inset(100% 0 0 0)
    &.aos-animate
      .logo
        transform: scale(1)
        opacity: 1
        transition: transform 1s, opacity .7s
      ul
        a
          opacity: 1
          transform: translateY(0)
          transition: transform 1.5s
      .tool .fake-line
        opacity: 1
        clip-path: inset(0 0 0 0)
        transition: clip-path 1s, opacity .7s
</style>
