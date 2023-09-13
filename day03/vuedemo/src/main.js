import Vue from 'vue'
import App from './App.vue'
import './styles/base.css' // css 样式重置
import './styles/common.css' // 公共全局样式
import './assets/iconfont/iconfont.css' // 字体图标的样式

import './styles/index.css' // 页面样式
Vue.config.productionTip = false

// 导入需要全局注册的组件
// import HmButton from './components/HmButton'
// Vue.component('HmButton', HmButton)

new Vue({
  render: h => h(App),
}).$mount('#app')
