<template>
  <div>
    <Bounded as="section" :collapsible="false" yPadding="xs">
      <div class="md:grid md:grid-cols-12 md:gap-8">
        <div class="md:col-span-7 mb-8">
          <ProductDetailImage :product="product" :variant="variant" />
        </div>
        <div class="md:col-span-5">
          <div class="product-summary mb-4">
            <Heading as="h1" size="2xl" class="product-title">
              {{ product.title }}
            </Heading>
            <Heading as="p" size="lg" class="product-price">
              <span v-if="variant">
                SGD {{ (product.price + variant.price).toFixed(2) }}
              </span>
              <span v-else> SGD {{ product.price.toFixed(2) }} </span>
            </Heading>
          </div>
          {{ inventory }}
          <VariantOptions
            v-if="product.lug_width.length > 0"
            id="lug-width-variants"
            class="variant-buttons mt-4"
            :product="product"
            :label="settings.data.lug_width_text"
            :variation="product.lug_width"
            :settings="settings"
            @selectOption="selectOption($event)"
          />
          <AddToCartBtn
            :product="page"
            :settings="settings"
            :variantImage="variantImage"
          />
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
                  class="tracking-wider sans-serif uppercase font-semibold"
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
              class="product-sku tracking-wider sans-serif uppercase opacity-50"
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

    <SliceZone :slices="page.data.slices" :components="components" />

    <Bounded as="section" yPadding="sm">
      <RelatedProducts
        :relatedProducts="relatedProducts"
        :currentProduct="page"
        :settings="settings"
      />
    </Bounded>

    <SliceZone :slices="settings.data.slices1" :components="components" />
    <!-- <pre>{{ page }}</pre> -->
  </div>
</template>

<script>
import { components } from "~/slices";
export default {
  props: ["variant", "inventory"],
  async asyncData({ $prismic, store, i18n, params, error }) {
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
    const inventory = await $http.$get(`https://app.snipcart.com/api/products`)
    await store.dispatch("prismic/load", { lang, page });
    if (page.data.product_category.uid === params.category) {
      return {
        page: page,
        product: page.data,
        relatedProducts: relatedProducts.results,
        params: params,
        inventory: inventory;
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
    };
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
</style>