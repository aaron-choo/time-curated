<template>
  <button
    id="add-to-bag"
    class="w-full uppercase sans-serif hover:opacity-80 font-medium"
    :class="{
      btn: true,
    }"
    @click="addToBag"
  >
    <span v-if="product.variant_groups.length > 0" class="select-variant-text"
      >Please select {{ product.variant_groups[0].name }}</span
    >
    <span class="sold-out-text">Sold Out</span>
    <span class="add-to-bag-text">Add to Bag</span>
  </button>
</template>
<script>
export default {
  props: {
    product: { type: Object, required: true, defaultValue: {} },
    variant: { type: Object, required: true, defaultValue: {} },
  },
  methods: {
    async addToBag() {
      try {
        // console.log(this.variant);
        const res = await this.$commerce.cart.add(
          this.product.id,
          1,
          this.variant
        );
        // console.log(res);
        this.$store.commit("setCart", res);
      } catch (error) {
        // eslint-disable-next-line
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
#add-to-bag {
  background: var(--color);
  color: var(--bg);
}

#add-to-bag.inactive .add-to-bag-text,
#add-to-bag:not(.inactive) .select-variant-text {
  display: none;
}

#add-to-bag:not(.sold-out) .sold-out-text,
#add-to-bag.sold-out .add-to-bag-text,
#add-to-bag.sold-out .select-variant-text {
  display: none;
}
</style>