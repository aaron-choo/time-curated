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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"icon_svg_code":"mile","title":[{"type":"paragraph","text":"Cillum veniam exercitation elit dolor exercitation amet do. Irure culpa ullamco ad proident sint et pariatur laboris magna.","spans":[]}],"description":[{"type":"paragraph","text":"Aliquip sint ipsum nulla pariatur ex labore voluptate reprehenderit eu consectetur anim voluptate voluptate minim. Reprehenderit nisi proident exercitation. Cillum dolor do et do ut velit sunt.","spans":[]}]}],"primary":{"title":[{"type":"heading1","text":"Catch","spans":[]}],"text_color":"#0600df","background_color":"#86cc44","background_image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5"}},"slice_type":"icon_grid","id":"_Default"}
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
      mock: {"variation":"iconGridSlider","version":"sktwi1xtmkfgx8626","items":[{"icon_svg_code":"chapter","title":[{"type":"paragraph","text":"Elit nostrud ad dolor cupidatat sit non qui. Labore excepteur duis elit commodo in.","spans":[]}],"description":[{"type":"paragraph","text":"Velit excepteur et veniam dolore id enim nostrud cillum id incididunt ad nostrud amet mollit. Eiusmod non consectetur aute non.","spans":[]}]}],"primary":{"title":[{"type":"heading1","text":"Wooden","spans":[]}],"text_color":"#fb1f69","background_color":"#78b7ac","background_image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2"}},"slice_type":"icon_grid","id":"_IconGridSlider"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_IconGridSlider.storyName = ''
