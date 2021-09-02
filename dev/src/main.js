import Vue from 'vue'
import VueUuid from 'vue-uuid'
import App from './App.vue'
import VuetifulBoard from '../../src/index.js'

Vue.config.productionTip = false
Vue.use(VuetifulBoard)
Vue.use(VueUuid)

import '../../src/assets/scss/index.scss';

new Vue({
  render: h => h(App),
}).$mount('#app')
