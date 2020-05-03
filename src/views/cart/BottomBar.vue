<template>
  <div class="bottom_bar">
    <div class="allCheck" @click="handleAllChecked">
      <BaseRadio :isChecked="this.$store.state.cartList.every(value => value.isChecked === true)"/>
      <span>全选</span>
    </div>
    <div class="total_price">
      合计：￥{{totalPrice | formatPrice}}
    </div>
    <div class="pay">
      <div class="pay_btn">付款</div>
    </div>
  </div>
</template>

<script>
import BaseRadio from 'content/radio/Radio'

import { mapGetters } from "vuex";
export default {
  name: "CartBottomBar",
  components:{
    BaseRadio
  },
  computed:{
    ...mapGetters(['totalPrice'])
  },
  methods:{
    handleAllChecked(){
      let allCheckedState = this.$store.state.cartList.every(value => value.isChecked === true);
      this.$store.commit('changeAllCheckedState', allCheckedState)
    }
  },
  filters:{
    formatPrice(price){
      return Number(price).toFixed(2)
    }
  }
}
</script>

<style scoped>
  .bottom_bar{
    height: 40px;
    display: flex;
    align-items: center;
    background-color: #eeeeee;
  }
  .allCheck{
    padding: 0 10px;
    display: flex;
    align-items: center;
  }
  .pay{
    height: 100%;
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }
  .pay_btn{
    height: 100%;
    width: 80px;
    background-color: #ff5300;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>