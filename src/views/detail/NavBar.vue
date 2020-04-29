<template>
  <div class="detail-nav-bar">
    <nav-bar>
        <div slot="left" class="nav-bar-left" @click="navigatorBack">
          <img class="nav-bar-img" src="~assets/img/common/back.svg">
        </div>
        <ul slot="center" class="nav-bar">
          <li 
            class="nav-bar-item" 
            :class="{active:currentIndex===index}" 
            v-for="(item,index) in navbarlist" 
            :key="index"
            @click="switchNavBar(index)"
          >{{item}}</li>
        </ul>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'common/navbar/NavBar'
export default {
  components:{
    NavBar
  },
  data(){
    return{
      navbarlist:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  methods:{
  //事件处理函数
    //后退按钮
    navigatorBack(){
      this.$router.back()
    },
    switchNavBar(index){
      this.currentIndex = index
      this.$emit('changeScroll', index)
    }
  }
}
</script>

<style scoped>
  .nav-bar-left{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nav-bar{
    height: 100%;
    width: 100%;
    display: flex;
  }
  .nav-bar-item{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .active{
    color: var(--color-high-text);
  }
</style>