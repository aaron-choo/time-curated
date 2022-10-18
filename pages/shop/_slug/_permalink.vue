<template>
  <Bounded as="section" :collapsible="false">
    <div class="grid grid-cols-2 gap-8">
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
          <h1>{{ product.name }}</h1>
          <p v-if="Object.keys(variantOption).length != 0">
            <!-- <pre>{{variantData}}</pre>
            {{ variantOption }} -->
            {{ variantPrice }}
          </p>
          <p v-if="Object.keys(variantOption).length === 0">
            {{ product.price.formatted_with_code }}
          </p>

          <variant-options
            v-for="variant_group in product.variant_groups"
            :key="variant_group.id"
            :product="product"
            :variantGroup="variant_group"
            :variantOption="variantOption"
            :variantName="variantName"
            @selectOption="selectOption($event)"
          />

          <!-- <pre>{{ variantOption }}</pre> -->

          <AddToCartBtn :product="product" :variant="variantOption" />
          <hr />
          <h2>Description</h2>
          <div v-html="product.description"></div>
          <hr />
          <h2>Dimensions</h2>
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
            <hr />

            <h2>Note</h2>
            <p>
              Due to its handcrafted nature, the leather's colour, texture and
              dimensions may vary slightly. The leather has been carefully
              treated to age with wear, developing a patina unique to every
              wrist. Discolouration may occur upon exposure to sweat or rain.
            </p>
          </div>
          <pre>{{ product.variant_groups }}</pre>
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
      variantData: {},
      variantName: {},
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
  methods: {
    async selectOption(option) {
      try {
        console.log("option", option);
        this.variantOption[String(option[0])] = option[1];
        this.variantName = option[2].slice(0, -2);
        console.log("variantOption", this.variantOption);
        console.log("variantName", this.variantName);
        console.log(
          "product variant pair",
          this.product.id,
          Object.values(this.variantOption)[0]
        );
        // this.variantPrice = await this.$commerce.products.getVariant(
        //   this.product.id,
        //   Object.values(this.variantOption)[0]
        // );
        // console.log(variantPrice);
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
            console.log("data", data.data);
            const vrntopt = Object.values(this.variantOption)[0];
            console.log("vrntopt", vrntopt);
            console.log("data", this.variantOption);
            this.variantData = data.data.filter(({ sku }) =>
              sku.includes(this.variantName)
            );
            console.log("variantData", this.variantData);
            console.log(this.variantData[0].price.formatted_with_code);
            this.variantPrice = this.variantData[0].price.formatted_with_code;
          });
      } catch (error) {
        // eslint-disable-next-line
        console.log(error);
      }
    },
  },
};
</script>