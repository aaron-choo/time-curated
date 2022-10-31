<template>
  <Bounded as="section" yPadding="sm">
    <div class="grid gap-4" :class="'md:grid-cols-' + slice.items.length">
      <div
        v-for="(item, index) in slice.items"
        :key="index"
        class="banner-item relative"
      >
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
            banner-overlay
            absolute
            top-0
            left-0
            right-0
            bottom-0
            p-4
            rounded-[3px]
            flex
            items-end
          "
          :style="
            'color:' +
            item.text_color +
            ';background-image:linear-gradient(' +
            item.overlay_color +
            '00,' +
            item.overlay_color +
            '80);'
          "
        >
          <div class="banner-meta-container">
            <div class="banner-meta grid gap-3">
              <PrismicRichText
                :field="item.title"
                class="banner-title text-2xl md:text-3xl leading-none"
              />
              <nuxt-link
                v-if="item.link.url && item.button_text"
                :to="item.link.url"
              >
                <button
                  class="
                    btn
                    w-fit
                    text-sm
                    uppercase
                    font-sans
                    hover:opacity-80
                    font-medium
                    border
                  "
                >
                  <span>{{ item.button_text }}</span>
                </button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
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
