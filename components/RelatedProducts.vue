<template>
  <div class="related-products">
    <h2 class="mb-4 font-medium sans-serif uppercase">
      {{ settings.data.you_may_like_text }}
    </h2>

    <div class="slider-container prevent-select">
      <div class="swiper product-image mb-2" ref="relatedProductLinks">
        <div class="swiper-wrapper">
          <template v-for="product in relatedProducts">
            <div class="swiper-slide" v-if="product.uid != currentProduct.uid">
              <nuxt-link :to="LinkGetter(product)">
                <product-view :product="product" />
              </nuxt-link>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LinkResolver from "~/plugins/link-resolver.js";
import Swiper from "swiper/swiper-bundle.min";
import "swiper/swiper-bundle.min.css";
export default {
  props: {
    settings: { type: Object, required: true, defaultValue: {} },
    relatedProducts: { type: Array, required: true, defaultValue: {} },
    currentProduct: { type: Object, required: true, defaultValue: {} },
  },
  async mounted() {
    await this.$nextTick();
    new Swiper(this.$refs.relatedProductLinks, {
      slidesPerView: 2.5,
      spaceBetween: 16,
      breakpoints: {
        768: {
          slidesPerView: 3.5,
        },
        1024: {
          slidesPerView: 4,
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
    });
  },
  methods: {
    LinkGetter(product) {
      return LinkResolver(product);
    },
  },
};
</script>