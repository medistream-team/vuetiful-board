module.exports = {
  devServer: {
    host: 'localhost',
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "~@/assets/scss/variables.scss";
          @import "~@/assets/scss/mixins.scss";
        `,
      },
    },
  },
};
