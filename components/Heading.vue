<template>
  <Component
    :is="as"
    class="font-semibold tracking-tighter"
    :class="{
      'text-5xl md:text-[5rem]': size === '8xl',
      'text-4xl md:text-6xl': size === '6xl',
      'text-2xl': size === '2xl',
    }"
  >
    <slot />
  </Component>
</template>

<script>
export default {
  props: {
    as: {
      type: [String, Object, Function],
      default: "h1",
    },
    size: {
      type: String,
      default: "8xl",
    },
    as: {
      type: [String, Object, Function],
      default: "h2",
    },
    size: {
      type: String,
      default: "6xl",
    },
    as: {
      type: [String, Object, Function],
      default: "h3",
    },
    size: {
      type: String,
      default: "2xl",
    },
  },
};
</script>
