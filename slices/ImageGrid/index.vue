<template>
  <Bounded as="section" class="image-grid">
    <div :class="'grid gap-6 md:grid-cols-' + slice.items.length">
      <div v-for="item in slice.items" class="flex flex-col gap-2">
        <figure>
          <nuxt-img
            v-if="slice.items.length === 1"
            format="webp"
            :src="item.image.url"
            sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
            :width="item.image.width"
            :height="item.image.height"
            class="product-thumbnail w-full rounded-[3px]"
            loading="lazy"
            placeholder
          />
          <nuxt-img
            v-if="slice.items.length === 2"
            format="webp"
            :src="item.image.url"
            sizes="sm:100vw md:50vw lg:50vw xl:50vw 2xl:50vw"
            :width="item.image.width"
            :height="item.image.height"
            class="product-thumbnail w-full rounded-[3px]"
            loading="lazy"
            placeholder
          />
        </figure>
        <figcaption class="font-sans font-medium text-xs">
          <PrismicRichText :field="item.caption" />
        </figcaption>
      </div>
    </div>
  </Bounded>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "ImageGrid",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
};
</script>

<style scoped>
figcaption {
  color: var(--border-accent);
}
</style>
