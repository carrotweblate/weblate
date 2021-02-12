// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//   .BundleAnalyzerPlugin

module.exports = {

	// pathPrefix: '/https://cdn-www.carrotquest.io/',

	// prefetch: {
	// 	mask: '^$', // Отключаем подгрузку страниц
	// },

	siteName: 'Carrot quest',
	titleTemplate: "%s — Carrot quest",

	// transformers: {
	// 	remark: {
	// 		externalLinksTarget: '_blank',
	// 		externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
	// 		anchorClassName: 'icon icon-link',
	// 		plugins: [
	// 			['@mavrin/remark-typograf',	{ 'locale': ['ru'] }]
	// 		]
	// 	}
	// },

	plugins: [
		{
			use: 'gridsome-plugin-gtm',
			options: {
				id: 'GTM-PHNG63V',
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
				svgFavicon: './static/favicon.svg',
				appleMaskIcon: './static/favicon.svg',
            	appleMaskIconColor: '#ffffff',
			}
		},
		{
			use: '@gridsome/plugin-critical',
			options: {
				paths: ['/'],
				width: 1300,
				height: 900
			}
		}
		// {
		// 	use: 'gridsome-source-graphql',
		// 	options: {
		// 	url: 'https://www.carrrot.biz/blog/graphql',
		// 		fieldName: 'wp',
		// 		typeName: 'wpTypes',
		// 	},
		// },
		// {
		// 	use: '@noxify/gridsome-plugin-remote-image',
		// 	options: {
		// 		'typeName' : 'wpTypes',
		// 		'sourceField': 'sourceUrl',
		// 		'targetField': 'downloadedSrc',
		// 		'targetPath': './src/assets/remoteImages'
		// 	}
		// },
	],
	
	chainWebpack: config => {
		// config.resolve.alias.set('@images', '@/assets/images')
		// config
		// 	.plugin('BundleAnalyzerPlugin')
		// 	.use(BundleAnalyzerPlugin, [{ analyzerMode: 'static' }])
	}
}