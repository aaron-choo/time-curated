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
  async asyncData({ $prismic, store, i18n }) {
    const lang = i18n.locale;
    const page = await $prismic.api.getByUID("page", "home", { lang });
    await store.dispatch("prismic/load", { lang, page });
    if (page) {
      return {
        page,
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
      title: this.page.data.title,
    };
  },
};
</script>
