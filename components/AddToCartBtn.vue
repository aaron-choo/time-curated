<template>
  <button
    id="add-to-cart"
    class="
      snipcart-add-item
      btn
      w-full
      my-4
      uppercase
      sans-serif
      hover:opacity-80
      font-medium
    "
    :data-item-id="product.uid"
    :data-item-price="product.data.price"
    :data-item-description="product.data.description.text"
    :data-item-image="
      variantImage ? variantImage.url : product.data.images[0].image.url
    "
    :data-item-name="product.data.title"
    :data-item-custom1-name="
      product.data.lug_width.length > 0 ? 'Lug Width' : null
    "
    :data-item-custom1-options="
      product.data.lug_width ? getLugWidthVariants() : null
    "
  >
    <!-- <span
      v-if="product.variant_groups.length > 0"
      v-for="variantGroup in product.variant_groups"
      :key="variantGroup.id"
      class="select-variant-text"
    >
      {{ $t("pleaseSelect") }}
      <span v-if="variantGroup.name === 'Lug Width'">{{ $t("lugWidth") }}</span>
      <span v-else>{{ variantGroup.name }}</span>
    </span> -->
    <span class="sold-out-text">{{ settings.data.sold_out_text }}</span>
    <span class="add-to-cart-text">{{ settings.data.add_to_cart_text }}</span>
    <!-- <br />
    <pre>{{ getLugWidthVariants() }}</pre> -->
  </button>
</template>
<script>
export default {
  props: ["product", "settings", "variantImage"],
  methods: {
    getLugWidthVariants() {
      const variants = this.product.data.lug_width;
      if (variants.length > 0) {
        let output = "";
        for (let i = 0; i < variants.length; i++) {
          let price = 0;
          if (variants[i].price) {
            price = variants[i].price;
          }
          output += variants[i].name + "[+" + price + "]" + "|";
        }
        return output.slice(0, -1);
      }
    },
  },
};
</script>

<style scoped>
#add-to-cart {
  background: var(--color);
  color: var(--bg);
}

#add-to-cart.inactive.has-variant .add-to-cart-text,
#add-to-cart:not(.has-variant) .select-variant-text,
#add-to-cart.has-variant:not(.inactive) .select-variant-text,
#add-to-cart:not(.sold-out) .sold-out-text,
#add-to-cart.sold-out .add-to-cart-text,
#add-to-cart.sold-out .select-variant-text {
  display: none;
}
</style>