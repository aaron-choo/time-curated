<template>
  <header>
    <Bounded as="div" y-padding="sm" class="logo-container">
      <div
        class="
          flex flex-wrap
          w-full
          items-center
          justify-center
          gap-x-6 gap-y-3
          leading-none
        "
      >
        <n-link class="site-logo relative" :to="localePath('/')">
          <Logo
            class="logo transition-opacity"
            :settings="settings"
            height="50"
          />
          <Logomark
            class="
              logomark
              absolute
              opacity-0
              -top-4
              -left-4
              -right-4
              -bottom-4
              transition-opacity
            "
            height="82"
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
<style scoped>
.site-logo:hover .logo {
  opacity: 0;
}
.site-logo:hover .logomark {
  opacity: 1;
}
</style>