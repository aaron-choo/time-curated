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
      <a
        @click="toggleZoom"
        aria-label="Open zoom modal"
        class="cursor-zoom-in"
      >
        <WatchModule :watch="page.data" class="watch-module w-full" />
      </a>
      <div class="zoom-controls w-full z-10 flex justify-center">
        <button
          @click="toggleZoom"
          aria-label="Open zoom modal"
          class="open-zoom-modal hide-desktop p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0.09999999999999998 0.09999999999999998 13.8 13.8"
            height="14"
            width="14"
            stroke-width="0.8"
            class="w-5 h-5"
          >
            <g>
              <line
                x1="5.5"
                y1="5.5"
                x2="0.5"
                y2="0.5"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></line>
              <polyline
                points="4.5 0.5 0.5 0.5 0.5 4.5"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></polyline>
              <line
                x1="8.5"
                y1="8.5"
                x2="13.5"
                y2="13.5"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></line>
              <polyline
                points="9.5 13.5 13.5 13.5 13.5 9.5"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></polyline>
            </g>
          </svg>
        </button>
        <div
          class="zoom-modal fixed top-0 left-0 right-0 bottom-0"
          :class="{
            'active pointer-events-auto opacity-100': zoomState,
            'inactive pointer-events-none opacity-0': !zoomState,
          }"
          ref="modal"
          @keyup.esc="closeZoom()"
          tabindex="-1"
        >
          <div
            class="
              zoom-modal-header
              z-10
              fixed
              top-0
              left-0
              w-full
              px-2
              flex
              justify-between
            "
          >
            <button
              @click="toggleZoom"
              aria-label="Close zoom modal"
              class="p-4"
            >
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
            <button
              @click="toggleCard"
              aria-label="Toggle card for scale"
              class="p-4 relative"
            >
              <svg
                v-if="scaleCard"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
                height="14"
                width="14"
                class="my-2 w-5 h-5 absolute top-4 left-4"
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
            class="watch-pan-zoom relative cursor-move"
            :class="{ 'scale-card-visible': scaleCard }"
            selector=".watch-module-zoom"
            :options="watchZoomOptions"
          >
            <WatchModule
              :watch="page.data"
              class="watch-module-zoom mx-auto w-full"
            />
          </panZoom>
          <div
            class="
              zoom-modal-footer
              z-10
              fixed
              bottom-0
              left-0
              w-full
              px-2
              flex
              justify-between
            "
          >
            <button @click="resetZoom()" aria-label="Reset zoom" class="p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0.09999999999999998 0.09999999999999998 13.8 13.8"
                height="14"
                width="14"
                stroke-width="0.8"
                class="my-2 w-5 h-5"
              >
                <g>
                  <path
                    d="M.5,7A6.5,6.5,0,1,0,7,.5a7.23,7.23,0,0,0-5,2"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <polyline
                    points="2.5 0.5 2 2.5 4 3"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></polyline>
                </g>
              </svg>
            </button>
            <ModeSwitcher class="top-6 right-4" />
          </div>
        </div>
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
      watchZoomOptions: {
        minZoom: 0.3,
        maxZoom: 2,
        initialZoom: 1,
        zoomSpeed: 0.05,
        bounds: true,
        boundsPadding: 0.5,
        transformOrigin: { x: 0.5, y: 0.5 },
        smoothScroll: false,
      },
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
  mounted() {
    this.$panZoom(
      document.querySelector(".watch-module-zoom"),
      this.watchZoomOptions
    );
  },
  methods: {
    toggleCard() {
      this.scaleCard = !this.scaleCard;
    },
    toggleZoom() {
      if (this.zoomState) {
        this.closeZoom();
      } else {
        this.openZoom();
      }
    },
    closeZoom() {
      document.body.classList.remove("overflow-hidden");
      this.resetZoom();
      this.zoomState = false;
      this.scaleCard = false;
    },
    openZoom() {
      document.body.classList.add("overflow-hidden");
      this.zoomState = true;
      this.$refs.modal.focus();
    },
    resetZoom() {
      this.$panZoom(
        document.querySelector(".watch-module-zoom"),
        this.watchZoomOptions
      ).zoomAbs(0, 0, 1);
    },
  },
};
</script>
<style scoped>
.watch-year {
  color: var(--color-fade-50);
}
.zoom-modal {
  background-color: var(--bg-secondary);
  color: var(--color-secondary);
  z-index: 90;
  transition: background-color 0.3s ease, opacity 0.3s ease;
}
.watch-module-zoom {
  transition: transform 0.1s ease;
}

.zoom-modal.inactive .watch-module-zoom {
  transition: transform 0.1s ease 0.3s;
}
</style>

<style>
.scale-card-visible .scale-card {
  opacity: 0.5;
}
</style>