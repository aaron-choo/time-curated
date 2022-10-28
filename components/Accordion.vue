<template>
  <div>
    <button class="uppercase" @click="accordionOpen = !accordionOpen">
      {{ label }}
    </button>
    <div
      class="accordion w-full transition-all duration-500"
      :class="{
        'h-0 opacity-0 pointer-events-none': !accordionOpen,
        'h-auto': accordionOpen,
      }"
    >
      <Bounded as="div" yPadding="xs">
        <ul class="flex flex-col gap-2 uppercase">
          <template v-for="(link, index) in links">
            <li v-if="index > 0" :key="link.label">
              <PrismicLink :field="link.link">
                {{ link.label }}
              </PrismicLink>
            </li>
          </template>
        </ul>
      </Bounded>
    </div>
  </div>
</template>
<script>
export default {
  props: ["label", "links"],
  watch: {
    $route(to, from) {
      this.accordionOpen = false;
    },
  },
  data() {
    return {
      accordionOpen: false,
    };
  },
};
</script>
<style scoped>
</style>