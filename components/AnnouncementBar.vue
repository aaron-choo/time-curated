<template>
  <div v-if="$config.development" class="announcement-bar">
    <Bounded
      as="p"
      yPadding="xxs"
      class="text-xs uppercase sans-serif text-center"
    >
      Get 10% off your first order when you
      <a
        href="https://github.com/prismicio-community/nuxt-starter-prismic-multi-language/tree/master/docs"
        target="_blank"
        rel="noreferrer"
        :style="{
          textDecoration: 'underline',
        }"
        >Subscribe</a
      >
    </Bounded>
  </div>
</template>
<style scoped>
.announcement-bar {
  background-color: var(--bg-accent);
  color: var(--color-accent);
}
</style>