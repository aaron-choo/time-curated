<template>
  <Bounded as="header" y-padding="none">
    <div
      class="
        flex flex-wrap
        w-full
        py-8
        items-center
        justify-center
        gap-x-6 gap-y-3
        leading-none
      "
    >
      <NuxtLink :to="localePath('/')">
        <PrismicImage
          v-if="settings.data.logo.url"
          :field="settings.data.logo"
          width="180"
        />
      </NuxtLink>
    </div>
    <nav class="site-navigation">
      <ul class="flex flex-wrap items-center gap-6 md:gap-10">
        <li
          v-for="item in navigation.data.links"
          :key="$prismic.asText(item.label)"
          class="sans-serif uppercase text-xs"
        >
          <PrismicLink :field="item.link">
            {{ $prismic.asText(item.label) }}
          </PrismicLink>
        </li>
        <li class="sans-serif uppercase text-xs underline">
          <span class="switch-lang" :class="settings.lang">
            <span class="sr-only">{{ settings.lang }}</span>
          </span>
        </li>
        <li
          v-for="lang in alternateLanguages"
          :key="lang.lang"
          class="sans-serif uppercase text-xs"
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
        <li>
          <CartButton />
        </li>
      </ul>
    </nav>
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
      console.log(lang);
      this.$snipcart.setLanguage(lang);
    },
  },
};
</script>
<style scoped>
.switch-lang.en-us::before {
  content: "En";
}
.switch-lang.zh-cn::before {
  content: "中文";
}
</style>