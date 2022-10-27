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
          <div>
            <button v-if="showSpinner" class="spinner">
              <svg
                class="w-4 h-4"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="64px"
                height="64px"
                viewBox="0 0 64 64"
                enable-background="new 0 0 64 64"
                xml:space="preserve"
              >
                <g>
                  <path
                    fill="none"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    d="M33,1c7.678,0,15.354,2.929,21.212,8.787 C64.91,20.484,65.841,37.248,57.003,49l-6.001,6.002"
                  />
                </g>
                <g>
                  <path
                    fill="none"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    d="M31,63c-7.678,0-15.354-2.929-21.212-8.787 C-0.91,43.516-1.841,26.752,6.997,15l6.001-6.002"
                  />
                </g>
                <polyline
                  fill="none"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linejoin="bevel"
                  stroke-miterlimit="10"
                  points="51,44 51,55 62,55 "
                />
                <polyline
                  fill="none"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linejoin="bevel"
                  stroke-miterlimit="10"
                  points="13,20 13,9 2,9"
                />
              </svg>
            </button>
            <button
              v-else
              @click="removeFromCart(item.id)"
              class="remove-from-cart"
            >
              <svg
                class="w-4 h-4"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="64px"
                height="64px"
                viewBox="0 0 64 64"
                enable-background="new 0 0 64 64"
                xml:space="preserve"
              >
                <g>
                  <polyline
                    fill="none"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    points="25,8 25,1 39,1 39,8 	"
                  />
                  <polyline
                    fill="none"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    points="14,10 14,63 50,63 50,10 	"
                  />
                  <line
                    fill="none"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    x1="26"
                    y1="20"
                    x2="26"
                    y2="54"
                  />
                  <line
                    fill="none"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    x1="38"
                    y1="20"
                    x2="38"
                    y2="54"
                  />
                  <line
                    fill="none"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    x1="10"
                    y1="9"
                    x2="54"
                    y2="9"
                  />
                </g>
              </svg>
            </button>
          </div>
          <!-- <font-awesome-icon
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
          ></font-awesome-icon> -->
        </div>
      </div>
      <!-- <pre>{{ item.selected_options[0].group_name }}</pre> -->
      <div class="sans-serif text-xs uppercase my-2">
        <div v-if="item.selected_options">
          <div v-for="option in item.selected_options" class="grid grid-cols-2">
            <span v-if="option.group_name === 'Lug Width'">
              {{ $t("lugWidth") }}
            </span>
            <span v-else>{{ option.group_name }}</span>
            <span>{{ option.option_name }}</span>
          </div>
        </div>

        <div class="item-quantity grid grid-cols-2">
          <span>{{ $t("quantity") }}</span>
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
        // console.log(this.item.id, this.quantity);
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

.spinner {
  animation: rotate 1s infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>