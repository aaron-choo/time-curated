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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"icon_svg_code":"birth","title":[{"type":"paragraph","text":"Exercitation magna enim culpa commodo. Tempor mollit sit laborum ea adipisicing nostrud cupidatat laborum dolore nostrud occaecat nostrud.","spans":[]}],"description":[{"type":"paragraph","text":"Veniam eu sint aliquip nostrud aute officia sunt sunt.","spans":[]}]}],"primary":{"title":[{"type":"heading1","text":"Connected","spans":[]}],"text_color":"#05b7aa","background_color":"#afcd61","background_image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1587840171670-8b850147754e"}},"slice_type":"icon_grid","id":"_Default"}
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
      mock: {"variation":"iconGridSlider","version":"sktwi1xtmkfgx8626","items":[{"icon_svg_code":"told","title":[{"type":"paragraph","text":"Labore laborum aliquip velit exercitation commodo consectetur ut reprehenderit laboris. Est dolore pariatur magna elit Lorem ullamco id esse sunt aliquip ex.","spans":[]}],"description":[{"type":"paragraph","text":"Consequat cillum irure incididunt labore aliquip elit labore aliqua adipisicing.","spans":[]}]}],"primary":{"title":[{"type":"heading1","text":"Suggest","spans":[]}],"subtitle":[{"type":"paragraph","text":"Esse magna minim consectetur nisi mollit nostrud. Proident ullamco aliquip duis nulla aute excepteur. Elit duis est ex consectetur est ipsum commodo.","spans":[]}],"text_color":"#5e5848","background_color":"#b8467e","background_image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1589321578146-4c1ba445cc88"}},"slice_type":"icon_grid","id":"_IconGridSlider"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_IconGridSlider.storyName = ''
