<template>
  <button
    :class="{
      button: true,
    }"
    @click="addToCart"
  >
    <span class="w-full">Add to Bag</span>
  </button>
</template>
<script>
export default {
  props: {
    product: { type: Object, required: true, defaultValue: {} },
    variant: { type: Object, required: true, defaultValue: {} },
  },
  methods: {
    async addToCart() {
      try {
        console.log(this.variant);
        const res = await this.$commerce.cart.add(
          this.product.id,
          1,
          this.variant
        );
        console.log(res);
        this.$store.commit("setCart", res);
      } catch (error) {
        // eslint-disable-next-line
        console.log(error);
      }
    },
  },
};
</script>