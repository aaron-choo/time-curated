<template>
  <div>
    <Bounded
      as="div"
      yPadding="xs"
      class="
        relative
        min-h-[400px]
        h-[calc(100vh-133px)]
        md:h-[calc(100vh-243px)]
        flex flex-col
        gap-12
        items-center
        justify-center
        text-center
        pb-24
        mx-auto
        max-w-sm
        md:max-w-2xl
      "
    >
      <div>
        <prismicRichText
          :field="page.data.city"
          class="article-category font-sans uppercase text-xs font-medium"
        ></prismicRichText>
      </div>
      <Heading as="h1" size="6xl" class="title text-center">
        <span
          v-if="page.data.title.slice(0, 20) != 'Collectors Dialogue:'"
          class="capitalize italic block"
          >{{ page.data.article_category.uid.replace(/-/g, " ") }}</span
        >
        <span v-if="page.data.title.slice(0, 20) === 'Collectors Dialogue:'"
          ><em>Collectors Dialogue</em><br />{{
            page.data.title.slice(20)
          }}</span
        >
        <span v-else>{{ page.data.title }}</span>
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
      <div class="absolute bottom-8 left-0 right-0">
        <button id="scroll-to-content" @click="this.scrollToContent">
          <svg
            v-if="$device.isDesktop"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0.09999999999999998 0.09999999999999998 13.8 13.8"
            height="14"
            width="14"
            stroke-width="0.8"
            class="w-5 h-5"
          >
            <g>
              <rect
                x="2.5"
                y="0.5"
                width="9"
                height="13"
                rx="4.5"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></rect>
              <line
                x1="7"
                y1="3.5"
                x2="7"
                y2="5"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></line>
            </g>
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0.09999999999999998 0.09999999999999998 13.8 13.8"
            height="14"
            width="14"
            stroke-width="0.8"
            class="w-5 h-5"
          >
            <path
              d="M10.5,6.13a2,2,0,0,1,1.59,2.24l-.61,4.27a1,1,0,0,1-1,.86H4a1,1,0,0,1-.93-.63L2,10.21A2,2,0,0,1,3,7.68L4.35,7V2a1.5,1.5,0,0,1,3,0V5.5Z"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
      </div>
    </Bounded>
    <template v-if="page.data.images.length == 1">
      <nuxt-img
        format="webp"
        :src="page.data.images[0].image.url"
        sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
        :width="page.data.images[0].image.width"
        :height="page.data.images[0].image.height"
        class="article-banner w-full"
        loading="lazy"
      />
    </template>
    <template v-if="page.data.images.length > 1">
      <div ref="bannerSlider" class="swiper banner-slider mb-2">
        <div class="swiper-wrapper">
          <div
            v-for="(item, index) in page.data.images"
            :key="index"
            class="swiper-slide"
          >
            <nuxt-img
              format="webp"
              :src="item.image.url"
              sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
              :width="item.image.dimensions.width"
              :height="item.image.dimensions.height"
              class="slide-image relative w-auto rounded-[3px]"
              loading="lazy"
            />
            <PrismicRichText
              v-if="item.caption.length > 0"
              :field="item.caption"
              class="
                slide-caption
                absolute
                bottom-0
                left-0
                right-0
                p-1
                pt-4
                rounded-[3px]
                text-xs
                font-sans
              "
            />
          </div>
        </div>
      </div>
      <!-- 
      <nuxt-img
        format="webp"
        :src="page.data.images[0].image.url"
        sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
        :width="page.data.images[0].image.width"
        :height="page.data.images[0].image.height"
        class="article-banner w-full"
        loading="lazy"
      /> -->
    </template>
    <SliceZone
      v-if="page.data.slices"
      :slices="page.data.slices"
      :components="components"
      :context="page"
      class="article-content mb-16"
    />
  </div>
</template>
  <script>
import { components } from "~/slices";
import Swiper from "swiper/swiper-bundle.min";
import "swiper/swiper-bundle.min.css";
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
    if (page) {
      return {
        page: page,
        relatedArticles: relatedArticles.results,
        params: params,
      };
    } else {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
  data() {
    return {
      components,
    };
  },
  async mounted() {
    await this.$nextTick();
    new Swiper(this.$refs.bannerSlider, {
      effect: "slide",
      slidesPerView: "auto",
      spaceBetween: 8,
      centeredSlides: true,
      loop: false,
      autoplay: {
        delay: 8000,
        disableOnInteraction: false,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      mousewheel: {
        releaseOnEdges: true,
        forceToAxis: true,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
    });
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
          content: this.page.data.keywords,
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
  computed: {
    settings() {
      return this.$store.state.prismic.settings;
    },
  },
  methods: {
    scrollToContent() {
      document
        .querySelector(".article-content")
        .scrollIntoView({ behavior: "smooth", block: "start" });
    },
  },
};
</script>
<style scoped>
.article-content {
  scroll-margin-top: 50vh;
}
#scroll-to-content {
  animation: bounce 2s infinite;
}
.mobile #scroll-to-content {
  animation: bounce-2 2s infinite;
}
@keyframes bounce-2 {
  0% {
    transform: translateY(0) rotate(-90deg);
  }

  30% {
    transform: translateY(-20px) rotate(-45deg);
  }

  50% {
    transform: translateY(0) rotate(-90deg);
  }

  100% {
    transform: translateY(0) rotate(-90deg);
  }
}
@keyframes bounce {
  0% {
    transform: translateY(0);
  }

  30% {
    transform: translateY(-10px);
  }

  50% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(0);
  }
}
.banner-slider .swiper-slide {
  width: auto;
}

.banner-slider .slide-image {
  height: 55vw;
  max-width: calc(100vw - 32px);
  object-fit: cover;
}
.slide-caption {
  color: var(--color-accent);
  text-shadow: -1px -1px 0 var(--bg-accent), 0 -1px 0 var(--bg-accent),
    1px -1px 0 var(--bg-accent), 1px 0 0 var(--bg-accent),
    1px 1px 0 var(--bg-accent), 0 1px 0 var(--bg-accent),
    -1px 1px 0 var(--bg-accent), -1px 0 0 var(--bg-accent);
}
</style>