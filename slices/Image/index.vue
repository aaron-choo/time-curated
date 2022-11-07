<template>
  <Bounded as="section">
    <PrismicImage
      v-if="slice.primary.image.url"
      :field="slice.primary.image"
      class="relative"
    />
  </Bounded>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  // The array passed to `getSliceComponentProps` is purely optional.
  // Consider it as a visual hint for you when templating your slice.
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
};
</script>
