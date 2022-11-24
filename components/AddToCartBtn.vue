<template>
  <button
    id="add-to-cart"
    class="
      snipcart-add-item
      btn
      w-full
      text-sm
      uppercase
      font-sans
      hover:opacity-80
      font-medium
    "
    :class="{
      'sold-out inactive': variant && variant.stock < 1,
      'choose-variant inactive': variant == null,
      'loading inactive': loading,
    }"
    :data-item-id="product.uid"
    :data-item-price="product.data.price"
    :data-item-categories="product.data.product_category.uid"
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
    <span v-if="loading">Loading</span>
    <span v-else>
      <span class="select-variant-text" v-if="variant == null">{{
        settings.data.select_option_text
      }}</span>
      <span class="sold-out-text" v-if="variant && variant.stock == 0">{{
        settings.data.sold_out_text
      }}</span>
      <span class="add-to-cart-text" v-if="variant && variant.stock >= 1">{{
        settings.data.add_to_cart_text
      }}</span>
    </span>
    <!-- <br />
    <pre>{{ getLugWidthVariants() }}</pre> -->
  </button>
</template>
<script>
export default {
  props: ["product", "settings", "variantImage", "variant", "loading"],
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

<style>
#add-to-cart {
  background: var(--color);
  color: var(--bg);
}
</style>