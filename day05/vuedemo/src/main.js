import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import VueRouter from 'vue-router' // 引入
Vue.use(VueRouter) // VueRouter插件初始化

const router = new VueRouter() // 创建路由对象

new Vue({
  render: h => h(App),
  router  // 建立关联
}).$mount('#app')
