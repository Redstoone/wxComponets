/* global Component wx */

Component({
  properties: {
    imgUrls: {
      type: Array,
      value: [],
    },
    swiperIndex: {
      type: Number,
      value: 0,
    },
    swiperHeight: {
      type: Number,
      value: 320,
    }
  },
  methods: {
    bindchange(e) {
      this.setData({
        swiperIndex: e.detail.current
      })
    },
  }
})
