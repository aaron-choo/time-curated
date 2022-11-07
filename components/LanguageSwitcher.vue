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
            stroke-width=".8px"
          />
          <line
            x1="0.5"
            y1="7"
            x2="13.5"
            y2="7"
            fill="none"
            stroke="var(--color)"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".8px"
          />
          <path
            d="M9.5,7A11.22,11.22,0,0,1,7,13.5,11.22,11.22,0,0,1,4.5,7,11.22,11.22,0,0,1,7,.5,11.22,11.22,0,0,1,9.5,7Z"
            fill="none"
            stroke="var(--color)"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".8px"
          />
          <path
            fill="none"
            stroke="var(--color)"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".8px"
            d="M11.7,2.5c-1.2,1.2-2.8,2-4.7,2s-3.5-0.8-4.7-2"
          />
          <path
            fill="none"
            stroke="var(--color)"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".8px"
            d="M2.3,11.5c1.2-1.2,2.8-2,4.7-2s3.5,0.8,4.7,2"
          />
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
            <nuxt-link
              class="switch-lang"
              :to="linkResolver(lang)"
              :class="lang.lang"
            >
              <span class="sr-only">{{ lang.lang }}</span>
              <!-- <span
              class="fi"
              :class="`fi-${lang.lang.substring(3).toLowerCase()}`"
            /> -->
            </nuxt-link>
          </li>
        </ul>
      </Bounded>
    </div>
  </div>
</template>
<script>
export default {
  props: ["settings", "alternateLanguages", "page"],
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
    linkResolver(doc) {
      const prefix = doc.lang === "en-us" ? "" : `/${doc.lang}`;
      if (doc.isBroken) {
        return `${prefix}/not-found`;
      }
      if (doc.type === "product_category") {
        return `${prefix}/shop/${doc.uid}`;
      }
      if (doc.type === "product") {
        return `${prefix}/shop/${doc.data.product_category.uid}/${doc.uid}`;
      }
      if (doc.type === "article_category") {
        return `${prefix}/articles/${doc.uid}`;
      }
      if (doc.type === "article") {
        return `${prefix}/articles/${doc.data.article_category.uid}/${doc.uid}`;
      }
      if (doc.type === "collection") {
        return `${prefix}/collection/${doc.uid}`;
      }
      if (doc.type === "page") {
        return doc.uid === "home" ? prefix || "/" : `${prefix}/${doc.uid}`;
      }
      return "/not-found";
    },
  },
};
</script>
<style scoped>
.menu {
  top: calc(100% + 1px);
  background-color: var(--bg-accent);
  color: var(--color-accent);
  border-bottom: 1px solid var(--border-accent);
}
.switch-lang.en-us::before {
  content: "English";
}
.switch-lang.zh-cn::before {
  content: "简体中文";
}
</style>