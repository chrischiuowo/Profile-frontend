<template>
  <header id="header">
    <div class="logo">
      <a href="/">
        <img
          src="@/assets/image/smile.svg"
          alt="logo"
        >
      </a>
    </div>
    <ul>
      <li>
        <a href="#about">
          About
        </a>
      </li>
      <li>
        <a href="#project">
          Project
        </a>
      </li>
      <li>
        <a href="#contact">
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
        <img
          src="@/assets/image/top.svg"
          alt="scroll-top"
        >
      </a>
    </div>
  </header>
</template>

<script setup lang="ts">

</script>
