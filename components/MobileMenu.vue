<template>
  <div class="flex items-center justify-center">
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
            stroke="var(--color)"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></line>
          <line
            x1="13.5"
            y1="7"
            x2="0.5"
            y2="7"
            fill="none"
            stroke="var(--color)"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></line>
          <line
            x1="13.5"
            y1="12"
            x2="0.5"
            y2="12"
            fill="none"
            stroke="var(--color)"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></line>
        </g>
      </svg>
    </button>
    <Bounded
      as="div"
      yPadding="xs"
      class="mobile-menu fixed top-0 left-0 right-0 bottom-0 transition"
      :class="{
        'opacity-0 pointer-events-none z-50': !menuOpen,
        'opacity-1': menuOpen,
      }"
    >
      <ul
        class="
          flex flex-col
          gap-4
          justify-center
          items-start
          text-3xl
          font-light
          w-full
          h-full
        "
      >
        <button @click="toggleMenu">
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
                stroke="var(--bg)"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></line>
              <line
                x1="0.5"
                y1="0.5"
                x2="13.5"
                y2="13.5"
                fill="none"
                stroke="var(--bg)"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></line>
            </g>
          </svg>
        </button>
        <Accordion
          :label="navigation.data.shop_text"
          :links="navigation.data.shop_links"
        />
        <li
          v-for="link in navigation.data.links"
          :key="link.label"
          class="uppercase"
        >
          <PrismicLink :field="link.link">
            {{ link.label }}
          </PrismicLink>
        </li>
      </ul>
    </Bounded>
  </div>
</template>
<script>
export default {
  props: {
    navigation: {
      type: Array,
      required: true,
    },
    settings: {
      type: Object,
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
    },
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>
<style scoped>
.mobile-menu {
  background-color: var(--color);
  color: var(--bg);
}
</style>