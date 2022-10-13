<template>
  <button
    aria-label="Close Shopping bag"
    :class="{
      button: true,
    }"
    @click="setCartView"
  >
    <span class="text">
      <font-awesome-icon :icon="['fas', 'xmark']"></font-awesome-icon>
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