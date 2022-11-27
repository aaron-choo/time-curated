<template>
  <div>
    <!-- <Bounded as="section" yPadding="base" :secondaryBackground="true">
      <div class="grid md:grid-cols-2">
        <div>
          <Heading as="h1">{{ page.data.title }}</Heading>
        </div>
      </div>
    </Bounded> -->
    <SliceZone
      :slices="page.data.slices"
      :components="components"
      :context="page"
    />
    <Bounded as="section">
      <h2 class="slide-title text-2xl md:text-3xl leading-none mb-6">
        Lastest Products
      </h2>
      <product-list
        :products="products"
        :settings="this.$store.state.prismic.settings"
      ></product-list>
    </Bounded>
    <SliceZone
      :slices="settings.data.slices1"
      :components="components"
      :context="page"
    />
  </div>
</template>

<script>
import { components } from "~/slices";
export default {
  async asyncData({ $prismic, store, i18n }) {
    const lang = i18n.locale;
    const page = await $prismic.api.getByUID("page", "shop", { lang });
    const products = await $prismic.api.query(
      $prismic.predicates.at("document.type", "product"),
      {
        lang: lang,
        orderings: "[my.product.date desc]",
        pageSize: 12,
      }
    );
    await store.dispatch("prismic/load", { lang, page });
    products.results.forEach((el) => (el.stock = null));
    if (page) {
      return {
        page: page,
        products: products.results,
      };
    } else {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
  data() {
    return { components };
  },
  head() {
    return {
      title: `${this.page.data.title} - ${this.$prismic.asText(
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
    this.$axios.setHeader(
      "Authorization",
      "Basic " +
        Buffer.from(process.env.NUXT_ENV_SNIPCART_SECRET_API_KEY).toString(
          "base64"
        )
    );
    this.$axios.setHeader("Accept", "application/json");
    this.checkStock();
  },
  computed: {
    settings() {
      return this.$store.state.prismic.settings;
    },
  },
  methods: {
    async checkStock() {
      const productsInfo = await this.$axios.$get(
        `https://app.snipcart.com/api/products?limit=60`
      );
      this.products.forEach(
        (el) =>
          (el.stock = productsInfo.items.find(
            (item) => item.userDefinedId === el.uid
          ).totalStock)
      );
      // for (let i = 0; i < this.products.length; i++) {
      //   this.products[i].stock = productsInfo.items.find(
      //     (item) => item.userDefinedId === this.products[i].uid
      //   )
      //     ? productsInfo.items.find(
      //         (item) => item.userDefinedId === this.products[i].uid
      //       ).totalStock
      //     : 0;
    },
  },
};
</script>