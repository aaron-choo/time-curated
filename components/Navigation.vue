<template>
  <Bounded
    as="nav"
    y-padding="none"
    class="sticky top-0 border-t border-b z-20"
    :class="{ 'scroll-over': scrollOver }"
  >
    <!-- <div class="col-span-2 self-center"></div> -->
    <ul
      class="
        col-span-3
        md:col-span-8
        flex flex-wrap
        justify-start
        items-center
        font-medium font-sans
        text-xs
      "
    >
      <MobileMenu
        :settings="settings"
        :navigation="navigation"
        :alternateLanguages="alternateLanguages"
        class="block md:hidden"
      />
      <li
        class="transition-all duration-500 overflow-hidden hidden md:block"
        :class="{
          '-mr-3 pointer-events-none w-0 opacity-0': !scrollOver,
          'w-40 opacity-1 delay-500 mr-2': scrollOver,
        }"
      >
        <n-link :to="localePath('/')">
          <Logo :settings="settings" height="30" class="w-fit" />
        </n-link>
      </li>
      <template v-for="(link, index) in navigation.data.links">
        <!-- <li v-if="index === 0" class="uppercase hidden md:block">
          <PrismicLink :field="link.link" class="pr-2">
            {{ link.label }}
          </PrismicLink>
        </li> -->
        <li class="uppercase hidden md:block">
          <PrismicLink :field="link.link" class="px-3">
            {{ link.label }}
          </PrismicLink>
        </li>
      </template>
      <Dropdown
        :label="navigation.data.shop_text"
        :links="navigation.data.shop_links"
        class="hidden md:block"
      />
    </ul>
    <div
      class="
        mobile-logo
        col-span-6
        md:hidden
        flex
        justify-center
        items-center
        z-10
      "
    >
      <n-link :to="localePath('/')">
        <Logo :settings="settings" height="30" class="w-40" />
      </n-link>
    </div>
    <div
      class="
        col-span-3
        md:col-span-4
        flex
        justify-end
        items-center
        font-medium font-sans
        text-xs
      "
    >
      <ModeSwitcher class="mr-3 md:mr-0" />
      <LanguageSwitcher
        :settings="settings"
        :alternateLanguages="alternateLanguages"
        :page="page"
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
    page: {
      type: Object,
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
.site-navigation {
  color: var(--color);
}
.site-navigation {
  background-color: var(--bg);
}

.site-navigation {
  transition: background-color 0.3s ease, border-color 0.3s ease;
}
a.nuxt-link-exact-active {
  text-underline-offset: 2px;
  text-decoration-thickness: 1px;
  text-decoration-line: underline;
}

.nav-icon {
  fill: none;
  stroke: var(--color);
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 0.8px;
}
</style>