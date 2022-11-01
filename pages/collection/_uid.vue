<template>
  <div>
    <Bounded
      as="div"
      yPadding="xs"
      :secondaryBackground="true"
      class="block relative overflow-hidden"
    >
      <!-- <n-link
        class="flex gap-2 opacity-50 text-xs font-medium font-sans uppercase"
        :to="localePath('/collection')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14 14"
          height="14"
          width="14"
          class="w-3 h-3"
        >
          <g>
            <polyline
              points="3.5 1.5 0.5 4.5 3.5 7.5"
              fill="none"
              stroke="var(--color)"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></polyline>
            <path
              d="M.5,4.5h9a4,4,0,0,1,0,8h-5"
              fill="none"
              stroke="var(--color)"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
        </svg>
        See all
      </n-link> -->
      <panZoom
        class="relative"
        selector=".watch-wrapper"
        :options="{
          minZoom: 0.3,
          maxZoom: 2,
          initialZoom: 1,
          zoomSpeed: 0.04,
          bounds: true,
          boundsPadding: 0,
          transformOrigin: { x: 0.5, y: 0.5 },
          beforeMouseDown: function (e) {
            // allow mouse-down panning only if altKey is down. Otherwise - ignore
            var shouldIgnore = !e.altKey;
            return shouldIgnore;
          },
          beforeWheel: function (e) {
            // allow wheel-zoom only if altKey is down. Otherwise - ignore
            var shouldIgnore = !e.altKey;
            return shouldIgnore;
          },
        }"
      >
        <WatchModule
          :watch="page.data"
          class="watch-module my-4 mx-auto w-full md:max-w-[50vw] xl:max-w-2xl"
        />

        <div
          class="
            absolute
            bottom-4
            left-1/2
            transform
            -translate-x-1/2
            w-fit
            flex flex-col
            gap-2
            font-sans
            text-xs
            uppercase
            font-semibold
          "
        >
          <div
            class="zoom-hint desktop-only px-2 py-1 rounded-[3px] text-center"
          >
            Alt+scroll to zoom
          </div>
          <div
            class="
              zoom-hint
              mobile-only
              tablet-only
              px-2
              py-1
              rounded-[3px]
              text-center
            "
          >
            Pinch to zoom
          </div>
          <button
            @click="revealCard"
            class="scale-hint px-2 py-1 uppercase rounded-[3px] text-center"
          >
            Scale card
          </button>
        </div>
      </panZoom>

      <div class="watch-meta mx-auto w-full max-w-2xl -z-10">
        <Heading as="h1" size="5xl" class="watch-title text-center">
          {{ $prismic.asText(brand.data.title) }}
          <span class="italic">{{
            page.data.title.substring(brand.data.title[0].text.length)
          }}</span>
        </Heading>
        <Heading as="h3" size="3xl" class="watch-year text-center">
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
    <SliceZone
      :slices="page.data.slices"
      :components="components"
      :context="page"
    />
    <SliceZone
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
    const page = await $prismic.api.getByUID("collection", params.uid, {
      lang,
    });
    const brand = await $prismic.api.getByUID("brand", page.data.brand.uid, {
      lang,
    });
    const relatedWatches = await $prismic.api.query(
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
      relatedWatches: relatedWatches.results,
      params: params,
      brand: brand,
    };
  },
  data() {
    return {
      scaleCard: false,
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
  methods: {
    revealCard() {
      if (this.scaleCard === false) {
        document.querySelector(".scale-card").style.opacity = 0.2;
        this.scaleCard = true;
      } else {
        document.querySelector(".scale-card").style.opacity = 0;
        this.scaleCard = false;
      }
    },
  },
};
</script>
<style scoped>
.watch-year {
  color: var(--color-fade-50);
}
.zoom-hint {
  background-color: var(--bg-accent-fade-50);
  color: var(--color-accent);
}

.scale-hint {
  background-color: var(--bg-accent);
  color: var(--color-accent);
}
</style>