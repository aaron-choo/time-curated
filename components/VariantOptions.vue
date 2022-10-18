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
        @click="selectOption(variantGroup.id, option.id, option.name)"
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
    variantName: { type: Object, required: true, defaultValue: {} },
  },
  data() {
    return {};
  },
  methods: {
    selectOption(group, option, name) {
      console.log(group);
      console.log(option);
      console.log(name);
      let arr = [group, option, name];
      console.log(arr);
      this.$emit("selectOption", arr);
    },
  },
};
</script>
<style scoped>
</style>