<template>
  <Bounded as="section" yPadding="none">
    <div class="grid gap-4" :class="'md:grid-cols-' + slice.items.length">
      <div v-for="item in slice.items" :key="item.title" class="link">
        <PrismicLink :field="item.link" class="relative">
          <nuxt-img
            format="webp"
            :src="item.image.url"
            sizes="sm:100vw md:50vw lg:50vw xl:50vw 2xl:50vw"
            :width="item.image.dimensions.width"
            :height="item.image.dimensions.height"
            class="banner-image w-full rounded-[3px] relative"
            loading="lazy"
          />
          <div
            class="
              meta
              absolute
              top-0
              left-0
              right-0
              bottom-0
              p-4
              rounded-[3px]
            "
          >
            <p class="font-sans">{{ item.title }}</p>
          </div>
        </PrismicLink>
      </div>
    </div>
    <!-- <PrismicRichText :field="slice.primary.title" class="title" />
    <PrismicRichText :field="slice.primary.description" /> -->
  </Bounded>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "Banner",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
};
</script>

<style scoped>
</style>
