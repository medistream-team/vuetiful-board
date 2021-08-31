module.exports = {
  // TODO: 추후 변경
  base: '/vuetiful-board/',
  title: '📊 Vuetiful Board',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Playground', link: '/playground/' },
      { text: 'Github', link: 'https://github.com/medistream-team/vuetiful-board'}
    ],
    sidebar: [
      ['/', 'Home'],
      ['/playground/', 'Playground']
    ]
  }
}