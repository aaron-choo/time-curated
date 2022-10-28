<template>
  <div class="collection-view">
    <!-- <nuxt-img
      v-if="watch.data.images.length > 0"
      format="webp"
      :src="watch.data.images[0].image.url"
      sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
      :width="watch.data.images[0].image.width"
      :height="watch.data.images[0].image.height"
      class="product-thumbnail w-full rounded-[3px]"
      loading="lazy"
    /> -->
    <WatchModule :watch="watch.data" />
    <div class="collection-watch-meta text-center mt-4 flex flex-col gap-1">
      <h3 class="collection-watch-title leading-tight sm:text-base">
        {{ watch.data.title }}
      </h3>
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