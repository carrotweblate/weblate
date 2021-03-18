// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

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
			categories: item.categories
		}
	}, // optional
	matchFields: ['slug', 'modified'], // Array<String> required with PartialUpdates
},];

module.exports = {
	siteName: 'Carrot quest',
	titleTemplate: "%s",

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
		{
			use: `gridsome-plugin-algolia`,
			options: {
				appId: '7Y1P83X4M1',
				apiKey: 'e268d391762ad62104c571742cfd1afa',
				collections,
				chunkSize: 10000, // default: 1000
				enablePartialUpdates: false, // default: false
			},
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