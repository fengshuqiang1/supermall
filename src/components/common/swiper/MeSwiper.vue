<template>
  <swiper :options="swiperOption">
    <slot></slot>
    <div class="swiper-pagination" v-if="pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import {Swiper} from 'vue-awesome-swiper'
export default {
  components:{
    Swiper
  },
  props:{
    direction:{
      type:String,
      default:'horizontal',
      // 验证值
      validator(value){
        return ['horizontal', 'vertical'].indexOf(value) > -1
      }
    },
    interval:{
      type:Number,
      default:3000,
      validator(value){
        return value >= 0
      }
    },
    loop:{
      type:Boolean,
      default:true
    },
    pagination:{
      type:Boolean,
      default:true
    }
  },
  data(){
    return{
      swiperOption:{
        watchOverflow:true,//只有一个slide时，停止轮播
        direction:this.direction,
        autoplay:this.interval?{
          delay:this.interval,
          disableOnInteration:true
        }:false,
        loop:this.loop,
        pagination:{//分页器
          el:this.pagination? '.swiper-pagination':null
        }
      }
    }
  }
}
</script>

<style scoped>

</style>