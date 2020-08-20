// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './mock/mockServer'
import './common/stylus/fonts.styl'
import VueResource from 'vue-resource'
import VueScroller from 'vue-scroller'
import moment from 'moment'

Vue.use(VueResource)
Vue.use(VueScroller)
Vue.config.productionTip = false

/* eslint-disable no-new */

// 注册全局的过滤器
Vue.filter('date-string', function (value) {
  return moment(value).format('YYYY-MM-DD HH:mm:ss')
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
