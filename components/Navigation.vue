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
          {{ navigation.data.language_text }}
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