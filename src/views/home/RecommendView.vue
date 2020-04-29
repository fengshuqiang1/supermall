<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item,index) in recommend" :key="index">
      <a :href="item.link">
        <img :src="item.image">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    recommend:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
  .recommend{
    display: flex;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
  }
  .recommend-item{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .recommend-item img{
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
</style>