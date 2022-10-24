<template>
  <Bounded as="footer" class="bg-gray-800 pb-12 text-slate-300 md:pb-12">
    <div class="grid grid-cols-1 justify-items-center gap-20 md:gap-24">
      <SignUpForm :settings="settings" />
    </div>
  </Bounded>
</template>

<script>
export default {
  props: {
    settings: {
      type: Object,
      required: true,
    },
  },
};
</script>
