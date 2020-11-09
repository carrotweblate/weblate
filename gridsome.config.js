// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {

	pathPrefix: '/blog/article/',

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
				// id: 'GTM-PHNG63V',  //CQ
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
				disableTemplatedUrls: true, // Optional

				// Manifest Options (https://developer.mozilla.org/en-US/docs/Web/Manifest)
				manifestPath: 'manifest.json',
				title: 'Carrot quest',
				startUrl: 'https://www.carrotquest.io/blog/article/',
				display: 'standalone',
				statusBarStyle: 'default',
				themeColor: '#ff892a',
				backgroundColor: '#ffffff',
				icon: './static/favicon.png'
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
	]
}