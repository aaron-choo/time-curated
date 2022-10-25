export const state = () => ({
  alternateLanguages: [],
  settings: {},
  navigation: {},
  page: {},
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
  setPage(state, page) {
    state.page = page
  }
}

export const actions = {
  async load(store, { lang, page = { alternate_languages: [] } }) {
    const navigation = await this.$prismic.api.getSingle('navigation', { lang })
    const settings = await this.$prismic.api.getSingle('settings', { lang })
    store.commit('setNavigation', navigation)
    store.commit('setSettings', settings)
    const pageAltLang = page.alternate_languages
    // console.log(pageAltLang)
    if (pageAltLang[0].type === 'product') {
      const pageCat = page.data.product_category.uid
      for (let i = 0; i < pageAltLang.length; i++) {
        pageAltLang[i].data = { 'product_category': { 'uid': pageCat } }
        // console.log(pageAltLang[i]);
      }
      // console.log(pageAltLang)
      // console.log(pageCat)
    }
    store.commit('setAlternateLanguages', pageAltLang)
    store.commit('setPage', page)
  }
}
