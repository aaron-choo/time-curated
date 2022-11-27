import Prismic from '@prismicio/client'
import sm from './sm.json'

export default async () => {
  const client = await Prismic.getApi(sm.apiEndpoint)
  const locales = client.languages.map(lang => lang.id)
  const defaultLocale = locales[0]

  return {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
      title: 'Time Curated',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: "description",
          name: "description",
          content: "Time Curated is a vintage watch magazine based in Singapore that features news articles and stories on mechanical timepieces and other collectibles.",
        },
        { name: 'format-detection', content: 'telephone=no' },
        { hid: 'og-type', property: 'og:type', content: 'website' },
        { hid: 'og-title', property: 'og:title', content: 'Time Curated' },
        { hid: 'og-desc', property: 'og:description', content: 'Time Curated is a vintage watch magazine based in Singapore that features news articles and stories on mechanical timepieces and other collectibles.' },
        { hid: 'og-url', property: 'og:url', content: 'https://time-curated.com/' },
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    },

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
      '@nuxt/image',
      '@nuxt/postcss8',
      '@nuxtjs/fontawesome',
      '@nuxtjs/snipcart',
      '@nuxtjs/color-mode',
      '@nuxtjs/device',
      'nuxt-gsap-module',
    ],
    gsap: {
      extraPlugins: {
        scrollTo: true,
        scrollTrigger: true
      },
      extraEases: {
        expoScaleEase: true
      }
    },
    // Add global page transition
    // pageTransition: {
    //   name: 'page',
    //   mode: 'out-in',
    //   css: false,

    // beforeLeave() {
    //   this.$gsap.set(document.querySelector('#page-transition'), {
    //     y: '0vh',
    //   })
    //   this.$gsap.set(document.querySelector('body'), {
    //     opacity: 1,
    //   })
    // },
    // leave(el, done) {
    //   this.$gsap.to(document.querySelector('#page-transition'), {
    //     y: '-800vh',
    //     duration: 0.6,
    //     ease:'steps(8)',
    //   })
    //   this.$gsap.to(document.querySelector('body'), {
    //     opacity: 0,
    //     delay: 0.5,
    //     duration: 0.5,
    //   })
    //   this.$gsap.to(el, {
    //     opacity: 0,
    //     duration: 0.5,
    //     onComplete: done
    //   })
    // },
    // afterLeave() {
    //   console.log('after leave')
    //   this.$gsap.set(document.querySelector('#page-transition'), {
    //     y: '-800vh',
    //   })
    //   this.$gsap.set(document.querySelector('body'), {
    //     opacity: 0
    //   })
    // },
    // beforeEnter(el) {
    //   this.$gsap.set(el, {
    //     opacity: 0
    //   })
    //   this.$gsap.set(document.querySelector('body'), {
    //     opacity: 0
    //   })
    //   this.$gsap.set(document.querySelector('#page-transition'), {
    //     y: '-800vh',
    //   })
    // },
    // enter(el, done) {
    //   this.$gsap.to(document.querySelector('#page-transition'), {
    //     y: '0vh',
    //     duration: 0.6,
    //     ease:'steps(8)',
    //   })
    //   this.$gsap.to(el, {
    //     opacity: 1,
    //     duration: 0.5,
    //     onComplete: done
    //   })
    //   this.$gsap.to(document.querySelector('body'), {
    //     opacity: 1,
    //     duration: 0.5,
    //   })
    // },
    // },
    colorMode: {
      preference: 'light'
    },
    fontawesome: {
      icons: {
        solid: true,
        brands: true,
      },
    },
    snipcart: {
      key: 'ZDI2MDYwZmEtYTE2YS00YWRkLWE4ZTgtMDcxYmIxYWRiYmRlNjM3NzQ2NTgxMDczNTkzNjkz',
      attributes: [
        ['data-templates-url', '/snipcart-templates.html'],
        ['data-config-modal-style', 'side']
      ]
    },
    image: {
      provider: "prismic",
      prismic: {
        modifiers: {
          quality: 'auto:best',
        }
      }
    },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
      '@nuxtjs/i18n',
      /* Load Prismic module after i18n module to prevent extend route concurrency */
      ["@nuxtjs/prismic", {
        endpoint: sm.apiEndpoint || ""
      }],
      '@nuxtjs/axios',
      '@nuxtjs/sitemap'
    ],
    axios: {
      // proxy: true
    },
    sitemap: {
      hostname: process.env.MAIN_BASE_URL,
      gzip: true,
      exclude: [
        '/preview',
        '/shop/api',
        '/**/shop/api'
      ]
    },

    build: {
      postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {}
        }
      },
      transpile: ['@prismicio/vue']
    },
    generate: {
      fallback: true
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
      '@/styles/global.css',
      '@fontsource/inter/300.css',
      '@fontsource/inter/400.css',
      '@fontsource/inter/500.css',
      '@fontsource/inter/600.css',
      '@fontsource/inter/700.css',
      '@fontsource/eb-garamond/400.css',
      '@fontsource/eb-garamond/400-italic.css',
      '@fontsource/eb-garamond/500.css',
      '@fontsource/eb-garamond/500-italic.css',
      '@fontsource/eb-garamond/600.css',
      '@fontsource/eb-garamond/600-italic.css',
      '@fontsource/eb-garamond/700.css',
      '@fontsource/eb-garamond/700-italic.css',
      '@fontsource/im-fell-english',
      '@fontsource/noto-serif-sc/300.css',
      '@fontsource/noto-serif-sc/400.css',
      '@fontsource/noto-serif-sc/500.css',
      '@fontsource/noto-serif-sc/600.css',
      '@fontsource/noto-serif-sc/700.css',
      '@fontsource/noto-sans-sc/300.css',
      '@fontsource/noto-sans-sc/400.css',
      '@fontsource/noto-sans-sc/500.css',
      '@fontsource/noto-sans-sc/700.css',
      'flag-icons/css/flag-icons.css',
      '@/assets/css/main.css'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    plugins: [
      { src: '~/plugins/prismicLinks', ssr: false },
      '~/plugins/vue-panzoom'
    ],

    publicRuntimeConfig: {
      development: process.env.NODE_ENV === 'development'
    },

    i18n: {
      locales,
      defaultLocale,
      vueI18nLoader: true
    },
    loading: {
      color: 'var(--color)'
    },
    prismic: {
      endpoint: sm.apiEndpoint,
      modern: true,
      // linkResolver: '@/plugins/link-resolver',
      apiOptions: {
        routes: [
          {
            type: 'page',
            path: '/:lang?/:uid'
          },
          {
            type: 'product_category',
            path: '/:lang?/shop/:uid'
          },
          {
            type: 'product',
            resolvers: {
              category: 'product_category',
            },
            path: '/:lang?/shop/:category/:uid'
          },
          {
            type: 'collection',
            path: '/:lang?/collection/:uid'
          },
          {
            type: 'article_category',
            path: '/:lang?/articles/:uid'
          },
          {
            type: 'article',
            resolvers: {
              category: 'article_category',
            },
            path: '/:lang?/articles/:category/:uid'
          },
        ]
      },

      htmlSerializer(type, element, content, children) {
        switch (type) {
          case 'paragraph':
            return /* html */ `<p class="mb-2 last:mb-0">${children.join('')}</p>`

          case 'group-o-list-item':
            return /* html */ `<ol class="mb-7 pl-4 last:mb-0 md:pl-6">${children.join('')}</ol>`

          case 'o-list-item':
            return /* html */ `<li class="mb-1 list-decimal pl-1 last:mb-0 md:pl-2">${children.join('')}</li>`

          case 'group-list-item':
            return /* html */ `<ul class="mb-7 pl-4 last:mb-0 md:pl-6">${children.join('')}</ul>`

          case 'list-item':
            return /* html */ `<li class="mb-1 list-disc pl-1 last:mb-0 md:pl-2">${children.join('')}</li>`

          case 'preformatted':
            return /* html */ `<pre class="mb-7 rounded bg-slate-100 p-4 text-sm last:mb-0 md:p-8 md:text-lg">
  <code>${children.join('')}</code>
</pre>`

          case 'strong':
            return /* html */ `<strong class="font-semibold">${children.join('')}</strong>`

          case 'hyperlink':
            if (element.data.link_type === 'Document') {
              return /* html */ `<a href="${element.data.url}" class="underline decoration-1 underline-offset-2" data-nuxt-link>${children.join('')}</a>`
            } else {
              return /* html */ `<a href="${element.data.url}" target="_blank" class="underline decoration-1 underline-offset-2">${children.join('')}</a>`
            }

          default:
            return null
        }
      }
    }
  }
}
