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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"title":[{"type":"heading2","text":"Crack","spans":[]},{"type":"heading2","text":"Pride","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1471897488648-5eae4ac6686b"},"link":{"link_type":"Web","url":"http://google.com"},"button_text":"pilot","text_color":"#dff7c1","overlay_color":"#6259f2"}],"primary":{},"slice_type":"banner","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
