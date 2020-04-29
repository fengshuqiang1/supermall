<template>
  <div id="home">
    <nav-bar class="home-nav">
      <p slot="center">购物街</p>
    </nav-bar>
    <tab-control 
      class="tab-control1" 
      :titles="['流行','新款','精选']" 
      @switchTab="switchTab"
      v-show="isShowTabControl"
      ref="tabControl1"
    />

    <Scroll 
      class="scroll-wrapper" 
      ref="scroll" 
      :data="showGoods"
      :probeType="3"
      :pullUpLoad="true"
      @scroll="scrollPosition"
      @pullingUp="scrollLoad"
    >
      <home-slider class="" :banners="banners" @sliderImgLoad="sliderImgLoad"></home-slider>
      <recommend-view :recommend="recommend"/>
      <feature-view/>
      <tab-control :titles="['流行','新款','精选']" @switchTab="switchTab" ref="tabControl2"/>
      <goods-list :goods="goods[goodsType].list" />
    </Scroll>

    <back-top @click.native="backToTop" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import HomeSlider from './HomeSlider'
import RecommendView from './RecommendView'
import FeatureView from './FeatureView'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backtop/BackTop'
import { itemListMixin } from '@/common/mixin'

import {getHomeMultidata, getRecommendData} from 'network/home'
import { debounce } from '@/common/utils'
import {SHOW_BACKTOP_POSITION} from '@/common/const'

export default {
  mixins: [itemListMixin],
  components:{
    HomeSlider,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data(){
    return{
      banners:[],
      recommend:[],
      // 初始化tabcontrol数据
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      // 切换tab的货物类型
      goodsType:'pop',
      goodsTypeList:['pop','new','sell'],
      isShowBackTop:false,
      TabControlPosition:0,
      isShowTabControl:false,
      itemRefresh:null
    }
  },
  created(){
    // 请求轮播图等数据
    this.getHomeMultidata().then(()=>{
      this.$nextTick(()=>{
        this.$refs.scroll.refresh()
      })
    })
    // 请求流行等数据
    this.getRecommendData('pop').then(()=>{
      this.$nextTick(()=>{
        this.$refs.scroll.refresh()
      })
    })
    this.getRecommendData('new').then(()=>{
      this.$nextTick(()=>{
        this.$refs.scroll.refresh()
      })
    })
    this.getRecommendData('sell').then(()=>{
      this.$nextTick(()=>{
        this.$refs.scroll.refresh()
      })
    })
  },
  computed: {
    showGoods() {
      return this.goods[this.goodsType].list
    }
  },
  //进入该页面时
  activated() {
    this.$refs.scroll.refresh()
  },
  //离开该页面时
  deactivated(){
    //离开时移除事件itemImgLoad的绑定，以防在更新其他页面滚动条时被调用。
    this.$bus.$off('itemImgLoad', this.itemRefresh)
  },
  methods:{
    //slider图片加载完成后获取tabcontrol离顶部的距离
    sliderImgLoad(){
      this.TabControlPosition = this.$refs.tabControl2.$el.offsetTop
    },
    //上拉触底加载
    scrollLoad(){
      this.getRecommendData(this.goodsType)
    },
    //获取滚动条的滚动位置
    scrollPosition(position){
      //控制backtop的显示和隐藏
      this.isShowBackTop = (-position.y) > SHOW_BACKTOP_POSITION? true : false
      //控制tabcontrol的吸顶效果
      this.isShowTabControl = (-position.y) > this.TabControlPosition? true:false
    },
    //点击右下角图标回到顶部
    backToTop(){
      //调用组件scroll的methodsscrollTo
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
    // 接收tabControl子组件发布过来的数据
    switchTab(index){
      //根据切换到展示哪一个类型商品同时改变数据请求的设置
      this.goodsType = this.goodsTypeList[index]
      //更改tabcontrol组件中的currentindex
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },

    /**
     * 网络请求方法
     */
    getHomeMultidata(){
      return getHomeMultidata().then(res=>{
        this.banners = res.data.data.banner.list
        this.recommend = res.data.data.recommend.list
      })
    },
    getRecommendData(type){
      const page = this.goods[type].page + 1
      return getRecommendData(type, page).then(res=>{
        this.goods[type].list = this.goods[type].list.concat(res.data.data.list)
        this.goods[type].page = page
        //数据加载完成后
        this.$refs.scroll && this.$refs.scroll.finishPullUp()
      })
    }
  }
}
</script>

<style scoped>
  #home{
    height: 100vh;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
  }
  .tab-control1{
    position: relative;
    z-index: 2;
  }
  /*解决滚动区域在中间的两种方法！*/
  .scroll-wrapper{
    height: calc(100vh - 93px);
    overflow: hidden;
    width: 100%;
    position: absolute;
    top: 44px;
  }
</style>