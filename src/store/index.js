import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'

//安装插件
Vue.use(Vuex)
//创建store对象
const store = new Vuex.Store({
  state:{
    //存储购物车商品列表
    cartList:[]
  },
  mutations,
  actions,
  getters:{
    //购物车被选中商品数量总数
    totalProductNumber(state){
      let countList = state.cartList.filter(value => value.isChecked).map(value => value.count)
      if (countList.length) {
        return countList.reduce((total, count) => total + count)
      }else{
        return 0
      }
    },
    //购物车被选中商品总价
    totalPrice(state){
      let priceList = state.cartList.filter(value => value.isChecked).map(value => value.count * value.price)
      if (priceList.length) {
        return priceList.reduce((total, price) => total + price)
      }else{
        return '00.00'
      }
    }
  }
})

//导出store对象
export default store;