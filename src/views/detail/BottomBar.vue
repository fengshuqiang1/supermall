<template>
  <div class="bottom-bar">
    <div class="bottom-left">
      <div class="bottom-service">
        <div class="bottom-service-icon"></div>
        <span>客服</span>
      </div>
      <div class="bottom-shop">
        <div class="bottom-shop-icon"></div>
        <span>店铺</span>
      </div>
      <div class="bottom-collect">
        <div class="bottom-collect-icon"></div>
        <span>收藏</span>
      </div>
    </div>
    <div class="bottom-right">
      <div class="bottom-btn-cart">加入购物车</div>
      <div class="bottom-btn-buy">购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar"
  }
</script>

<style scoped>
  .bottom-bar {
    height: 49px;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
    display: flex;
  }
  .bottom-left{
    flex: 1;
    display: flex;
    align-items: center;
  }
  .bottom-service,
  .bottom-shop,
  .bottom-collect{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .bottom-right{
    flex: 1;
    display: flex;
  }
  .bottom-service-icon,
  .bottom-shop-icon,
  .bottom-collect-icon {
    width: 24px;
    height: 24px;
    background: url(/img/detail_bottom.a8e4b3c7.png);
  }
  .bottom-service-icon{
    background-position: 0px -60px;
    background-repeat: no-repeat;
    background-size: 100% 700%;}
  .bottom-shop-icon{
    background-position: 0px -110px;
    background-repeat: no-repeat;
    background-size: 100% 700%;}
  .bottom-collect-icon{
    background-position: 0px 0px;
    background-repeat: no-repeat;
    background-size: 100% 700%;}
  .bottom-btn-cart,
  .bottom-btn-buy{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .bottom-btn-cart{
    background-color: #ffde0f;
    color: #333;
  }
  .bottom-btn-buy{
    background-color: #ff789a;
    color: #fff;
  }
</style>