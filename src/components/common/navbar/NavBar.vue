<template>
  <div class="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .navbar{
    display: flex;
    height: 44px;
    box-shadow: 0 1px 1px rgba(100, 100, 100, 0.2);
  }
  .left,.right{
    width: 60px;
  }
  .center{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>