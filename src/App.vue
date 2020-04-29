<template>
  <div id="app">
    <!-- 底部tab的显示区域 -->
    <keep-alive exclude="Detail">
      <router-view/>  
    </keep-alive>
    <!-- 底部tab -->
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from 'components/content/maintabbar/MainTabBar'
export default { 
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
  @import url('assets/css/base.css');
</style>
