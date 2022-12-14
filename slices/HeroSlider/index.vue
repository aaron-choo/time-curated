<template>
  <section ref="heroSlider" class="swiper hero-slider">
    <div class="swiper-wrapper">
      <div
        v-for="(item, index) in slice.items"
        :key="index"
        class="swiper-slide"
      >
        <nuxt-img
          v-if="context.uid === 'home'"
          format="webp"
          :src="item.image.url"
          sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
          :width="item.image.dimensions.width"
          :height="item.image.dimensions.height"
          class="
            slide-image
            w-full
            min-h-[400px]
            h-[calc(100vh-71px)]
            md:h-[calc(100vh-180px)]
            object-cover
            relative
          "
          :loading="index < 0 ? 'lazy' : null"
          placeholder
        />
        <nuxt-img
          v-else
          format="webp"
          :src="item.image.url"
          sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
          :width="item.image.dimensions.width"
          :height="item.image.dimensions.height"
          class="
            slide-image
            w-full
            min-h-[400px]
            h-[calc(100vh-119px)]
            md:h-[calc(100vh-228px)]
            object-cover
            relative
          "
          placeholder
        />
        <!-- <nuxt-img
          v-if="index == 0"
          format="webp"
          :src="item.image.url + '&blur=10'"
          sizes="sm:10px"
          :width="item.image.dimensions.width"
          :height="item.image.dimensions.height"
          class="
            slide-image
            w-full
            h-full
            top-0
            left-0
            object-cover
            absolute
            -z-10
          "
          :loading="index < 0 ? 'lazy' : null"
          quality="10"
          placeholder
        /> -->

        <Bounded
          as="div"
          class="
            slide-overlay
            absolute
            top-0
            left-0
            right-0
            bottom-0
            flex
            items-end
          "
          :style="
            'color:' +
            item.text_color +
            ';background-image:linear-gradient(' +
            item.overlay_color +
            '00,' +
            item.overlay_color +
            '80);'
          "
        >
          <div class="slide-meta-container grid grid-cols-12 gap-8 mb-4">
            <div class="slide-meta col-span-10 md:col-span-6">
              <PrismicRichText
                v-if="item.subtitle.length > 0"
                :field="item.subtitle"
                class="slide-subtitle text-2xl md:text-3xl italic"
              />
              <PrismicRichText
                v-if="item.title.length > 0"
                :field="item.title"
                class="slide-title text-2xl md:text-3xl leading-none mb-2"
              />
              <PrismicRichText
                v-if="item.description.length > 0"
                :field="item.description"
                class="slide-description font-sans text-xs md:text-sm"
              />
            </div>
          </div>

          <div class="slide-cta flex justify-between items-end">
            <div class="swiper-pagination"></div>
            <PrismicLink
              v-if="item.link.url && item.button_text"
              :field="item.link"
            >
              <button
                class="
                  btn
                  w-fit
                  text-sm
                  uppercase
                  font-sans
                  hover:opacity-80
                  font-medium
                  border
                "
              >
                <span>{{ item.button_text }}</span>
              </button>
            </PrismicLink>
          </div>
        </Bounded>
      </div>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";
import Swiper from "swiper/swiper-bundle.min";
import "swiper/swiper-bundle.min.css";

export default {
  name: "HeroSlider",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
  async mounted() {
    await this.$nextTick();
    if (this.slice.items.length === 1) {
      new Swiper(this.$refs.heroSlider, {
        effect: "fade",
        allowSlideNext: false,
        allowSlidePrev: false,
      });
    } else {
      new Swiper(this.$refs.heroSlider, {
        effect: "fade",
        loop: true,
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
    }
  },
};
</script>

<style>
.swiper.hero-slider .swiper-pagination {
  position: relative;
  display: flex;
  gap: 4px;
  justify-content: flex-start;
  bottom: 0;
  width: fit-content;
  margin-top: 2rem;
}
.swiper.hero-slider .swiper-pagination-bullet {
  width: 40px;
  height: 3px;
  display: inline-block;
  position: relative;
  border: none;
  border-radius: 0;
  background: #ffffff80;
  opacity: 1;
  overflow: hidden;
  margin: 0;
}

.swiper.hero-slider .swiper-pagination-bullet::after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  opacity: 0;
  transform-origin: left;
}

.swiper.hero-slider
  .swiper-pagination-bullet.swiper-pagination-bullet-active::after {
  opacity: 1;
  animation: grow 8s normal forwards linear;
}
@keyframes grow {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

.swiper.hero-slider .swiper-slide .slide-meta {
  transform: translateY(1rem);
}

.swiper.hero-slider .swiper-slide .slide-meta,
.swiper.hero-slider .swiper-slide .slide-cta button {
  opacity: 0;
  transition: all 0.8s ease-out 0.3s;
}
.swiper.hero-slider .swiper-slide-visible.swiper-slide-active .slide-meta,
.swiper.hero-slider
  .swiper-slide-visible.swiper-slide-active
  .slide-cta
  button {
  opacity: 1;
  transform: translateY(0);
}
</style>
