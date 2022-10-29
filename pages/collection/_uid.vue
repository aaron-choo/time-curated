<template>
  <div>
    <Bounded as="div" yPadding="xs" :secondaryBackground="true">
      <WatchModule
        :watch="page.data"
        class="watch-module my-4 mx-auto w-full md:max-w-[50vw] xl:max-w-2xl"
      />
      <div class="watch-meta mx-auto w-full">
        <Heading as="h1" size="6xl" class="text-center">
          {{ page.data.title }}
        </Heading>
        <Heading as="h3" size="4xl" class="text-center opacity-50">
          {{ $prismic.asText(page.data.year) }}
        </Heading>
        <PrismicRichText
          v-if="$prismic.asText(page.data.description)"
          :field="page.data.description"
          wrapper="div"
          class="my-8 mb-20"
        />
      </div>
    </Bounded>
    <Bounded as="div" yPadding="base">
      <div
        class="
          watch-specifications
          mx-auto
          max-w-4xl
          grid grid-cols-2
          md:grid-cols-3
          gap-4
        "
      >
        <template v-for="specification in specifications">
          <div v-if="page.data[specification].length > 0" class="text-center">
            <p class="font-sans text-xs font-semibold uppercase">
              {{ settings.data[specification + "_text"] }}
            </p>
            <PrismicRichText
              v-if="$prismic.asText(page.data[specification])"
              :field="page.data[specification]"
            />
          </div>
        </template>
      </div>
    </Bounded>
    <SliceZone :slices="settings.data.slices1" :components="components" />
    <!-- <pre>{{ page }}</pre> -->
  </div>
</template>
  
<script>
import { components } from "~/slices";
export default {
  async asyncData({ $prismic, store, i18n, params, error }) {
    const lang = i18n.locale;
    const page = await $prismic.api.getByUID("collection", params.uid, {
      lang,
    });
    const relatedProducts = await $prismic.api.query(
      $prismic.predicates.at("document.type", "collection"),
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
      relatedProducts: relatedProducts.results,
      params: params,
    };
  },
  data() {
    return {
      components,
      specifications: [
        "manufacture",
        "year",
        "reference",
        "model",
        "case_material",
        "case_dimensions",
        "lug_width",
        "crystal",
        "dial",
        "complications",
        "movement",
        "production_quantity",
      ],
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
  methods: {},
};
</script>
<style scoped>
</style>