<template>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <div v-for="product in products" :key="product.uid">
      <nuxt-link :to="product.url">
        <product-view :product="product"></product-view
      ></nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["products"],
  methods: {},
};
</script>