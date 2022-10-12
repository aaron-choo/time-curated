<template>
  <button
    :class="{
      columns: true,
      button: true,
      'gati-button': true,
      'has-text-white': true,
      slanted: slanted,
    }"
    @click="setCartView"
  >
    <span class="text">
      <span class="border mx-2"></span>
      <transition name="fade">
        <span
          >{{ cartCount }} Item<span v-if="parseInt(cartCount) != 1"
            >s</span
          ></span
        >
      </transition>
      <span class="border mx-2"></span>
      <transition name="fade">
        <span>{{ cartSubtotal }}</span>
      </transition>
    </span>
  </button>
</template>
  
  <script>
export default {
  props: {
    slanted: { type: Boolean, required: true, defaultValue: true },
  },
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