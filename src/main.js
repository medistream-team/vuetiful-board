import Vue from 'vue';
import App from './App.vue';
import EasyChartBoard from './index.js';

import '@/assets/scss/index.scss';

Vue.config.productionTip = false;
// plugin
Vue.use(EasyChartBoard);

new Vue({
  render: h => h(App),
}).$mount('#app');
