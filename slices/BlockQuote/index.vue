<template>
  <Bounded as="section" class="block-quote">
    <div class="px-8 mx-auto max-w-2xl">
      <Heading as="blockquote" size="2xl" class="relative">
        {{ $prismic.asText(slice.primary.quote) }}
      </Heading>
      <cite class="block text-right">{{
        $prismic.asText(slice.primary.source)
      }}</cite>
    </div>
  </Bounded>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "BlockQuote",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
};
</script>

<style scoped>
blockquote:before,
q:before {
  content: "“";
  position: absolute;
  font-size: 40px;
  left: -25px;
  line-height: 1.2;
}
</style>
