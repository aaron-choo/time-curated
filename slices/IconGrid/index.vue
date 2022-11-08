<template>
  <Bounded
    as="section"
    class="bg-cover bg-blend-overlay bg-center"
    :style="
      'background-color:' +
      slice.primary.background_color +
      ';background-image:url(' +
      slice.primary.background_image.url +
      ');color:' +
      slice.primary.text_color
    "
  >
    <PrismicRichText
      v-if="slice.primary.title.length > 0"
      :field="slice.primary.title"
      class="
        font-sans font-semibold
        uppercase
        text-sm text-center
        leading-none
        mb-2
      "
    />
    <PrismicRichText
      v-if="slice.primary.subtitle"
      :field="slice.primary.subtitle"
      class="text-center leading-none mb-6"
    />

    <section
      v-if="slice.variation === 'iconGridSlider'"
      ref="iconGridSlider"
      class="swiper icon-grid-slider"
    >
      <div class="swiper-wrapper">
        <div
          v-for="(item, index) in slice.items"
          :key="index"
          class="swiper-slide"
        >
          <div
            class="w-full mx-auto"
            :style="
              'height:' +
              slice.primary.icon_height +
              'px; width:' +
              slice.primary.icon_width +
              'px ;background-color:currentColor;-webkit-mask:url(' +
              item.image.url +
              ')no-repeat center;mask:url(' +
              item.image.url +
              ')no-repeat center;'
            "
          ></div>
          <div class="flex flex-col text-center text-xs leading-4 font-sans">
            <PrismicRichText
              :field="item.title"
              class="font-semibold uppercase"
            />
            <PrismicRichText :field="item.description" class="opacity-50" />
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </section>
    <section
      v-else
      class="icon-grid grid grid-cols-2 gap-6 items-start"
      :class="'md:grid-cols-' + slice.items.length"
    >
      <div
        v-for="item in slice.items"
        class="icon-container flex gap-y-2 gap-x-4 justify-center items-center"
      >
        <div
          class="w-full"
          :style="
            'height:' +
            slice.primary.icon_height +
            'px; width:' +
            slice.primary.icon_width +
            'px ;background-color:currentColor;-webkit-mask:url(' +
            item.image.url +
            ')no-repeat center;mask:url(' +
            item.image.url +
            ')no-repeat center;'
          "
        ></div>
        <div
          class="
            flex flex-col
            text-center text-xs
            leading-4
            font-sans
            lg:text-left
          "
        >
          <PrismicRichText
            :field="item.title"
            class="font-semibold uppercase"
          />
          <PrismicRichText :field="item.description" class="opacity-50" />
        </div>
      </div>
    </section>
  </Bounded>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";
import Swiper from "swiper/swiper-bundle.min";
import "swiper/swiper-bundle.min.css";
export default {
  name: "IconGrid",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
  async mounted() {
    await this.$nextTick();
    new Swiper(this.$refs.iconGridSlider, {
      slidesPerView: 1,
      spaceBetween: 10,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: this.slice.primary.slides_per_view
            ? this.slice.primary.slides_per_view - 1
            : 3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: this.slice.primary.slides_per_view
            ? this.slice.primary.slides_per_view
            : 4,
          spaceBetween: 10,
        },
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      mousewheel: {
        releaseOnEdges: true,
        forceToAxis: true,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
    });
  },
};
</script>

<style scoped>
@media (max-width: 1023px) {
  .icon-container {
    flex-direction: column;
  }
}
@media (min-width: 768px) {
  .md\:grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
</style>

<style>
.icon-grid-slider svg {
  height: 100%;
}
.swiper.icon-grid-slider .swiper-pagination {
  position: relative;
  bottom: 0;
  margin-top: 1rem;
}
</style>