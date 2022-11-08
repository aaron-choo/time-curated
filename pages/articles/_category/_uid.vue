<template>
  <div>
    <Bounded
      as="div"
      yPadding="xs"
      class="
        min-h-[400px]
        h-[calc(100vh-133px)]
        md:h-[calc(100vh-243px)]
        flex flex-col
        gap-12
        items-center
        justify-center
        text-center
        pb-24
      "
    >
      <div>
        <prismicRichText
          :field="page.data.city"
          class="article-category font-sans uppercase text-xs font-medium"
        ></prismicRichText>
      </div>
      <Heading
        v-if="page.data.title.slice(0, 20) === 'Collectors Dialogue:'"
        as="h1"
        size="6xl"
        class="title text-center"
      >
        <em>Collectors Dialogue</em><br />{{ page.data.title.slice(20) }}
      </Heading>
      <Heading as="h1" size="6xl" class="title text-center" v-else>
        {{ page.data.title }}
      </Heading>
      <div>
        <p class="article-date mt-5 font-sans uppercase text-xs font-medium">
          {{
            Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            }).format($prismic.asDate(page.data.date))
          }}
        </p>
      </div>
    </Bounded>
    <nuxt-img
      v-if="page.data.images.length > 0"
      format="webp"
      :src="page.data.images[0].image.url"
      sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
      :width="page.data.images[0].image.width"
      :height="page.data.images[0].image.height"
      class="article-banner w-full"
      loading="lazy"
    />
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