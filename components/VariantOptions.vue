<template>
  <div
    :id="
      'variant-' +
      variantGroup.name.toLowerCase() +
      ' variant-' +
      variantGroup.id
    "
  >
    <p>{{ variantGroup.name }}</p>
    <div
      v-for="option in variantGroup.options"
      :key="option.id"
      class="inline-block"
    >
      <button
        :id="variantGroup.id + ' ' + option.id"
        @click="selectOption(variantGroup.id, option.id)"
        class="p-2 border mr-2"
      >
        {{ option.name }}
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
  },
  data() {
    return {};
  },
  methods: {
    selectOption(group, option) {
      console.log(group);
      console.log(option);
      let x = {};
      x[String(group)] = option;
      console.log(x);
      this.$emit("selectOption", x);
    },
  },
};
</script>
<style scoped>
</style>