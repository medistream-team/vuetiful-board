import UUID from "vue-uuid";
import '../../src/assets/scss/index.scss';

export default async ({ Vue, isServer }) => {
  Vue.use(UUID);
  if(!isServer){
    await import('../../dist/vuetiful-board.umd.min.js').then(FullpageModalPlugin => {
      Vue.use(FullpageModalPlugin.default)
    })
  }
};