import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入自定义组件插件
import toast from "common/toast";

import 'swiper/css/swiper.css'
Vue.config.productionTip = false
//全局初始化事件总线
Vue.prototype.$bus = new Vue()
//安装组件插件
Vue.use(toast)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
