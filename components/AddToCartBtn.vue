<template>
  <button
    :class="{
      button: true,
    }"
    @click="addToCart"
  >
    <span class="text">Add to Bag</span>
    <span></span>
  </button>
</template>
<script>
export default {
  props: {
    product: { type: Object, required: true, defaultValue: {} },
  },
  methods: {
    async addToCart() {
      try {
        const res = await this.$commerce.cart.add(this.product.id);
        this.$store.commit("setCart", res);
      } catch (error) {
        // eslint-disable-next-line
        console.log(error);
      }
    },
  },
};
</script>