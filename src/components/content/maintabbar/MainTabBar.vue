<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" activeStyle="#ff5777">
        <img slot="icon" src="~assets/img/tabbar/home.svg">
        <img slot="active-icon" src="~assets/img/tabbar/home_active.svg">
        <p slot="item-text">首页</p>
      </tab-bar-item>
      <tab-bar-item path="/category" activeStyle="#ff5777">
        <img slot="icon" src="~assets/img/tabbar/category.svg">
        <img slot="active-icon" src="~assets/img/tabbar/category_active.svg">
        <p slot="item-text">分类页</p>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeStyle="#ff5777">
        <img slot="icon" src="~assets/img/tabbar/cart.svg">
        <img slot="active-icon" src="~assets/img/tabbar/cart_active.svg">
        <p slot="item-text">购物车</p>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeStyle="#ff5777">
        <img slot="icon" src="~assets/img/tabbar/profile.svg">
        <img slot="active-icon" src="~assets/img/tabbar/profile_active.svg">
        <p slot="item-text">我的</p>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from 'common/tabbar/TabBar'
import TabBarItem from 'common/tabbar/TabBarItem'
export default {
  components:{
    TabBar,
    TabBarItem
  }
}
</script>
