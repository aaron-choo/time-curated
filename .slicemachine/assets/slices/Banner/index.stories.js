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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"title":[{"type":"heading2","text":"Disappear","spans":[]},{"type":"heading2","text":"Close","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85"},"link":{"link_type":"Web","url":"https://slicemachine.dev"},"button_text":"dish","text_color":"#283294","overlay_color":"#8a465a"}],"primary":{},"slice_type":"banner","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
