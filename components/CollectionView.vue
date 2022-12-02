<template>
  <div class="collection-view">
    <WatchModule :watch="watch.data" class="overflow-x-hidden" />
    <div class="collection-watch-meta text-center mt-4 flex flex-col gap-1">
      <h3 class="collection-watch-title leading-tight text-lg">
        {{ watch.data.title }}
      </h3>
      <p class="collection-watch-year opacity-70">
        {{ $prismic.asText(watch.data.year) }}
      </p>
    </div>

    <!-- <pre>{{ watch }}</pre> -->
  </div>
</template>

<script>
export default {
  props: {
    watch: { type: Object, defaultValue: {}, required: true },
  },
};
</script>
<style scoped>
.hide-meta .collection-watch-meta {
  display: none;
}
</style>