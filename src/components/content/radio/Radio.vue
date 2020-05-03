<template>
  <div class="radio" :class="{active:isChecked}" :style="{width:sideLength,height:sideLength}">
    <img src="~assets/img/cart/tick.svg">
  </div>
</template>

<script>
export default {
  name: "BaseRadio",
  props:{
    isChecked:{
      type:Boolean,
      default:true
    },
    sideLength:{
      type:String,
      default:'20px'
    }
  }
}
</script>

<style scoped>
  .radio{
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #666;
  }
  .active{
    background-color: red;
    border: none;
  }
</style>