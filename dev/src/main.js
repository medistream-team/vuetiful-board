import Vue from 'vue'
import App from './App.vue'
import EasyChartBoard from '../../src/index.js'
import VueUuid from 'vue-uuid'

Vue.config.productionTip = false
Vue.use(EasyChartBoard)
Vue.use(VueUuid)

new Vue({
  render: h => h(App),
}).$mount('#app')
