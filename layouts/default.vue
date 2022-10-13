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
    <Cart />
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

hr {
  border: 1px solid #310085;
  opacity: 0.5;
}
hr.short {
  width: 50%;
}
.purple-gradient {
  background: #310085;
  background: -moz-linear-gradient(
    90deg,
    rgba(49, 0, 133, 1) 30%,
    rgba(28, 0, 76, 1) 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(49, 0, 133, 1) 30%,
    rgba(28, 0, 76, 1) 100%
  );
  background: linear-gradient(
    90deg,
    rgba(49, 0, 133, 1) 30%,
    rgba(28, 0, 76, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#310085",endColorstr="#1c004c",GradientType=1);
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
.shadow {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.15),
    0 4px 4px rgba(0, 0, 0, 0.15), 0 8px 8px rgba(0, 0, 0, 0.15);
}
.shadow-shorter {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
    0 4px 4px rgba(0, 0, 0, 0.11), 0 6px 8px rgba(0, 0, 0, 0.11),
    0 8px 16px rgba(0, 0, 0, 0.11);
}
</style>
