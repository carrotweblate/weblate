// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//   .BundleAnalyzerPlugin

module.exports = {
	siteName: 'Carrot quest',
	titleTemplate: "%s — Carrot quest",

	plugins: [
		//GTM
		{
			use: 'gridsome-plugin-gtm',
			options: {
				id: 'GTM-PHNG63V',
				enabled: true,
				debug: false
			}
		},
		//PWA
		{
			use: 'gridsome-plugin-pwa',
			options: {
				// Service Worker Options
				disableServiceWorker: false,
				serviceWorkerPath: 'service-worker.js',
				cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg,gif,webm,mp4',
				disableTemplatedUrls: false,
	
				// Manifest Options (https://developer.mozilla.org/en-US/docs/Web/Manifest)
				manifestPath: 'manifest.json',
				title: 'Carrot quest',
				description: 'Инструменты для увеличения продаж на сайтах без привлечения нового трафика',
				shortName: 'CQ',
				startUrl: '/',
				display: 'standalone',
				statusBarStyle: 'default',
				themeColor: '#FF7C16',
				backgroundColor: '#ffffff',
				icon: './static/favicon.png',
				maskableIcon: true,
				svgFavicon: 'https://www.carrotquest.io/favicon.svg',
				appleMaskIcon: 'https://www.carrotquest.io/favicon.svg',
            	appleMaskIconColor: '#ffffff',
			}
		},
	],
	
	// chainWebpack: config => {
		// config.resolve.alias.set('@images', '@/assets/images')
		
		//Анализ размера билда
		// config
		// 	.plugin('BundleAnalyzerPlugin')
		// 	.use(BundleAnalyzerPlugin, [{ analyzerMode: 'static' }])
	// }
}