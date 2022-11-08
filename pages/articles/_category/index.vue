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
        <article-list :articles="articles"></article-list>
      </div>
    </Bounded>
  </div>
</template>
  
  <script>
export default {
  async asyncData({ $prismic, store, i18n, params }) {
    const lang = i18n.locale;
    const page = await $prismic.api.getByUID(
      "article_category",
      params.category,
      {
        lang,
      }
    );
    const articles = await $prismic.api.query(
      $prismic.predicates.at("my.article.article_category", page.id),

      {
        lang: lang,
        orderings: "[my.article.date desc]",
        pageSize: 24,
      }
    );
    await store.dispatch("prismic/load", { lang, page });
    return {
      page: page,
      articles: articles.results,
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