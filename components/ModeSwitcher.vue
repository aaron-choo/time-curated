<template>
  <div>
    <div
      class="
        mode-switcher
        relative
        transition
        duration-300
        w-5
        h-6
        overflow-hidden
      "
    >
      <ul
        class="
          flex flex-col
          relative
          transition
          duration-1000
          transform
          -translate-y-6
        "
      >
        <li
          v-for="color of colors"
          :key="color.name"
          :class="color.name"
          class="py-0.5"
          @click="$colorMode.preference = color.name"
        >
          <a class="relative flex justify-center leading-none cursor-pointer">
            <svg
              v-if="color.name === 'light'"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
              height="14"
              width="14"
              class="w-5 h-5"
            >
              <g>
                <circle
                  cx="7"
                  cy="7"
                  r="3.25"
                  fill="none"
                  stroke="var(--color)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></circle>
                <line
                  x1="7"
                  y1="0.5"
                  x2="7"
                  y2="1.5"
                  fill="none"
                  stroke="var(--color)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></line>
                <line
                  x1="7"
                  y1="12.5"
                  x2="7"
                  y2="13.5"
                  fill="none"
                  stroke="var(--color)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></line>
                <line
                  x1="13.5"
                  y1="7"
                  x2="12.5"
                  y2="7"
                  fill="none"
                  stroke="var(--color)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></line>
                <line
                  x1="1.5"
                  y1="7"
                  x2="0.5"
                  y2="7"
                  fill="none"
                  stroke="var(--color)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></line>
                <line
                  x1="11.6"
                  y1="2.4"
                  x2="10.89"
                  y2="3.11"
                  fill="none"
                  stroke="var(--color)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></line>
                <line
                  x1="3.11"
                  y1="10.89"
                  x2="2.4"
                  y2="11.6"
                  fill="none"
                  stroke="var(--color)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></line>
                <line
                  x1="11.6"
                  y1="11.6"
                  x2="10.89"
                  y2="10.89"
                  fill="none"
                  stroke="var(--color)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></line>
                <line
                  x1="3.11"
                  y1="3.11"
                  x2="2.4"
                  y2="2.4"
                  fill="none"
                  stroke="var(--color)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></line>
              </g>
            </svg>

            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
              height="14"
              width="14"
              class="w-5 h-5 transform -scale-x-100"
            >
              <path
                d="M12,10.48A6.55,6.55,0,0,1,6.46.5a6.55,6.55,0,0,0,1,13A6.46,6.46,0,0,0,13,10.39,6.79,6.79,0,0,1,12,10.48Z"
                fill="none"
                stroke="var(--color)"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
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
.dark-mode .mode-switcher ul {
  transform: translateY(0);
}
</style>