export const state = () => ({
  alternateLanguages: [],
  settings: {},
  navigation: {},
  product: {}
})

export const mutations = {
  setAlternateLanguages(state, alternateLanguages) {
    state.alternateLanguages = alternateLanguages
  },
  setSettings(state, settings) {
    state.settings = settings
  },
  setNavigation(state, navigation) {
    state.navigation = navigation
  },
  setProduct(state, product) {
    state.product = product
  }
}

export const actions = {
  async load(store, { params, lang, page = { alternate_languages: [] } }) {
    const navigation = await this.$prismic.api.getSingle('navigation', { lang })
    const settings = await this.$prismic.api.getSingle('settings', { lang })
    store.commit('setNavigation', navigation)
    store.commit('setSettings', settings)
    store.commit('setProduct', params)
    if (page.uid === 'product') {
      for (let i = 0; i < page.alternate_languages.length; i++) {
        page.alternate_languages[i].uid = 'shop/' + params.slug + '/' + params.permalink
      }
    }
    store.commit('setAlternateLanguages', page.alternate_languages)
  }
}
