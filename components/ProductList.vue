<template>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <div v-for="product in products" :key="product.id">
      <!-- <n-link
        :to="{
          name: 'products-permalink',
          params: { permalink: product.permalink },
        }"
      > -->
      <nuxt-link :to="LinkGetter(product)">
        <product-view :product="product"></product-view
      ></nuxt-link>
    </div>
  </div>
</template>

<script>
import LinkResolver from "~/plugins/link-resolver.js";
export default {
  props: ["products"],
  methods: {
    LinkGetter(product) {
      return LinkResolver(product);
    },
  },
};
</script>