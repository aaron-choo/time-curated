import MyComponent from '../../../../slices/ImageGrid';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ImageGrid'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1593642633279-1796119d5482"},"caption":[{"type":"paragraph","text":"Tempor aliquip magna minim culpa duis aute cillum. Incididunt minim non culpa id labore et mollit occaecat eu id mollit do et Lorem voluptate. Consequat nulla cupidatat commodo aliqua qui ea velit deserunt duis do ipsum nisi velit non.","spans":[]}]}],"primary":{},"slice_type":"image_grid","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
