<template>
  <div>
    <a href="/bag"
      ><button aria-label="Shopping bag" class="block md:hidden">
        <font-awesome-icon
          :icon="['fas', 'shopping-bag']"
          class="w-3"
        ></font-awesome-icon></button
    ></a>

    <button
      aria-label="Shopping bag"
      class="button hidden md:block"
      @click="setCartView"
    >
      <span class="text">
        <transition name="fade">
          <!-- <span
          >{{ cartCount }} Item<span v-if="parseInt(cartCount) != 1"
            >s</span
          ></span
        > -->
          <span>({{ cartCount }})</span>
        </transition>
        <font-awesome-icon
          :icon="['fas', 'shopping-bag']"
          class="w-3"
        ></font-awesome-icon>
        <!-- <transition name="fade">
        <span>{{ cartSubtotal }}</span>
      </transition> -->
      </span>
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