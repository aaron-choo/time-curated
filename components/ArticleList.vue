<template>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <div v-for="article in articles" :key="article.uid">
      <nuxt-link :to="article.url">
        <article-view :article="article"></article-view
      ></nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["articles"],
  methods: {},
};
</script>