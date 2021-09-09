module.exports = {
  base: '/vuetiful-board/',
  title: '💐 Vuetiful Board - A charts using draggable grid for Vue.js',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/installation/' },
      { text: 'Example', link: '/playground/Theme1' },
      { text: 'Github', link: 'https://github.com/medistream-team/vuetiful-board'}
    ],
    sidebar: {
      '/': [
        {
          title: 'Guide',
          collapsable: false, 
          children: [
            'installation/',
            'usage/',
            'property/',
            'explanation/',
            'features/',
          ]
        },
        {
          title: 'Example',
          collapsable: false,
          sidebarDepth: 2,
              children: [
                '/playground/Theme1',
                '/playground/Theme2',
                '/playground/Theme3',
                '/playground/Grid1',
                '/playground/Grid2',
                '/playground/Grid3'
              ]
        },
      ], 
    }
  }
}