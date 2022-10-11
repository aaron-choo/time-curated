<template>
  <div>
    <h1>{{ product.name }}</h1>
    <p>{{ product.price.formatted_with_symbol }}</p>
  </div>
</template>
<script>
export default {
  async asyncData({ $prismic, store, i18n, params, $commerce }) {
    const lang = i18n.locale;
    const page = await $prismic.api.getByUID("page", "shop", { lang });
    await store.dispatch("prismic/load", { lang, page });

    const { permalink } = params;
    const product = await $commerce.products.retrieve(permalink, {
      type: "permalink",
    });

    return {
      product,
    };
  },
  head() {
    return {
      title: `${this.product.name} - ${this.$prismic.asText(
        this.$store.state.prismic.settings.data.siteTitle
      )}`,
    };
  },
};
</script>