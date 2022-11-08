import MyComponent from '../../../../slices/BlockHeading';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/BlockHeading'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"text":[{"type":"heading1","text":"Character","spans":[]}]},"slice_type":"block_heading","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
