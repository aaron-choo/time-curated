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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1587614295999-6c1c13675117"},"subtitle":[{"type":"paragraph","text":"Ex exercitation voluptate culpa officia cillum mollit laboris laboris incididunt nisi cillum nulla minim. Magna incididunt ipsum officia irure.","spans":[]}],"title":[{"type":"heading2","text":"Better","spans":[]}],"description":[{"type":"paragraph","text":"Reprehenderit aute est qui eu dolore.","spans":[]}],"button_text":"future","link":{"link_type":"Web","url":"https://prismic.io"},"text_color":"#0fd6e0","overlay_color":"#b31be9"}],"primary":{},"slice_type":"hero_slider","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
