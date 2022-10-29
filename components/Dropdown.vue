<template>
  <div>
    <button
      class="uppercase py-4 px-3"
      @mouseenter="menuOpen = true"
      @mouseleave="menuOpen = false"
      @click.prevent="menuOpen = true"
    >
      <PrismicLink :field="links[0].link">
        {{ label }}
      </PrismicLink>
    </button>
    <div
      class="menu absolute left-0 w-full transition duration-500 shadow"
      :class="{
        'opacity-0 pointer-events-none': !menuOpen,
        ' ': menuOpen,
      }"
      @mouseenter="menuOpen = true"
      @mouseleave="menuOpen = false"
    >
      <Bounded as="div">
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
      this.menuOpen = false;
    },
  },
  data() {
    return {
      menuOpen: false,
    };
  },
};
</script>
<style scoped>
.menu {
  top: calc(100% + 1px);
  background-color: var(--bg-secondary);
  border-bottom: 1px solid var(--border-color);
}
a.nuxt-link-exact-active {
  text-underline-offset: 2px;
  text-decoration-thickness: 1px;
  text-decoration-line: underline;
}
</style>