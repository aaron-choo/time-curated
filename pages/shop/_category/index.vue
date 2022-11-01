<template>
  <div>
    <Bounded
      as="section"
      yPadding="md"
      :secondaryBackground="true"
      :backgroundImage="page.data.banner"
      class="
        min-h-[400px]
        h-[calc(100vh-119px)]
        md:h-[calc(100vh-228px)]
        flex
        items-center
      "
    >
      <div class="grid md:grid-cols-2">
        <div>
          <PrismicRichText
            :field="page.data.subtitle"
            class="slide-subtitle text-2xl md:text-3xl italic"
          />
          <h1 class="slide-title text-2xl md:text-3xl leading-none mb-2">
            {{ page.data.title }}
          </h1>
          <PrismicRichText
            :field="page.data.description"
            class="slide-description font-sans text-xs md:text-sm"
          />
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