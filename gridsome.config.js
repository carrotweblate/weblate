// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// // Анализ размера билда
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//   .BundleAnalyzerPlugin


// Подсключение глобальных стилей
const path = require('path')
function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/scss/variables.scss'),
      ],
    })
}

// Выгрузка страниц блога в поиск Algolia
const collections = [{
	query: `{
		allPost {
			edges {
				node {
					id
					title
					slug
					modified
					featured_media_medium
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
			featured_media_medium: item.featured_media_medium,
			meta: item.meta,
			categories: item.categories,
			content: item.content.substr(0,7000)
		}
	}, // optional
	matchFields: ['slug', 'modified'], // Array<String> required with PartialUpdates
},];

module.exports = {
	siteUrl: 'https://www.carrotquest.io',

	siteName: 'Carrot quest',
	titleTemplate: '%s',

	prefetch: { mask: '^$' },

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
		// Critical
		{
			use: '@gridsome/plugin-critical',
			options: {
				paths: ['/'],
				width: 1300,
				height: 900
			}
		},
		// // Поиск по блогу
		// {
		// 	use: `gridsome-plugin-algolia`,
		// 	options: {
		// 		appId: '7Y1P83X4M1',
		// 		apiKey: 'e268d391762ad62104c571742cfd1afa',
		// 		collections,
		// 		chunkSize: 10000, // default: 1000
		// 		enablePartialUpdates: true, // default: false
		// 	},
		// },
		// PWA
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
					routes: ["/", /\.(js|css|png|jpg|mp4|webm)/],
				},
			},
		}
	],
	
	
	chainWebpack: config => {
		// Подсключение глобальных стилей
		const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
		types.forEach(type => {
			addStyleResource(config.module.rule('scss').oneOf(type))
		})

		// 	// Анализ размера билда
		// 	config
		// 		.plugin('BundleAnalyzerPlugin')
		// 		.use(BundleAnalyzerPlugin, [{ analyzerMode: 'static' }])
	}
}