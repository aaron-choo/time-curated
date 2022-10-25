<template>
  <div>
    <Bounded
      as="section"
      yPadding="md"
      :secondaryBackground="true"
      :backgroundImage="page.data.banner"
    >
      <div class="grid md:grid-cols-2">
        <div>
          <Heading as="h1">{{ page.data.title }}</Heading>
          <prismic-rich-text :field="page.data.description"></prismic-rich-text>
        </div>
      </div>
    </Bounded>
    <Bounded as="section">
      <div>
        <product-list :products="products"></product-list>
      </div>
    </Bounded>
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic, store, i18n, params }) {
    const lang = i18n.locale;
    // console.log(lang);
    // console.log(params);
    const page = await $prismic.api.getByUID(
      "product_category",
      params.category,
      {
        lang,
      }
    );
    const products = await $prismic.api.query(
      $prismic.predicates.at("my.product.product_category", page.id),

      {
        lang: lang,
        orderings: "[document.last_publication_date desc]",
        pageSize: 24,
      }
    );
    await store.dispatch("prismic/load", { lang, page });
    return {
      page: page,
      products: products.results,
    };
  },
  head() {
    return {
      title: `${this.page.data.title} - ${this.$prismic.asText(
        this.$store.state.prismic.settings.data.siteTitle
      )}`,
    };
  },
};
</script>