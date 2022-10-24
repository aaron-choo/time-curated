<template>
  <div>
    <Bounded as="section" :collapsible="false" yPadding="sm">
      <div class="md:grid md:grid-cols-12 md:gap-8">
        <div class="md:col-span-7 mb-8">
          <div class="slider-container prevent-select">
            <div class="swiper product-image mb-2" ref="productImages">
              <div class="swiper-wrapper">
                <div
                  v-for="(item, index) in product.images"
                  :key="index"
                  class="swiper-slide"
                >
                  <nuxt-img
                    format="webp"
                    :src="item.image.url"
                    sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
                    :width="item.image.dimensions.width"
                    :height="item.image.dimensions.height"
                    class="product-image w-full rounded-[3px]"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div
              class="swiper product-image-thumbnail mx-4"
              ref="productThumbnails"
            >
              <ul class="swiper-wrapper">
                <li
                  v-for="(item, index) in product.images"
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
        <div class="md:col-span-5">
          <div class="product-summary mb-4">
            <heading as="h1" size="2xl" class="product-title">{{
              product.title
            }}</heading>
            <heading as="p" size="lg" class="product-price">
              <span> SGD {{ product.price.toFixed(2) }} </span>
            </heading>
          </div>
          <variant-options
            v-if="product.lug_width.length > 0"
            id="lug-width-variants"
            class="variant-buttons mt-4"
            :product="product"
            :label="settings.data.lug_width_text"
            :variation="product.lug_width"
            :settings="settings"
            @selectOption="selectOption($event)"
          />
          <AddToCartBtn :product="page" :settings="settings" />
          <prismic-rich-text
            :field="settings.data.free_shipping_text"
            class="
              free-shipping-text
              opacity-50
              sans-serif
              text-xs
              tracking-wide
            "
          />
          <div class="product-details grid grid-cols-1 gap-4 my-4">
            <content-tabs :tabList="productDescription">
              <template v-slot:tabPanel-1>
                <prismic-rich-text
                  :field="product.description"
                  class="product-description-text"
                />
              </template>
              <template v-slot:tabPanel-2>
                <div class="flex flex-col">
                  <p v-if="product.length">
                    {{ settings.data.length_text }} : {{ product.length }}
                  </p>
                  <p v-if="product.thickness">
                    {{ settings.data.thickness_text }} : {{ product.thickness }}
                  </p>
                  <p v-if="product.clasp_width">
                    {{ settings.data.clasp_width_text }} :
                    {{ product.clasp_width }}
                  </p>
                </div>
              </template>
            </content-tabs>
            <div v-if="product.leather_disclaimer">
              <div>
                <heading
                  as="h2"
                  size="xs"
                  class="tracking-wider sans-serif uppercase font-semibold"
                  >{{ settings.data.note_text }}</heading
                >
                <prismic-rich-text
                  :field="settings.data.leather_disclaimer"
                  class="product-description-text"
                />
              </div>
            </div>
            <heading
              as="h2"
              size="xs"
              class="product-sku tracking-wider sans-serif uppercase opacity-50"
              v-if="product.sku"
            >
              {{ product.sku }}
            </heading>
          </div>
        </div>
      </div>
    </Bounded>
    <bounded as="section" yPadding="sm" :secondaryBackground="true">
      <content-tabs :tabList="shopInfo">
        <template v-slot:tabPanel-1>
          <prismic-rich-text :field="settings.data.shipping_information" />
        </template>
        <template v-slot:tabPanel-2>
          <prismic-rich-text :field="settings.data.return_policy" />
        </template>
      </content-tabs>
    </bounded>

    <SliceZone :slices="page.data.slices" :components="components" />

    <bounded as="section" yPadding="sm">
      <related-products
        :relatedProducts="relatedProducts"
        :currentProduct="page"
        :settings="settings"
      />
    </bounded>

    <SliceZone :slices="settings.data.slices1" :components="components" />
    <!-- <pre>{{ page }}</pre> -->
  </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.min";
import "swiper/swiper-bundle.min.css";
import { components } from "~/slices";
export default {
  async asyncData({ $prismic, store, i18n, params }) {
    const lang = i18n.locale;
    const page = await $prismic.api.getByUID("product", params.uid, {
      lang,
    });
    const relatedProducts = await $prismic.api.query(
      $prismic.predicates.at("document.type", "product"),
      {
        lang: lang,
        orderings: "[document.last_publication_date desc]",
        pageSize: 5,
        page: Math.floor(Math.random() * 1),
      }
    );
    await store.dispatch("prismic/load", { lang, page });
    return {
      page: page,
      product: page.data,
      relatedProducts: relatedProducts.results,
    };
  },
  data() {
    return {
      components,
      productDescription: [
        this.$store.state.prismic.settings.data.description_label,
        this.$store.state.prismic.settings.data.specifications_label,
      ],
      shopInfo: [
        this.$store.state.prismic.settings.data.shipping_information_label,
        this.$store.state.prismic.settings.data.return_policy_label,
      ],
    };
  },
  head() {
    return {
      title: `${this.product.title} - ${this.$prismic.asText(
        this.$store.state.prismic.settings.data.siteTitle
      )}`,
    };
  },
  computed: {
    settings() {
      return this.$store.state.prismic.settings;
    },
  },
  async mounted() {
    await this.$nextTick();
    let thumb = new Swiper(this.$refs.productThumbnails, {
      watchSlidesProgress: true,
      mousewheel: {
        releaseOnEdges: true,
      },
      slidesPerView: 5.5,
      slidesPerGroup: 3,
      spaceBetween: 8,
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
  methods: {
    selectOption(variant) {
      console.log(variant[0]);
      document
        .querySelector("#add-to-cart")
        .setAttribute("data-item-custom1-value", variant[0]);
    },
  },
};
</script>
<style>
.product-description-text > p:not(:last-child) {
  margin-bottom: 0.5rem;
}

.swiper-button-next:after,
.swiper-rtl .swiper-button-prev:after,
.swiper-button-prev:after,
.swiper-rtl .swiper-button-next:after {
  content: none !important;
}
/* .swiper.product-image-thumbnail .swiper-slide {
  transition: opacity 0.3s ease;
}
.swiper.product-image-thumbnail .swiper-slide:not(.swiper-slide-thumb-active) {
  opacity: 0.5;
} */
.swiper.product-image-thumbnail .swiper-slide {
  outline: 1px solid var(--color-fade-10);
  outline-offset: -1px;
  transition: outline 0.3s ease;
  border-radius: 3px;
}
.swiper.product-image-thumbnail .swiper-slide.swiper-slide-thumb-active {
  outline: 1px solid var(--color-fade-50);
}
</style>
<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  opacity: 1;
}
</style>