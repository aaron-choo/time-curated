import MyComponent from '../../../../slices/BlockQuote';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/BlockQuote'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"quote":[{"type":"paragraph","text":"Ipsum aliquip elit officia deserunt duis id occaecat qui fugiat excepteur do tempor velit labore ad. Eu tempor sit mollit ad et enim nulla.","spans":[]}],"source":[{"type":"paragraph","text":"Eu voluptate nulla ad anim esse irure aliqua mollit dolor amet pariatur magna.","spans":[]}]},"slice_type":"block_quote","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
