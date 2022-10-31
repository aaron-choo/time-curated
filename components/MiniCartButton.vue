<template>
  <div>
    <nuxt-link to="/bag" class="block md:hidden">
      <button aria-label="Shopping bag" class="button relative">
        <svg
          class="h-6 w-6"
          enable-background="new 0 0 64 64"
          height="64"
          viewBox="0 0 64 64"
          width="64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2">
            <path d="m44 18h10v45h-44v-45h10z" />
            <path d="m22 24v-13c0-5.523 4.477-10 10-10s10 4.477 10 10v13" />
          </g>
        </svg>
        <span
          class="absolute bottom-0 left-0 right-0 font-sans text-xs"
          v-if="cartCount > 0"
        >
          {{ cartCount }}
        </span>
      </button>
    </nuxt-link>

    <button
      aria-label="Shopping bag"
      class="button relative hidden md:block"
      @click="setCartView"
    >
      <!-- <span
          >{{ cartCount }} Item<span v-if="parseInt(cartCount) != 1"
            >s</span
          ></span
        > -->

      <svg
        class="h-6 w-6"
        enable-background="new 0 0 64 64"
        height="64"
        viewBox="0 0 64 64"
        width="64"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2">
          <path d="m44 18h10v45h-44v-45h10z" />
          <path d="m22 24v-13c0-5.523 4.477-10 10-10s10 4.477 10 10v13" />
        </g>
      </svg>
      <span
        class="absolute bottom-0 left-0 right-0 font-sans text-xs"
        v-if="cartCount > 0"
      >
        {{ cartCount }}
      </span>
      <!-- <font-awesome-icon
          :icon="['fas', 'shopping-bag']"
          class="w-3"
        ></font-awesome-icon> -->
      <!-- <transition name="fade">
        <span>{{ cartSubtotal }}</span>
      </transition> -->
    </button>
  </div>
</template>
<script>
export default {
  computed: {
    cartCount() {
      return this.$store.getters.getCartItemCount;
    },
    cartSubtotal() {
      return this.$store.getters.getCartSubtotal;
    },
  },
  methods: {
    setCartView() {
      const isOpened = this.$store.state.isCartOpened;
      this.$store.commit("setCartView", !isOpened);
    },
  },
};
</script>

<style scoped>
</style>