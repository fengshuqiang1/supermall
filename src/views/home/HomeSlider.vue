<template>
  <div class="slider-wrap">
    <me-swiper>
      <swiper-slide class="swiper-container" v-for="(item,index) in banners" :key="index">
        <a :href="item.link" class="slider-link">
          <img :src="item.image" class="slider-img" @load="sliderImgLoad">
        </a>
      </swiper-slide>
    </me-swiper>
  </div>
</template>

<script>
import MeSwiper from 'common/swiper/MeSwiper'
import { SwiperSlide } from 'vue-awesome-swiper'
export default {
  components:{
    MeSwiper,
    SwiperSlide
  },
  data(){
    return {
      //用于控制加载slide图片只发布一次事件
      isLoad:false
    }
  },
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }  
    }
  },
  methods:{
    sliderImgLoad(){
      if (!this.isLoad) {
        this.$emit('sliderImgLoad')
        this.isLoad = true
      }
    }
  }
}
</script>

<style scoped>
  .swiper-container{
    height: 200px;
  }
  .slider-link{
    display: block;
    width: 100%;
    height: 100%;
  }
  .slider-img{
    width: 100%;
    height: 100%;
  }
</style>