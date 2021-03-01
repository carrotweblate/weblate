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
		// {
		// 	use: 'gridsome-plugin-gtm',
		// 	options: {
		// 		id: 'GTM-PHNG63V',
		// 		enabled: true,
		// 		debug: false
		// 	}
		// },
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
		//Critical CSS
		{
			use: '@gridsome/plugin-critical',
			options: {
				paths: ['/'],
				width: 1300,
				height: 900
			}
		},
		// //Подключаемся к Блогу
		// {
		// 	use: 'gridsome-source-graphql',
		// 	options: {
		// 		url: 'https://www.carrotquest.io/blog/graphql',
		// 		fieldName: 'wp',
		// 		typeName: 'WordPress',
		// 		headers: {
		// 			'Content-Type': 'application/json',
		// 			Accept: 'application/json'
		// 		},
		// 	}
		// },
		// {
		// 	use: '@noxify/gridsome-plugin-remote-image',
		// 	options: {
		// 		'typeName' : 'WordPress',
		// 		'sourceField': 'sourceUrl',
		// 		'targetField': 'downloadedSrc',
		// 		'targetPath': './src/assets/remoteImages'
		// 	}
		// },
		// {
		// 	use: 'gridsome-source-wordpress',
		// 	options: {
		// 		baseUrl: 'https://carrotquest.io/blog/', // required
		// 		apiBase: 'wp-json',
		// 		typeName: 'WordPress',
		// 		perPage: 100,
		// 		concurrent: 10,
		// 		splitPostsIntoFragments: false, // default false
		// 		downloadRemoteImagesFromPosts: false, // default false
		// 		downloadRemoteFeaturedImages: true, // default false
		// 		downloadACFImages: true, // default false
		// 	}
		// }
	],
	// templates: {
	// 	WordPressCategory: '/blog/:slug',
	// 	WordPressPost: '/blog/:slug',
	// },
	
	// chainWebpack: config => {
		// config.resolve.alias.set('@images', '@/assets/images')
		
		//Анализ размера билда
		// config
		// 	.plugin('BundleAnalyzerPlugin')
		// 	.use(BundleAnalyzerPlugin, [{ analyzerMode: 'static' }])
	// }
}