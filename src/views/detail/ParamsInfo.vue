<template>
  <div class="detail-params-info" v-if="Object.keys(paramsInfo).length">
    <ul class="detail-rule">
      <li class="detail-rule-item" v-for="(item1,index1) in paramsInfo.rule" :key="index1">
        <span v-for="(item2,index2) in item1" :key="index2">{{item2}}</span>
      </li>
    </ul>
    <div class="detail-params">
      <p class="detail-parmas-item" v-for="(item3,index3) in paramsInfo.info" :key="index3">
        <span class="params-item-key">{{item3.key}}</span>
        <span class="params-item-value">{{item3.value}}</span>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailParamsInfo",
    props:{
      paramsInfo:{
        type:Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .detail-params-info{
    padding: 10px;
    border-bottom: 5px solid #f6f6f6;
  }
  .detail-rule-item{
    padding: 10px 0;
    display: flex;
    border-bottom: 1px solid #f6f6f6;
  }
  .detail-rule-item:last-child{
    border-bottom: 1px solid #999;
  }
  .detail-rule-item span{
    flex: 1;
  }

  .detail-parmas-item{
    padding: 10px 0;
    border-bottom: 1px solid #efefef;
  }
  .params-item-key,
  .params-item-value{
    display: inline-block;
  }
  .params-item-key{
    width: 30%;
  }
  .params-item-value{
    width: 70%;
  }
</style>