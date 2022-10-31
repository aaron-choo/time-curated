import MyComponent from '../../../../slices/Products';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Products'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"heading1","text":"Properly","spans":[]}],"description":[{"type":"paragraph","text":"Adipisicing ea Lorem ipsum culpa et sit. Deserunt labore laborum do id adipisicing ad aute ex consequat ea adipisicing id magna occaecat. In nostrud duis deserunt.","spans":[]}]},"slice_type":"products","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
