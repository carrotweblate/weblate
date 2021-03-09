// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')

module.exports = function (api) {
	// // API from Tilda Files
	// api.loadSource(async actions => {
	// 	const { data } = await axios.get(
	// 		'https://api.tildacdn.info/v1/getproject/?publickey=h6wlwdtglx70dzkz1fnn&secretkey=cz7a318b3jpkqm6nzz4l&projectid=62329'
	// 	)
	// 	const collection = actions.addCollection('tildaFiles')
	// 	for (const item of data.result.css) {
	// 		collection.addNode({css: item})
	// 	}
	// 	for (const item of data.result.js) {
	// 		collection.addNode({js: item})
	// 	}
	// })

	// // API from Tilda: Список страниц
	// api.loadSource(async actions => {
	// 	const { data } = await axios.get(
	// 		// 'https://api.tildacdn.info/v1/getpageslist/?publickey=h6wlwdtglx70dzkz1fnn&secretkey=cz7a318b3jpkqm6nzz4l&projectid=62329',
	// 		'https://tilda.carrotquest.io/pages_list.json'
	// 	)
	// 	const collection = actions.addCollection('Tilda')
	// 	api.createManagedPages(async ({ createPage }) => {
	// 		for (const item of data.result) {
	// 			if ( 
	// 				( item.id != '312699' ) && ( item.id == '12011344' || item.id == '17091896' || item.id == '11937240' || item.id == '16075876' || item.id == '16080876' || item.id == '16083784' || item.id == '2833995' || item.id == '16218892' || item.id == '11880600' || item.id == '10518279' || item.id == '10714391' || item.id == '10714999' || item.id == '10715060'
	// 				//Интеграции
	// 				|| item.id == '9970780' || item.id == '11191195' || item.id == '11193030' || item.id == '11193800' || item.id == '11195611' || item.id == '11431149' || item.id == '11431453' || item.id == '11431738' || item.id == '11007077' || item.id == '11183247' || item.id == '11183537' || item.id == '11194593' || item.id == '11195339' || item.id == '11430916' || item.id == '11432052' || item.id == '11432895' || item.id == '11433520' || item.id == '13669305' || item.id == '13670106' || item.id == '13670549' || item.id == '13670751' || item.id == '3785072' || item.id == '3195986'
	// 				//Вебинары
	// 				|| item.id == '17071238' || item.id == '17091896'
	// 			) ) {
	// 			// if ( item.id != '312699' || item.id == '1048214' || item.id == '2883968' || item.id == '11437990' ) {
	// 			// if ( item.id == '16083784') {
	// 				const { data } = await axios.get(
	// 					// 'https://api.tildacdn.info/v1/getpage/?publickey=h6wlwdtglx70dzkz1fnn&secretkey=cz7a318b3jpkqm6nzz4l&pageid=' + item.id,
	// 					'https://tilda.carrotquest.io/page_' + item.id + '.json'
	// 				)
	// 				if ( item.alias ) {
	// 					createPage({
	// 						path: `/${item.alias}`,
	// 						component: './src/templates/Tilda.vue',
	// 						context: {
	// 							id: item.id,
	// 							title: item.title,
	// 							description: item.descr,
	// 							cover: item.img,
	// 							slug: item.alias,
	// 							html: data.result.html
	// 						}
	// 					})
	// 				} else {
	// 					createPage({
	// 						path: `/${item.filename}`,
	// 						component: './src/templates/Tilda.vue',
	// 						context: {
	// 							id: item.id,
	// 							title: item.title,
	// 							description: item.descr,
	// 							cover: item.img,
	// 							slug: item.filename,
	// 							html: data.result.html
	// 						}
	// 					})
	// 				}
	// 			}
	// 		}
	// 	})
	// })

	// API Wordpress - создаём Посты
	api.loadSource(async actions => {
		const { data } = await axios.get(
			'https://www.carrotquest.io/blog/wp-json/wp/v2/posts?&per_page=999'
		)
		// Данные для вывода статей
		const collection = actions.addCollection('post')
		for (const item of data) {
			collection.addNode({
				id: item.id,
				slug: item.slug,
				title: item.title.rendered,
				date: item.date,
				categories: item.categories,
				featured_media: item.featured_media_medium,
				modified: item.modified,
				content: item.content.rendered,
				sticky: item.sticky,
				page_views: item.meta.wpb_post_views_count,
			})
		}
		// Делаем страницы статей
		api.createManagedPages(async ({ createPage }) => {
			for (const item of data) {
				var pageHTML = item.content.rendered
				//CDN для ресурсов
				pageHTML = pageHTML.split('https://www.carrotquest.io/blog/wp-content/uploads/').join('https://cdn-www.carrotquest.io/blog/wp-content/uploads/')
				//Lazyload
				pageHTML = pageHTML.split('<img src').join('<img loading="lazy" src')
				//Видео
				pageHTML = pageHTML.split('<video ').join('<video autoplay loop muted playsinline ')
				pageHTML = pageHTML.split('controls').join('')
				createPage({
					path: `/blogtest/${item.slug}/`,
					component: './src/templates/Post.vue',
					context: {
						id: item.id,
						slug: item.slug,

						//SEO
						seo: {
							title: item.yoast_title,
							description: item.yoast_meta[4].content,
							cover: item.yoast_meta[10].content
						},
						
						//Информация
						author: item.author,
						date: item.formatted_date,
						category: item.categories,
						
						//Тело статьи
						featured_media: item.featured_media_large,
						title: item.title.rendered,
						description: item.excerpt.rendered,
						content: pageHTML
					}
				})
			}
		})
	})

	// API Wordpress - создаём Категории
	api.loadSource(async actions => {
		const { data } = await axios.get(
			'https://www.carrotquest.io/blog/wp-json/wp/v2/categories?_fields=id,name,slug&per_page=50'
		)
		// Данные для вывода категорий
		const collection = actions.addCollection('categories')
		for (const item of data) {
			collection.addNode({
				id: item.id,
				slug: item.slug,
				title: item.name
			})
		}
		// Делаем страницы категорий
		api.createManagedPages(async ({ createPage }) => {
			for (const item of data) {
				createPage({
					path: `/blogtest/${item.slug}/`,
					component: './src/templates/Category.vue',
					context: {
						id: item.id,
						ids: [item.id],
					}
				})
			}
		})
	})

	// API Wordpress - создаём Авторов
	api.loadSource(async actions => {
		const { data } = await axios.get(
			'https://www.carrotquest.io/blog/wp-json/wp/v2/users?_fields=id,name,description,link,avatar_urls&per_page=50'
		)
		// Данные для вывода категорий
		const collection = actions.addCollection('authors')
		for (const item of data) {
			collection.addNode({
				id: item.id,
				name: item.name,
				description: item.description,
				avatar: item.avatar_urls
			})
		}
	})
  
	api.loadSource(({ addCollection }) => {
	// Use the Data Store API here: https://gridsome.org/docs/data-store-api/
	})

	api.createPages(({ createPage }) => {
	// Use the Pages API here: https://gridsome.org/docs/pages-api/
	})
}
