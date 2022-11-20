<template>
  <div class="product-view relative">
    <nuxt-img
      v-if="product.data.images.length > 0"
      format="webp"
      :src="product.data.images[0].image.url"
      sizes="sm:50vw md:33vw lg:25vw xl:25vw 2xl:25vw"
      :width="product.data.images[0].image.width"
      :height="product.data.images[0].image.height"
      class="product-thumbnail w-full rounded-[3px]"
      loading="lazy"
      placeholder
    />
    <div class="product-meta text-center mt-4 flex flex-col gap-1">
      <h3 class="product-title leading-tight text-lg">
        {{ product.data.title }}
      </h3>
      <Heading as="p" size="md" class="product-price my-0">
        <span
          v-if="product.stock === 0"
          class="
            sold-out
            h-fit
            font-sans
            text-xs
            leading-none
            py-1
            px-2
            rounded-[3px]
            absolute
            top-2
            left-2
          "
        >
          {{ settings.data.sold_out_text }}</span
        >
        <template v-if="product.data.sale_price">
          <span class="flex flex-wrap gap-x-2 justify-center items-center">
            <span class="original-price opacity-50 line-through decoration-1"
              >SGD {{ product.data.price.toFixed(2) }}</span
            >
            <span class="sale-price"
              >SGD {{ product.data.sale_price.toFixed(2) }}</span
            >
          </span>
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
              absolute
              top-2
              left-2
            "
          >
            {{
              Math.round(
                (1 - product.data.sale_price / product.data.price) * 100
              )
            }}% Off</span
          >
        </template>
        <template v-else> SGD {{ product.data.price.toFixed(2) }} </template>
      </Heading>
    </div>

    <!-- <pre>{{ product }}</pre> -->
  </div>
</template>

<script>
export default {
  props: ["product", "settings"],
};
</script>
<style scoped>
.sale-percentage {
  background-color: var(--border-accent);
  color: var(--color-accent);
}
.sold-out {
  background-color: var(--color-error);
  color: var(--bg-error);
}
</style>