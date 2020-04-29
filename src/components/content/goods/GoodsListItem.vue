<template>
    <div class="goods-list-item" @click="navigatorTo">
      <img :src="goodsitem.show.img" @load="goodsImgLoad">
      <div class="goods-info">
        <p class="goods-title">{{goodsitem.title}}</p>
        <p class="goods-priceCollect">
          <span class="goods-price">{{goodsitem.price}}</span>
          <span class="goods-collect">{{goodsitem.cfav}}</span>
        </p>
      </div>
    </div>
</template>

<script>
  export default {
    props:{
      goodsitem:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      //图片加载完成事件
      goodsImgLoad(){
        this.$bus.$emit('itemImgLoad')
      },
      //实现点击商品跳转到商品详情页
      navigatorTo(){
        this.$router.push('/detail/'+this.goodsitem.iid)
      }
    }
  }
</script>

<style scoped>
  .goods-list-item{
    width: 48%;
    display: flex;
    flex-direction: column;
  }
  .goods-list-item img{
    width: 100%;
  }
  .goods-info{
    font-size: 14px;
    padding: 8px 0;
  }
  .goods-title{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .goods-priceCollect{
    text-align: center;
  }
  .goods-price{
    color: var(--color-high-text);
    margin-right: 30px;
  }
  .goods-collect{
    position: relative;
  }
  .goods-collect::before{
    content: '';
    position: absolute;
    top: 0;
    left: -14px;
    display: block;
    height: 14px;
    width: 14px;
    background: url('~assets/img/common/collect.svg') 0 0/14px 14px;
  }
</style>