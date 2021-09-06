module.exports = {
  devServer: {
    host: 'localhost',
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "~@/assets/scss/theme-colors.scss";
          @import "~@/assets/scss/variables.scss";
          @import "~@/assets/scss/mixins.scss";
        `,
      },
    },
  },
};
