import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui';		//引入饿了么-ui库
import 'element-ui/lib/theme-chalk/index.css';   //引入饿了么 UI库样式

import axios from './plugin/http.js'	//数据请求封装Axios

import './assets/base.css';				 //基本样式
import './../static/iconfont/iconfont.css'		//引入字体样式


import "swiper/dist/css/swiper.min.css"   //引入swiper样式

Vue.prototype.$axios=axios

Vue.use(ElementUI);
Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  render: h => h(App)
})

