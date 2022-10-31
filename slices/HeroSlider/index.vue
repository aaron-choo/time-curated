<template>
  <section class="section mb-6">
    <div ref="heroSlider" class="swiper hero-slider">
      <div class="swiper-wrapper">
        <div
          v-for="(item, index) in slice.items"
          :key="index"
          class="swiper-slide"
        >
          <nuxt-img
            format="webp"
            :src="item.image.url"
            sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
            :width="item.image.dimensions.width"
            :height="item.image.dimensions.height"
            class="
              slide-image
              w-full
              min-h-[400px]
              h-[calc(100vh-216px)]
              object-cover
              relative
            "
            loading="lazy"
          />

          <Bounded
            as="div"
            class="
              slide-overlay
              absolute
              top-0
              left-0
              right-0
              bottom-0
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
            <div class="slide-meta-container grid grid-cols-12">
              <div class="slide-meta col-span-8 md:col-span-5">
                <PrismicRichText
                  :field="item.title"
                  class="slide-title text-3xl md:text-4xl mb-2"
                />
                <PrismicRichText
                  :field="item.subtitle"
                  class="font-sans text-sm md:text-base"
                />
              </div>
            </div>
            <div class="slide-cta flex justify-end">
              <nuxt-link :to="item.link.url">
                <button
                  class="
                    btn
                    w-fit
                    text-sm
                    uppercase
                    sans-serif
                    hover:opacity-80
                    font-medium
                    border
                  "
                >
                  <span>{{ item.button_text }}</span>
                </button>
              </nuxt-link>
            </div>
          </Bounded>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";
import Swiper from "swiper/swiper-bundle.min";
import "swiper/swiper-bundle.min.css";

export default {
  name: "HeroSlider",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
  async mounted() {
    await this.$nextTick();
    new Swiper(this.$refs.heroSlider, {
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      loop: true,
      autoplay: {
        delay: 5000,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      mousewheel: {
        releaseOnEdges: true,
        forceToAxis: true,
      },
      navigation: {
        nextEl: ".image.swiper-button-next",
        prevEl: ".image.swiper-button-prev",
      },
    });
  },
};
</script>

<style scoped>
</style>
