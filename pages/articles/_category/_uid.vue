<template>
  <div>
    <Bounded
      as="div"
      yPadding="xs"
      :secondaryBackground="true"
      class="block relative overflow-hidden"
    >
    </Bounded>
    <SliceZone
      v-if="page.data.slices"
      :slices="page.data.slices"
      :components="components"
      :context="page"
    />
    <SliceZone
      v-if="page.data.slices2"
      :slices="settings.data.slices2"
      :components="components"
      :context="page"
    />
    <!-- <pre>{{ page }}</pre> -->
  </div>
</template>
  <script>
import { components } from "~/slices";
export default {
  async asyncData({ $prismic, store, i18n, params, error }) {
    const lang = i18n.locale;
    const page = await $prismic.api.getByUID("article", params.uid, {
      lang,
    });
    const relatedArticles = await $prismic.api.query(
      $prismic.predicates.at("document.type", "article"),
      {
        lang: lang,
        orderings: "[document.last_publication_date desc]",
        pageSize: 5,
        page: Math.floor(Math.random() * 1),
      }
    );
    await store.dispatch("prismic/load", { lang, page });
    return {
      page: page,
      relatedArticles: relatedArticles.results,
      params: params,
    };
  },
  data() {
    return {
      components,
    };
  },
  head() {
    return {
      title: `${this.page.data.title} - ${this.$prismic.asText(
        this.$store.state.prismic.settings.data.siteTitle
      )}`,
    };
  },
  computed: {
    settings() {
      return this.$store.state.prismic.settings;
    },
  },
};
</script>
<style scoped>
</style>