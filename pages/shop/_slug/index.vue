<template>
  <Bounded as="section" :collapsible="false">
    <div>
      <h1>{{ category.name }}</h1>
      <product-list :products="products"></product-list>
    </div>
  </Bounded>
</template>
  
  <script>
export default {
  async asyncData({ $prismic, store, i18n, params, $commerce }) {
    const lang = i18n.locale;
    const page = await $prismic.api.getByUID("page", "shop", { lang });
    await store.dispatch("prismic/load", { lang, page });

    const { slug } = params;
    const category = await $commerce.categories.retrieve(slug, {
      type: "slug",
    });

    const { data: products } = await $commerce.products.list({
      category_slug: slug,
    });
    return {
      category,
      products,
    };
  },
  head() {
    return {
      title: `${this.category.name} - ${this.$prismic.asText(
        this.$store.state.prismic.settings.data.siteTitle
      )}`,
    };
  },
};
</script>