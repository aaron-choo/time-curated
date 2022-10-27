<template>
  <div>
    <div class="slider-container prevent-select">
      <div class="swiper product-image mb-2" ref="productImages">
        <div class="swiper-wrapper">
          <div
            v-for="(item, index) in product.images"
            :key="index"
            class="swiper-slide"
          >
            <nuxt-img
              v-if="index === 0 && variant && variant.image.url"
              format="webp"
              :src="variant.image.url"
              sizes="sm:100vw md:50vw lg:50vw xl:50vw 2xl:50vw"
              :width="variant.image.dimensions.width"
              :height="variant.image.dimensions.height"
              class="product-image variant w-full rounded-[3px]"
              loading="lazy"
            />
            <nuxt-img
              v-else
              format="webp"
              :src="item.image.url"
              sizes="sm:100vw md:50vw lg:50vw xl:50vw 2xl:50vw"
              :width="item.image.dimensions.width"
              :height="item.image.dimensions.height"
              class="product-image w-full rounded-[3px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div class="swiper product-image-thumbnail mx-4" ref="productThumbnails">
        <ul class="swiper-wrapper">
          <li
            v-for="(item, index) in product.images"
            :key="index"
            class="swiper-slide"
          >
            <nuxt-img
              v-if="index === 0 && variant && variant.image.url"
              format="webp"
              :src="variant.image.url"
              sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
              :width="variant.image.dimensions.width"
              :height="variant.image.dimensions.height"
              class="product-image-thumbnail variant w-full rounded-[3px]"
              loading="lazy"
            />
            <nuxt-img
              v-else
              format="webp"
              :src="item.image.url"
              sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
              :width="item.image.dimensions.width"
              :height="item.image.dimensions.height"
              class="
                product-image-thumbnail
                w-full
                h-auto
                cursor-pointer
                rounded-[3px]
              "
              loading="lazy"
            />
          </li>
        </ul>
        <div class="swiper-scrollbar"></div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper/swiper-bundle.min";
import "swiper/swiper-bundle.min.css";
export default {
  props: ["product", "variant"],
  async mounted() {
    await this.$nextTick();
    let thumb = new Swiper(this.$refs.productThumbnails, {
      watchSlidesProgress: true,
      mousewheel: {
        releaseOnEdges: true,
      },
      slidesPerView: 4.5,
      slidesPerGroup: 3,
      spaceBetween: 8,
      breakpoints: {
        // when window width is >= 320px
        768: {
          slidesPerView: 5.5,
        },
        // when window width is >= 480px
        1024: {
          slidesPerView: 6.5,
        },
        // when window width is >= 640px
        1280: {
          slidesPerView: 7.5,
        },
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
        hide: true,
      },
    });
    new Swiper(this.$refs.productImages, {
      loop: true,
      spaceBetween: 8,
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
      thumbs: {
        swiper: thumb,
        autoScrollOffset: 1,
      },
    });
  },
};
</script>
<style scoped>
/* .swiper.product-image-thumbnail .swiper-slide {
  border: 1px solid var(--color);
  border-radius: 3px;
  transition: border 0.3s ease;
}
.swiper.product-image-thumbnail .swiper-slide.swiper-slide-thumb-active {
  border: 1px solid var(--color-fade-50);
} */
</style>