<template>
  <Component
    :is="as"
    class="my-2 leading-tight"
    :class="{
      'text-5xl md:text-[5rem]': size === '8xl',
      'text-4xl md:text-6xl': size === '6xl',
      'text-3xl md:text-5xl': size === '5xl',
      'text-2xl md:text-4xl': size === '4xl',
      'text-2xl md:text-3xl': size === '3xl',
      'text-2xl': size === '2xl',
      'text-xl': size === 'xl',
      'text-lg': size === 'lg',
      'text-base': size === 'base',
      'text-sm': size === 'sm',
      'text-xs': size === 'xs',
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
