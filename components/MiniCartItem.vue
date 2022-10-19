<template>
  <a class="mini-cart-item grid grid-cols-3 gap-4 py-4 border-b">
    <div class="item-image col-span-1">
      <img :src="item.image.url" :alt="item.name" :title="item.name" />
    </div>
    <div class="item-summary col-span-2">
      <div class="flex gap-4 items-start">
        <div>
          <heading as="h4" size="base" class="item-name my-0">{{
            item.name
          }}</heading>
          <div class="item-price">${{ item.price.formatted_with_code }}</div>
        </div>
        <div>
          <font-awesome-icon
            v-if="showSpinner"
            icon="spinner"
            pulse
            class="w-3"
          />
          <font-awesome-icon
            v-else
            class="trash w-3"
            icon="trash"
            @click="removeFromCart(item.id)"
          ></font-awesome-icon>
        </div>
      </div>
      <!-- <pre>{{ item.selected_options[0].group_name }}</pre> -->
      <div class="sans-serif text-xs uppercase my-2">
        <div v-if="item.selected_options">
          <div v-for="option in item.selected_options" class="grid grid-cols-2">
            <span>{{ option.group_name }}</span>
            <span>{{ option.option_name }}</span>
          </div>
        </div>

        <div class="item-quantity grid grid-cols-2">
          <span>Quantity</span>
          <span>{{ item.quantity }}</span>
          <!-- <input
            v-model.number="quantity"
            type="number"
            name="quantity"
            step="1"
            @change="updateQuantity"
          /> -->
        </div>
      </div>
      <div class="text-right">${{ item.line_total.formatted_with_code }}</div>
    </div>
  </a>
</template>
  
  <script>
export default {
  props: {
    item: { type: Object, required: true, defaultValue: {} },
  },
  data() {
    return {
      showSpinner: false,
      quantity: this.item.quantity,
    };
  },
  methods: {
    async removeFromCart(itemId) {
      this.showSpinner = true;
      try {
        const res = await this.$commerce.cart.remove(itemId);
        this.$store.commit("setCart", res);
      } catch (error) {
        // eslint-disable-next-line
        console.log(error);
      }
    },
    async updateQuantity() {
      try {
        // eslint-disable-next-line
        console.log(this.item.id, this.quantity);
        const res = await this.$commerce.cart.update(this.item.id, {
          quantity: this.quantity,
        });
        this.$store.commit("setCart", res);
      } catch (error) {
        // eslint-disable-next-line
        console.log(error);
      }
    },
  },
};
</script>
<style scoped>
.quantity-cell input {
  max-width: 50px;
}
.trash {
  cursor: pointer;
}
.trash:hover {
  color: red;
}
</style>