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
        <li
          v-for="lang in alternateLanguages"
          :key="lang.lang"
          class="sans-serif uppercase text-xs"
        >
          <PrismicLink
            class="language-switcher"
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
          <MiniCartButton />
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
};
</script>
<style scoped>
.language-switcher.en-us::before {
  content: "English";
}
.language-switcher.zh-cn::before {
  content: "中文";
}
.language-switcher.fr-fr::before {
  content: "Français";
}
</style>