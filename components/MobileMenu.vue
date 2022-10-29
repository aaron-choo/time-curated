<template>
  <div
    class="
      mobile-menu-component
      flex
      items-center
      justify-center
      overflow-hidden
      font-normal
    "
  >
    <button class="py-6" @click="toggleMenu">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        height="14"
        width="14"
        class="w-5 h-5"
      >
        <g>
          <line
            x1="13.5"
            y1="2"
            x2="0.5"
            y2="2"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></line>
          <line
            x1="13.5"
            y1="7"
            x2="0.5"
            y2="7"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></line>
          <line
            x1="13.5"
            y1="12"
            x2="0.5"
            y2="12"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></line>
        </g>
      </svg>
    </button>
    <div
      class="
        mobile-menu
        absolute
        top-0
        left-0
        right-0
        transition-opacity
        overflow-hidden
      "
      :class="{
        'opacity-0 pointer-events-none': !menuOpen,
        'opacity-1': menuOpen,
      }"
    >
      <button
        class="mobile-menu-trigger absolute top-0 left-0 py-4 px-6"
        @click="toggleMenu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14 14"
          height="14"
          width="14"
          class="my-2 w-5 h-5"
        >
          <g>
            <line
              x1="13.5"
              y1="0.5"
              x2="0.5"
              y2="13.5"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></line>
            <line
              x1="0.5"
              y1="0.5"
              x2="13.5"
              y2="13.5"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></line>
          </g>
        </svg>
      </button>
      <nav class="mobile-menu-navigation mt-[69px] relative">
        <ul
          class="
            flex flex-col
            justify-start
            items-start
            text-base
            w-full
            h-full
          "
        >
          <li
            v-for="link in navigation.data.links"
            :key="link.label"
            class="mobile-menu-item uppercase"
          >
            <PrismicLink :field="link.link">
              {{ link.label }}
            </PrismicLink>
          </li>

          <MobileSubMenu
            :label="navigation.data.shop_text"
            :links="navigation.data.shop_links"
            class="mobile-menu-item"
          />
          <MobileSubMenuLanguage
            :label="navigation.data.language_text"
            :settings="settings"
            :alternateLanguages="alternateLanguages"
            class="mobile-menu-item"
          />
        </ul>
      </nav>
      <div
        class="
          mobile-menu-backdrop
          absolute
          top-[69px]
          left-0
          right-0
          bottom-0
          -z-10
        "
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    navigation: {
      type: Object,
      required: true,
    },
    settings: {
      type: Object,
      required: true,
    },
    alternateLanguages: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      menuOpen: false,
    };
  },
  watch: {
    $route(to, from) {
      this.menuOpen = false;
      document.querySelector(":root").classList.remove("mobile-menu-open");
    },
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
      if (this.menuOpen === true) {
        document.querySelector(":root").classList.add("mobile-menu-open");
      } else {
        document.querySelector(":root").classList.remove("mobile-menu-open");
      }
    },
  },
};
</script>
<style scoped>
.mobile-menu-trigger,
.mobile-menu-backdrop {
  background-color: var(--bg);
  transition: background-color 0.3s ease;
}
.mobile-menu-navigation {
  height: calc(100vh - 69px);
}
.mobile-menu-item {
  border-bottom: 1px solid var(--border-color);
  transition: border-color 0.3s ease;
  width: 100%;
}
.mobile-menu-item a {
  padding: 1.5rem;
  display: block;
}
a.nuxt-link-exact-active {
  text-underline-offset: 2px;
  text-decoration-thickness: 1px;
  text-decoration-line: underline;
}
</style>