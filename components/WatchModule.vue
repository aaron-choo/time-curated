<template>
  <div>
    <style id="watch-animate" type="text/css"></style>
    <div class="watch-wrapper">
      <div
        class="watch-base"
        :style="'background-image: url(' + watch.watch_base.url + ');'"
      >
        <div
          class="watch-hour"
          :style="'background-image: url(' + watch.watch_hour.url + ');'"
        ></div>
        <div
          class="watch-minute"
          :style="'background-image: url(' + watch.watch_minute.url + ');'"
        ></div>
        <div
          class="watch-second"
          :style="'background-image: url(' + watch.watch_second.url + ');'"
        ></div>
      </div>
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
  position: relative;
  width: 100%;
  padding-top: 78.7%;
  padding-top: 100%;
  overflow: visible;
  margin: auto;
}
.watch-wrapper > .watch-base {
  width: 100%;
  height: 100%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
  position: absolute;
  top: 0;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.2));
  transition: 0.5s;
}
.watch-wrapper div,
.watch-base div {
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: contain;
  background-position: center;
  transform-origin: 50% 50%;
  background-repeat: no-repeat;
  transition: 0.5s;
}
.watch-base div {
  pointer-events: none;
}
.watch-hour {
  z-index: 3;
  -webkit-animation: rotate-hour 43200s linear infinite;
  -moz-animation: rotate-hour 43200s linear infinite;
}
.watch-second {
  z-index: 4;
  -webkit-animation: rotate-second 60s steps(240) infinite;
  -moz-animation: rotate-second 60s steps(240) infinite;
}
</style>