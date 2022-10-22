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
              <div class="image swiper-pagination md:hidden"></div>
            </div>
            <div
              class="swiper product-image-thumbnail hidden md:block"
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
              <span> ${{ product.price }} SGD </span>
            </heading>
          </div>
          <variant-options
            v-if="product.lug_width.length > 0"
            class="variant-buttons my-4"
            :key="index"
            :product="product"
            :variation="product.lug_width"
            :settings="settings"
            @selectOption="selectOption($event)"
          />
          <prismic-rich-text
            :field="settings.data.free_shipping_text"
            class="
              free-shipping-text
              opacity-70
              sans-serif
              text-xs
              tracking-wide
            "
          />
          <AddToBagBtn :product="page" :settings="settings" />
          <!-- <AddToBagBtn
            :class="{
              'inactive has-variant': hasVariant,
              'inactive sold-out': soldOut,
            }"
            :product="page"
            :variant="variantOption"
          /> -->
          <div class="product-details grid grid-cols-1 gap-4">
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
            <!-- <div>
              <div>
                <heading
                  as="h2"
                  size="xs"
                  class="tracking-wider sans-serif uppercase font-semibold"
                  >SKU</heading
                >
                <p v-if="variantSku.length > 0">
                  {{ variantSku }}
                </p>
                <p v-else>
                  {{ product.sku }}
                </p>
              </div>
            </div> -->
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
    await store.dispatch("prismic/load", { lang, page });
    return {
      page: page,
      product: page.data,
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
      //   title: `${this.page.name} - ${this.$prismic.asText(
      //     this.$store.state.prismic.settings.data.siteTitle
      //   )}`,
    };
  },
  computed: {
    settings() {
      return this.$store.state.prismic.settings;
    },
  },
  beforeMount() {
    // this.updateProduct();
  },
  async mounted() {
    await this.$nextTick();
    let thumb = new Swiper(this.$refs.productThumbnails, {
      watchSlidesProgress: true,
      mousewheel: {
        releaseOnEdges: true,
      },
      slidesPerView: 5,
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
      },
      pagination: {
        el: ".image.swiper-pagination",
        type: "bullets",
        clickable: true,
      },
    });
  },
  methods: {
    // async updateProduct(product) {
    //   try {
    //     const url = new URL(
    //       "https://api.chec.io/v1/products/" + this.product.id + "/variants"
    //     );
    //     const headers = {
    //       "X-Authorization": process.env.NUXT_ENV_CHEC_PUBLIC_API_KEY,
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     };
    //     fetch(url, {
    //       method: "GET",
    //       headers: headers,
    //     })
    //       .then((response) => response.json())
    //       .then((data) => {
    //         if (this.product.variant_groups.length > 0) {
    //           this.hasVariant = true;
    //           // console.log("data", data.data);
    //           let sourceInfo = data.data;
    //           let siteInfo = this.product.variant_groups[0].options;
    //           let totalInventory = 0;
    //           for (let i = 0; i < sourceInfo.length; i++) {
    //             siteInfo[i].price = sourceInfo[i].price;
    //             siteInfo[i].inventory = sourceInfo[i].inventory;
    //             siteInfo[i].sku = sourceInfo[i].sku;
    //             totalInventory += sourceInfo[i].inventory;
    //             console.log("inventory", totalInventory);
    //           }
    //           document
    //             .querySelectorAll(".variant-button.available")
    //             .forEach((el) => {
    //               el.classList.remove("inactive");
    //             });
    //           console.log(this.hasVariant, totalInventory);
    //           if (totalInventory < 1) {
    //             console.log("sold out");
    //             console.log(this.soldOut);
    //             this.soldOut = true;
    //             console.log(this.soldOut);
    //           }
    //         } else if (this.product.inventory.available < 1) {
    //           console.log("sold", this.product.inventory.available);
    //           this.soldOut = true;
    //         }
    //         console.log(this.soldOut);
    //       });
    //   } catch (error) {
    //     // eslint-disable-next-line
    //     console.log(error);
    //   }
    // },
    // selectOption(option) {
    //   // console.log("option", option);
    //   this.variantOption[String(option[0])] = option[1];
    //   this.variantSku = option[2];
    //   // console.log("variantOption", this.variantOption);
    //   // console.log("variantSku", this.variantSku);
    //   // console.log(
    //   //   "product variant pair",
    //   //   this.product.id,
    //   //   Object.values(this.variantOption)[0]
    //   // );
    //   this.variantPrice = this.product.variant_groups[0].options.filter(
    //     ({ sku }) => sku.includes(this.variantSku)
    //   )[0].price.formatted_with_code;
    //   // console.log(this.variantPrice);
    // },
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
.image.swiper-pagination {
  position: relative !important;
  bottom: -5px !important;
}
.swiper-pagination-bullet {
  background: var(--color) !important;
  width: 6px !important;
  height: 6px !important;
  margin: 0 4px !important;
  transition: all 0.3s ease !important;
}
</style>