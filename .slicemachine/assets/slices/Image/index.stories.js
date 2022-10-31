import MyComponent from '../../../../slices/Image';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Image'
}


export const _White = () => ({
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
      mock: {"variation":"white","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1545239351-1141bd82e8a6"},"withAccent":true},"slice_type":"image","id":"_White"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_White.storyName = ''

export const _LightSlate = () => ({
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
      mock: {"variation":"lightSlate","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1560457079-9a6532ccb118"},"withAccent":true},"slice_type":"image","id":"_LightSlate"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_LightSlate.storyName = ''
