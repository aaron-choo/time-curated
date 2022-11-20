<template>
  <bounded as="div">
    <!-- <pre>{{ products }}</pre> -->
    <div class="flex opacity-0">
      <template v-for="product in products">
        <AddToCartBtn :product="product" :settings="settings" />
      </template>
    </div>
  </bounded>
</template>

<script>
export default {
  async asyncData({ $prismic, store, i18n }) {
    const lang = i18n.locale;
    const page = await $prismic.api.getByUID("page", "shop", { lang });
    const products = await $prismic.api.query(
      $prismic.predicates.at("document.type", "product"),
      { lang: lang, orderings: "[my.product.date desc]", pageSize: 60 }
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
  computed: {
    settings() {
      return this.$store.state.prismic.settings;
    },
  },
};
</script>