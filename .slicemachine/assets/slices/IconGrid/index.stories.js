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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"icon_svg_code":"play","title":[{"type":"paragraph","text":"Deserunt magna ullamco eu minim.","spans":[]}],"description":[{"type":"paragraph","text":"Duis minim esse excepteur consequat incididunt qui. Sit ut adipisicing occaecat aliqua excepteur dolore irure labore veniam enim excepteur Lorem proident.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2"}}],"primary":{"title":[{"type":"heading1","text":"Pound","spans":[]}],"text_color":"#6b723f","background_color":"#d6c440","background_image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1498050108023-c5249f4df085"},"icon_height":24,"icon_width":8},"slice_type":"icon_grid","id":"_Default"}
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
      mock: {"variation":"iconGridSlider","version":"sktwi1xtmkfgx8626","items":[{"icon_svg_code":"dinner","title":[{"type":"paragraph","text":"Occaecat sit proident consequat sunt ea commodo ad aute pariatur Lorem exercitation consequat. Voluptate dolor aliqua deserunt esse sit tempor qui voluptate. Id deserunt ad cupidatat nisi non mollit commodo pariatur dolore.","spans":[]}],"description":[{"type":"paragraph","text":"Ex nostrud ex amet ex nulla dolor nostrud qui pariatur excepteur sit est fugiat sunt aliquip. Pariatur nulla est consectetur minim elit. Anim consequat reprehenderit ipsum id ad aliquip in esse dolor velit.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2"}}],"primary":{"title":[{"type":"heading1","text":"Would","spans":[]}],"subtitle":[{"type":"paragraph","text":"Velit eu amet consectetur occaecat laborum nulla officia quis aliquip ipsum adipisicing aute. Ad excepteur et culpa commodo proident culpa exercitation est labore non reprehenderit et aute.","spans":[]}],"text_color":"#4ef1cf","background_color":"#01982f","background_image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1551739440-5dd934d3a94a"},"icon_height":83,"icon_width":56},"slice_type":"icon_grid","id":"_IconGridSlider"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_IconGridSlider.storyName = ''
