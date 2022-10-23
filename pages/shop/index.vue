<template>
  <Bounded as="section">
    <div>
      <h1>{{ title }}</h1>
      <!-- <pre>{{ JSON.stringify(merchant, null, 2) }}</pre>
    <pre>{{ JSON.stringify(categories, null, 2) }}</pre>
    <pre>{{ JSON.stringify(products, null, 2) }}</pre> -->
      <!-- <category-list :categories="categories"></category-list> -->
      <product-list :products="products"></product-list>
      <!-- <pre>{{ JSON.stringify(products, null, 2) }}</pre> -->
      <SliceZone :slices="page.data.slices" :components="components" />
    </div>
  </Bounded>
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
        orderings: "[document.first_publication_date desc]",
        pageSize: 24,
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
      title: `${this.$prismic.asText(
        this.page.data.title
      )} - ${this.$prismic.asText(
        this.$store.state.prismic.settings.data.siteTitle
      )}`,
    };
  },
};
</script>