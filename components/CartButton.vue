<template>
  <button aria-label="Check Out" class="snipcart-checkout button relative">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      height="14"
      width="14"
      class="h-5 w-5"
    >
      <g>
        <path
          d="M12.88,12.39a1,1,0,0,1-.25.78,1,1,0,0,1-.75.33H2.12a1,1,0,0,1-.75-.33,1,1,0,0,1-.25-.78L2,4.5H12Z"
          fill="none"
          stroke="var(--color)"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M4.5,4.5V3a2.5,2.5,0,0,1,5,0V4.5"
          fill="none"
          stroke="var(--color)"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </g>
    </svg>
    <span
      class="
        snipcart-items-count
        absolute
        -bottom-[2px]
        left-0
        right-0
        sans-serif
        text-xs
      "
    ></span>
  </button>
</template>
<script>
export default {};
</script>

<style scoped>
</style>