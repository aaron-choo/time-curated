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
      <!-- <pre>{{ JSON.stringify(merchant, null, 2) }}</pre>
    <pre>{{ JSON.stringify(categories, null, 2) }}</pre>
    <pre>{{ JSON.stringify(products, null, 2) }}</pre> -->
      <!-- <category-list :categories="categories"></category-list> -->
      <!-- <h2 class="slide-title text-2xl md:text-3xl leading-none mb-6">
        Lastest Products
      </h2> -->
      <product-list :products="products"></product-list>
      <!-- <pre>{{ JSON.stringify(products, null, 2) }}</pre> -->
    </Bounded>
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
        pageSize: 240,
      }
    );

    await store.dispatch("prismic/load", { lang, page });

    // const merchant = await $commerce.merchants.about();
    // const { data: categories } = await $commerce.categories.list();
    // const { data: products } = await $commerce.products.list();

    return {
      page,
      // merchant,
      // categories,
      products: products.results,
    };
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
};
</script>