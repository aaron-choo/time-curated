<template>
  <Bounded
    as="nav"
    y-padding="none"
    class="site-navigation sticky top-0 border-t border-b"
    style="background-color: var(--bg); z-index: 2"
  >
    <!-- <div class="col-span-2 self-center"></div> -->
    <ul
      class="
        col-span-6
        flex flex-wrap
        justify-start
        items-center
        gap-4
        font-medium
        sans-serif
        text-xs
      "
    >
      <li
        v-for="link in navigation.data.links"
        :key="link.label"
        class="uppercase"
      >
        <PrismicLink :field="link.link">
          {{ link.label }}
        </PrismicLink>
      </li>

      <Dropdown
        :label="navigation.data.shop_text"
        :links="navigation.data.shop_links"
      />
    </ul>
    <div
      class="
        col-span-6
        flex
        justify-end
        items-center
        font-medium
        sans-serif
        text-xs
      "
    >
      <ModeSwitcher />
      <LanguageSwitcher
        :settings="settings"
        :alternateLanguages="alternateLanguages"
      />
      <CartButton />
    </div>
  </Bounded>
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
      default: () => [],
    },
  },
  data() {
    return {
      scrollOver: false,
      colors: [
        { name: "light", symbol: " " },
        { name: "dark", symbol: " " },
      ],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      // Get the current scroll position
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
      if (currentScrollPosition < 0) {
        return;
      }
      if (currentScrollPosition > 0) {
        this.scrollOver = true;
      } else {
        this.scrollOver = false;
      }
    },
  },
};
</script>

<style>
.site-navigation > div {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
}
</style>

<style scoped>
a.nuxt-link-exact-active {
  text-underline-offset: 2px;
  text-decoration-thickness: 1px;
  text-decoration-line: underline;
}
</style>