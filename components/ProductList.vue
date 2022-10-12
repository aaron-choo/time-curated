<template>
  <div class="grid grid-cols-3 gap-4">
    <div v-for="product in products" :key="product.permalink">
      <!-- <n-link
        :to="{
          name: 'products-permalink',
          params: { permalink: product.permalink },
        }"
      > -->
      <n-link
        :to="'/shop/' + product.categories[0].slug + '/' + product.permalink"
      >
        <product-view :product="product"></product-view
      ></n-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["products"],
};
</script>