<template>
  <Bounded as="section" class="max-w-4xl mx-auto text-sm">
    <div class="mb-12">
      <h1 class="legal-title font-sans font-semibold">
        {{ $prismic.asText(slice.primary.title) }}
      </h1>
      <p class="legal-updated font-sans">
        {{
          Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "2-digit",
          }).format($prismic.asDate(slice.primary.last_updated))
        }}
      </p>
    </div>
    <div v-for="(item, index) in slice.items" :key="index" class="mb-12">
      <h2 class="font-sans font-semibold mb-12">
        <span class="mr-12">{{ index + 1 }}.</span
        >{{ $prismic.asText(item.title) }}
      </h2>
      <PrismicRichText :field="item.content" class="legal-content font-sans" />
    </div>
  </Bounded>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "Legal",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
};
</script>

<style>
.legal-content p:not(:last-child) {
  margin-bottom: 1rem;
}
</style>
