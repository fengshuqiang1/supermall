export default {
  addCart(context,payload){
    /**
     * 1 判断是否已添加该商品
     * 2 已添加则该商品数量加一，否则添加商品到cartlist
     */
    let oldProduct = context.state.cartList.find(value => value.iid === payload.iid)
    if (oldProduct) {
      context.commit('addOneProduct', oldProduct)
    }else{
      context.commit('addNewProduct', payload)
    }
  }
}