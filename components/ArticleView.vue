<template>
  <div class="article-view relative">
    <nuxt-img
      v-if="article.data.images.length > 0"
      format="webp"
      :src="article.data.images[0].image.url"
      sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
      :width="article.data.images[0].image.width"
      :height="article.data.images[0].image.height"
      class="article-thumbnail w-full rounded-[3px] aspect-1 object-cover"
      loading="lazy"
    />
    <div class="article-meta text-center mt-4 flex flex-col gap-1">
      <h3
        class="article-title leading-tight text-lg"
        v-if="article.data.title.slice(0, 20) === 'Collectors Dialogue:'"
      >
        <em>Collectors Dialogue</em><br />{{ article.data.title.slice(20) }}
      </h3>
      <h3 class="article-title leading-tight text-lg" v-else>
        {{ article.data.title }}
      </h3>
      <Heading
        as="p"
        size="md"
        class="font-sans text-xs font-medium uppercase my-0"
        v-if="article.data.city"
      >
        {{ $prismic.asText(article.data.city) }}
      </Heading>
    </div>

    <!-- <pre>{{ article }}</pre> -->
  </div>
</template>

<script>
export default {
  props: {
    article: { type: Object, defaultValue: {}, required: true },
  },
};
</script>
<style scoped>
</style>