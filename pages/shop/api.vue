<template>
  <bounded as="div">
    <pre>{{ JSON.stringify(products, null, 2) }}</pre>
  </bounded>
</template>

<script>
export default {
  async asyncData({ $prismic, store, i18n }) {
    const lang = i18n.locale;
    const page = await $prismic.api.getByUID("page", "shop", { lang });
    const products = await $prismic.api.query(
      $prismic.predicates.at("document.type", "product_category"),
      { lang: lang, orderings: "[my.product.date desc]", pageSize: 24 }
    );

    await store.dispatch("prismic/load", { lang, page });

    return {
      page,
      products: products.results,
    };
  },
  head() {
    return {
      title: `API`,
    };
  },
};
</script>