// 최종적으로는 ../../dist/easyChartBoard.min.js 가 되어야 합니다ㅎ
import Uuid from "vue-uuid";
import EasyChartBoard from '../../src/index.js';

import '../../src/assets/scss/index.scss';

export default ({ Vue }) => {
  Vue.use(Uuid);
  Vue.use(EasyChartBoard);
};