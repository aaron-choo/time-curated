import MyComponent from '../../../../slices/HeroSlider';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/HeroSlider'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1498050108023-c5249f4df085"},"title":[{"type":"heading2","text":"Promised","spans":[]}],"subtitle":[{"type":"paragraph","text":"Esse excepteur esse occaecat non consequat cupidatat aliqua culpa consequat qui nostrud ad.","spans":[]}],"button_text":"thick","link":{"link_type":"Web","url":"https://slicemachine.dev"},"text_color":"#6ac771","overlay_color":"#2cdf23"}],"primary":{},"slice_type":"hero_slider","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
