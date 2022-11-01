<template>
  <div class="subscription-form">
    <form
      action="/api/sign-up"
      method="post"
      class="grid w-full grid-cols-1 gap-4"
    >
      <PrismicRichText
        v-if="$prismic.asText(settings.data.newsletterDescription)"
        :field="settings.data.newsletterDescription"
        :html-serializer="htmlSerializer"
        wrapper="div"
        class="text-xl"
      />
      <div class="grid grid-cols-1 gap-2">
        <div class="relative">
          <label>
            <span class="sr-only">Email address</span>
            <input
              name="email"
              type="email"
              placeholder="email@address.com"
              required="true"
              class="w-full rounded-[3px] py-2 pl-4 pr-12 font-sans"
            />
          </label>
          <button
            type="submit"
            class="
              absolute
              top-0
              right-0
              bottom-0
              flex
              items-center
              justify-center
              px-3
              text-2xl
            "
          >
            <span class="sr-only">Submit</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
              height="14"
              width="14"
              class="h-3 w-3"
            >
              <g>
                <path
                  d="M.5,9.5h9a4,4,0,0,0,0-8h-3"
                  fill="none"
                  stroke="var(--color-accent)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <polyline
                  points="3.5 6.5 0.5 9.5 3.5 12.5"
                  fill="none"
                  stroke="var(--color-accent)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    settings: {
      type: Object,
      required: true,
    },
  },
  methods: {
    htmlSerializer(type, element, content, children) {
      switch (type) {
        case "heading1":
          return /* html */ `<h2 class="font-semibold tracking-tighter text-4xl md:text-6xl mb-4 text-white last:mb-0">${children.join(
            ""
          )}</h2>`;

        case "paragraph":
          return /* html */ `<p class="mb-4 last:mb-0">${children.join(
            ""
          )}</p>`;

        default:
          return (
            this.$prismic?.htmlSerializer(type, element, content, children) ??
            null
          );
      }
    },
  },
};
</script>
<style scoped>
input {
  color: var(--color-accent);
  background-color: var(--border-accent);
}
input::placeholder {
  color: var(--color-accent);
  opacity: 0.8;
}
</style>