import Vue from 'vue'
import App from './App'
import router from './router'
// 解决手机端300ms延时问题
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
// 重置默认样式
import 'styles/reset.css'
// 解决1像素边框问题，在2倍屏中可能会显示
import 'styles/border.css'
import 'styles/iconfont.css'
require('swiper/dist/css/swiper.css')
Vue.config.productionTip = false
fastClick.attach(document.body)

Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
// 路由：根据网址的不同，返回不同的内容给用户
