<template>
  <div class="product-view">
    <nuxt-img
      v-if="product.data.images.length > 0"
      format="webp"
      :src="product.data.images[0].image.url"
      sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
      :width="product.data.images[0].image.width"
      :height="product.data.images[0].image.height"
      class="product-thumbnail w-full rounded-[3px]"
      loading="lazy"
    />
    <div class="product-meta text-center mt-4 flex flex-col gap-1">
      <h3 class="product-title leading-tight sm:text-base">
        {{ product.data.title }}
      </h3>
      <p class="product-price">SGD {{ product.data.price.toFixed(2) }}</p>
    </div>

    <!-- <pre>{{ product }}</pre> -->
  </div>
</template>

<script>
export default {
  props: {
    product: { type: Object, defaultValue: {}, required: true },
  },
};
</script>