<template>
  <Component
    :is="as"
    :data-collapsible="collapsible || null"
    class="bounded px-6 relative"
    :class="{
      'py-4': yPadding === 'xxs',
      'py-6': yPadding === 'xs',
      'py-8 md:py-10': yPadding === 'sm',
      'py-12 md:py-20': yPadding === 'base',
      'py-20 md:py-32': yPadding === 'md',
      'secondary-background': secondaryBackground,
      'has-background-image': backgroundImage,
    }"
  >
    <nuxt-img
      v-if="backgroundImage"
      format="webp"
      :src="backgroundImage.url"
      sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
      :width="backgroundImage.width"
      :height="backgroundImage.height"
      class="
        background-image
        absolute
        top-0
        left-0
        h-full
        w-full
        object-cover
        -z-40
      "
      loading="lazy"
      placeholder
    />
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
.bounded {
  transition: background-color 0.3s ease;
}
.secondary-background {
  background-color: var(--bg-secondary);
}
.has-background-image {
  color: var(--color-overlay);
  background-color: transparent;
}
.has-background-image::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--bg-overlay);
  mix-blend-mode: multiply;
  z-index: -10;
}
</style>
