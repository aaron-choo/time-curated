<template>
  <Bounded as="section" :collapsible="false">
    <div class="grid md:grid-cols-2 gap-8">
      <div class="grid grid-cols-1 gap-4 self-start">
        <div v-for="asset in assets" :key="asset.id">
          <img
            v-if="asset.url"
            :src="asset.url"
            :width="asset.image_dimensions.width"
            :height="asset.image_dimensions.height"
            class="w-full"
          />
        </div>
      </div>
      <div>
        <div class="sticky top-8">
          <div class="mb-4">
            <heading as="h1" size="2xl">{{ product.name }}</heading>
            <heading as="p" size="lg">
              <span v-if="Object.keys(variantOption).length != 0">
                ${{ variantPrice }}
              </span>
              <span v-if="Object.keys(variantOption).length === 0">
                ${{ product.price.formatted_with_code }}
              </span>
            </heading>
          </div>
          <variant-options
            v-for="variant_group in product.variant_groups"
            class="my-4"
            :key="variant_group.id"
            :product="product"
            :variantGroup="variant_group"
            :variantOption="variantOption"
            :variantSku="variantSku"
            @selectOption="selectOption($event)"
          />
          <!-- <pre>{{ variantOption }}</pre> -->
          <p class="opacity-80 sans-serif text-xs font-thin">
            Free registered shipping on international orders over $250 SGD
            (Domestic orders over $100 SGD)
          </p>
          <AddToBagBtn
            class="my-4"
            :class="disableAddToBag()"
            :product="product"
            :variant="variantOption"
          />
          <heading
            as="h2"
            size="xs"
            class="tracking-wider sans-serif uppercase font-medium"
            >Description</heading
          >
          <div v-html="product.description"></div>
          <heading
            as="h2"
            size="xs"
            class="tracking-wider sans-serif uppercase font-medium"
            >Dimensions</heading
          >
          <div class="flex flex-col">
            <p
              v-for="attribute in product.attributes"
              v-if="attribute.value && attribute.name != 'Leather Disclaimer'"
              :key="attribute.id"
              :class="attribute.name.replace(/\s+/g, '-').toLowerCase()"
            >
              {{ attribute.name }}: {{ attribute.value }}
            </p>
          </div>
          <div
            v-if="
              product.attributes.find((x) => x.name === 'Leather Disclaimer')
                .value === true
            "
          >
            <heading
              as="h2"
              size="xs"
              class="tracking-wider sans-serif uppercase font-medium"
              >Note</heading
            >
            <p>
              Due to its handcrafted nature, the leather's colour, texture and
              dimensions may vary slightly. The leather has been carefully
              treated to age with wear, developing a patina unique to every
              wrist. Discolouration may occur upon exposure to sweat or rain.
            </p>
          </div>
          <!-- <pre>{{ product }}</pre> -->
        </div>
      </div>
    </div>
    <div>
      <h2>Shipping Information</h2>
      <prismic-rich-text :field="settings.data.shipping_information" />
      <h2>Return Policy</h2>
      <prismic-rich-text :field="settings.data.return_policy" />
      <!-- <pre>{{ this.settings }}</pre> -->
    </div>
    <SliceZone :slices="page.data.slices" :components="components" />
  </Bounded>
</template>
<script>
import { components } from "~/slices";
export default {
  async asyncData({ $prismic, store, i18n, params, $commerce }) {
    const lang = i18n.locale;
    const page = await $prismic.api.getByUID("page", "product", { lang });
    await store.dispatch("prismic/load", { lang, page });
    const { permalink } = params;
    const product = await $commerce.products.retrieve(permalink, {
      type: "permalink",
    });
    return {
      product,
      page: page,
      assets: product.assets,
      variants: product.variant_groups,
      variantOption: {},
      variantPrice: product.price.formatted_with_code,
      variantSku: {},
    };
  },
  data() {
    return { components };
  },
  head() {
    return {
      title: `${this.product.name} - ${this.$prismic.asText(
        this.$store.state.prismic.settings.data.siteTitle
      )}`,
    };
  },
  computed: {
    settings() {
      return this.$store.state.prismic.settings;
    },
  },
  beforeMount() {
    this.loadVariants();
  },
  methods: {
    async loadVariants(product) {
      try {
        const url = new URL(
          "https://api.chec.io/v1/products/" + this.product.id + "/variants"
        );
        const headers = {
          "X-Authorization": process.env.NUXT_ENV_CHEC_PUBLIC_API_KEY,
          Accept: "application/json",
          "Content-Type": "application/json",
        };
        fetch(url, {
          method: "GET",
          headers: headers,
        })
          .then((response) => response.json())
          .then((data) => {
            // console.log("data", data.data);
            let sourceInfo = data.data;
            let siteInfo = this.product.variant_groups[0].options;
            for (let i = 0; i < sourceInfo.length; i++) {
              siteInfo[i].price = sourceInfo[i].price;
              siteInfo[i].inventory = sourceInfo[i].inventory;
              siteInfo[i].sku = sourceInfo[i].sku;
            }
            document
              .querySelectorAll(".variant-button.available")
              .forEach((el) => {
                el.classList.remove("inactive");
              });
          });
      } catch (error) {
        // eslint-disable-next-line
        console.log(error);
      }
    },
    selectOption(option) {
      // console.log("option", option);
      this.variantOption[String(option[0])] = option[1];
      this.variantSku = option[2];
      // console.log("variantOption", this.variantOption);
      // console.log("variantSku", this.variantSku);
      // console.log(
      //   "product variant pair",
      //   this.product.id,
      //   Object.values(this.variantOption)[0]
      // );
      this.variantPrice = this.product.variant_groups[0].options.filter(
        ({ sku }) => sku.includes(this.variantSku)
      )[0].price.formatted_with_code;
      // console.log(this.variantPrice);
    },
    disableAddToBag() {
      if (this.product.variant_groups.length > 0) {
        return "variant inactive";
      }
    },
  },
};
</script>