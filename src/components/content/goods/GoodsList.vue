<template>
  <div class="goods-list">
    <GoodsListItem v-for="(item,index) in goods" :key="index" :goodsitem="item"/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  components:{
    GoodsListItem
  },
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
  .goods-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>