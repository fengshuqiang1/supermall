<template>
  <div class="shop-info" v-if="Object.keys(shopInfo).length">
    <div class="shop-title">
      <img :src="shopInfo.shopLogo">
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="shop-scale">
      <div class="shop-sales">
        <p class="shop-total-sales">
          <span>{{formatNumber}}</span>
          <span class="shop-total-sales-title">总销量</span>
        </p>
        <p class="shop-goods-number">
          <span>{{shopInfo.totalGoods}}</span>
          <span class="shop-total-sales-title">全部宝贝</span>
        </p>
      </div>
      <div class="shop-score">
        <p class="shop-score-item" v-for="(item,index) in shopInfo.score" :key="index">
          <span>{{item.name}}</span>
          <span :style="{color:item.score===5?'red':'green'}">{{item.score}}</span>
          <span :style="{backgroundColor:item.score===5?'red':'green'}">{{item.score===5? '高':'低'}}</span>
        </p>
      </div>
    </div>
    <div class="shop-in">
      <button>进店逛逛</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props:{
      shopInfo:{
        type:Object,
        default(){
          return{}
        }
      }
    },
    computed:{
      formatNumber(){
        return (this.shopInfo.totalSells/10000).toFixed(1)+'万'
      }
    }
  }
</script>

<style scoped>
  .shop-info{
    padding: 20px 10px;
    border-bottom: 5px solid #f4f4fa;
  }
  .shop-title{
    display: flex;
    align-items: center;
  }
  .shop-title img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 20px;
    border: 2px solid #ccc;
  }
  .shop-scale{
    display: flex;
    padding: 30px 0;
  }
  .shop-sales{
    color: #000;
    display: flex;
    padding: 0 20px;
    border-right: 1px solid #ccc;
  }
  .shop-total-sales,
  .shop-goods-number{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 18px;
  }
  .shop-total-sales-title{
    margin-top: 10px;
    font-size: 14px;
  }
  .shop-goods-number{
    margin-left: 30px;
  }
  .shop-score{
    margin-left: 20px;
  }
  .shop-score-item{
    margin: 5px 0;
  }
  .shop-score-item span{
    margin-right: 10px;
  }
  .shop-score-item span:first-child{
    color: #000;
  }
  .shop-score-item span:nth-child(2){
    display: inline-block;
    width: 30px;
  }
  .shop-score-item span:last-child{
    color: #fff;
  }
  .shop-in{
    text-align: center;
  }
  .shop-in button{
    outline: none;
    border: none;
    width: 180px;
    height: 30px;
    border-radius: 5px;
    background-color: #f1f5fb;
  }
</style>