<template>
  <Bounded
    as="nav"
    y-padding="xs"
    class="site-navigation relative border-t border-b"
  >
    <ul
      class="
        flex flex-wrap
        items-center
        gap-6
        md:gap-10
        font-medium
        sans-serif
        text-xs
      "
    >
      <li
        v-for="item in navigation.data.links"
        :key="$prismic.asText(item.label)"
        class="uppercase"
      >
        <PrismicLink :field="item.link">
          {{ $prismic.asText(item.label) }}
        </PrismicLink>
      </li>

      <dropdown-menu
        :withDropdownCloser="true"
        :overlay="false"
        class="shop-dropdown font-medium sans-serif text-xs"
      >
        <button slot="trigger" class="uppercase">
          {{ navigation.data.shop_text }}
        </button>
        <Bounded as="div" y-padding="xs" slot="header">Dropdown Header</Bounded>
        <Bounded as="div" y-padding="sm" slot="body">
          <ul class="flex flex-col gap-2">
            <li
              v-for="item in navigation.data.shop_links"
              :key="item.label"
              class="uppercase"
            >
              <PrismicLink :field="item.link" dropdown-closer>
                {{ item.label }}
              </PrismicLink>
            </li>
          </ul>
        </Bounded>
        <Bounded
          as="div"
          secondaryBackground="true"
          y-padding="xs"
          slot="footer"
          >Free shipping with minimum spend | Authorized retailer with
          authenticity guaranteed | 7-day return</Bounded
        >
      </dropdown-menu>

      <dropdown-menu
        :withDropdownCloser="true"
        :overlay="false"
        class="shop-dropdown font-medium sans-serif text-xs"
      >
        <button slot="trigger" class="uppercase">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="64px"
            height="64px"
            viewBox="0 0 64 64"
            enable-background="new 0 0 64 64"
            xml:space="preserve"
          >
            <path
              fill="none"
              stroke="#000000"
              stroke-width="2"
              stroke-miterlimit="10"
              d="M32.001,0.887c17.184,0,31.113,13.929,31.112,31.113
	C63.114,49.185,49.184,63.115,32,63.113C14.815,63.114,0.887,49.185,0.888,32.001C0.885,14.816,14.815,0.887,32.001,0.887z"
            />
            <line
              fill="none"
              stroke="#000000"
              stroke-width="2"
              stroke-miterlimit="10"
              x1="32"
              y1="1"
              x2="32"
              y2="63"
            />
            <line
              fill="none"
              stroke="#000000"
              stroke-width="2"
              stroke-miterlimit="10"
              x1="63"
              y1="32"
              x2="1"
              y2="32"
            />
            <path
              fill="none"
              stroke="#000000"
              stroke-width="2"
              stroke-miterlimit="10"
              d="M30,1c0,0-14,11-14,31s14,31,14,31"
            />
            <path
              fill="none"
              stroke="#000000"
              stroke-width="2"
              stroke-miterlimit="10"
              d="M34,1c0,0,14,11,14,31S34,63,34,63"
            />
            <path
              fill="none"
              stroke="#000000"
              stroke-width="2"
              stroke-miterlimit="10"
              d="M8,12c0,0,5,10,24,10s24-10,24-10"
            />
            <path
              fill="none"
              stroke="#000000"
              stroke-width="2"
              stroke-miterlimit="10"
              d="M8,52c0,0,5-10,24-10s24,10,24,10"
            />
          </svg>
        </button>
        <Bounded as="div" y-padding="sm" slot="body">
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
      </dropdown-menu>

      <li>
        <CartButton />
      </li>
    </ul>
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

<style>
.v-dropdown-menu.shop-dropdown,
.shop-dropdown .v-dropdown-menu,
.shop-dropdown .v-dropdown-menu__trigger {
  position: initial;
}

.shop-dropdown .v-dropdown-menu__container {
  width: 100%;
  border-left: none;
  border-right: none;
  box-shadow: 0 3px 3px var(--color-fade-10);
}
</style>

<style scoped>
.switch-lang.en-us::before {
  content: "English";
}
.switch-lang.zh-cn::before {
  content: "简体中文";
}
</style>