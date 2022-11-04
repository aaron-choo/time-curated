<template>
  <div>
    <style id="watch-animate" type="text/css"></style>
    <!-- <AnnouncementBar :settings="settings" /> -->
    <Header
      v-if="navigation.data && settings.data"
      :alternate-languages="alternateLanguages"
      :navigation="navigation"
      :settings="settings"
      class="site-header hidden md:block md:-mb-px"
    />
    <Navigation
      v-if="navigation.data && settings.data"
      :alternate-languages="alternateLanguages"
      :navigation="navigation"
      :settings="settings"
      :page="page"
      class="site-navigation"
    />
    <Breadcrumbs v-if="page.uid != 'home'" />
    <main><nuxt /></main>
    <Footer v-if="settings.data" :settings="settings" />
  </div>
</template>

<script>
export default {
  head() {
    return {
      htmlAttrs: {
        lang:
          this.$i18n.locale.slice(0, -2) +
          this.$i18n.locale.slice(-2).toUpperCase(),
      },
    };
  },
  mounted() {
    // console.log(`
    //                                      ▄▄▄▄▄▄
    //                                 ▄▄██████████████████▄▄
    //                            ▄▄███████████████████████████▌▄
    //                        ▄▄█████████████▀▀▀▀▀▀▀▀▀▀▀██████████▄
    //                     ▄▄██████████▀▀  ░    ░ ░ ░░     ▀███████▌
    //                   ▄█████████▀      ▄░  ▐██████████▄▄   ██████▌
    //                 ▄████████▀    ▄▄█████░  ██████████████▄▐██████
    //               ▄███████▀    ▄█████████▌   █████████████████████░
    //              ███████▀   ▄█████████████▄  ▐████████████████████
    //             ███████   ░████████████████░  ▐███████████████████
    //            ██████▀   ▄██████████████████░  ▐██████████████████▄
    //           ██████▌   █████████████████████▄   ██████████████████
    //          ▐██████   ███████████████████████▄   ██████████████████▄
    //          ▓█████▌  ▐████████████████████████▌   ▀█████████████████▄
    //          ▓█████▌  ███████████████████████████   ▐█████████████████▌
    //          ▐██████░ ▀███████████████████████████▄▄▄███████████████████
    //           ▀██████▄░████████████████████████████████▀▀▀▀▀▀▀▀▀▀████████▄
    //            ▀██████████████████████████████████▀▀ ░  ░ ░▄▄▄▄▄▄  ▀██████░
    //              ▀████████████████████████████▀▀    ▄▄▓████████████████████
    //                 ▀▀█████████████████████▀▀  ░ ▄████████████████▀████████
    //                     ▀████████████████▀    ▄██████████████████░  ██████▌
    //                       ▐█████████████▀   ▄██████████████████▀   ███████
    //                         ▀██████████   ▐██████████████████▀   ▄███████
    //                          ▐████████▌  ░████████████████▀    ▄███████▀
    //                            ███████▌   ▀███████████▀▀    ▄█████████
    //                             ▀██████▄    ▐▀▀▀▀▀      ▄▄█████████▀
    //                              ▀███████▄▄▄░░ ░  ▄▄▄████████████▀
    //                                ██████████████████████████▀▀
    //                                  ▀███████████████████▀▀
    //                                      ▀▀▀▀▀▀▀▀▀▀▀▀
    // `);
    if (this.$device.isDesktop === true) {
      document.documentElement.classList.add("desktop");
    }
    if (this.$device.isTablet === true) {
      document.documentElement.classList.add("tablet");
    }
    if (this.$device.isMobile === true) {
      document.documentElement.classList.add("mobile");
    }
    if (this.$device.isMacOS === true) {
      document.documentElement.classList.add("macos");
    }
    if (this.$device.isWindows === true) {
      document.documentElement.classList.add("windows");
    }
  },

  computed: {
    alternateLanguages() {
      return this.$store.state.prismic.alternateLanguages;
    },
    navigation() {
      return this.$store.state.prismic.navigation;
    },
    settings() {
      return this.$store.state.prismic.settings;
    },
    page() {
      return this.$store.state.prismic.page;
    },
  },
  methods: {},
};
</script>

<style>
body {
  @apply overflow-x-hidden antialiased;
}
</style>
