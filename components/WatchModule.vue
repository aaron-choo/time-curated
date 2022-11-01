<template>
  <div>
    <div class="watch-wrapper relative w-full h-full m-auto">
      <div class="watch-base w-full h-full absolute top-0 overflow-hidden">
        <nuxt-img
          v-if="watch.watch_strap.url"
          format="webp"
          :src="watch.watch_strap.url"
          sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
          :width="watch.watch_strap.dimensions.width"
          :height="watch.watch_strap.dimensions.height"
          :style="watch.watch_strap_position"
          class="watch-strap"
          loading="lazy"
        />
        <nuxt-img
          v-if="watch.watch_case.url"
          format="webp"
          :src="watch.watch_case.url"
          sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
          :width="watch.watch_case.dimensions.width"
          :height="watch.watch_case.dimensions.height"
          :style="watch.watch_case_position"
          class="watch-case"
          loading="lazy"
        />
        <nuxt-img
          v-if="watch.watch_chrono_hour.url"
          format="webp"
          :src="watch.watch_chrono_hour.url"
          sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
          :width="watch.watch_chrono_hour.dimensions.width"
          :height="watch.watch_chrono_hour.dimensions.height"
          :style="watch.watch_chrono_hour_position"
          class="watch-chrono-hour"
          loading="lazy"
        />
        <nuxt-img
          v-if="watch.watch_chrono_minute.url"
          format="webp"
          :src="watch.watch_chrono_minute.url"
          sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
          :width="watch.watch_chrono_minute.dimensions.width"
          :height="watch.watch_chrono_minute.dimensions.height"
          :style="watch.watch_chrono_minute_position"
          class="watch-chrono-minute"
          loading="lazy"
        />
        <nuxt-img
          v-if="watch.watch_hour.url"
          format="webp"
          :src="watch.watch_hour.url"
          sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
          :width="watch.watch_hour.dimensions.width"
          :height="watch.watch_hour.dimensions.height"
          :style="watch.watch_hour_position"
          class="watch-hour"
          loading="lazy"
        />
        <nuxt-img
          v-if="watch.watch_minute.url"
          format="webp"
          :src="watch.watch_minute.url"
          sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
          :width="watch.watch_minute.dimensions.width"
          :height="watch.watch_minute.dimensions.height"
          :style="watch.watch_minute_position"
          class="watch-minute"
          loading="lazy"
        />
        <nuxt-img
          v-if="watch.watch_second.url"
          format="webp"
          :src="watch.watch_second.url"
          sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
          :width="watch.watch_second.dimensions.width"
          :height="watch.watch_second.dimensions.height"
          :style="watch.watch_second_position"
          class="watch-second"
          loading="lazy"
        />
        <nuxt-img
          v-if="watch.watch_chrono_second.url"
          format="webp"
          :src="watch.watch_chrono_second.url"
          sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
          :width="watch.watch_chrono_second.dimensions.width"
          :height="watch.watch_chrono_second.dimensions.height"
          :style="watch.watch_chrono_second_position"
          class="watch-chrono-second"
          loading="lazy"
        />
      </div>
      <svg
        id="svg54373"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 226.5605 359.2807"
        class="
          scale-card
          absolute
          top-0
          left-1/2
          transform
          -translate-x-1/2
          -rotate-90
          opacity-0
        "
        style="width: 90%; fill: currentColor"
      >
        <path
          d="M226.5605,340.7723V18.5084A18.5084,18.5084,0,0,0,208.0521,0H18.5084A18.5084,18.5084,0,0,0,0,18.5084V340.7723a18.5084,18.5084,0,0,0,18.5084,18.5084H208.0521A18.5084,18.5084,0,0,0,226.5605,340.7723ZM79.89,38.9957v-1.36H77.33v-1.52H79.89V30.5739a42.1944,42.1944,0,0,1,9.9824,1.34l-.12,1.7407c-1.8408-.44-7.3018-1.7207-8.4424-1.8008v4.2613h4.3418l.18,1.52H81.31v1.5205ZM77.33,54.5558V46.5939l1.32-.16c3.2207,3.9805,5.2012,6.1211,7.2413,6.1211,1.541,0,2.4609-1.24,2.48-5.7412l1.52.14c.0606,5.6011-1.56,7.2017-3.62,7.2017-2.541,0-4.541-2.1006-7.5224-5.7813v6.1812Zm2.5606,16.44v-1.36H77.33v-1.52H79.89V62.5739a42.1944,42.1944,0,0,1,9.9824,1.34l-.12,1.7407c-1.8408-.44-7.3018-1.7207-8.4424-1.8008v4.2613h4.3418l.18,1.52H81.31v1.52Zm45.1961,7.1869a5.8491,5.8491,0,0,1-5.8491-5.8492V37.2108a5.8491,5.8491,0,0,1,5.8491-5.8492h25.0064a5.8492,5.8492,0,0,1,5.8492,5.8492V72.3334a5.8492,5.8492,0,0,1-5.8492,5.8492ZM77.33,86.5558V78.5939l1.32-.16c3.2207,3.98,5.2012,6.1211,7.2413,6.1211,1.541,0,2.4609-1.24,2.48-5.7412l1.52.14c.0606,5.6011-1.56,7.2017-3.62,7.2017-2.541,0-4.541-2.1006-7.5224-5.7813v6.1812Zm2.5606,32.44v-1.36H77.33v-1.52H79.89v-5.5415a42.1944,42.1944,0,0,1,9.9824,1.34l-.12,1.7407c-1.8408-.44-7.3018-1.7207-8.4424-1.8008v4.2613h4.3418l.18,1.52H81.31v1.52Zm-2.5606,15.56v-7.9619l1.32-.16c3.2207,3.9805,5.2012,6.1211,7.2413,6.1211,1.541,0,2.4609-1.24,2.48-5.7412l1.52.14c.0606,5.6011-1.56,7.2017-3.62,7.2017-2.541,0-4.541-2.1006-7.5224-5.7813v6.1812Zm2.5606,16.44v-1.36H77.33v-1.52H79.89v-5.5415a42.1944,42.1944,0,0,1,9.9824,1.34l-.12,1.7407c-1.8408-.44-7.3018-1.7207-8.4424-1.8008v4.2613h4.3418l.18,1.52H81.31v1.52Zm-2.5606,15.56v-7.9619l1.32-.16c3.2207,3.9805,5.2012,6.1211,7.2413,6.1211,1.541,0,2.4609-1.24,2.48-5.7412l1.52.14c.0606,5.6011-1.56,7.2017-3.62,7.2017-2.541,0-4.541-2.1006-7.5224-5.7813v6.1812Zm2.5606,32.44v-1.36H77.33v-1.52H79.89v-5.5411a42.144,42.144,0,0,1,9.9824,1.34l-.12,1.74c-1.8408-.4394-7.3018-1.72-8.4424-1.8v4.2608h4.3418l.18,1.52H81.31v1.52Zm-2.5606,15.56v-7.9619l1.32-.16c3.2207,3.9815,5.2012,6.1221,7.2413,6.1221,1.541,0,2.4609-1.24,2.48-5.7412l1.52.14c.0606,5.6016-1.56,7.2012-3.62,7.2012-2.541,0-4.541-2.1006-7.5224-5.7813v6.1817Zm2.5606,16.44v-1.36H77.33v-1.52H79.89v-5.5411a42.144,42.144,0,0,1,9.9824,1.34l-.12,1.74c-1.8408-.4394-7.3018-1.72-8.4424-1.8v4.2608h4.3418l.18,1.52H81.31v1.52Zm-2.5606,15.56v-7.9619l1.32-.16c3.2207,3.9815,5.2012,6.1221,7.2413,6.1221,1.541,0,2.4609-1.24,2.48-5.7412l1.52.14c.0606,5.6016-1.56,7.2012-3.62,7.2012-2.541,0-4.541-2.1006-7.5224-5.7813v6.1817Zm2.5606,32.44v-1.36H77.33v-1.52H79.89v-5.5411a42.144,42.144,0,0,1,9.9824,1.34l-.12,1.74c-1.8408-.4394-7.3018-1.72-8.4424-1.8v4.2608h4.3418l.18,1.52H81.31v1.5205Zm-2.5606,15.56v-7.9619l1.32-.16c3.2207,3.9815,5.2012,6.1221,7.2413,6.1221,1.541,0,2.4609-1.24,2.48-5.7412l1.52.14c.0606,5.6016-1.56,7.2012-3.62,7.2012-2.541,0-4.541-2.1006-7.5224-5.7813v6.1817Zm2.5606,16.44v-1.36H77.33v-1.52H79.89v-5.5411a42.144,42.144,0,0,1,9.9824,1.34l-.12,1.74c-1.8408-.4394-7.3018-1.72-8.4424-1.8v4.2608h4.3418l.18,1.52H81.31v1.5205Zm-2.5606,15.56v-7.9619l1.32-.16c3.2207,3.9815,5.2012,6.1221,7.2413,6.1221,1.541,0,2.4609-1.24,2.48-5.7412l1.52.14c.0606,5.6016-1.56,7.2012-3.62,7.2012-2.541,0-4.541-2.1006-7.5224-5.7813v6.1817Z"
        />
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  props: ["watch"],
  mounted() {
    this.watchAnimation();
  },
  methods: {
    watchAnimation() {
      var now = new Date(),
        hourDeg = (now.getHours() / 12) * 360 + (now.getMinutes() / 60) * 30,
        hour24Deg = (now.getHours() / 24) * 360 + (now.getMinutes() / 60) * 15,
        jumphourDeg = (now.getHours() / 4) * 360,
        hour3Deg =
          (now.getHours() / 3) * 360 - 60 + (now.getMinutes() / 60) * 120,
        minuteDeg = (now.getMinutes() / 60) * 360 + (now.getSeconds() / 60) * 6,
        negminuteDeg = -(
          (now.getMinutes() / 60) * 360 +
          (now.getSeconds() / 60) * 6
        ),
        secondDeg = (now.getSeconds() / 60) * 360,
        moonDeg = ((Date.now() / 1000 / 60 / 60 / 24 + 17) * 360) / 59,
        dateDeg = ((now.getDate() - 0.2) * 360) / 31,
        dayDeg = ((now.getDay() + 1) * 360) / 7,
        monthDeg = ((now.getMonth() + 9.97) * 360) / 12,
        stylesDeg = [
          "@-webkit-keyframes rotate-hour{from{transform:rotate(" +
            hourDeg +
            "deg);}to{transform:rotate(" +
            (hourDeg + 360) +
            "deg);}}",
          "@-webkit-keyframes rotate-24-hour{from{transform:rotate(" +
            hour24Deg +
            "deg);}to{transform:rotate(" +
            (hour24Deg + 360) +
            "deg);}}",
          "@-webkit-keyframes rotate-jump-hour{from{transform:rotate(" +
            jumphourDeg +
            "deg);}to{transform:rotate(" +
            (jumphourDeg + 360) +
            "deg);}}",
          "@-webkit-keyframes rotate-hour-3{from{transform:rotate(" +
            hour3Deg +
            "deg);}to{transform:rotate(" +
            (hour3Deg + 360) +
            "deg);}}",
          "@-webkit-keyframes rotate-minute{from{transform:rotate(" +
            minuteDeg +
            "deg);}to{transform:rotate(" +
            (minuteDeg + 360) +
            "deg);}}",
          "@-webkit-keyframes rotate-neg-minute{from{transform:rotate(" +
            negminuteDeg +
            "deg);}to{transform:rotate(" +
            (negminuteDeg - 360) +
            "deg);}}",
          "@-webkit-keyframes rotate-second{from{transform:rotate(" +
            secondDeg +
            "deg);}to{transform:rotate(" +
            (secondDeg + 360) +
            "deg);}}",
          "@-webkit-keyframes rotate-chrono-second{from{transform:rotate(" +
            0 +
            "deg);}to{transform:rotate(" +
            (0 + 360) +
            "deg);}}",
          "@-webkit-keyframes rotate-chrono-split{from{transform:rotate(" +
            0 +
            "deg);}to{transform:rotate(" +
            30 +
            "deg);}}",
          "@-webkit-keyframes rotate-moon{from{transform:rotate(" +
            moonDeg +
            "deg);}to{transform:rotate(" +
            (moonDeg + 360) +
            "deg);}}",
          "@-webkit-keyframes rotate-date{from{transform:rotate(" +
            dateDeg +
            "deg);}to{transform:rotate(" +
            (dateDeg + 360) +
            "deg);}}",
          "@-webkit-keyframes rotate-day{from{transform:rotate(" +
            dayDeg +
            "deg);}to{transform:rotate(" +
            (dayDeg + 360) +
            "deg);}}",
          "@-webkit-keyframes rotate-month{from{transform:rotate(" +
            monthDeg +
            "deg);}to{transform:rotate(" +
            (monthDeg + 360) +
            "deg);}}",
          "@-moz-keyframes rotate-hour{from{transform:rotate(" +
            hourDeg +
            "deg);}to{transform:rotate(" +
            (hourDeg + 360) +
            "deg);}}",
          "@-moz-keyframes rotate-24-hour{from{transform:rotate(" +
            hour24Deg +
            "deg);}to{transform:rotate(" +
            (hour24Deg + 360) +
            "deg);}}",
          "@-moz-keyframes rotate-jump-hour{from{transform:rotate(" +
            jumphourDeg +
            "deg);}to{transform:rotate(" +
            (jumphourDeg + 360) +
            "deg);}}",
          "@-moz-keyframes rotate-hour-3{from{transform:rotate(" +
            hour3Deg +
            "deg);}to{transform:rotate(" +
            (hour3Deg + 360) +
            "deg);}}",
          "@-moz-keyframes rotate-minute{from{transform:rotate(" +
            minuteDeg +
            "deg);}to{transform:rotate(" +
            (minuteDeg + 360) +
            "deg);}}",
          "@-moz-keyframes rotate-neg-minute{from{transform:rotate(" +
            negminuteDeg +
            "deg);}to{transform:rotate(" +
            (negminuteDeg - 360) +
            "deg);}}",
          "@-moz-keyframes rotate-second{from{transform:rotate(" +
            secondDeg +
            "deg);}to{transform:rotate(" +
            (secondDeg + 360) +
            "deg);}}",
          "@-moz-keyframes rotate-chrono-second{from{transform:rotate(" +
            0 +
            "deg);}to{transform:rotate(" +
            (0 + 360) +
            "deg);}}",
          "@-moz-keyframes rotate-chrono-split{from{transform:rotate(" +
            0 +
            "deg);}to{transform:rotate(" +
            30 +
            "deg);}}",
          "@-moz-keyframes rotate-moon{from{transform:rotate(" +
            moonDeg +
            "deg);}to{transform:rotate(" +
            (moonDeg + 360) +
            "deg);}}",
          "@-moz-keyframes rotate-date{from{transform:rotate(" +
            dateDeg +
            "deg);}to{transform:rotate(" +
            (dateDeg + 360) +
            "deg);}}",
          "@-moz-keyframes rotate-day{from{transform:rotate(" +
            dayDeg +
            "deg);}to{transform:rotate(" +
            (dayDeg + 360) +
            "deg);}}",
          "@-moz-keyframes rotate-month{from{transform:rotate(" +
            monthDeg +
            "deg);}to{transform:rotate(" +
            (monthDeg + 360) +
            "deg);}}",
          ".watch-chrono-second{z-index: 5;-webkit-animation: rotate-chrono-second 60s steps(240) infinite;-moz-animation: rotate-chrono-second 60s steps(240) infinite;}",
          ".watch-hour{z-index: 3;-webkit-animation: rotate-hour 43200s linear infinite;-moz-animation: rotate-hour 43200s linear infinite;}",
          ".watch-24-hour{z-index: 3;-webkit-animation: rotate-24-hour 86400s linear infinite;-moz-animation: rotate-24-hour 86400s linear infinite;}",
          ".watch-minute{z-index: 4;-webkit-animation: rotate-minute 3600s linear infinite;-moz-animation: rotate-minute 3600s linear infinite;}",
          ".watch-neg-minute{z-index: 4;-webkit-animation: rotate-neg-minute 3600s linear infinite;-moz-animation: rotate-neg-minute 3600s linear infinite;}",
          ".watch-second{z-index: 4;-webkit-animation: rotate-second 60s steps(240) infinite;-moz-animation: rotate-second 60s steps(240) infinite;}",
          ".watch-second-quartz{z-index: 4;-webkit-animation: rotate-second 60s steps(60) infinite;-moz-animation: rotate-second 60s steps(60) infinite;}",
          ".watch-moon{z-index: 0;-webkit-animation: rotate-moon 2548800s linear infinite;-moz-animation: rotate-moon 2548800s linear infinite;}",
          ".watch-date{z-index: 1;-webkit-animation: rotate-date 864000s linear infinite;-moz-animation: rotate-date 864000s linear infinite}",
          ".watch-day{z-index: 0;-webkit-animation: rotate-day 604800s linear infinite;-moz-animation: rotate-day 604800s linear infinite}",
          ".watch-month{z-index: 0;-webkit-animation: rotate-month 19748800s linear infinite;-moz-animation: rotate-month 19748800s linear infinite}",
          ".watch-chrono-minute{z-index: 5;-webkit-animation: rotate-chrono-second 1800s steps(30) infinite;-moz-animation: rotate-chrono-second 1800s steps(30) infinite;}",
          ".watch-chrono-minute-16{z-index: 5;-webkit-animation: rotate-chrono-second 960s steps(16) infinite;-moz-animation: rotate-chrono-second 9600s steps(16) infinite;}",
          ".watch-chrono-hour{z-index: 5;-webkit-animation: rotate-chrono-second 43200s steps(12) infinite;-moz-animation: rotate-chrono-second 43200s steps(12) infinite;}",
          ".watch-chrono-split{z-index: 6;-webkit-animation: rotate-chrono-split 5s steps(20) 1 forwards;-moz-animation: rotate-chrono-split 5s steps(20) 1 forwards;}",
          ".watch-hour-3{z-index: 3;-webkit-animation: rotate-hour-3 10800s linear infinite;-moz-animation: rotate-hour-3 10800s linear infinite;}",
          ".watch-jump-hour{z-index: 4;-webkit-animation: rotate-jump-hour 14400s steps(4) infinite;-moz-animation: rotate-jump-hour 14400s steps(4) infinite;}",
        ].join("");
      document.getElementById("watch-animate").innerHTML = stylesDeg;
    },
  },
};
</script>
<style scoped>
.watch-wrapper {
  padding-top: 166.66%;
}
.watch-base {
  z-index: 1;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.2));
  transition: 0.5s;
}
.watch-wrapper * {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: 0.5s;
  pointer-events: none;
}
</style>