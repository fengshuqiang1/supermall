<template>
  <div class="toast" v-if="isShow">
    {{message}}
  </div>
</template>

<script>
export default {
  name: "BaseToast",
  data(){
    return {
      //控制显示与隐藏
      isShow:false,
      //提示信息
      message:''
    }
  },
  methods:{
    //控制toast组件的显示和隐藏。实现提示框效果
    show(message='提示信息',delay=1500){
      this.message = message
      this.isShow = true
      setTimeout(() => {
        this.isShow = false
      }, delay);

    }
  }
};
</script>

<style scoped>
  .toast{
    color: #fff;
    border-radius: 10px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 10px;
    background-color:rgba(0, 0, 0, 0.7);
    /* 需要总是保持在最上层 */
    z-index: 999;
  }
</style>