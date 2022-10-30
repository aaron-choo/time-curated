<template>
  <div class="text-sm sans-serif">
    <select
      :name="label.replace(/\s+/g, '-').toLowerCase()"
      :id="label.replace(/\s+/g, '-').toLowerCase()"
      v-model="variant"
      class="select w-full"
      @change="selectOption(variation[variant])"
      required
    >
      <option value="null" disabled selected hidden>{{ label }}</option>
      <option
        v-for="(variant, index) in variation"
        :key="index"
        :id="variant.name"
        :value="index"
      >
        {{ variant.name }}
      </option>
    </select>
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
    return {
      variant: null,
    };
  },
  mounted() {
    document
      .getElementById("add-to-cart")
      .classList.add("inactive", "has-variant");
  },
  methods: {
    selectOption(variant) {
      // console.log(group);
      // console.log(option);
      // console.log(sku);
      // let arr = [variant, image];
      // console.log(arr);
      // console.log(variant);
      this.$emit("selectOption", variant);
      document
        .getElementById("add-to-cart")
        .classList.remove("inactive", "has-variant");
      // document.querySelectorAll(".variant-button").forEach((el) => {
      //   el.classList.remove("selected");
      // });
      // document.getElementById(variant.name).classList.add("selected");
    },
  },
};
</script>

<style scoped>
select {
  border: 1px solid var(--color);
  color: var(--color);
  background-color: var(--bg);
  padding: 0.45em 1em;
  transition: all 0.3s ease;
  border-radius: 3px;

  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1em;
}
.dark-mode select {
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
}
</style>