<template>
  <div
    :class="{
      container: true,
      cart: true,
    }"
  >
    <table>
      <thead>
        <tr>
          <th class="is-hidden-mobile">Image</th>
          <th>Name</th>
          <th>Unit Price</th>
          <th>Quantity</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th class="is-hidden-mobile"></th>
          <th></th>
          <th></th>
          <th>Subtotal:</th>
          <th>{{ cartSubtotal }}</th>
          <th></th>
        </tr>
      </tfoot>
      <tbody>
        <CartItem v-for="item in items" :key="item.id" :item="item" />
        <tr v-if="items.length === 0" class="empty">
          <td class="is-hidden-mobile"></td>
          <td></td>
          <td></td>
          <td class="has-text-grey is-italic py-5">Bag is empty</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <div class="has-text-right px-4 py-6 my-6">
      <a :href="checkoutUrl">
        <button class="button is-success">
          <font-awesome-icon :icon="['fas', 'lock']"></font-awesome-icon> &nbsp;
          Secure Checkout
        </button>
      </a>
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