<template>
  <div>
    <button
      class="p-3.5"
      @mouseenter="menuOpen = true"
      @mouseleave="menuOpen = false"
      @click.prevent="menuOpen = true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        height="14"
        width="14"
        class="w-5 h-5"
      >
        <g>
          <circle
            cx="7"
            cy="7"
            r="6.5"
            fill="none"
            stroke="var(--color)"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></circle>
          <path
            d="M1,9.5H2.75A1.75,1.75,0,0,0,4.5,7.75V6.25A1.75,1.75,0,0,1,6.25,4.5,1.75,1.75,0,0,0,8,2.75V.57"
            fill="none"
            stroke="var(--color)"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M13.5,6.9a3.56,3.56,0,0,0-1.62-.4H9.75a1.75,1.75,0,0,0,0,3.5A1.25,1.25,0,0,1,11,11.25v.87"
            fill="none"
            stroke="var(--color)"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </g>
      </svg>
      <!-- {{ navigation.data.language_text }} -->
    </button>
    <div
      class="menu absolute left-0 w-full transition duration-500 shadow"
      :class="{
        'opacity-0 pointer-events-none': !menuOpen,
        ' ': menuOpen,
      }"
      @mouseenter="menuOpen = true"
      @mouseleave="menuOpen = false"
    >
      <Bounded as="div" yPadding="xs">
        <ul class="flex justify-center gap-8 uppercase">
          <li class="underline decoration-1 underline-offset-2">
            <span class="switch-lang" :class="settings.lang">
              <span class="sr-only">{{ settings.lang }}</span>
            </span>
          </li>
          <li
            v-for="lang in alternateLanguages"
            :key="lang.lang"
            @mousedown="switchLang(lang.lang)"
          >
            <PrismicLink
              class="switch-lang"
              :field="{ ...lang, link_type: 'Document' }"
              :class="lang.lang"
              dropdown-closer
            >
              <span class="sr-only">{{ lang.lang }}</span>
              <!-- <span
              class="fi"
              :class="`fi-${lang.lang.substring(3).toLowerCase()}`"
            /> -->
            </PrismicLink>
          </li>
        </ul>
      </Bounded>
    </div>
  </div>
</template>
<script>
export default {
  props: ["settings", "alternateLanguages"],
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
    switchLang(lang) {
      // console.log(lang);
      this.$snipcart.setLanguage(
        lang.slice(0, -2) + lang.slice(-2).toUpperCase()
      );
    },
  },
};
</script>
<style scoped>
.menu {
  top: calc(100% + 1px);
  background-color: var(--bg-secondary);
  border-bottom: 1px solid var(--border-color);
}
.switch-lang.en-us::before {
  content: "English";
}
.switch-lang.zh-cn::before {
  content: "简体中文";
}
</style>