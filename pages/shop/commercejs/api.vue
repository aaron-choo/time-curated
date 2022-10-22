<template>
  <bounded as="div">
    <pre>{{ JSON.stringify(merchant, null, 2) }}</pre>
    <pre>{{ JSON.stringify(categories, null, 2) }}</pre>
    <pre>{{ JSON.stringify(products, null, 2) }}</pre>
  </bounded>
</template>

<script>
import { components } from "~/slices";

export default {
  async asyncData({ $prismic, store, i18n, $commerce }) {
    const lang = i18n.locale;
    const page = await $prismic.api.getByUID("page", "shop", { lang });
    await store.dispatch("prismic/load", { lang, page });

    const merchant = await $commerce.merchants.about();
    const { data: categories } = await $commerce.categories.list();
    const { data: products } = await $commerce.products.list();

    return {
      page,
      merchant,
      categories,
      products,
    };
  },
  data() {
    return { components };
  },
  head() {
    return {
      title: `${this.$prismic.asText(
        this.page.data.title
      )} - ${this.$prismic.asText(
        this.$store.state.prismic.settings.data.siteTitle
      )}`,
    };
  },
};
</script>