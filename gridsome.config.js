// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  // pathPrefix: '/blog/article/',

  siteName: 'Carrot quest',
  titleTemplate: "%s",

  transformers: {
      remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
          anchorClassName: 'icon icon-link',
          plugins: [
              // ...global plugins
          ]
      }
  },

  plugins: [
      {
          use: 'gridsome-plugin-gtm',
          options: {
              //id: 'GTM-PHNG63V',  //CQ
              id: 'GTM-TKFL867',  //Пустой
              enabled: true,
              debug: false
          }
      },
      {
          use: 'gridsome-plugin-pwa',
          options: {
              // Service Worker Options
              disableServiceWorker: false,
              serviceWorkerPath: 'service-worker.js',
              cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg,gif',
              disableTemplatedUrls: false, // Optional

              // Manifest Options (https://developer.mozilla.org/en-US/docs/Web/Manifest)
              manifestPath: 'manifest.json',
              title: 'Carrot quest',
              startUrl: 'https://www.carrotquest.io/',
              display: 'standalone',
              statusBarStyle: 'default',
              themeColor: '#ff892a',
              backgroundColor: '#ffffff',
              icon: './static/favicon.png'
          }
      }
  ],
}