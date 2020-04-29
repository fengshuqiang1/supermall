<template>
  <me-swiper class="swiper-container">
    <swiper-slide v-for="(item,index) in detailSwiper" :key="index">
      <img class='swiper-slide-img' :src="item" @load="imgLoaded">
    </swiper-slide>
  </me-swiper>
</template>

<script>
  import MeSwiper from 'common/swiper/MeSwiper'
  import { SwiperSlide } from 'vue-awesome-swiper'
  export default {
    name: "DetailSwiper",
    components:{
      MeSwiper,
      SwiperSlide
    },
    data() {
      return {
        isLoaded:false
      }
    },
    props:{
      detailSwiper:{
        type:Array,
        default:[]
      }
    },
    methods:{
      imgLoaded(){
        //控制发布事件的次数
        if (!this.isLoaded) {
          this.$emit('swiperImgLoaded')
          this.isLoaded = true
        }
      }
    }
  }
</script>

<style scoped>
  .swiper-container{
    height: 300px;
    overflow: hidden;
  }
  .swiper-slide-img{
    width: 100%;
  }
</style>