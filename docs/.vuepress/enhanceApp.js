// 최종적으로는 ../../dist/easyChartBoard.min.js 가 되어야 합니다ㅎ
import VueApexCharts from 'vue-apexcharts';
import EasyChartBoard from '../../src/index.js';
import { generateUniqueId } from '../../src/js/utils';

export default ({ Vue }) => {
  Vue.component('apex-charts', VueApexCharts);
  Vue.use(EasyChartBoard);
  Vue.prototype.$utils = {
    generateUniqueId
  };
};