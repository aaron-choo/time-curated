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
    <SliceZone
      :slices="page.data.slices"
      :components="components"
      :context="page"
    />
    <Bounded as="section">
      <div>
        <article-list :articles="articles"></article-list>
      </div>
    </Bounded>
  </div>
</template>
  
  <script>
import { components } from "~/slices";

export default {
  async asyncData({ $prismic, store, i18n }) {
    const lang = i18n.locale;
    const page = await $prismic.api.getByUID("page", "articles", { lang });
    const articles = await $prismic.api.query(
      $prismic.predicates.at("document.type", "article"),
      {
        lang: lang,
        orderings: "[my.article.date desc]",
        pageSize: 24,
      }
    );
    await store.dispatch("prismic/load", { lang, page });
    if (page) {
      return {
        page,
        articles: articles.results,
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
          content: this.page.data.keywords,
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