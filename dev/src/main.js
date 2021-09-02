import Vue from 'vue'
import UUID from 'vue-uuid'
import App from './App.vue'
import VuetifulBoard from '../../src/index.js'

Vue.config.productionTip = false
Vue.use(VuetifulBoard)
Vue.use(UUID)

import '../../src/assets/scss/index.scss';

new Vue({
  render: h => h(App),
}).$mount('#app')
