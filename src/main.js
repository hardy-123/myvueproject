// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 导入路由，element,axios
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

// import allstyle from '../static/blog/css/style'
// 使用
// Vue.prototype.$axios= axios
Vue.use(router)
Vue.use(ElementUI)
Vue.use(VueAxios, axios)
// Vue.use(allstyle)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),  //ElementUI
  components: { App },
  template: '<App/>'
})
