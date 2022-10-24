<template>
  <div class="sans-serif text-xs">
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
        :class="index === 0 ? 'selected' : ''"
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
    label: { type: Object, required: true, defaultValue: {} },
    variation: { type: Object, required: true, defaultValue: {} },
  },
  data() {
    return {};
  },
  methods: {
    selectOption(variant, image) {
      // console.log(group);
      // console.log(option);
      // console.log(sku);
      let arr = [variant, image];
      // console.log(arr);
      this.$emit("selectOption", arr);
      document.querySelectorAll(".variant-button").forEach((el) => {
        el.classList.remove("selected");
      });
      document.getElementById(variant).classList.add("selected");
    },
  },
};
</script>

<style scoped>
button {
  border: 1px solid currentColor;
}
</style>