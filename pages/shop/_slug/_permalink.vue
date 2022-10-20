<template>
  <div>
    <Bounded as="section" :collapsible="false" yPadding="sm">
      <div class="md:grid md:grid-cols-12 md:gap-8">
        <div class="md:col-span-7 mb-8">
          <div class="slider-container prevent-select">
            <div class="swiper product-image mb-2" ref="productImages">
              <div class="swiper-wrapper">
                <div
                  v-for="asset in assets"
                  :key="asset.id"
                  class="swiper-slide"
                >
                  <img
                    v-if="asset.url"
                    :src="asset.url"
                    :width="asset.image_dimensions.width"
                    :height="asset.image_dimensions.height"
                    class="product-image w-full rounded-[3px]"
                  />
                </div>
              </div>
              <div class="image swiper-pagination md:hidden"></div>
              <!-- <div class="image swiper-button-prev">
                <svg
                  class="icon icon__angle-left h-8 w-8"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.703 7.41L10.123 12l4.58 4.59-.703.703L8.707 12 14 6.707l.703.703z"
                    fill="#000"
                  ></path>
                </svg>
              </div>
              <div class="image swiper-button-next">
                <svg
                  class="icon icon__angle-right h-8 w-8"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.297 16.59l4.58-4.59-4.58-4.59.703-.703L15.293 12 10 17.293l-.703-.703z"
                    fill="#000"
                  ></path>
                </svg>
              </div> -->
            </div>
            <div
              class="swiper product-image-thumbnail hidden md:block"
              ref="productThumbnails"
            >
              <ul class="swiper-wrapper">
                <li
                  v-for="asset in assets"
                  :key="asset.id"
                  class="swiper-slide"
                >
                  <img
                    v-if="asset.url"
                    :src="asset.url"
                    :width="asset.image_dimensions.width"
                    :height="asset.image_dimensions.height"
                    class="
                      product-image-thumbnail
                      w-full
                      h-auto
                      cursor-pointer
                      rounded-[3px]
                    "
                  />
                </li>
              </ul>
              <!-- <div class="thumbnail swiper-button-prev">
                <svg
                  class="icon icon__angle-left h-8 w-8"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.703 7.41L10.123 12l4.58 4.59-.703.703L8.707 12 14 6.707l.703.703z"
                    fill="#000"
                  ></path>
                </svg>
              </div>
              <div class="thumbnail swiper-button-next">
                <svg
                  class="icon icon__angle-right h-8 w-8"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.297 16.59l4.58-4.59-4.58-4.59.703-.703L15.293 12 10 17.293l-.703-.703z"
                    fill="#000"
                  ></path>
                </svg>
              </div> -->
              <div class="swiper-scrollbar"></div>
            </div>
          </div>

          <!-- <div v-for="asset in assets" :key="asset.id">
          <img
            v-if="asset.url"
            :src="asset.url"
            :width="asset.image_dimensions.width"
            :height="asset.image_dimensions.height"
            class="w-full"
          />
        </div> -->
        </div>
        <div class="md:col-span-5">
          <div class="product-summary mb-4">
            <heading as="h1" size="2xl" class="product-title">{{
              product.name
            }}</heading>
            <heading as="p" size="lg" class="product-price">
              <span v-if="Object.keys(variantOption).length != 0">
                ${{ variantPrice }}
              </span>
              <span v-if="Object.keys(variantOption).length === 0">
                ${{ product.price.formatted_with_code }}
              </span>
            </heading>
          </div>
          <variant-options
            v-for="variant_group in product.variant_groups"
            class="variant-buttons my-4"
            :key="variant_group.id"
            :product="product"
            :variantGroup="variant_group"
            :variantOption="variantOption"
            :variantSku="variantSku"
            @selectOption="selectOption($event)"
          />
          <!-- <pre>{{ product }}</pre> -->
          <BodyText
            class="
              free-shipping-text
              opacity-70
              sans-serif
              text-xs
              tracking-wide
            "
          >
            Free registered shipping on international orders over $250 SGD<br />
            (Domestic orders over $100 SGD)
          </BodyText>
          <AddToBagBtn
            class="add-to-bag my-4"
            :class="{
              'inactive has-variant': hasVariant,
              'inactive sold-out': soldOut,
            }"
            :product="product"
            :variant="variantOption"
          />
          <div class="product-details grid grid-cols-1 gap-4">
            <content-tabs :tabList="productDescription">
              <template v-slot:tabPanel-1>
                <div
                  v-html="product.description"
                  class="product-description-text"
                ></div>
              </template>
              <template v-slot:tabPanel-2>
                <div class="flex flex-col">
                  <p
                    v-for="attribute in product.attributes"
                    v-if="
                      attribute.value &&
                      attribute.name != 'Leather Disclaimer' &&
                      attribute.name != 'Colour'
                    "
                    :key="attribute.id"
                    :class="attribute.name.replace(/\s+/g, '-').toLowerCase()"
                  >
                    {{ attribute.name }}: {{ attribute.value }}
                  </p>
                </div>
              </template>
            </content-tabs>
            <!-- <div>
              <heading
                as="h2"
                size="xs"
                class="tracking-wider sans-serif uppercase font-semibold"
                >Description</heading
              >
              <div
                v-html="product.description"
                class="product-description-text"
              ></div>
            </div>
            <div>
              <heading
                as="h2"
                size="xs"
                class="tracking-wider sans-serif uppercase font-semibold"
                >Specifications</heading
              >
              <div class="flex flex-col">
                <p
                  v-for="attribute in product.attributes"
                  v-if="
                    attribute.value &&
                    attribute.name != 'Leather Disclaimer' &&
                    attribute.name != 'Colour'
                  "
                  :key="attribute.id"
                  :class="attribute.name.replace(/\s+/g, '-').toLowerCase()"
                >
                  {{ attribute.name }}: {{ attribute.value }}
                </p>
              </div>
            </div> -->
            <div
              v-if="
                product.attributes.find((x) => x.name === 'Leather Disclaimer')
                  .value === true
              "
            >
              <div>
                <heading
                  as="h2"
                  size="xs"
                  class="tracking-wider sans-serif uppercase font-semibold"
                  >Note</heading
                >
                <BodyText>
                  Due to its handcrafted nature, the leather's colour, texture
                  and dimensions may vary slightly. The leather has been
                  carefully treated to age with wear, developing a patina unique
                  to every wrist. Discolouration may occur upon exposure to
                  sweat or rain.
                </BodyText>
              </div>
            </div>
            <div>
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
            </div>
          </div>
          <!-- <pre>{{ product }}</pre> -->
        </div>
      </div>
    </Bounded>
    <bounded as="section">
      <content-tabs :tabList="shopInfo">
        <template v-slot:tabPanel-1>
          <prismic-rich-text :field="settings.data.shipping_information" />
        </template>
        <template v-slot:tabPanel-2>
          <prismic-rich-text :field="settings.data.return_policy" />
        </template>
      </content-tabs>
      <!-- <div>
        <heading
          as="h2"
          size="xs"
          class="tracking-wider sans-serif uppercase font-semibold"
          >Shipping Information</heading
        >
        <prismic-rich-text :field="settings.data.shipping_information" />
        <heading
          as="h2"
          size="xs"
          class="tracking-wider sans-serif uppercase font-semibold"
          >Return Policy</heading
        >
        <prismic-rich-text :field="settings.data.return_policy" />
      </div> -->
    </bounded>
    <SliceZone :slices="page.data.slices" :components="components" />
  </div>
</template>
<script>
import Swiper from "swiper/swiper-bundle.min";
import "swiper/swiper-bundle.min.css";
import { components } from "~/slices";
export default {
  async asyncData({ $prismic, store, i18n, params, $commerce }) {
    const lang = i18n.locale;
    const page = await $prismic.api.getByUID("page", "product", { lang });
    await store.dispatch("prismic/load", { lang, page });
    const { permalink } = params;
    const product = await $commerce.products.retrieve(permalink, {
      type: "permalink",
    });
    return {
      product,
      page: page,
      assets: product.assets,
      variants: product.variant_groups,
      variantOption: {},
      variantPrice: product.price.formatted_with_code,
      variantSku: {},
      soldOut: false,
      hasVariant: false,
    };
  },
  data() {
    return {
      components,
      productDescription: ["Description", "Specifications"],
      shopInfo: ["Shipping Information", "Return Policy"],
    };
  },
  head() {
    return {
      title: `${this.product.name} - ${this.$prismic.asText(
        this.$store.state.prismic.settings.data.siteTitle
      )}`,
    };
  },
  computed: {
    settings() {
      return this.$store.state.prismic.settings;
    },
  },
  beforeMount() {
    this.updateProduct();
  },
  async mounted() {
    await this.$nextTick();
    var thumb = new Swiper(this.$refs.productThumbnails, {
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
    async updateProduct(product) {
      try {
        const url = new URL(
          "https://api.chec.io/v1/products/" + this.product.id + "/variants"
        );
        const headers = {
          "X-Authorization": process.env.NUXT_ENV_CHEC_PUBLIC_API_KEY,
          Accept: "application/json",
          "Content-Type": "application/json",
        };
        fetch(url, {
          method: "GET",
          headers: headers,
        })
          .then((response) => response.json())
          .then((data) => {
            if (this.product.variant_groups.length > 0) {
              this.hasVariant = true;

              // console.log("data", data.data);
              let sourceInfo = data.data;
              let siteInfo = this.product.variant_groups[0].options;
              let totalInventory = 0;
              for (let i = 0; i < sourceInfo.length; i++) {
                siteInfo[i].price = sourceInfo[i].price;
                siteInfo[i].inventory = sourceInfo[i].inventory;
                siteInfo[i].sku = sourceInfo[i].sku;
                totalInventory += sourceInfo[i].inventory;
                console.log("inventory", totalInventory);
              }
              document
                .querySelectorAll(".variant-button.available")
                .forEach((el) => {
                  el.classList.remove("inactive");
                });
              console.log(this.hasVariant, totalInventory);
              if (totalInventory < 1) {
                console.log("sold out");
                console.log(this.soldOut);
                this.soldOut = true;
                console.log(this.soldOut);
              }
            } else if (this.product.inventory.available < 1) {
              console.log("sold", this.product.inventory.available);
              this.soldOut = true;
            }
            console.log(this.soldOut);
          });
      } catch (error) {
        // eslint-disable-next-line
        console.log(error);
      }
    },
    selectOption(option) {
      // console.log("option", option);
      this.variantOption[String(option[0])] = option[1];
      this.variantSku = option[2];
      // console.log("variantOption", this.variantOption);
      // console.log("variantSku", this.variantSku);
      // console.log(
      //   "product variant pair",
      //   this.product.id,
      //   Object.values(this.variantOption)[0]
      // );
      this.variantPrice = this.product.variant_groups[0].options.filter(
        ({ sku }) => sku.includes(this.variantSku)
      )[0].price.formatted_with_code;
      // console.log(this.variantPrice);
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
.image.swiper-pagination {
  position: relative;
  bottom: -5px;
}
.swiper-pagination-bullet {
  background: var(--color);
  width: 6px;
  height: 6px;
  margin: 0 4px;
  transition: all 0.3s ease;
}
</style>