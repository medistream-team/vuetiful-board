// 최종적으로는 ../../dist/easyChartBoard.min.js 가 되어야 합니다ㅎ
import EasyChartBoard from '../../src/index.js';
import Uuid from "vue-uuid";

export default ({ Vue }) => {
  Vue.use(Uuid);
  Vue.use(EasyChartBoard);
};