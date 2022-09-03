<template>
  <header
    id="header"
    data-aos
  >
    <div class="logo">
      <a href="/">
        <i class="fa-solid fa-c" />
        <i />
      </a>
    </div>
    <ul>
      <li>
        <a
          href="javascript:;"
          @click="scrollTo('section.about')"
        >
          <span>About</span>
          <i class="fa-solid fa-user" />
        </a>
      </li>
      <li>
        <a
          href="javascript:;"
          @click="scrollTo('section.project')"
        >
          <span>Project</span>
          <i class="fa-solid fa-book" />
        </a>
      </li>
      <li>
        <a
          href="javascript:;"
          @click="scrollTo('section.contact')"
        >
          <span>Contact</span>
          <i class="fa-solid fa-square-phone" />
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
