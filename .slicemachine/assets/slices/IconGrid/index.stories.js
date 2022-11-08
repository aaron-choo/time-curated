import MyComponent from '../../../../slices/IconGrid';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/IconGrid'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"icon_svg_code":"cloud","title":[{"type":"paragraph","text":"Et nisi et proident.","spans":[]}],"description":[{"type":"paragraph","text":"Consectetur enim proident ullamco officia nulla fugiat fugiat exercitation irure cupidatat elit duis anim.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1607582278038-6bebbd4d7b72"}}],"primary":{"title":[{"type":"heading1","text":"Radio","spans":[]}],"text_color":"#33f1df","background_color":"#fcae06","background_image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"},"icon_height":37,"icon_width":49},"slice_type":"icon_grid","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''

export const _IconGridSlider = () => ({
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
      mock: {"variation":"iconGridSlider","version":"sktwi1xtmkfgx8626","items":[{"icon_svg_code":"man","title":[{"type":"paragraph","text":"Anim laborum exercitation occaecat. Cillum labore sunt est dolore deserunt do nostrud laboris consequat esse aute excepteur.","spans":[]}],"description":[{"type":"paragraph","text":"Officia ullamco esse nostrud et eu nostrud pariatur sint dolore nulla esse fugiat et. Id anim incididunt cupidatat magna veniam magna quis Lorem cillum esse mollit.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1551739440-5dd934d3a94a"}}],"primary":{"title":[{"type":"heading1","text":"Especially","spans":[]}],"subtitle":[{"type":"paragraph","text":"Culpa elit id adipisicing ipsum id ex nulla mollit ex. Culpa officia minim laboris eiusmod cillum est ipsum.","spans":[]}],"text_color":"#938baa","background_color":"#60d149","background_image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1606248897732-2c5ffe759c04"},"icon_height":70,"icon_width":9,"slides_per_view":74},"slice_type":"icon_grid","id":"_IconGridSlider"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_IconGridSlider.storyName = ''
