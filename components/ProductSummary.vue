<template>
  <div class="product-summary mb-4">
    <Heading as="h1" size="2xl" class="product-title my-0">
      {{ product.title }}
    </Heading>
    <Heading as="p" size="lg" class="product-price my-2">
      <template v-if="product.sale_price">
        <span v-if="variant" class="flex gap-2 items-center">
          <span class="original-price opacity-50 line-through decoration-1"
            >SGD {{ (product.price + variant.price).toFixed(2) }}</span
          >
          <span class="sale-price"
            >SGD {{ (product.sale_price + variant.price).toFixed(2) }}</span
          >
          <span
            class="
              sale-percentage
              h-fit
              font-sans
              text-xs
              leading-none
              py-1
              px-2
              rounded-[3px]
            "
          >
            {{
              Math.round(
                (1 -
                  (product.sale_price + variant.price) /
                    (product.price + variant.price)) *
                  100
              )
            }}% Off</span
          >
        </span>
        <span v-else class="flex gap-2 items-center">
          <span class="original-price opacity-50 line-through decoration-1"
            >SGD {{ product.price.toFixed(2) }}</span
          >
          <span class="sale-price"
            >SGD {{ product.sale_price.toFixed(2) }}</span
          >
          <span
            class="
              sale-percentage
              h-fit
              font-sans
              text-xs
              leading-none
              py-1
              px-2
              rounded-[3px]
            "
          >
            {{ Math.round((1 - product.sale_price / product.price) * 100) }}%
            Off</span
          >
        </span>
      </template>
      <template v-else>
        <span v-if="variant">
          SGD {{ (product.price + variant.price).toFixed(2) }}
        </span>
        <span v-else> SGD {{ product.price.toFixed(2) }} </span>
      </template>
    </Heading>
  </div>
</template>
<script>
export default {
  props: ["product", "variant"],
};
</script>
<style scoped>
.sale-percentage {
  background: var(--border-accent);
  color: var(--color-accent);
}
</style>