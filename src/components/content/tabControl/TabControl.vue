<template>
  <div class="tab-control">
    <div 
      class="tab-control-item" 
      v-for="(item,index) in titles" 
      :key="index"
      :class="{active:index===currentIndex}"
      @click="handleChangeTab(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      currentIndex:0
    }
  },
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    handleChangeTab(index){
      this.currentIndex = index
      this.$emit('switchTab', index)
    }
  }
}
</script>

<style scoped>
  .tab-control{
    display: flex;
    background-color: #fff;
  }
  .tab-control-item{
    flex: 1;
    height: 44px;
    line-height: 44px;
    text-align: center;
  }
  .active span{
    color: #ff8198;
    border-bottom: 2px solid #ff8198;
    padding: 5px;
  }
</style>