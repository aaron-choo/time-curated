<template>
  <Bounded
    as="nav"
    y-padding="xs"
    class="site-navigation sticky top-0 border-t border-b z-10"
    style="background-color: var(--bg)"
  >
    <div class="col-span-2"></div>
    <ul
      class="
        col-span-8
        flex flex-wrap
        justify-center
        items-center
        gap-4
        md:gap-6
        font-medium
        sans-serif
        text-xs
      "
    >
      <li
        v-for="item in navigation.data.links"
        :key="$prismic.asText(item.label)"
        class="uppercase"
      >
        <PrismicLink :field="item.link">
          {{ $prismic.asText(item.label) }}
        </PrismicLink>
      </li>

      <dropdown-menu
        :withDropdownCloser="true"
        :overlay="false"
        class="full-dropdown font-medium sans-serif text-xs"
      >
        <button slot="trigger" class="uppercase">
          {{ navigation.data.collection_text }}
        </button>
        <Bounded as="div" y-padding="xs" slot="header">Dropdown Header</Bounded>
        <Bounded as="div" y-padding="sm" slot="body">
          <ul class="flex flex-col gap-2">
            <li
              v-for="item in navigation.data.shop_links"
              :key="item.label"
              class="uppercase"
            >
              <PrismicLink :field="item.link" dropdown-closer>
                {{ item.label }}
              </PrismicLink>
            </li>
          </ul>
        </Bounded>
        <Bounded as="div" y-padding="xs" slot="footer"> </Bounded>
      </dropdown-menu>

      <dropdown-menu
        :withDropdownCloser="true"
        :overlay="false"
        class="full-dropdown font-medium sans-serif text-xs"
      >
        <button slot="trigger" class="uppercase">
          {{ navigation.data.shop_text }}
        </button>
        <Bounded
          as="div"
          y-padding="xs"
          secondaryBackground="true"
          slot="header"
          >Dropdown Header</Bounded
        >
        <Bounded as="div" y-padding="sm" slot="body">
          <ul class="flex flex-col gap-2">
            <li
              v-for="item in navigation.data.shop_links"
              :key="item.label"
              class="uppercase"
            >
              <PrismicLink :field="item.link" dropdown-closer>
                {{ item.label }}
              </PrismicLink>
            </li>
          </ul>
        </Bounded>
        <Bounded
          as="div"
          secondaryBackground="true"
          y-padding="xs"
          slot="footer"
          >Free shipping with minimum spend | Authorized retailer with
          authenticity guaranteed | 7-day return</Bounded
        >
      </dropdown-menu>
    </ul>
    <ul
      class="
        col-span-2
        flex
        justify-end
        items-center
        gap-2
        md:gap-4
        font-medium
        sans-serif
        text-xs
      "
    >
      <dropdown-menu
        :withDropdownCloser="true"
        :overlay="false"
        class="full-dropdown font-medium sans-serif text-xs"
      >
        <button slot="trigger" class="flex">
          <!-- <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="language"
            x="0px"
            y="0px"
            viewBox="0 0 41.7 42.1"
            style="enable-background: new 0 0 41.7 42.1"
            xml:space="preserve"
            class="w-5 h-5"
          >
            <path
              id="world_language"
              style="fill: var(--color)"
              d="M20.9,0C9.3,0,0,9.4,0,21.1s9.3,21.1,20.9,21.1s20.9-9.4,20.9-21.1S32.4,0,20.9,0z M39,20.4  h-8.1c-0.1-3-0.6-5.9-1.5-8.5c1.8-0.8,3.5-1.8,5-3C37.1,12,38.8,16,39,20.4z M20.1,39.4c-2.2-1.9-4.1-4.3-5.5-7.2  c1.8-0.6,3.6-0.9,5.6-0.9L20.1,39.4C20.2,39.4,20.1,39.4,20.1,39.4z M21.6,2.8c2.5,2.1,4.6,5,6,8.3c-1.9,0.7-4,1-6.1,1.1L21.6,2.8  C21.6,2.8,21.6,2.8,21.6,2.8z M23.8,3c3.7,0.6,7,2.4,9.6,4.9c-1.4,1.1-2.9,2-4.6,2.7C27.6,7.7,25.9,5.1,23.8,3z M20.2,2.8v9.4  c-2.1-0.1-4.2-0.5-6.1-1.1C15.5,7.7,17.6,4.9,20.2,2.8C20.1,2.8,20.2,2.8,20.2,2.8z M12.8,10.6C11.2,9.9,9.6,9,8.2,7.9  c2.6-2.5,5.9-4.3,9.6-4.9C15.8,5.1,14.1,7.7,12.8,10.6z M13.6,12.3c2.1,0.7,4.3,1.2,6.6,1.2v6.8h-8C12.2,17.5,12.7,14.8,13.6,12.3z   M20.2,21.7v8.2c-2.1,0.1-4.2,0.4-6.1,1c-1.2-2.8-1.9-5.9-1.9-9.2H20.2z M17.9,39.1c-3.3-0.6-6.4-2-8.8-4.1c1.3-0.9,2.8-1.7,4.3-2.3  C14.5,35.1,16.1,37.3,17.9,39.1z M21.5,39.4v-8.1c1.9,0.1,3.8,0.4,5.6,0.9C25.7,35,23.8,37.5,21.5,39.4  C21.6,39.4,21.6,39.4,21.5,39.4z M28.4,32.7c1.5,0.6,3,1.4,4.3,2.3c-2.5,2.1-5.5,3.6-8.8,4.1C25.7,37.3,27.2,35.1,28.4,32.7z   M27.6,31c-1.9-0.6-4-1-6.1-1v-8.2h8C29.5,25,28.8,28.2,27.6,31z M21.5,20.4v-6.8c2.3-0.1,4.5-0.5,6.6-1.2c0.9,2.5,1.4,5.2,1.5,8  L21.5,20.4L21.5,20.4z M7.3,8.9c1.5,1.2,3.2,2.2,5,3c-0.9,2.6-1.5,5.5-1.5,8.5H2.7C2.9,16,4.6,12,7.3,8.9z M2.7,21.7h8.1  c0.1,3.5,0.8,6.7,2,9.7c-1.7,0.7-3.3,1.6-4.8,2.6C4.9,30.9,2.9,26.5,2.7,21.7z M33.7,34.1c-1.5-1.1-3.1-2-4.8-2.6  c1.2-2.9,1.9-6.2,2-9.7H39C38.8,26.5,36.8,30.9,33.7,34.1z"
            />
          </svg> -->
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="64px"
            height="64px"
            viewBox="0 0 64 64"
            enable-background="new 0 0 64 64"
            xml:space="preserve"
            class="w-5 h-5"
          >
            <g>
              <path
                style="fill: var(--color)"
                d="M32.001-0.113c-8.579,0-16.644,3.34-22.709,9.406c-6.066,6.066-9.405,14.13-9.404,22.708c0,8.578,3.34,16.585,9.404,22.651 C15.357,60.717,23.421,64,31.999,64c0.001,0,0.002,0,0.002,0h0.003c17.706,0,32.11-14.351,32.109-32.057 c0.001-8.578-3.34-16.614-9.405-22.68C48.644,3.199,40.579-0.113,32.001-0.113z M54.691,12.212 c-0.865,1.239-3.196,3.974-7.954,6.067c-2.694-7.871-7.166-13.263-9.865-15.995c6.192,1.001,11.9,3.901,16.422,8.422 C53.781,11.193,54.242,11.698,54.691,12.212z M33.551,62.074c-0.183,0.009-0.367,0.008-0.551,0.014V43.017 c4.938,0.098,8.832,0.9,11.838,1.957C41.335,55.154,34.691,61.107,33.551,62.074z M19.161,44.973 c3.06-1.08,6.947-1.861,11.839-1.957v19.073c-0.184-0.006-0.369-0.006-0.552-0.016C29.305,61.104,22.663,55.15,19.161,44.973z M30.448,1.927c0.183-0.009,0.368-0.01,0.552-0.016v19.072c-4.938-0.098-8.832-0.9-11.838-1.957 C22.664,8.85,29.303,2.897,30.448,1.927z M44.839,19.027c-3.06,1.08-6.947,1.861-11.839,1.957V1.911 c0.184,0.006,0.369,0.006,0.552,0.016C34.696,2.896,41.337,8.851,44.839,19.027z M33,22.983c5.105-0.094,9.197-0.897,12.445-2.027 c0.87,3.02,1.443,6.375,1.533,10.043H33V22.983z M31,22.983V31H17.021c0.09-3.669,0.663-7.023,1.533-10.043 C21.803,22.086,25.895,22.889,31,22.983z M15.021,31H1.912c0.203-6.287,2.322-12.238,6.085-17.183 c1.224,1.62,3.836,4.343,8.651,6.406C15.719,23.444,15.111,27.043,15.021,31z M15.021,33c0.09,3.957,0.697,7.556,1.627,10.777 c-4.815,2.063-7.428,4.786-8.651,6.406C4.235,45.238,2.115,39.287,1.912,33H15.021z M17.021,33H31v8.017 c-5.105,0.094-9.197,0.897-12.445,2.027C17.685,40.023,17.111,36.669,17.021,33z M33,41.017V33h13.979 c-0.09,3.669-0.663,7.023-1.533,10.043C42.197,41.914,38.105,41.111,33,41.017z M48.979,33h13.109 c-0.211,6.435-2.445,12.365-6.094,17.171c-1.229-1.622-3.84-4.336-8.643-6.394C48.281,40.556,48.889,36.957,48.979,33z M48.979,31 c-0.09-3.957-0.697-7.556-1.627-10.777c4.815-2.063,7.428-4.786,8.651-6.406c3.762,4.945,5.882,10.896,6.086,17.184H48.979z M27.127,2.284c-2.699,2.732-7.17,8.125-9.865,15.997c-1.497-0.655-2.722-1.357-3.698-2.021c-2.351-1.597-3.651-3.189-4.251-4.052 c0.448-0.512,0.908-1.016,1.394-1.501C15.228,6.185,20.936,3.286,27.127,2.284z M9.309,51.788c0.865-1.238,3.196-3.974,7.954-6.067 c2.695,7.871,7.166,13.263,9.865,15.996c-6.191-1.001-11.9-3.901-16.422-8.422C10.219,52.808,9.758,52.302,9.309,51.788z M32.004,63L32.004,63v0.113V63z M36.876,61.713c2.699-2.733,7.168-8.125,9.862-15.993c1.497,0.655,2.722,1.357,3.698,2.021 c2.34,1.589,3.639,3.175,4.242,4.039C50.169,56.943,43.933,60.559,36.876,61.713z"
              />
            </g>
          </svg>
          <!-- {{ navigation.data.language_text }} -->
        </button>
        <Bounded as="div" y-padding="sm" slot="body">
          <ul class="flex justify-center gap-8 uppercase">
            <li class="underline decoration-1 underline-offset-2">
              <span class="switch-lang" :class="settings.lang">
                <span class="sr-only">{{ settings.lang }}</span>
              </span>
            </li>
            <li
              v-for="lang in alternateLanguages"
              :key="lang.lang"
              @mousedown="switchLang(lang.lang)"
            >
              <PrismicLink
                class="switch-lang"
                :field="{ ...lang, link_type: 'Document' }"
                :class="lang.lang"
              >
                <span class="sr-only">{{ lang.lang }}</span>
                <!-- <span
              class="fi"
              :class="`fi-${lang.lang.substring(3).toLowerCase()}`"
            /> -->
              </PrismicLink>
            </li>
          </ul>
        </Bounded>
      </dropdown-menu>

      <li>
        <CartButton />
      </li>
    </ul>
  </Bounded>
</template>

<script>
export default {
  props: {
    navigation: {
      type: Object,
      required: true,
    },
    settings: {
      type: Object,
      required: true,
    },
    alternateLanguages: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    switchLang(lang) {
      // console.log(lang);
      this.$snipcart.setLanguage(
        lang.slice(0, -2) + lang.slice(-2).toUpperCase()
      );
    },
  },
};
</script>

<style>
.site-navigation > div {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
}
.v-dropdown-menu.full-dropdown,
.full-dropdown .v-dropdown-menu,
.full-dropdown .v-dropdown-menu__trigger {
  position: initial;
}
.v-dropdown-menu__container {
  background: var(--bg);
  border-color: var(--border-color);
}
.full-dropdown .v-dropdown-menu__container {
  width: 100%;
  border-left: none;
  border-right: none;
  border-top: none;
  top: calc(100% + 1px);
  box-shadow: 0 3px 3px var(--color-fade-10);
}
</style>

<style scoped>
.switch-lang.en-us::before {
  content: "English";
}
.switch-lang.zh-cn::before {
  content: "简体中文";
}

a.nuxt-link-exact-active {
  text-underline-offset: 2px;
  text-decoration-thickness: 1px;
  text-decoration-line: underline;
}
</style>