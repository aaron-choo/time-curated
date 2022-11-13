<template>
  <div class="related-products">
    <h2 class="mb-4 font-medium font-sans uppercase">
      {{ settings.data.you_may_like_text }}
    </h2>

    <div class="slider-container prevent-select">
      <div class="swiper product-image mb-2" ref="relatedProductLinks">
        <div class="swiper-wrapper">
          <template v-for="(product, index) in relatedProducts">
            <div class="swiper-slide" v-if="index <= 3">
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
  beforeMount() {
    this.shuffle(this.relatedProducts);
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
    shuffle(array) {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      for (var i = array.length - 1; i >= 0; --i) {
        if (array[i].stock == 0 || array[i].uid === this.currentProduct.uid) {
          array.splice(i, 1);
        }
      }
      // array.splice(
      //   array.findIndex(({ uid }) => uid == this.currentProduct.uid),
      //   1
      // );
    },
  },
};
</script>