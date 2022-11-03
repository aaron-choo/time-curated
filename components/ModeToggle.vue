<template>
  <div
    class="mode-switcher relative transition duration-300 rounded-full w-12"
    :class="{ 'has-scroll-over opacity-0 pointer-events-none': scrollOver }"
  >
    <ul class="flex">
      <li v-for="color of colors" :key="color.name" :class="color.name" w>
        <a
          class="
            relative
            flex
            h-4
            w-4
            m-1
            justify-center
            leading-none
            cursor-pointer
          "
        />
      </li>
    </ul>
    <div
      class="
        toggle
        bg-current
        absolute
        h-4
        w-4
        rounded-full
        top-1
        left-1
        pointer-events-none
        transition
        duration-300
      "
    />
  </div>
</template>

<script>
export default {
  props: ["scrollOver"],
  data() {
    return {
      colors: [
        { name: "light", symbol: " " },
        { name: "dark", symbol: " " },
      ],
    };
  },
};
</script>
<style scoped>
.mode-switcher a {
  color: var(--bg);
}

.mode-switcher {
  background-color: var(--color-fade-10);
}

.dark-mode .toggle {
  transform: translateX(1.5em);
  color: var(--bg);
}

.dark-mode .mode-switcher {
  background-color: #fec150;
}
</style>