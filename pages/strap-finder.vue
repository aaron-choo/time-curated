<template>
  <div>
    <div class="slider-container prevent-select">
      <Bounded
        as="div"
        :secondaryBackground="true"
        yPadding="none"
        class="relative overflow-hidden"
      >
        <div class="relative">
          <div class="watch-case-container">
            <div class="swiper watch-case" ref="watchCases">
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
            </div>
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
                    class="swiper-slide"
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
                          sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
                          :width="strap.data.top_image.dimensions.width"
                          :height="strap.data.top_image.dimensions.height"
                          class="
                            watch-strap-top
                            w-full
                            h-auto
                            transform
                            w-[63%]
                            mx-auto
                            -translate-y-[77%]
                          "
                          loading="lazy"
                        />
                      </div>
                      <div class="absolute w-full h-full">
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
                            w-[63%]
                            mx-auto
                            translate-y-[52.5%]
                          "
                          loading="lazy"
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
      <Bounded as="div">
        <div
          class="swiper product-image-thumbnail mx-4"
          ref="watchCasesThumbnails"
        >
          <ul class="swiper-wrapper">
            <li
              v-for="(watch, index) in watches"
              :key="index"
              class="swiper-slide"
            >
              <WatchModule :watch="watch.data" class="hide-strap" />
            </li>
          </ul>
          <div class="swiper-scrollbar"></div>
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
  async asyncData({ $prismic, store, i18n }) {
    const lang = i18n.locale;
    const page = await $prismic.api.getByUID("page", "strap-finder", { lang });
    const watches = await $prismic.api.query(
      $prismic.predicates.at("document.type", "collection"),
      {
        lang: lang,
        orderings: "[document.last_publication_date desc]",
        pageSize: 24,
      }
    );
    const straps = await $prismic.api.query(
      $prismic.predicates.at("document.type", "product"),
      {
        lang: lang,
        orderings: "[document.last_publication_date desc]",
        pageSize: 24,
      }
    );
    await store.dispatch("prismic/load", { lang, page });
    return {
      page,
      watches: watches.results,
      straps: straps.results,
    };
  },
  data() {
    return { components };
  },
  head() {
    return {
      title: `${this.page.data.title} - ${this.$prismic.asText(
        this.$store.state.prismic.settings.data.siteTitle
      )}`,
    };
  },
  async mounted() {
    await this.$nextTick();
    let thumb = new Swiper(this.$refs.watchCasesThumbnails, {
      watchSlidesProgress: true,
      mousewheel: {
        releaseOnEdges: true,
      },
      slidesPerView: 4.5,
      slidesPerGroup: 3,
      spaceBetween: 8,
      breakpoints: {
        // when window width is >= 320px
        768: {
          slidesPerView: 5.5,
        },
        // when window width is >= 480px
        1024: {
          slidesPerView: 6.5,
        },
        // when window width is >= 640px
        1280: {
          slidesPerView: 7.5,
        },
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
        hide: true,
      },
    });
    new Swiper(this.$refs.watchCases, {
      effect: "fade",
      loop: true,
      spaceBetween: 8,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      mousewheel: {
        releaseOnEdges: true,
        forceToAxis: true,
      },
      navigation: {
        nextEl: ".image.swiper-button-next",
        prevEl: ".image.swiper-button-prev",
      },
      thumbs: {
        swiper: thumb,
        autoScrollOffset: 1,
      },
    });
  },
};
</script>
