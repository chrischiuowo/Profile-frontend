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
          <i class="fa-sharp fa-solid fa-address-book" />
        </a>
      </li>
      <li>
        <a
          href="javascript:;"
          @click="scrollTo('section.project')"
        >
          <span>Project</span>
          <i class="fa-solid fa-folder" />
        </a>
      </li>
      <li>
        <a
          href="javascript:;"
          @click="scrollTo('section.contact')"
        >
          <span>Contact</span>
          <i class="fa-solid fa-paper-plane" />
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
