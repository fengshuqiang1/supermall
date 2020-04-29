<template>
  <div class="comment-info" v-if="Object.keys(commentInfo).length && commentInfo.cRate !== 0">
    <div class="comment-title">
      <span>用户评价</span>
      <span>更多({{commentInfo.cRate}})</span>
    </div>
    <div class="comment-user">
      <div class="user-title">
        <img :src="commentInfo.list[0].user.avatar" class="user-avatar">
        <span class="user-name">{{commentInfo.list[0].user.uname}}</span>
      </div>
      <p class="comment-content">{{commentInfo.list[0].content}}</p>
      <div class="comment-time-style">
        <span class="comment-time">{{ commentInfo.list[0].created | formatDate}}</span>
        <span class="comment-style">{{commentInfo.list[0].style}}</span>
      </div>
      <div class="comment-imgs" v-if="commentInfo.list[0].images">
        <img v-for="(item,index) in commentInfo.list[0].images" :key="index" :src="item" class="comment-img">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailComment",
    props:{
      commentInfo:{
        type:Object,
        default() {
          return {}
        }
      }
    },
    filters:{
      formatDate(time) {
        return new Date(time * 1000).toLocaleDateString().replace(/\//g,"-")
      }
    }
  }
</script>

<style scoped>
  .comment-info{
    padding: 10px;
  }
  .comment-title{
    color: #333;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
  }
  .user-title{
    padding: 10px 0;
    display: flex;
    align-items: center;
  }
  .user-avatar{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .user-name{
    margin-left: 20px;
    color: #333;
  }
  .comment-time-style{
    font-size: 14px;
    color: #666;
    padding: 10px 0;
  }
  .comment-content{
    font-size: 16px;
  }
  .comment-style{
    margin-left: 10px;
  }
  .comment-img{
    margin-right: 10px;
    width: 60px;
  }
</style>