<template>
  <base-scroll class="scroll_wrapper" ref="scroll">
    <div class="product_container" v-if="$store.state.cartList.length">
      <div class="product_item" v-for="item in $store.state.cartList" :key="item.iid">
        <BaseRadio 
          class="product_radio" 
          :isChecked="item.isChecked" 
          @click.native="changeRadioState(item.iid)"
        />
        <div class="product_img"><img :src="item.img"></div>
        <div class="product_info">
          <p class="product_title">{{item.title}}</p>
          <p class="product_desc">{{item.desc}}</p>
          <div class="product_price_count">
            <span class="product_price">￥{{item.price}}</span>
            <span class="product_count">x{{item.count}}</span>
          </div>
        </div>
      </div>
    </div>
  </base-scroll>
</template>

<script>
import BaseScroll from 'common/scroll/Scroll'
import BaseRadio from 'content/radio/Radio'
export default {
  name: "CartProduct",
  components:{
    BaseScroll,
    BaseRadio
  },
  methods:{
    changeRadioState(iid){
      //获取当前点击的产品数据
      let currentProduct = this.$store.state.cartList.find(value => value.iid === iid)
      //更改当前产品的选中状态
      this.$store.commit('changeRadioState', currentProduct)
    }
  },
  activated(){
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
  .scroll_wrapper{
    height: calc(100vh - 44px - 50px - 40px);
    overflow: hidden;
  }
  .product_container{}
  .product_item{
    display: flex;
    align-items: center;
    padding: 10px;
  }
  .product_radio{
    margin-right: 10px;
  }
  .product_img{
    height: 90px;
    width: 60px;
    margin-right: 10px;
  }
  .product_img img{
    border-radius: 10px;
    width: 100%;
    height: 100%;
  }
  .product_info{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
  }
  .product_title,
  .product_desc{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 15px;
  }
  .product_title{
    font-size: 20px;
  }
  .product_desc{
    font-size: 14px;
  }
  .product_price_count{
    display: flex;
    justify-content: space-between;
  }
  .product_price{
    color: var(--color-high-text);
    font-size: 18px;
  }
  .product_count{
    font-size: 16px;
  }
</style>