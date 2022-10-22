<template>
  <div class="sans-serif text-xs">
    <p class="uppercase mb-2 font-semibold">
      {{ settings.data.lug_width_text }}
    </p>
    <div
      v-for="(variant, index) in variation"
      :key="index"
      class="inline-block"
    >
      <button
        class="btn variant-button inactive mr-2 hover:opacity-80"
        :id="variant.name"
        @click="selectOption(variant.name, variant.image)"
      >
        {{ variant.name }}
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    settings: { type: Object, required: true, defaultValue: {} },
    product: { type: Object, required: true, defaultValue: {} },
    variation: { type: Object, required: true, defaultValue: {} },
  },
  data() {
    return {};
  },
  methods: {
    selectOption(group, option) {
      // console.log(group);
      // console.log(option);
      // console.log(sku);
      let arr = [group, option];
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
  },
};
</script>

<style scoped>
button {
  border: 1px solid currentColor;
}
</style>