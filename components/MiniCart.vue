<template>
  <div
    :class="{
      container: true,
      cart: true,
      opened: opened,
      shadow: true,
      'p-4': true,
    }"
  >
    <div class="px-6 py-6 has-background-light">
      <CloseCartButton />
    </div>
    <div v-if="items.length === 0" class="empty">
      <span class="py-5">Your shopping bag is empty</span>
    </div>
    <div v-if="items.length > 0">
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
.cart {
  position: absolute;
  background: white;
  width: 30%;
  max-width: 400px;
  top: 20px;
  right: 20px;
  z-index: 100;
  transition: all 0.3s ease;
  opacity: 0;
  pointer-events: none;
  font-size: 12px;
}
.cart.opened {
  opacity: 1;
  pointer-events: auto;
}
.cart table {
  width: 100%;
  background: transparent;
}
.cart table tr td,
.cart table tr th {
  font-weight: 400;
  padding: 0.5rem;
}
.cart table tfoot {
  border-top: 1px solid #f5f5f5;
}
</style>