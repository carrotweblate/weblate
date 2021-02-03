// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {

	// pathPrefix: '/blog/article/',

	siteName: 'Carrot quest',
	titleTemplate: "%s — Carrot quest",

	transformers: {
		remark: {
			externalLinksTarget: '_blank',
			externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
			anchorClassName: 'icon icon-link',
			plugins: [
				['@mavrin/remark-typograf',	{ 'locale': ['ru'] }]
			]
		}
	},

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
				disableTemplatedUrls: false,       // Optional
	
				// Manifest Options (https://developer.mozilla.org/en-US/docs/Web/Manifest)
				manifestPath: 'manifest.json',
				title: 'Carrot quest',
				
				// startUrl: '/',
				startUrl: '/',
				display: 'standalone',
				statusBarStyle: 'default',
				themeColor: '#f60',
				backgroundColor: '#ffffff',
				icon: './static/favicon.png',
				shortName: 'Carrot quest', // Optional
				description: 'Инструменты для увеличения продаж на сайтах без привлечения нового трафика', // Optional
			}
		},
		{
			use: 'gridsome-source-graphql',
			options: {
			url: 'https://www.carrrot.biz/blog/graphql',
				fieldName: 'wp',
				typeName: 'wpTypes',
			},
		},
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
		config.resolve.alias.set('@images', '@/assets/images')
	}
}