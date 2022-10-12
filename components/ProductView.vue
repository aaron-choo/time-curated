<template>
  <div class="text-center">
    <img
      v-if="product.image.url"
      :src="product.image.url"
      :width="product.image.image_dimensions.width"
      :height="product.image.image_dimensions.height"
      class="w-full"
    />
    <p>{{ product.name }}</p>
    <p>{{ product.price.formatted_with_code }}</p>
    <!-- <pre>{{ product }}</pre> -->
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>