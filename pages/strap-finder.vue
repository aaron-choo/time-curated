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
            <WatchModule
              :watch="currentWatch.data"
              class="strap-finder hide-strap lg:w-1/3 lg:mx-auto"
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
                          sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
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
                            h-auto
                            transform
                            w-[67%]
                            mx-auto
                            translate-y-[49%]
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
        <ProductSummary :product="currentStrap.data" :variant="null" />
        <div class="grid lg:grid-cols-2 gap-2">
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
                    class="strap-finder hide-strap transform -translate-y-[20%]"
                  />
                </div>
              </button>
            </li>
          </ul>
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
                </a>
              </li>
            </template>
          </ul>
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
    try {
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
          orderings: "[document.last_publication_date desc]",
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
      return {
        page,
        watches: watches.results,
        currentWatch,
        straps: straps.results,
        currentStrap: straps.results[0],
      };
    } catch (e) {
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
.option-button {
  background: var(--bg-secondary);
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