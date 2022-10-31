<template>
  <div
    :class="{
      opened: opened,
    }"
    class="mini-cart p-6 shadow"
  >
    <div class="flex justify-between">
      <heading
        as="h2"
        size="sm"
        class="my-0 tracking-wider font-sans uppercase font-medium"
        >My Bag</heading
      >
      <CloseCartButton />
    </div>
    <div v-if="items.length === 0" class="empty">
      <div class="my-4">Your shopping bag is empty</div>
    </div>
    <div v-if="items.length > 0" class="mt-2">
      <MiniCartItem v-for="item in items" :key="item.id" :item="item" />
      <div class="summary">
        <div class="order-summary flex justify-between py-4">
          <span>{{ $t("total") }}</span>
          <span>${{ cartSubtotal }}</span>
        </div>
        <nuxt-link :to="localePath('/bag')">
          <button id="go-to-bag" class="btn w-full uppercase font-sans">
            {{ $t("goToBag") }}
          </button>
        </nuxt-link>
        <!-- <a :href="checkoutUrl">
          <button class="button is-success">Check out</button>
        </a> -->
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

#go-to-bag {
  background: var(--color);
  color: var(--bg);
}
</style>