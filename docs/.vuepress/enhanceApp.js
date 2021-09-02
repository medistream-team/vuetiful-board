// 최종적으로는 ../../dist/vuetifulBoard.min.js 가 되어야 합니다ㅎ
import UUID from "vue-uuid";
import VuetifulBoard from '../../src/index.js';

import '../../src/assets/scss/index.scss';

export default ({ Vue }) => {
  Vue.use(UUID);
  Vue.use(VuetifulBoard);
};