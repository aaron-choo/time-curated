<template>
  <li>
    <button
      class="mobile-sub-menu w-full uppercase p-6 block"
      @click="openSubMenu()"
    >
      <span class="flex justify-between">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14 14"
          height="14"
          width="14"
          class="w-5 h-5 m-[2px]"
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
            ></circle>
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
            ></line>
            <path
              d="M9.5,7A11.22,11.22,0,0,1,7,13.5,11.22,11.22,0,0,1,4.5,7,11.22,11.22,0,0,1,7,.5,11.22,11.22,0,0,1,9.5,7Z"
              fill="none"
              stroke="var(--color)"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".8px"
            ></path>
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
    <div
      class="
        mobile-sub-menu-container
        absolute
        top-0
        left-0
        w-full
        h-full
        transition
        duration-300
        z-10
      "
      :class="{
        'delay-300 opacity-0 translate-x-full': !subMenuOpen,
        'mobile-sub-menu-open opacity-100 translate-x-0': subMenuOpen,
      }"
    >
      <button
        class="mobile-sub-menu-trigger absolute -top-[69px] left-0 py-4 px-6"
        :class="{
          'opacity-0 translate-x-1/2': !subMenuOpen,
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
      <ul class="flex flex-col justify-start items-start text-base">
        <li
          class="
            mobile-menu-item
            uppercase
            underline
            decoration-1
            underline-offset-2
          "
        >
          <a class="switch-lang" :class="settings.lang">
            <span class="sr-only">{{ settings.lang }}</span>
          </a>
        </li>
        <template v-for="lang in alternateLanguages">
          <li
            class="mobile-menu-item uppercase"
            @mousedown="switchLang(lang.lang)"
          >
            <nuxt-link
              class="switch-lang"
              :to="linkResolver(lang)"
              :class="lang.lang"
            >
              <span class="sr-only">{{ lang.lang }}</span>
            </nuxt-link>
          </li>
        </template>
      </ul>
      <div
        class="
          mobile-sub-menu-backdrop
          absolute
          top-0
          left-0
          right-0
          bottom-0
          -z-10
        "
      ></div>
    </div>
  </li>
</template>
<script>
export default {
  props: ["label", "settings", "alternateLanguages"],
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
.mobile-menu-item {
  border-bottom: 1px solid var(--border-color);
  transition: border-color 0.3s ease;
  width: 100%;
}
.mobile-menu-item a {
  display: block;
  padding: 1.5rem;
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
.switch-lang.en-us::before {
  content: "English";
}
.switch-lang.zh-cn::before {
  content: "简体中文";
}
</style>