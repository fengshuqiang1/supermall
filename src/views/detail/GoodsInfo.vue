<template>
  <div class="goods-info-container" v-if="Object.keys(goodsInfo).length">
    <p class="goods-title">{{goodsInfo.title}}</p>
    <div class="goods-price-box">
      <span class="goods-price">{{goodsInfo.price}}</span>
      <del class="goods-old-price" v-if="goodsInfo.oldPrice">{{goodsInfo.oldPrice}}</del>
      <span class="goods-discount" v-if="goodsInfo.discountDesc" :style="{backgroundColor:goodsInfo.discountBgColor}">{{goodsInfo.discountDesc}}</span>
    </div>
    <div class="goods-sales-info">
      <span v-for="(item,index) in goodsInfo.columns" :key="index">{{item}}</span>
    </div>
    <div class="goods-services">
      <div class="goods-return" v-for="(item,index) in goodsInfo.services" :key="index">
        <img :src="item.icon">
        <p>{{item.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    props:{
      goodsInfo:{
        type:Object,
        default(){
          return{}
        }
      }
    }
  }
</script>

<style scoped>
  .goods-info-container{
    padding: 10px;
    border-bottom: solid 5px #f6f6f6;
  }
  .goods-title{
    color: #333;
  }
  .goods-price-box{
    padding: 10px 0;
  }
  .goods-price{
    font-size: 22px;
    color: #d67a82;
  }
  .goods-old-price{
    font-size: 14px;
    color: #ccc;
    margin-left: 8px;
  }
  .goods-discount{
    font-size: 13px;
    display: inline-block;
    padding: 2px 5px;
    color: #fff;
    margin-left: 8px;
    border-radius: 10px;
    position: relative;
    top: -6px;
  }
  .goods-sales-info{
    font-size: 14px;
    color: #999;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    padding: 8px 0;
  }
  .goods-services{
    display: flex;
    padding-top: 10px;
    justify-content: space-between;
  }
  .goods-return{
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
  }
  .goods-return img{
    height: 14px;
    width: 14px;
  }
</style>