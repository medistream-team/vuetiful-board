import VueApexCharts from 'vue-apexcharts';
import VuetifulBoard from '../src/components/VuetifulBoard';
import { GridLayout, GridItem } from 'vue-grid-layout';

export default {
  install: function(Vue) {
    Vue.use(VueApexCharts);
    Vue.use(GridLayout);
    Vue.use(GridItem);
    Vue.component('apex-charts', VueApexCharts);
    Vue.component('grid-layout', GridLayout);
    Vue.component('grid-item', GridItem);
    Vue.component('vuetiful-board', VuetifulBoard);
  },
};
