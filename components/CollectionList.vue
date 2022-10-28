<template>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <div v-for="watch in collection" :key="watch.id">
      <nuxt-link :to="LinkGetter(watch)">
        <collection-view :watch="watch"></collection-view
      ></nuxt-link>
    </div>
  </div>
</template>

<script>
import LinkResolver from "~/plugins/link-resolver.js";
export default {
  props: ["collection"],
  methods: {
    LinkGetter(watch) {
      return LinkResolver(watch);
    },
  },
};
</script>