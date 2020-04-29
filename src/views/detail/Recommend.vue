<template>
  <div class="recommend">
    <GoodsList :goods="recommendList"/>
  </div>
</template>

<script>
  import GoodsList from 'content/goods/GoodsList'
  export default {
    name: "DetailRecommend",
    props:{
      recommendList:{
        type:Array,
        default:[]
      }
    },
    components:{
      GoodsList
    }
  }
</script>

<style scoped>
  
</style>