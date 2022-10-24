<template>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <div v-for="product in products" :key="product.id">
      <!-- <n-link
        :to="{
          name: 'products-permalink',
          params: { permalink: product.permalink },
        }"
      > -->
      <nuxt-link
        :to="
          localePath('/shop/') + '/' + product.data.category + '/' + product.uid
        "
      >
        <product-view :product="product"></product-view
      ></nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["products"],
};
</script>