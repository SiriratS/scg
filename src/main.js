import Vue from 'vue'
import Core from './core/core.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import Routes from './routes.js'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  router: Routes,
  render: h => h(Core)
}).$mount('#app')