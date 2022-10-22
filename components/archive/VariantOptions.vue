<template>
  <div
    class="sans-serif text-xs"
    :id="
      'variant-' +
      variantGroup.name.toLowerCase() +
      ' variant-' +
      variantGroup.id
    "
  >
    <p
      v-if="variantGroup.name === 'Lug Width'"
      class="uppercase mb-2 font-semibold"
    >
      {{ $t("lugWidth") }}
    </p>
    <p v-else class="uppercase mb-2 font-semibold">{{ variantGroup.name }}</p>
    <div
      v-for="option in variantGroup.options"
      :key="option.id"
      class="inline-block"
    >
      <button
        class="btn variant-button inactive mr-2 hover:opacity-80"
        :id="variantGroup.id + ' ' + option.id"
        :class="checkSoldOut(option.inventory)"
        @click="selectOption(variantGroup.id, option.id, option.sku)"
      >
        {{ option.name }}
        <span style="display: none">
          {{ option.price.formatted_with_code }} {{ option.inventory }}</span
        >

        <!-- <span>{{ option.price.formatted_with_code }}</span> -->
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    product: { type: Object, required: true, defaultValue: {} },
    variantGroup: { type: Object, required: true, defaultValue: {} },
    variantOption: { type: Object, required: true, defaultValue: {} },
    variantSku: { type: Object, required: true, defaultValue: {} },
  },
  data() {
    return {};
  },
  methods: {
    selectOption(group, option, sku) {
      // console.log(group);
      // console.log(option);
      // console.log(sku);
      let arr = [group, option, sku];
      // console.log(arr);
      this.$emit("selectOption", arr);
      document.querySelectorAll(".variant-button").forEach((el) => {
        el.classList.remove("selected");
      });
      document.getElementById(group + " " + option).classList.add("selected");
      document
        .getElementById("add-to-bag")
        .classList.remove("variant", "inactive");
    },
    checkSoldOut(option) {
      if (option < 1) {
        return "sold-out";
      } else {
        return "available";
      }
    },
  },
};
</script>

<style scoped>
button {
  border: 1px solid currentColor;
}
</style>