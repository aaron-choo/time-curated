<template>
  <Bounded
    as="nav"
    y-padding="none"
    class="site-navigation sticky -top-px border-t border-b transition"
    style="background-color: var(--bg); z-index: 2"
  >
    <!-- <div class="col-span-2 self-center"></div> -->
    <ul
      class="
        col-span-3
        md:col-span-6
        flex flex-wrap
        justify-start
        items-center
        gap-4
        font-medium
        sans-serif
        text-xs
      "
    >
      <MobileMenu
        :settings="settings"
        :navigation="navigation"
        class="block md:hidden"
      />
      <li
        class="transition-all duration-500 overflow-hidden hidden md:block"
        :class="{
          '-mr-4 pointer-events-none w-0 opacity-0': !scrollOver,
          'w-40 opacity-1 delay-500': scrollOver,
        }"
      >
        <n-link :to="localePath('/')">
          <Logo :settings="settings" height="30" class="w-40" />
        </n-link>
      </li>
      <li
        v-for="link in navigation.data.links"
        :key="link.label"
        class="uppercase hidden md:block"
      >
        <PrismicLink :field="link.link">
          {{ link.label }}
        </PrismicLink>
      </li>

      <Dropdown
        :label="navigation.data.shop_text"
        :links="navigation.data.shop_links"
        class="hidden md:block"
      />
    </ul>
    <div
      class="mobile-logo col-span-6 md:hidden flex justify-center items-center"
    >
      <n-link :to="localePath('/')">
        <Logo :settings="settings" height="30" class="w-40" />
      </n-link>
    </div>
    <div
      class="
        col-span-3
        md:col-span-6
        flex
        justify-end
        items-center
        font-medium
        sans-serif
        text-xs
      "
    >
      <ModeSwitcher class="hidden md:block" />
      <LanguageSwitcher
        :settings="settings"
        :alternateLanguages="alternateLanguages"
        class="hidden md:block"
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

      // console.log(currentScrollPosition);
      // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
      if (currentScrollPosition < 0) {
        return;
      }
      if (currentScrollPosition > 170) {
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