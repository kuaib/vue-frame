


import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import './common'
import {ToastPlugin} from 'vux'
// import mescroll from './assets/plugins/mescroll/mescroll.min.js'

// 自建公共组件
import pageWrapper from './components/pageWrapper'
Vue.component('page-wrapper', pageWrapper)

// Vux组件
Vue.use(ToastPlugin)

Vue.prototype.$http = axios
// 去除所有空格
Vue.prototype.$trim = function(str) {
    return str.replace(/\s/g, '');
}

// 全局过滤器
import * as allFilters from './utils/filters'
Object.keys(allFilters).forEach(key => {
        Vue.filter(key, allFilters[key])
    })
// 全局注册自定义指令
import * as allDirectives from './utils/directive'
Object.keys(allDirectives).forEach(key => {
    Vue.directive(key, allDirectives[key])
})

Vue.config.productionTip = false

window.vue = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
