//引入组件
import Toast from "common/toast/Toast";

//导出组件插件
export default {
  install(Vue){
    //创建组件构造器
    const toastConstructor = Vue.extend(Toast)

    //使用组件构造器创建组件实例
    const toast = new toastConstructor()

    //将组件实例挂载到元素上
    toast.$mount(document.createElement('div'))

    //将组件添加到页面中
    document.body.appendChild(toast.$el)
    
    //将组件实例挂载到Vue原型上
    Vue.prototype.$toast = toast
  }
}
