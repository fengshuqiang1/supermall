import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'swiper/css/swiper.css'
Vue.config.productionTip = false
//全局初始化事件总线
Vue.prototype.$bus = new Vue()

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
