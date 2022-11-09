<template>
  <div>
    <Bounded
      as="section"
      yPadding="md"
      :secondaryBackground="true"
      :backgroundImage="page.data.banner"
      class="flex items-center"
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