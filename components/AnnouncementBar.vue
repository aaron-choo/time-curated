<template>
  <div v-if="$config.development" class="announcement-bar">
    <Bounded
      as="p"
      yPadding="xxs"
      class="text-xs uppercase sans-serif text-center"
    >
      {{ $prismic.asText(settings.data.announcement) }}
    </Bounded>
  </div>
</template>
<script>
export default { props: ["settings"] };
</script>
<style scoped>
.announcement-bar {
  background-color: var(--bg-accent);
  color: var(--color-accent);
}
</style>