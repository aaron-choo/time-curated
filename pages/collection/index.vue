<template>
  <div>
    <!-- <Bounded as="section" yPadding="base" :secondaryBackground="true">
      <div class="grid md:grid-cols-2">
        <div>
          <Heading as="h1">{{ page.data.title }}</Heading>
        </div>
      </div>
    </Bounded> -->
    <SliceZone
      :slices="page.data.slices"
      :components="components"
      :context="page"
    />
    <Bounded as="section">
      <div>
        <collection-list :collection="collection"></collection-list>
      </div>
    </Bounded>
  </div>
</template>
  
  <script>
import { components } from "~/slices";

export default {
  async asyncData({ $prismic, store, i18n }) {
    const lang = i18n.locale;
    const page = await $prismic.api.getByUID("page", "collection", { lang });
    const collection = await $prismic.api.query(
      $prismic.predicates.at("document.type", "collection"),
      {
        lang: lang,
        orderings: "[document.last_publication_date desc]",
        pageSize: 24,
      }
    );
    await store.dispatch("prismic/load", { lang, page });
    if (page) {
      return {
        page,
        collection: collection.results,
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
      ],
    };
  },
};
</script>