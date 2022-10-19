<template>
  <div
    :class="{
      opened: opened,
    }"
    class="mini-cart p-4 shadow"
  >
    <div class="flex justify-between">
      <heading
        as="h2"
        size="sm"
        class="my-0 tracking-wider sans-serif uppercase font-medium"
        >My Bag</heading
      >
      <CloseCartButton />
    </div>
    <div v-if="items.length === 0" class="empty">
      <div class="my-5">Your shopping bag is empty</div>
    </div>
    <div v-if="items.length > 0" class="my-2">
      <MiniCartItem v-for="item in items" :key="item.id" :item="item" />
      <div class="summary pt-4">
        <div class="order-summary flex justify-between">
          <span>Total</span>
          <span>${{ cartSubtotal }}</span>
        </div>
        <nuxt-link to="/bag" class="block button">Go to shopping bag</nuxt-link>
        <a :href="checkoutUrl">
          <button class="button is-success">Check out</button>
        </a>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  computed: {
    items() {
      return this.$store.getters.getCartItems;
    },
    cartSubtotal() {
      return this.$store.getters.getCartSubtotal;
    },
    opened() {
      return this.$store.state.isCartOpened;
    },
    checkoutUrl() {
      return this.$store.getters.getHostedCheckoutUrl;
    },
  },
};
</script>

<style scoped>
.mini-cart {
  position: absolute;
  background: var(--bg);
  width: 80%;
  max-width: 400px;
  top: 20px;
  right: 20px;
  z-index: 100;
  transition: all 0.3s ease;
  opacity: 0;
  pointer-events: none;
}
.mini-cart.opened {
  opacity: 1;
  pointer-events: auto;
}
</style>