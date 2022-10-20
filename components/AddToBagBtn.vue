<template>
  <button
    id="add-to-bag"
    class="w-full uppercase sans-serif hover:opacity-80 font-medium inactive"
    :class="{
      btn: true,
    }"
    @click="addToBag"
  >
    <span
      v-if="product.variant_groups.length > 0"
      v-for="variantGroup in product.variant_groups"
      :key="variantGroup.id"
      class="select-variant-text"
    >
      {{ $t("pleaseSelect") }}
      <span v-if="variantGroup.name === 'Lug Width'">{{ $t("lugWidth") }}</span>
      <span v-else>{{ variantGroup.name }}</span>
    </span>
    <span class="sold-out-text">{{ $t("soldOut") }}</span>
    <span class="add-to-bag-text">{{ $t("addToBag") }}</span>
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

#add-to-bag.inactive.has-variant .add-to-bag-text,
#add-to-bag:not(.has-variant) .select-variant-text,
#add-to-bag.has-variant:not(.inactive) .select-variant-text,
#add-to-bag:not(.sold-out) .sold-out-text,
#add-to-bag.sold-out .add-to-bag-text,
#add-to-bag.sold-out .select-variant-text {
  display: none;
}
</style>