// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// // Анализ размера билда
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//   .BundleAnalyzerPlugin

const collections = [{
	query: `{
		allPost {
			edges {
				node {
					id
					title
					slug
					modified
					featured_media
					meta
					categories
					content
				}
			}
		}
	}`,
	transformer: ({ data }) => data.allPost.edges.map(({ node }) => node),
	indexName: 'prod_Blog', // Algolia index name
	itemFormatter: (item) => {
		return {
			objectID: item.id,
			title: item.title,
			slug: item.slug,
			modified: String(item.modified),
			featured_media: item.featured_media,
			meta: item.meta,
			categories: item.categories,
			content: item.content.substr(0,7000)
		}
	}, // optional
	matchFields: ['slug', 'modified'], // Array<String> required with PartialUpdates
},];

module.exports = {
	siteName: 'Carrot quest',
	titleTemplate: '%s',

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
		{
			use: `gridsome-plugin-algolia`,
			options: {
				appId: '7Y1P83X4M1',
				apiKey: 'e268d391762ad62104c571742cfd1afa',
				collections,
				chunkSize: 10000, // default: 1000
				enablePartialUpdates: true, // default: false
			},
		},
		{
			use: 'gridsome-plugin-manifest',
			options: {
				start_url: '/',
				background_color: '#fff',
				icon_path: './static/favicon.png',
				name: 'Carrot quest',
				short_name: 'CQ',
				theme_color: '#FF7C16',
				lang: 'ru',
			},
		},
		{
			use: 'gridsome-plugin-service-worker',
			options: {
				networkFirst: {
					cacheName: 'nf-v1',
					routes: ['/', /\.(js|css|png)/],
				},
			},
		},
		// {
		// 	use: 'gridsome-plugin-pwa',
		// 	options: {
		// 		manifestPath: 'manifest.json',
		// 		title: 'Carrot quest',
		// 		description: 'Инструменты для увеличения продаж на сайтах без привлечения нового трафика',
		// 		shortName: 'CQ',
		// 		startUrl: '/',
		// 		display: 'standalone',
		// 		statusBarStyle: 'default',
		// 		themeColor: '#FF7C16',
		// 		backgroundColor: '#ffffff',
		// 		icon: './static/favicon.png',
		// 		maskableIcon: true,
		// 		svgFavicon: 'https://www.carrotquest.io/favicon.svg',
		// 	}
		// },
		// {
		// 	use: '@allanchain/gridsome-plugin-pwa',
		// 	options: {
		// 		manifestOptions: {
		// 			title: 'Carrot quest',
		// 			short_name: 'CQ',
		// 			description: 'Инструменты для увеличения продаж на сайтах без привлечения нового трафика',
		// 			display: 'standalone',
		// 			categories: ['utilities'],
		// 			lang: 'ru-RU',
		// 		},
		// 		themeColor: '#FF7C16',
		// 		appleMobileWebAppStatusBarStyle: 'default',
		// 		appleMaskIconColor: '#ffffff',
		// 		manifestPath: 'manifest.json',
		// 		icon: {
		// 			androidChrome: [
		// 				{
		// 					src: './static/favicon.png',
		// 					sizes: [512, 384, 192],
		// 					purpose: 'maskable'
		// 				},
		// 				{
		// 					sizes: [144],
		// 					purpose: 'any'
		// 				},
		// 				{
		// 					urls: [
		// 						'/gridsome/assets/static/favicon.png'
		// 					],
		// 					sizes: [512]
		// 				}
		// 			],
		// 			appleMaskIcon: { url: './favicon.svg' }
		// 		},
		// 		msTileColor: '#00a672',
		// 		appShellPath: 'offline/index.html',
		// 		workboxOptions: {
		// 			cacheId: 'cq-pwa',
		// 			globPatterns: ['assets/@(js|css)/*', 'offline/index.html'],
		// 			navigateFallback: '/gridsome/offline/index.html',
		// 			navigateFallbackAllowlist: [/\/$/],
		// 			skipWaiting: true
		// 		}
		// 	}
		// },
	],
	
	
	// chainWebpack: config => {		
	// 	// Анализ размера билда
	// 	config
	// 		.plugin('BundleAnalyzerPlugin')
	// 		.use(BundleAnalyzerPlugin, [{ analyzerMode: 'static' }])
	// }
}