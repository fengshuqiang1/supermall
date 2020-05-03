<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'

BScroll.use(Pullup)

export default {
  data(){
    return {
      scroll:null
    }
  },
  props:{
    click:{
      type:Boolean,
      default:true
    },
    //接收更新的数据
    data:{
      type:Array,
      default() {
        return []
      }
    },
    //监听数据并更新滚动条的异步时延
    refreshDelay:{
      type:Number,
      default:20
    },
    //滚动模式
    probeType:{
      type:Number,
      default:0
    },
    //是否上拉加载
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  mounted(){
    setTimeout(() => {
      this._initScroll()
    }, 20)
  },
  methods:{
    //代理移动滚动条
    scrollTo(x, y, delay=500){
      this.scroll && this.scroll.scrollTo(x, y, delay)
    },
    //代理更新滚动条
    refresh(){
      this.scroll && this.scroll.refresh()
    },
    //代理完成上拉加载
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp()
    },
    //初始化better-scroll
    _initScroll() {
      if (!this.$refs.wrapper) {
        return
      }
      //初始化better-scroll
      this.scroll = new BScroll(this.$refs.wrapper, {
        click:this.click,
        probeType:this.probeType,
        pullUpLoad:this.pullUpLoad
      })
      if (this.probeType === 2 || this.probeType ===3) {
        this.scroll.on('scroll', position=>{
          this.$emit('scroll', position)
        })
      }
      if (this.pullUpLoad) {
        this.scroll.on('pullingUp', ()=>{
          this.$emit('pullingUp')
        })
      }
    }
  },
  watch:{
    data() {
      setTimeout(() => {
        this.refresh()
      }, this.refreshDelay)
    }
  }
}
</script>
<style scoped>
</style>