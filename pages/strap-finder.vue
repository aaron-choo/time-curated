<template>
  <div>
    <div class="slider-container prevent-select">
      <Bounded
        as="div"
        :secondaryBackground="true"
        yPadding="none"
        class="relative overflow-hidden"
      >
        <div class="strap-finder-module relative">
          <div class="watch-case-container">
            <WatchModule
              :watch="currentWatch.data"
              class="strap-finder hide-strap lg:w-1/3 lg:mx-auto no-shadow"
            />
            <!-- <div class="swiper watch-case" ref="watchCases">
              <div class="swiper-wrapper">
                <div
                  v-for="(watch, index) in watches"
                  :key="index"
                  class="swiper-slide"
                >
                  <WatchModule
                    :watch="watch.data"
                    class="strap-finder hide-strap"
                  />
                </div>
              </div>
            </div> -->
          </div>
          <div
            class="watch-strap-container absolute top-0 left-0 right-0 bottom-0"
          >
            <div class="swiper watch-strap" ref="watchStraps">
              <div class="swiper-wrapper">
                <template v-for="strap in straps">
                  <div
                    v-if="
                      strap.data.top_image.url && strap.data.bottom_image.url
                    "
                    class="swiper-slide watch-strap"
                    :data-hash="strap.uid"
                  >
                    <div
                      class="
                        strap-wrapper
                        relative
                        w-full
                        h-full
                        max-h-screen max-w-[60vh]
                        mx-auto
                        prevent-select
                        aspect-[0.6]
                      "
                    >
                      <div class="absolute w-full h-full">
                        <nuxt-img
                          v-if="strap.data.top_image.url"
                          format="webp"
                          :src="strap.data.top_image.url"
                          sizes="sm:100vw md:100vw lg:33vw xl:572px 2xl:572px"
                          :width="strap.data.top_image.dimensions.width"
                          :height="strap.data.top_image.dimensions.height"
                          class="
                            watch-strap-top
                            h-auto
                            transform
                            w-[67%]
                            mx-auto
                            -translate-y-[78%]
                          "
                          loading="lazy"
                          placeholder
                        />
                      </div>
                      <div class="absolute w-full h-full">
                        <nuxt-img
                          v-if="strap.data.bottom_image.url"
                          format="webp"
                          :src="strap.data.bottom_image.url"
                          sizes="sm:100vw md:100vw lg:33vw xl:572px 2xl:572px"
                          :width="strap.data.bottom_image.dimensions.width"
                          :height="strap.data.bottom_image.dimensions.height"
                          class="
                            watch-strap-bottom
                            h-auto
                            transform
                            w-[67%]
                            mx-auto
                            translate-y-[49%]
                          "
                          loading="lazy"
                          placeholder
                        />
                      </div>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </Bounded>
      <Bounded as="div" yPadding="xs">
        <div class="grid lg:grid-cols-2 gap-12">
          <div>
            <ProductSummary :product="currentStrap.data" />
            <div class="grid grid-cols-2 gap-2 mb-4">
              <PrismicLink :field="currentStrap">
                <button
                  id="shop-now"
                  class="
                    btn
                    w-full
                    text-sm
                    uppercase
                    font-sans
                    hover:opacity-80
                    font-medium
                    border border-px
                  "
                >
                  <span
                    v-if="this.$store.state.prismic.settings.lang == 'zh-cn'"
                    >立即选购</span
                  ><span v-else>Shop Now</span>
                </button>
              </PrismicLink>
              <PrismicLink :field="currentStrap" class="pointer-events-none">
                <button
                  id="strap-sizing"
                  class="
                    btn
                    w-full
                    text-sm
                    uppercase
                    font-sans
                    hover:opacity-80
                    font-medium
                    border border-px
                    inactive
                  "
                >
                  <span
                    v-if="this.$store.state.prismic.settings.lang == 'zh-cn'"
                    >表带尺码</span
                  ><span v-else>Strap sizing</span>
                </button>
              </PrismicLink>
            </div>
            <ul
              class="
                grid grid-cols-5
                md:grid-cols-6
                lg:grid-cols-5
                xl:grid-cols-6
                items-start
                gap-2
              "
            >
              <template v-for="(strap, index) in straps">
                <li
                  v-if="strap.data.top_image.url && strap.data.bottom_image.url"
                  class="aspect-1 overflow-hidden"
                >
                  <a :href="'#' + strap.uid">
                    <button
                      @click="changeStrap(strap)"
                      :key="index"
                      class="
                        strap-option-button
                        option-button
                        relative
                        w-full
                        h-full
                        rounded-[3px]
                      "
                      :class="strap.uid"
                    >
                      <div class="absolute w-full h-full top-0 pt-2">
                        <nuxt-img
                          v-if="strap.data.bottom_image.url"
                          format="webp"
                          :src="strap.data.bottom_image.url"
                          sizes="sm:20vw md:16vw lg:10vw xl:10vw 2xl:192px"
                          :width="strap.data.bottom_image.dimensions.width"
                          :height="strap.data.bottom_image.dimensions.height"
                          class="w-full h-auto transform mx-auto"
                          loading="lazy"
                          placeholder
                          quality="10"
                        />
                      </div>
                    </button>
                  </a>
                </li>
              </template>
            </ul>
          </div>
          <div>
            <div class="watch-summary mb-4">
              <h2
                class="
                  my-2
                  leading-tight
                  watch-title
                  my-0
                  text-2xl
                  lg:text-right
                "
              >
                {{ currentWatch.data.title }}
              </h2>
              <p
                class="
                  my-2
                  leading-tight
                  product-price
                  my-2
                  text-lg
                  lg:text-right
                "
              >
                {{ settings.data.lug_width_text }}:
                {{ $prismic.asText(currentWatch.data.lug_width) }}
              </p>
            </div>
            <div class="grid grid-cols-2 gap-2 mb-4">
              <div class="hidden lg:block"></div>
              <PrismicLink :field="currentWatch">
                <button
                  id="shop-now"
                  class="
                    btn
                    w-full
                    text-sm
                    uppercase
                    font-sans
                    hover:opacity-80
                    font-medium
                    border border-px
                  "
                >
                  <span
                    v-if="this.$store.state.prismic.settings.lang == 'zh-cn'"
                    >立即探索</span
                  ><span v-else>Learn more</span>
                </button>
              </PrismicLink>
            </div>
            <ul
              class="
                grid grid-cols-5
                md:grid-cols-6
                lg:grid-cols-5
                xl:grid-cols-6
                items-start
                gap-2
              "
            >
              <li
                v-for="(watch, index) in watches"
                class="aspect-1 overflow-hidden"
              >
                <button
                  :key="index"
                  @click="changeWatch(watch)"
                  class="
                    watch-option-button
                    option-button
                    relative
                    w-full
                    h-full
                    rounded-[3px]
                  "
                  :class="watch.uid"
                >
                  <div>
                    <WatchModule
                      :watch="watch.data"
                      class="
                        strap-finder
                        hide-strap
                        transform
                        -translate-y-[20%]
                      "
                    />
                  </div>
                </button>
              </li>
            </ul>
          </div>

          <!-- <div class="w-full">
            <div
              class="swiper watch-strap-thumbnails"
              ref="watchStrapsThumbnails"
            >
              <ul class="swiper-wrapper">
                <template v-for="(strap, index) in straps">
                  <li
                    v-if="
                      strap.data.top_image.url && strap.data.bottom_image.url
                    "
                    :key="index"
                    class="swiper-slide cursor-pointer"
                  >
                    <button
                      class="
                        option-button
                        relative
                        w-full
                        h-full
                        mx-auto
                        aspect-1
                        rounded-[3px]
                      "
                    >
                      <div class="absolute w-full h-full top-0 pt-2">
                        <nuxt-img
                          v-if="strap.data.bottom_image.url"
                          format="webp"
                          :src="strap.data.bottom_image.url"
                          sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
                          :width="strap.data.bottom_image.dimensions.width"
                          :height="strap.data.bottom_image.dimensions.height"
                          class="
                            watch-strap-bottom
                            w-full
                            h-auto
                            transform
                            mx-auto
                          "
                          loading="lazy"
                        />
                      </div>
                    </button>
                  </li>
                </template>
              </ul>
              <div class="swiper-scrollbar"></div>
            </div>
          </div> -->
        </div>
      </Bounded>
    </div>
    <SliceZone
      :slices="page.data.slices"
      :components="components"
      :context="page"
    />
  </div>
</template>

<script>
import { components } from "~/slices";
import Swiper from "swiper/swiper-bundle.min";
import "swiper/swiper-bundle.min.css";
export default {
  async asyncData({ $prismic, store, i18n, query, error }) {
    const lang = i18n.locale;
    const page = await $prismic.api.getByUID("page", "strap-finder", {
      lang,
    });
    const watches = await $prismic.api.query(
      $prismic.predicates.at("document.type", "collection"),
      {
        lang: lang,
        orderings: "[document.last_publication_date desc]",
        pageSize: 24,
      }
    );
    const straps = await $prismic.api.query(
      [
        $prismic.predicates.at("document.type", "product"),
        $prismic.predicates.at("my.product.strap_finder", true),
      ],
      {
        lang: lang,
        orderings: "[my.product.uid]",
        pageSize: 24,
      }
    );
    if (query.watch) {
      var currentWatch = await $prismic.api.getByUID(
        "collection",
        query.watch,
        { lang }
      );
    } else {
      var currentWatch = watches.results[0];
    }
    await store.dispatch("prismic/load", { lang, page });
    if (page) {
      return {
        page,
        watches: watches.results,
        currentWatch,
        straps: straps.results,
        currentStrap: straps.results[0],
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
          content: [this.page.data.title, this.page.data.keywords].join(", "),
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
  async mounted() {
    await this.$nextTick();
    const strapSwiper = new Swiper(this.$refs.watchStraps, {
      effect: "slide",
      hashNavigation: {
        watchState: true,
      },
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: true,
      breakpoints: {
        // when window width is >= 320px
        768: {
          slidesPerView: 1,
        },
        // when window width is >= 480px
        1024: {
          slidesPerView: 3,
        },
        // when window width is >= 640px
        1280: {
          slidesPerView: 3,
        },
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      mousewheel: {
        releaseOnEdges: true,
        forceToAxis: true,
      },
    });
    document
      .getElementsByClassName("watch-option-button " + this.currentWatch.uid)[0]
      .classList.add("active");
    // document.getElementsByClassName(
    //   "strap-option-button " + this.currentStrap.uid
    // )[0].className += " active";
    window.addEventListener("hashchange", this.setStrap);
    this.setStrap();
  },
  destroyed() {
    window.removeEventListener("hashchange", this.setStrap);
  },
  computed: {
    settings() {
      return this.$store.state.prismic.settings;
    },
  },
  methods: {
    changeWatch(watch) {
      document
        .querySelector(".watch-option-button.active")
        .classList.remove("active");
      this.currentWatch = watch;
      document
        .querySelector(".watch-option-button." + watch.uid)
        .classList.add("active");
      this.$router.push({
        path: this.$route.path,
        query: { watch: watch.uid },
        hash: this.$route.hash,
      });
    },
    setStrap() {
      if (this.$route.hash) {
        this.currentStrap = this.straps.filter(
          (strap) => strap.uid == this.$route.hash.substring(1)
        )[0];
      }
      this.changeStrap(this.currentStrap);
    },
    changeStrap(strap) {
      if (document.querySelector(".strap-option-button.active")) {
        document
          .querySelector(".strap-option-button.active")
          .classList.remove("active");
      }
      this.currentStrap = strap;
      document
        .querySelector(".strap-option-button." + strap.uid)
        .classList.add("active");
    },
  },
};
</script>
<style scoped>
.strap-finder-module {
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.2));
}
.option-button {
  background: var(--bg-secondary);
}
#shop-now {
  background: var(--color);
  color: var(--bg);
  border-color: var(--color);
}
</style>
<style>
.watch-strap-thumbnails .swiper-slide::after,
.option-button::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 3px;
  border: 2px solid;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.watch-strap-thumbnails .swiper-slide-thumb-active::after,
.option-button.active::after {
  opacity: 1;
}
</style>