<template>
  <div :id="'variant-' + item.name.toLowerCase() + ' variant-' + item.id">
    <p>{{ item.name }}</p>
    <div v-for="option in item.options" :key="option.id" class="inline-block">
      <button
        :id="item.id + ' ' + option.id"
        @click="selectOption(item.id, option.id)"
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
    item: { type: Object, required: true, defaultValue: {} },
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