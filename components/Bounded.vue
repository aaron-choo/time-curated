<template>
  <Component
    :is="as"
    :data-collapsible="collapsible || null"
    :style="
      backgroundImage
        ? 'background-image:url(' + backgroundImage.url + ');'
        : null
    "
    class="px-6"
    :class="{
      'py-3': yPadding === 'xxs',
      'py-4': yPadding === 'xs',
      'py-8 md:py-10': yPadding === 'sm',
      'py-12 md:py-20': yPadding === 'base',
      'py-20 md:py-32': yPadding === 'md',
      'secondary-background': secondaryBackground,
      'background-image': backgroundImage,
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
    backgroundImage: {
      type: Object,
      default: null,
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
.background-image {
  color: var(--overlay-color);
  background-size: cover;
  background-position: center;
  background-color: var(--overlay-bg);
  background-blend-mode: overlay;
}
</style>
