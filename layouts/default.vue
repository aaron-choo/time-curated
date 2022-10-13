<template>
  <div class="text-slate-800">
    <!-- TODO: Remove the following element once you have read the documentation. -->
    <!-- <div
      v-if="$config.development"
      :style="{
        background: '#5163ba',
        padding: '1rem',
        textAlign: 'center',
        fontSize: '0.85rem',
        color: '#fff',
      }"
    >
      <p>
        <strong>👋 Welcome to your new website!</strong> To customize the code
        and content of this site,&nbsp;<a
          href="https://github.com/prismicio-community/nuxt-starter-prismic-multi-language/tree/master/docs"
          target="_blank"
          rel="noreferrer"
          :style="{
            textDecoration: 'underline',
          }"
          >see the documentation</a
        >. Remove this bar in <code>layouts/default.vue</code>.
      </p>
    </div> -->
    <Header
      v-if="navigation.data && settings.data"
      :alternate-languages="alternateLanguages"
      :navigation="navigation"
      :settings="settings"
    />
    <MiniCart />
    <main><nuxt /></main>
    <Footer v-if="settings.data" :settings="settings" />
  </div>
</template>

<script>
export default {
  mounted() {
    this.fetchCart();
  },
  methods: {
    async fetchCart() {
      try {
        const cart = await this.$commerce.cart.retrieve();
        this.$store.commit("setCart", cart);
      } catch (error) {
        // eslint-disable-next-line
        console.log("Error (default.vue): ", error);
      }
    },
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
  },
};
</script>

<style>
body {
  @apply overflow-x-hidden antialiased;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  /* .fade-leave-active below version 2.1.8 */
  opacity: 0;
}
</style>
