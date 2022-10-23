<template>
  <button
    id="add-to-bag"
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
    :data-item-image="product.data.images[0].image.url"
    :data-item-name="product.data.title"
    :data-item-custom1-name="product.data.lug_width ? 'Lug Width' : null"
    :data-item-custom1-options="getLugWidthVariants()"
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
    <span class="add-to-bag-text">{{ settings.data.add_to_bag_text }}</span>
    <!-- <br />
    <pre>{{ getLugWidthVariants() }}</pre> -->
  </button>
</template>
<script>
export default {
  props: {
    product: { type: Object, required: true, defaultValue: {} },
    settings: { type: Object, required: true, defaultValue: {} },
  },
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
        console.log(output);
        return "Lug Width|" + output;
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