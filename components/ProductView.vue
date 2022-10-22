<template>
  <div class="text-center">
    <nuxt-img
      v-if="product.data.images.length > 0"
      format="webp"
      :src="product.data.images[0].image.url"
      sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
      :width="product.data.images[0].image.width"
      :height="product.data.images[0].image.height"
      class="product-thumbnail w-full"
      loading="lazy"
    />
    <p>{{ product.data.title }}</p>
    <p>${{ product.data.price }} SGD</p>
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