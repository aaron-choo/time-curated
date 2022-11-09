<template>
  <SliceZone
    :slices="page.data.slices"
    :components="components"
    :context="page"
  />
</template>

<script>
import { components } from "~/slices";

export default {
  async asyncData({ $prismic, params, store, i18n }) {
    const lang = i18n.locale;
    const page = await $prismic.api.getByUID("page", params.uid, {
      lang,
    });
    await store.dispatch("prismic/load", { lang, page });
    return {
      page,
    };
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
