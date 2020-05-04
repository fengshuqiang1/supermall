<template>
  <div class="cart">
    <!-- 导航 -->
    <CartNavBar />
    <!-- 商品列表 -->
    <CartProduct />
    <!-- 底部汇总 -->
    <CartBottomBar />
  </div>
</template>

<script>
import CartNavBar from "./NavBar";
import CartProduct from "./Product";
import CartBottomBar from "./BottomBar";


export default {
  name: "Cart",
  components: {
    CartNavBar,
    CartProduct,
    CartBottomBar
  }
};
</script>

<style scoped></style>
