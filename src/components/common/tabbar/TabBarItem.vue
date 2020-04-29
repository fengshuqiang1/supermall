<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-show="!isActive" class="item-icon">
      <slot name="icon"></slot>
    </div>
    <div v-show="isActive" class="item-active-icon">
      <slot name="active-icon"></slot>
    </div>
    <div class="item-text" :style="isActive?{'color':activeStyle}:''">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
	export default {
    name: "TabBarItem",
    data(){
      return{
      }
    },
    props: {
			path: {
        type: String,
        default:''
      },
      activeStyle:{
        type:String,
        default:'red'
      }
    },
    methods:{
      itemClick(){
        this.$router.push(this.path)
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path)!==-1?true:false
      }
    }
	}
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: center;
    margin-bottom: 2px;
  }
  .item-text{
    font-size: 12px;
  }
</style>