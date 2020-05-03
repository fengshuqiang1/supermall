<template>
  <div class="cart_nav_bar">
    <nav-bar class="nav_bar_container">
      <div slot="center">购物车({{totalProductNumber}})</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'common/navbar/NavBar'

import { mapGetters } from "vuex";
export default {
  name: "CartNavBar",
  components:{
    NavBar
  },
  computed:{
    ...mapGetters(['totalProductNumber'])
  }
}
</script>

<style scoped>
  .nav_bar_container{
    background-color: #ff8e96;
    color: #fff;
  }
</style>