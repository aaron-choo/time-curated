<template>
  <Bounded as="section" class="block-text">
    <div class="mx-auto max-w-3xl">
      <PrismicRichText
        :field="slice.primary.text"
        :class="{ 'has-drop-cap': slice.primary.dropcap }"
      />
    </div>
  </Bounded>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "Text",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
};
</script>

<style scoped>
.has-drop-cap:not(:focus):first-letter {
  float: left;
  font-size: 3.5em;
  line-height: 0.75;
  font-weight: 100;
  margin: 0.05em 0.1em 0 0;
  text-transform: uppercase;
}
</style>
