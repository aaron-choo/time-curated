<template>
  <Component
    :is="as"
    :data-collapsible="collapsible || null"
    class="px-6"
    :class="{
      'py-8 md:py-10': yPadding === 'sm',
      'py-20 md:py-32': yPadding === 'base',
      'secondary-background': secondaryBackground,
    }"
  >
    <div class="mx-auto w-full max-w-7xl">
      <slot />
    </div>
  </Component>
</template>

<script>
export default {
  props: {
    as: {
      type: [String, Object, Function],
      default: "div",
    },
    yPadding: {
      type: String,
      default: "sm",
    },
    collapsible: {
      type: Boolean,
      default: true,
    },
    secondaryBackground: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style scoped>
.secondary-background {
  background: var(--bg-secondary);
}
</style>
