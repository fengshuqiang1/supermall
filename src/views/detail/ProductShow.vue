<template>
  <div class="product-show" v-if="Object.keys(productShow).length">
    <p class="product-desc">{{productShow.desc}}</p>
    <div class="product-img-show">
      <p class="product-title">{{productShow.detailImage[0].key}}</p>
      <img 
        class="product-img" 
        v-for="(item,index) in productShow.detailImage[0].list" 
        :key="index" :src="item"
        @load="imgLoaded"
      >
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailProductShow",
    props:{
      productShow:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      imgLoaded(){
        this.$emit('imgLoaded')
      }
    }
  }
</script>

<style scoped>
  .product-desc{
    padding: 10px;
  }
  .product-title{
    padding-left: 10px;
    color: #333;
  }
  .product-img{
    width: 100%;
  }
  .product-img-show{
    border-bottom: 5px solid #f6f6f6;
  }
</style>