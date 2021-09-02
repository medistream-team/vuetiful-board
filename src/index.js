import VueApexCharts from 'vue-apexcharts';
import VuetifulBoard from '../src/components/VuetifulBoard';

export default {
  install: function(Vue) {
    Vue.use(VueApexCharts);
    Vue.component('apex-charts', VueApexCharts);
    Vue.component('vuetiful-board', VuetifulBoard);
  },
};
