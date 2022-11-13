<template>
  <Bounded as="section" yPadding="xs" class="link-menu">
    <ul class="flex justify-center font-sans uppercase text-xs gap-4">
      <li class="font-semibold">{{ $prismic.asText(slice.primary.title) }}</li>
      <li v-for="item in slice.items" :key="item.title" class="link">
        <PrismicLink :field="item.link">{{ item.title }}</PrismicLink>
      </li>
    </ul>
  </Bounded>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "LinkMenu",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
};
</script>

<style scoped>
a.nuxt-link-exact-active {
  text-underline-offset: 2px;
  text-decoration-thickness: 1px;
  text-decoration-line: underline;
}
.link-menu {
  background-color: var(--bg-secondary);
  color: var(--color-secondary);
}
</style>
