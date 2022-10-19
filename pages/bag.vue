<template>
  <Bounded as="section">
    <heading as="h3">Shopping Bag</heading>
    <Cart />
  </Bounded>
</template>
<script>
import { components } from "~/slices";

export default {
  async asyncData({ $prismic, store, i18n }) {
    const lang = i18n.locale;
    const page = await $prismic.api.getByUID("page", "home", { lang });
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
      title: this.$prismic.asText(this.page.data.title),
    };
  },
};
</script>