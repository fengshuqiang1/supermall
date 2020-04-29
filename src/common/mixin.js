import { debounce } from '@/common/utils'

export const itemListMixin = {
  data() {
    return {
      itemRefresh:null
    }
  },
  mounted() {
    //对会短时间触发很多次的更新函数进行防抖处理，减少执行更新函数次数
    let refresh = debounce(this.$refs.scroll.refresh, 200)
    this.itemRefresh = () => {
      //更新滚动条并防抖
      refresh()
    }
    //监听图片加载的完成
    this.$bus.$on('itemImgLoad', this.itemRefresh)
  }
}
