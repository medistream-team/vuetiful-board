import VueApexCharts from 'vue-apexcharts';
import EasyChartBoard from '../src/components/EasyChartBoard';
import { GridLayout, GridItem } from 'vue-grid-layout';

export default {
  install: function(Vue) {
    Vue.use(VueApexCharts);
    Vue.use(GridLayout);
    Vue.use(GridItem);
    Vue.component('apex-charts', VueApexCharts);
    Vue.component('easy-chart-board', EasyChartBoard);
    Vue.component('grid-layout', GridLayout);
    Vue.component('grid-item', GridItem);
  },
};
