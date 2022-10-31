import MyComponent from '../../../../slices/Legal';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Legal'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"title":[{"type":"heading2","text":"Chance","spans":[]}],"content":[{"type":"paragraph","text":"Qui cillum consequat voluptate est ea aliquip. Pariatur ipsum laboris dolore nisi ullamco nisi Lorem ad eiusmod elit dolore quis.","spans":[]}]}],"primary":{"title":[{"type":"heading1","text":"Spent","spans":[]}],"last_updated":"2015-12-23"},"slice_type":"legal","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
