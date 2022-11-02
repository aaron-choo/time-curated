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
      <div
        class="
          zoom-module
          fixed
          top-0
          left-0
          right-0
          bottom-0
          pointer-events-none
          opacity-0
          transition-opacity
        "
        :class="{ active: zoomState, inactive: !zoomState }"
      >
        <div
          class="
            zoom-module-header
            z-10
            fixed
            top-0
            left-0
            w-full
            px-6
            flex
            justify-between
          "
        >
          <button @click="toggleZoom" class="py-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
              height="14"
              width="14"
              class="my-2 w-5 h-5"
              data-v-26973788=""
            >
              <g data-v-26973788="">
                <line
                  x1="13.5"
                  y1="0.5"
                  x2="0.5"
                  y2="13.5"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width=".8px"
                  data-v-26973788=""
                ></line>
                <line
                  x1="0.5"
                  y1="0.5"
                  x2="13.5"
                  y2="13.5"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width=".8px"
                  data-v-26973788=""
                ></line>
              </g>
            </svg>
          </button>
          <button @click="toggleCard" class="py-4 relative">
            <svg
              v-if="scaleCard"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
              height="14"
              width="14"
              class="my-2 w-5 h-5 absolute top-4 left-0"
              data-v-26973788=""
            >
              <g data-v-26973788="">
                <line
                  x1="0.5"
                  y1="0.5"
                  x2="13.5"
                  y2="13.5"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width=".8px"
                  data-v-26973788=""
                ></line>
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0.09999999999999998 0.09999999999999998 13.8 13.8"
              height="30"
              width="30"
              stroke-width="0.8"
              class="my-2 w-5 h-5"
            >
              <g>
                <rect
                  x="0.64"
                  y="4.17"
                  width="12.73"
                  height="5.66"
                  transform="translate(-2.9 7) rotate(-45)"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></rect>
                <line
                  x1="7.5"
                  y1="2.5"
                  x2="9"
                  y2="4"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></line>
                <line
                  x1="5"
                  y1="5"
                  x2="6.5"
                  y2="6.5"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></line>
                <line
                  x1="2.5"
                  y1="7.5"
                  x2="4"
                  y2="9"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></line>
              </g>
            </svg>
          </button>
        </div>
        <panZoom
          class="watch-pan-zoom relative"
          selector=".watch-module-zoom"
          :options="{
            minZoom: 0.3,
            maxZoom: 2,
            initialZoom: 1,
            zoomSpeed: 0.04,
            bounds: true,
            boundsPadding: 0,
            transformOrigin: { x: 0.5, y: 0.5 },
          }"
        >
          <WatchModule
            :watch="page.data"
            class="watch-module-zoom mx-auto w-full"
          />
        </panZoom>
      </div>
      <WatchModule :watch="page.data" class="watch-module my-4 w-full" />
      <div class="zoom-controls relative w-full">
        <button
          @click="toggleZoom"
          class="
            absolute
            bottom-6
            p-2
            rounded-full
            left-1/2
            transform
            -translate-x-1/2
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
            height="30"
            width="30"
            stroke-width="1"
            class="w-5 h-5"
          >
            <g>
              <g>
                <circle
                  cx="5.92"
                  cy="5.92"
                  r="5.42"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></circle>
                <line
                  x1="13.5"
                  y1="13.5"
                  x2="9.75"
                  y2="9.75"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></line>
              </g>
              <g>
                <line
                  x1="6"
                  y1="3.5"
                  x2="6"
                  y2="8.5"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></line>
                <line
                  x1="3.5"
                  y1="6"
                  x2="8.5"
                  y2="6"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></line>
              </g>
            </g>
          </svg>
        </button>
      </div>

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
      zoomState: false,
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
    toggleCard() {
      if (this.scaleCard === false) {
        document.querySelector(".scale-card").style.opacity = 0.5;
        this.scaleCard = true;
      } else {
        document.querySelector(".scale-card").style.opacity = 0;
        this.scaleCard = false;
      }
    },
    toggleZoom() {
      if (this.zoomState === false) {
        document.querySelector(".zoom-module").style.pointerEvents = "initial";
        document.querySelector(".zoom-module").style.opacity = 1;
        document.body.classList.add("overflow-hidden");
        this.zoomState = true;
      } else {
        document.querySelector(".zoom-module").style.pointerEvents = "none";
        document.querySelector(".zoom-module").style.opacity = 0;
        document.body.classList.remove("overflow-hidden");
        this.zoomState = false;
        this.$panZoom(document.querySelector(".watch-module-zoom")).zoomAbs(
          0,
          0,
          1
        );
        if (this.scaleCard) {
          this.toggleCard();
        }
      }
    },
  },
};
</script>
<style scoped>
.watch-year {
  color: var(--color-fade-50);
}
.zoom-module {
  background-color: var(--bg-accent-fade-50);
  color: var(--color-accent);
  z-index: 90;
  backdrop-filter: blur(10px);
}
.watch-module-zoom {
  transition: transform 0.1s ease;
}

.zoom-module.inactive .watch-module-zoom {
  transition: transform 0.1s ease 0.3s;
}

.zoom-controls button {
  background-color: var(--bg);
}
</style>