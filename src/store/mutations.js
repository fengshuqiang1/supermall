export default {
  //添加一个已有商品的数量
  addOneProduct(state, payload){
    payload.count ++
  },
  //添加新商品
  addNewProduct(state, payload){
    //商品默认购买数量为1
    payload.count = 1
    //默认被选中
    payload.isChecked = true
    state.cartList.push(payload)
  },
  //修改商品的选中状态
  changeRadioState(state,payload){
    payload.isChecked = !payload.isChecked
  },
  //修改全选状态
  changeAllCheckedState(state, payload){
    if (payload) {
      state.cartList.forEach(value => {
        value.isChecked = false
      })
    }else{
      state.cartList.forEach(value => {
        value.isChecked = true
      })
    }
  }
}