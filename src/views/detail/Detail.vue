<template>
  <div class="detail">
    <DetailNavBar ref="navbar" @changeScroll="changeScroll"/>
    <base-scroll 
      class="scroll-container" 
      ref="scroll" 
      @scroll="scrollPosition"
      :probe-type="3"
    >
        <DetailSwiper :detail-swiper="detailSwiper" @swiperImgLoaded="swiperImgLoaded" />
        <DetailGoodsInfo :goods-info="goodsInfo"/>
        <DetailShopInfo :shop-info="shopInfo"/>
        <DetailProductShow :product-show="productShow" @imgLoaded="imgLoaded"/>
        <DetailParamsInfo :params-info="paramsInfo" ref="paramsInfo"/>
        <DetailComment :comment-info="commentInfo" ref="comment"/>
        <DetailRecommend :recommend-list="recommendList" ref="recommend"/>
    </base-scroll>
    <BackTop v-show="isShowBackTop" @click.native="backToTop"/>
    <DetailBottomBar />
  </div>
</template>

<script>
import DetailNavBar from './NavBar'
import DetailSwiper from './Swiper'
import DetailGoodsInfo from './GoodsInfo'
import DetailShopInfo from './ShopInfo'
import DetailProductShow from './ProductShow'
import DetailParamsInfo from './ParamsInfo'
import DetailComment from './Comment'
import DetailRecommend from './Recommend'
import DetailBottomBar from './BottomBar'

import BaseScroll from 'common/scroll/Scroll'
import BackTop from 'content/backtop/BackTop'

import { getDetailData, getRecommend } from 'network/detail'
import { debounce } from '@/common/utils'
import { itemListMixin } from '@/common/mixin'
import {SHOW_BACKTOP_POSITION} from '@/common/const'

export default {
  name:'Detail',
  mixins: [itemListMixin],
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailGoodsInfo,
    BaseScroll,
    DetailShopInfo,
    DetailProductShow,
    DetailParamsInfo,
    DetailComment,
    DetailRecommend,
    DetailBottomBar,
    BackTop
  },
  data(){
    return {
      iid:'',
      //用于存储轮播图
      detailSwiper:[],
      goodsInfo:{},
      shopInfo:{},
      productShow:{},
      paramsInfo:{},
      commentInfo:{},
      recommendList:[],
      paramsPosition:0,
      commentPosition:0,
      recommendPosition:0,
      isShowBackTop:false
    }
  },
  created(){
    //获取传递过来的iid
    this.iid = this.$route.params.iid
    //进行数据请求
    this.getDetailData(this.iid)
    this.getRecommend()
  },
  destroyed() {
    //离开该页面时取消itemImgLoad事件监听
    this.$bus.$off('itemImgLoad', this.itemRefresh)
  },
  methods:{
    //点击回到顶部
    backToTop() {
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
    //点击navtab滚动条滑动到指定的地方
    changeScroll(index) {
      if (index === 0) {
        this.$refs.scroll.scrollTo(0, 0, 500)
      }
      if (index === 1) {
        this.$refs.scroll.scrollTo(0, -this.paramsPosition, 500)
      }
      if (index === 2) {
        this.$refs.scroll.scrollTo(0, -this.commentPosition, 500)
      }
      if(index === 3){
        this.$refs.scroll.scrollTo(0, -this.recommendPosition, 500)
      }
    },
    //监听scroll事件，改变navtab
    scrollPosition(position) {
      if ((-position.y) <= this.paramsPosition) {
        this.$refs.navbar.currentIndex = 0
      }
      if ((-position.y) >= this.paramsPosition) {
        this.$refs.navbar.currentIndex = 1
      }
      if((-position.y) >= this.commentPosition) {
        this.$refs.navbar.currentIndex = 2
      }
      if ((-position.y) >= this.recommendPosition) {
        this.$refs.navbar.currentIndex = 3
      }
      //滚动条滑动一定距离显示返回顶部按钮
      this.isShowBackTop = (-position.y) > SHOW_BACKTOP_POSITION?true:false
    },
    //商品详情图片加载完成后刷新滚动条
    imgLoaded(){
      this.$refs.scroll.refresh()
      this.paramsPosition = this.$refs.paramsInfo.$el.offsetTop
      this.commentPosition = this.$refs.comment.$el.offsetTop
      this.recommendPosition = this.$refs.recommend.$el.offsetTop
    },
    //swiper图片加载完成，更新滚动条
    swiperImgLoaded(){
      this.$refs.scroll.refresh()
    },
    //获取详情页数据
    getDetailData(iid){
      getDetailData(iid).then(res=>{
        //整合数据
        // 商品轮播图
        this.detailSwiper = res.data.result.itemInfo.topImages
        // 商品信息
        this.goodsInfo = {
          title:res.data.result.itemInfo.title,
          price:res.data.result.itemInfo.price,
          oldPrice:res.data.result.itemInfo.oldPrice,
          discountDesc:res.data.result.itemInfo.discountDesc,
          discountBgColor:res.data.result.itemInfo.discountBgColor,
          columns:res.data.result.columns,
          services:res.data.result.shopInfo.services.filter((value,index)=>index<=2)
        }
        // 商店信息
        this.shopInfo = {
          name:res.data.result.shopInfo.name,
          shopLogo:res.data.result.shopInfo.shopLogo,
          totalSells:res.data.result.shopInfo.cSells,
          totalGoods:res.data.result.shopInfo.cGoods,
          score:res.data.result.shopInfo.score
        }
        // 商品详情
        this.productShow = res.data.result.detailInfo
        //商品参数
        this.paramsInfo = {
          info:res.data.result.itemParams.info.set,
          rule:res.data.result.itemParams.rule.tables[0]
        }
        //评论信息
        this.commentInfo = res.data.result.rate
      })
    },
    //获取推荐商品
    getRecommend(){
      getRecommend().then(res=>{
        //整理数据
        this.recommendList = res.data.data.list.map((value,index)=>{
          return value = {
            ...value,
            iid: value.item_id,
            show :{
              img:value.image
            }
          }
        })
      })
    }
  }
}
</script>

<style scoped>
  .detail{
    position: relative;
    z-index: 2;
    background-color: #fff;
  }
  .scroll-container{
    height: calc(100vh - 93px);
    overflow: hidden;
    position: relative;
  }
</style>