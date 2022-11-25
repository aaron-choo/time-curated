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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"title":[{"type":"paragraph","text":"Nisi sit exercitation non excepteur sunt qui aliqua enim tempor. Occaecat cupidatat id quis pariatur non dolore ut adipisicing officia occaecat labore aliquip consectetur non duis.","spans":[]}],"description":[{"type":"paragraph","text":"Nisi quis dolore cillum Lorem aliqua non nostrud minim amet aute do cupidatat. Enim minim adipisicing aliquip occaecat nostrud consectetur in nostrud exercitation ea ipsum sunt. Qui ipsum qui velit amet sint cupidatat do.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1560457079-9a6532ccb118"},"link":{"link_type":"Web","url":"https://prismic.io"}}],"primary":{"title":[{"type":"heading1","text":"Proud","spans":[]}],"text_color":"#0ba6d7","background_color":"#7c93be","background_image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1471897488648-5eae4ac6686b"},"icon_height":17,"icon_width":27},"slice_type":"icon_grid","id":"_Default"}
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
      mock: {"variation":"iconGridSlider","version":"sktwi1xtmkfgx8626","items":[{"title":[{"type":"paragraph","text":"Et ipsum anim reprehenderit duis aute. Anim dolor quis do ea do nisi ullamco qui. Ad cupidatat aliquip commodo labore reprehenderit elit veniam id amet nisi.","spans":[]}],"description":[{"type":"paragraph","text":"Duis sint labore aliqua.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1607582278043-57198ac8da43"},"link":{"link_type":"Web","url":"http://twitter.com"}}],"primary":{"title":[{"type":"heading1","text":"Fellow","spans":[]}],"subtitle":[{"type":"paragraph","text":"Lorem occaecat Lorem ullamco esse occaecat aute.","spans":[]}],"text_color":"#2b944b","background_color":"#2bd11c","background_image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1587653915936-5623ea0b949a"},"icon_height":80,"icon_width":8,"slides_per_view":44},"slice_type":"icon_grid","id":"_IconGridSlider"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_IconGridSlider.storyName = ''
