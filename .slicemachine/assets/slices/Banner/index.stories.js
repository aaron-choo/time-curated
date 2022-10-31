import MyComponent from '../../../../slices/Banner';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Banner'
}


export const _Default = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"title":"natural","image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f"},"link":{"link_type":"Web","url":"https://prismic.io"}}],"primary":{},"slice_type":"banner","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
