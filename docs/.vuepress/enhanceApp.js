// 최종적으로는 ../../dist/easyChartBoard.min.js 가 되어야 합니다ㅎ
import EasyChartBoard from '../../src/index.js';
import { generateUniqueId } from '../../src/js/utils';

export default ({ Vue }) => {
  Vue.use(EasyChartBoard);
  Vue.prototype.$utils = {
    generateUniqueId
  };
};