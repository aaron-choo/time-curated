<template>
  <div class="font-sans text-xs">
    <p class="uppercase mb-2 font-semibold">
      {{ label }}
    </p>
    <div
      v-for="(variant, index) in variation"
      :key="index"
      class="inline-block"
    >
      <button
        class="btn variant-button mr-2 hover:opacity-80"
        :id="variant.name"
        @click="selectOption(variant)"
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
    label: { type: String, required: true, defaultValue: {} },
    variation: { type: Array, required: true, defaultValue: {} },
  },
  data() {
    return {};
  },
  mounted() {
    this.selectOption(this.variation[0]);
  },
  methods: {
    selectOption(variant) {
      // console.log(group);
      // console.log(option);
      // console.log(sku);
      // let arr = [variant, image];
      // console.log(arr);
      this.$emit("selectOption", variant);
      document.querySelectorAll(".variant-button").forEach((el) => {
        el.classList.remove("selected");
      });
      document.getElementById(variant.name).classList.add("selected");
    },
  },
};
</script>

<style scoped>
button {
  border: 1px solid var(--color);
}
</style>