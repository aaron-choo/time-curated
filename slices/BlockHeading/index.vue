<template>
  <Bounded as="section" class="block-text">
    <div class="mx-auto max-w-3xl">
      <PrismicRichText
        :field="slice.primary.text"
        :html-serializer="htmlSerializer"
      />
    </div>
  </Bounded>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "BlockHeading",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
  methods: {
    htmlSerializer(type, element, content, children) {
      switch (type) {
        case "heading1":
          return /* html */ `<h1 class="text-2xl md:text-4xl mb-4 last:mb-0">${children.join(
            ""
          )}</h1>`;

        case "heading2":
          return /* html */ `<h2 class="text-2xl md:text-4xl mb-4 last:mb-0">${children.join(
            ""
          )}</h2>`;

        default:
          return (
            this.$prismic?.htmlSerializer(type, element, content, children) ??
            null
          );
      }
    },
  },
};
</script>
<style scoped>
</style>
