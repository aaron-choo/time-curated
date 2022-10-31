<template>
  <div>
    <Bounded
      as="p"
      yPadding="xxs"
      class="announcement-bar text-xs uppercase font-sans text-center"
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