<template>
  <nuxt-link aria-label="Shopping bag" to="/bag">
    <span class="text">
      <font-awesome-icon :icon="['fas', 'shopping-bag']"></font-awesome-icon>
      <transition name="fade">
        <!-- <span
          >{{ cartCount }} Item<span v-if="parseInt(cartCount) != 1"
            >s</span
          ></span
        > -->
        <span>({{ cartCount }})</span>
      </transition>
      <!-- <transition name="fade">
        <span>{{ cartSubtotal }}</span>
      </transition> -->
    </span>
  </nuxt-link>
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