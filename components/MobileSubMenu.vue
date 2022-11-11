<template>
  <li>
    <button
      class="mobile-sub-menu w-full uppercase p-6 block"
      @click="openSubMenu()"
    >
      <span class="flex justify-between"
        >{{ label }}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14 14"
          class="w-5 h-5"
        >
          <path
            d="M3.85.5,10,6.65a.48.48,0,0,1,0,.7L3.85,13.5"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".8px"
          ></path>
        </svg>
      </span>
    </button>
    <button
      class="mobile-sub-menu-trigger absolute -top-[69px] left-0 py-4 px-6"
      :class="{
        'opacity-0 translate-x-1/2 pointer-events-none': !subMenuOpen,
        'translate-x-0': subMenuOpen,
      }"
      @click="closeSubMenu()"
      @keyup.esc="closeSubMenu()"
      ref="submenu"
      tabindex="-1"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        height="14"
        width="14"
        class="my-2 w-5 h-5"
      >
        <path
          d="M10.15.5,4,6.65a.48.48,0,0,0,0,.7l6.15,6.15"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width=".8px"
        ></path>
      </svg>
    </button>
    <div
      class="
        mobile-sub-menu-container
        absolute
        top-0
        w-full
        h-full
        transition
        duration-300
        z-10
        overflow-y-scroll
      "
      :class="{
        'delay-300 opacity-0 translate-x-full': !subMenuOpen,
        'mobile-sub-menu-open opacity-100 translate-x-0': subMenuOpen,
      }"
    >
      <ul class="flex flex-col justify-start items-start text-base">
        <template v-for="(link, index) in links">
          <li
            v-if="index === 0"
            :key="link.label"
            class="mobile-menu-item uppercase"
          >
            <PrismicLink :field="link.link">
              {{ label }}
            </PrismicLink>
          </li>
          <li
            v-if="index > 0"
            :key="link.label"
            class="mobile-menu-item uppercase"
          >
            <PrismicLink :field="link.link">
              {{ link.label }}
            </PrismicLink>
          </li>
        </template>
      </ul>
    </div>
  </li>
</template>
<script>
export default {
  props: ["label", "links"],
  watch: {
    $route(to, from) {
      this.subMenuOpen = false;
    },
  },
  data() {
    return {
      subMenuOpen: false,
    };
  },
  methods: {
    openSubMenu() {
      this.subMenuOpen = true;
      this.$refs.submenu.focus({
        preventScroll: true,
      });
    },
    closeSubMenu() {
      this.subMenuOpen = false;
    },
  },
};
</script>
<style scoped>
.mobile-menu-item {
  border-bottom: 1px solid var(--border-color);
  transition: border-color 0.3s ease;
  width: 100%;
}
.mobile-menu-item a {
  display: block;
  padding: 1.5rem;
}

.mobile-sub-menu-container {
  background-color: var(--bg);
}
.mobile-sub-menu-backdrop {
  background-color: var(--bg);
  transition: background-color 0.3s ease;
}
.mobile-sub-menu-trigger {
  background-color: var(--bg);
  transition: background-color 0.3s ease, opacity 0.3s ease, transform 0.3s ease;
}
.mobile-sub-menu-open .mobile-sub-menu-trigger {
  background-color: var(--bg);
  transition: background-color 0.3s ease, opacity 0.3s ease 0.3s,
    transform 0.3s ease 0.3s;
}
a.nuxt-link-exact-active {
  text-underline-offset: 2px;
  text-decoration-thickness: 1px;
  text-decoration-line: underline;
}
</style>