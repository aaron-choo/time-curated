<template>
  <div>
    <Bounded as="section" :collapsible="false" yPadding="none">
      <div class="md:grid md:grid-cols-12 md:gap-8">
        <div class="md:col-span-7 mb-8">
          <ProductDetailImage :product="product" :variant="variant" />
        </div>
        <div class="md:col-span-5">
          <ProductSummary :product="product" :variant="variant" />
          <div
            class="
              add-to-cart-section
              py-4
              px-6
              md:p-0 md:my-4 md:gap-2
              grid
              gap-4
            "
          >
            <VariantDropdown
              v-if="product.lug_width.length > 0"
              id="lug-width-variants"
              class="variant-buttons"
              :product="product"
              :label="settings.data.lug_width_text"
              :variation="product.lug_width"
              :settings="settings"
              @selectOption="selectOption($event)"
            />
            <AddToCartBtn
              :product="page"
              :settings="settings"
              :variant="variant"
              :variantImage="variantImage"
              :class="{ 'col-span-2': product.lug_width.length === 0 }"
            />
          </div>
          <prismic-rich-text
            :field="settings.data.free_shipping_text"
            class="
              free-shipping-text
              opacity-50
              font-sans
              text-xs
              tracking-wide
            "
          />
          <div class="product-details grid grid-cols-1 gap-4 my-4">
            <ContentTabs :tabList="productDescription">
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
                  <p v-if="product.inner_width">
                    {{ settings.data.inner_width_text }} :
                    {{ product.inner_width }}
                  </p>
                  <p v-if="product.outer_width">
                    {{ settings.data.outer_width_text }} :
                    {{ product.outer_width }}
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
            </ContentTabs>
            <div v-if="product.leather_disclaimer">
              <div>
                <Heading
                  as="h2"
                  size="xs"
                  class="tracking-wider font-sans uppercase font-semibold"
                >
                  {{ settings.data.note_text }}
                </Heading>
                <prismic-rich-text
                  :field="settings.data.leather_disclaimer"
                  class="product-description-text"
                />
              </div>
            </div>
            <Heading
              as="h2"
              size="xs"
              class="product-sku tracking-wider font-sans uppercase opacity-50"
              v-if="product.sku"
            >
              {{ product.sku }}
            </Heading>
          </div>
        </div>
      </div>
    </Bounded>
    <Bounded as="section" yPadding="sm" :secondaryBackground="true">
      <ContentTabs :tabList="shopInfo">
        <template v-slot:tabPanel-1>
          <prismic-rich-text :field="settings.data.shipping_information" />
        </template>
        <template v-slot:tabPanel-2>
          <prismic-rich-text :field="settings.data.return_policy" />
        </template>
      </ContentTabs>
    </Bounded>

    <SliceZone
      :slices="page.data.slices"
      :components="components"
      :context="page"
    />

    <Bounded as="section" yPadding="sm">
      <RelatedProducts
        :relatedProducts="relatedProducts"
        :currentProduct="page"
        :settings="settings"
      />
    </Bounded>

    <SliceZone
      :slices="settings.data.slices1"
      :components="components"
      :context="page"
    />
    <!-- <pre>{{ page }}</pre> -->
  </div>
</template>

<script>
import { components } from "~/slices";
export default {
  async asyncData({ $prismic, store, i18n, params, error, $axios }) {
    const lang = i18n.locale;
    const page = await $prismic.api.getByUID("product", params.uid, {
      lang,
    });
    const relatedProducts = await $prismic.api.query(
      $prismic.predicates.at("document.type", "product"),
      {
        lang: lang,
        orderings: "[document.last_publication_date desc]",
        pageSize: 100,
        page: 1,
      }
    );
    await store.dispatch("prismic/load", { lang, page });

    // $axios.setHeader("apikey", "7iLCHkWBOWlxybSVh7uAO4G6mjM2772K");
    // const currencyRates = await $axios.$get(
    //   "https://api.apilayer.com/exchangerates_data/latest?base=SGD"
    // );
    // console.log(currencyRates);

    $axios.setHeader(
      "Authorization",
      "Basic " +
        Buffer.from(process.env.NUXT_ENV_SNIPCART_SECRET_API_KEY).toString(
          "base64"
        )
    );
    $axios.setHeader("Accept", "application/json");
    const productInfo = await $axios.$get(
      `https://app.snipcart.com/api/products/${params.uid}/`
    );

    const productsInfo = await $axios.$get(
      `https://app.snipcart.com/api/products/`
    );
    if (page.data.product_category.uid === params.category) {
      return {
        page: page,
        product: page.data,
        relatedProducts: relatedProducts.results,
        params: params,
        variantImage: null,
        variant: null,
        productInfo: productInfo,
        productsInfo: productsInfo,
      };
    } else {
      error({ statusCode: 404, message: "Page not found" });
    }
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
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$prismic.asText(this.page.data.description),
        },
        {
          hid: "keywords",
          name: "keywords",
          content: [this.page.data.title, this.page.data.keywords].join(", "),
        },
        {
          hid: "og-title",
          property: "og:title",
          content: `${this.page.data.title} - ${this.$prismic.asText(
            this.$store.state.prismic.settings.data.siteTitle
          )}`,
        },
        {
          hid: "og-desc",
          property: "og:description",
          content: this.$prismic.asText(this.page.data.description),
        },
        {
          hid: "og-url",
          property: "og:url",
          content: "https://time-curated.com" + this.page.url,
        },
      ],
    };
  },
  beforeMount() {
    this.checkStock();
  },
  computed: {
    settings() {
      return this.$store.state.prismic.settings;
    },
  },
  methods: {
    selectOption(variant) {
      // console.log(variant[1]);
      document
        .querySelector("#add-to-cart")
        .setAttribute("data-item-custom1-value", variant.name);
      this.variant = variant;
      if (variant.image.length > 0) {
        this.variantImage = variant.image;
      }
      this.variant.stock = this.productInfo.variants.find(
        (item) => item.variation[0].option === variant.name
      ).stock;
    },
    checkStock() {
      for (let i = 0; i < this.relatedProducts.length; i++) {
        this.relatedProducts[i].stock = this.productsInfo.items.find(
          (item) => item.userDefinedId === this.relatedProducts[i].uid
        )
          ? this.productsInfo.items.find(
              (item) => item.userDefinedId === this.relatedProducts[i].uid
            ).totalStock
          : 0;
      }
    },
  },
};
</script>
<style scoped>
.product-description-text > p:not(:last-child) {
  margin-bottom: 0.5rem;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  opacity: 1;
}

@media (max-width: 768px) {
  .add-to-cart-section {
    background: var(--bg);
    z-index: 10;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    grid-template-columns: 1fr 1fr;
    border-top: 1px solid var(--border-color);
  }
}

.sale-percentage {
  background: var(--border-accent);
  color: var(--color-accent);
}
</style>