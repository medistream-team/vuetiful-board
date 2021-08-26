import VueApexCharts from 'vue-apexcharts';
import EasyChartBoard from '../src/components/EasyChartBoard';

export default {
  install: function(Vue) {
    Vue.use(VueApexCharts);
    Vue.component('apex-charts', VueApexCharts);
    Vue.component('easy-chart-board', EasyChartBoard);
  },
};
