<template>
  <button aria-label="Close Shopping bag" @click="setCartView">
    <span class="text">
      <font-awesome-icon :icon="['fas', 'xmark']" class="text-lg" />
    </span>
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