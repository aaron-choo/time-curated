<template>
  <Bounded as="div" class="text-center" yPadding="md">
    <Heading as="p" size="6xl" class="opacity-20 mb-0"
      >Ref.<em>{{ error.statusCode }}</em></Heading
    >
    <Heading
      as="h1"
      size="4xl"
      class="mt-0 mb-16"
      v-if="error.statusCode === 404"
      ><span v-if="this.$store.state.prismic.settings.lang == 'zh-cn'"
        >抱歉！查无此页</span
      ><span v-else>This page doesn't exist</span>
    </Heading>
    <Heading as="h1" size="4xl" class="mt-0 mb-16" v-else
      ><span v-if="this.$store.state.prismic.settings.lang == 'zh-cn'"
        >抱歉！查无此页</span
      ><span v-else>An error occurred</span>
    </Heading>
    <nuxt-link to="/">
      <button
        class="btn text-sm uppercase font-sans hover:opacity-80 font-medium"
      >
        <span v-if="this.$store.state.prismic.settings.lang == 'zh-cn'"
          >返回主页</span
        ><span v-else>Go to Home Page</span>
      </button>
    </nuxt-link>
  </Bounded>
</template>
<script>
export default {
  props: ["error"],
  layout: "default-without-breadcrumbs", // you can set a custom layout for the error page
  head() {
    return {
      title:
        this.$store.state.prismic.settings.lang == "zh-cn"
          ? `错误 - ${this.$prismic.asText(
              this.$store.state.prismic.settings.data.siteTitle
            )}`
          : `Error - ${this.$prismic.asText(
              this.$store.state.prismic.settings.data.siteTitle
            )}`,
    };
  },
};
</script>
<style scoped>
button {
  background: var(--color);
  color: var(--bg);
}
</style>