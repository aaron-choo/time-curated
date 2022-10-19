<template>
  <button aria-label="Close Shopping Bag" @click="setCartView">
    <font-awesome-icon :icon="['fas', 'xmark']" class="w-3" />
  </button>
</template>
<script>
export default {
  methods: {
    setCartView() {
      const isOpened = this.$store.state.isCartOpened;
      this.$store.commit("setCartView", !isOpened);
    },
  },
};
</script>