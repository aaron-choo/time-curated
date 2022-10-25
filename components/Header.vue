<template>
  <header>
    <Bounded as="div" y-padding="xs" class="">
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
        <n-link :to="localePath('/')">
          <PrismicImage
            v-if="settings.data.logo.url"
            :field="settings.data.logo"
            width="180"
          />
        </n-link>
      </div>
    </Bounded>
  </header>
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