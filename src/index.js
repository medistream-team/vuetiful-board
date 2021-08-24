import VueApexCharts from 'vue-apexcharts';
import EasyChartBoard from '../src/components/EasyChartBoard';
import { generateUniqueId } from './js/utils';

export default {
  install: function(Vue) {
    Vue.use(VueApexCharts);
    Vue.component('apex-charts', VueApexCharts);
    Vue.component('easy-chart-board', EasyChartBoard);
    Vue.prototype.$utils = {
      generateUniqueId,
    };
  },
};
