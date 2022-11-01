<template>
  <Bounded as="footer" class="py-12 lg:py-12">
    <div class="grid gap-12">
      <div class="grid lg:grid-cols-10 gap-12">
        <div class="lg:col-span-4">
          <SignUpForm :settings="settings" class="lg:max-w-sm" />
        </div>
        <div class="lg:col-span-2 font-sans text-sm">
          <PrismicRichText
            :field="settings.data.footer_help_title"
            class="font-sans font-semibold mb-2"
          />
          <ul class="grid gap-1">
            <li
              v-for="link in settings.data.footer_help_links"
              :key="link.title"
            >
              <PrismicLink :field="link.link" target="_blank">
                {{ link.title }}
              </PrismicLink>
            </li>
          </ul>
        </div>
        <div class="lg:col-span-2 font-sans text-sm">
          <PrismicRichText
            :field="settings.data.footer_information_title"
            class="font-sans font-semibold mb-2"
          />
          <ul class="grid gap-1">
            <li
              v-for="link in settings.data.footer_information_links"
              :key="link.title"
            >
              <PrismicLink :field="link.link">
                {{ link.title }}
              </PrismicLink>
            </li>
          </ul>
        </div>
        <div class="lg:col-span-2 font-sans text-sm">
          <PrismicRichText
            :field="settings.data.footer_social_title"
            class="font-sans font-semibold mb-2"
          />
          <ul class="grid gap-1">
            <li
              v-for="link in settings.data.footer_social_links"
              :key="link.title"
            >
              <PrismicLink :field="link.link" target="_blank">
                {{ link.title }}
              </PrismicLink>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="
          footer-legal
          font-sans
          text-xs
          opacity-50
          md:flex
          justify-between
        "
      >
        <div class="mb-4 md:mb-0 md:order-2">
          <ul class="flex gap-4">
            <li
              v-for="link in settings.data.footer_legal_links"
              :key="link.title"
            >
              <PrismicLink :field="link.link">
                {{ link.title }}
              </PrismicLink>
            </li>
          </ul>
        </div>
        <div>© 2019-2022 {{ $prismic.asText(settings.data.siteTitle) }}</div>
      </div>
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
<style scoped>
footer {
  background-color: var(--bg-accent);
  color: var(--color-accent);
}
</style>
