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
	// 		'https://api.tildacdn.info/v1/getpageslist/?publickey=h6wlwdtglx70dzkz1fnn&secretkey=cz7a318b3jpkqm6nzz4l&projectid=62329'
	// 	)
	// 	const collection = actions.addCollection('Tilda')
	// 	api.createManagedPages(async ({ createPage }) => {
	// 		for (const item of data.result) {
	// 			if ( 
	// 				( item.id != '312699' ) && ( item.id == '12011344' || item.id == '17091896' || item.id == '11937240' || item.id == '16075876' || item.id == '16080876' || item.id == '16083784' || item.id == '2833995' || item.id == '16218892' || item.id == '11880600' || item.id == '10518279' || item.id == '10714391' || item.id == '10714999' || item.id == '10715060' || item.id == '15337194'
	// 				//Интеграции
	// 				|| item.id == '9970780' || item.id == '11191195' || item.id == '11193030' || item.id == '11193800' || item.id == '11195611' || item.id == '11431149' || item.id == '11431453' || item.id == '11431738' || item.id == '11007077' || item.id == '11183247' || item.id == '11183537' || item.id == '11194593' || item.id == '11195339' || item.id == '11430916' || item.id == '11432052' || item.id == '11432895' || item.id == '11433520' || item.id == '13669305' || item.id == '13670106' || item.id == '13670549' || item.id == '13670751' || item.id == '3785072' || item.id == '3195986'
	// 				//Вебинары
	// 				|| item.id == '17071238' || item.id == '17091896'
	// 			) ) {
	// 			// if ( item.id != '312699' || item.id == '1048214' || item.id == '2883968' || item.id == '11437990' ) {
	// 			// if ( item.id == '16083784') {
	// 				const { data } = await axios.get(
	// 					'https://api.tildacdn.info/v1/getpage/?publickey=h6wlwdtglx70dzkz1fnn&secretkey=cz7a318b3jpkqm6nzz4l&pageid=' + item.id
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

	// //Wordpress
	// api.createPages(async ({ graphql, createPage }) => {
	// 	const { data } = await graphql(`{
	// 		allSettings {
	// 			readingSettingsPostsPerPage
	// 		}
	// 		posts(where: { orderby: { field: DATE, order: DESC } }, first: 100) {
	// 			edges {
	// 				node {
	// 					id
	// 					slug
	// 				}
	// 			}
	// 		}
	// 		categories {
	// 			edges {
	// 				node {
	// 					id
	// 					slug
	// 					name
	// 				}
	// 			}
	// 		}
	// 	}`)
	// 	const perPage = data.allSettings.readingSettingsPostsPerPage;
	// 	const totalNumberOfPosts = data.posts.edges.length;
	// 	const numberOfPagesForPagination = Math.ceil(totalNumberOfPosts / perPage);
		
	// 	// Pagination 
	// 	for (let i = 0; i < numberOfPagesForPagination; i++) {
	// 		createPage({
	// 			path: (i === 0) ? `/blogtest/` : `/blogtest/page/${i + 1}/`,
	// 			component: './src/templates/PostsArchive.vue',
	// 			context: {
	// 				offset: parseInt(i * perPage),
	// 				perPage: parseInt(perPage),
	// 				pageInfo: {
	// 					currentPage: parseInt(i + 1),
	// 					total: parseInt(totalNumberOfPosts),
	// 				}
	// 			}
	// 		})
	// 	}

	// 	// Single Post 
	// 	data.posts.edges.forEach(({ node }) => {
	// 		createPage({
	// 			path: `/blogtest/${node.slug}/`,
	// 			component: './src/templates/Post.vue',
	// 			context: {
	// 				id: node.id,
	// 			}
	// 		})
	// 	})

	// 	// Categories Pages
	// 	data.categories.edges.forEach(({ node }) => {
	// 		console.log(`Creating Category Page: /blogtest/${node.slug}/`);
	// 		createPage({
	// 		path: `/blogtest/${node.slug}`,
	// 		component: './src/templates/CategoriesArchive.vue',
	// 			context: {
	// 				id: node.id,
	// 				name: node.name
	// 			}
	// 		})
	// 	})
	// })

	// //API from Wordpress: Список постов
	// api.createPages(async ({ graphql, createPage }) =>{
	// 	// Use the Pages API here: https://gridsome.org/docs/pages-api
	// 	const { data } = await graphql(`
	// 		query {
	// 			posts{
	// 				nodes{
						// id
						// slug
						// seo {
						// 	canonical
						// 	title
						// 	metaDesc
						// }
						// categories {
						// 	nodes {
						// 		name
						// 		slug
						// 	}
						// }
						// title
						// featuredImage { node { mediaDetails { sizes { sourceUrl } } } }
	// 				}
	// 			}
	// 		}
	// 	`)
	// 	data.posts.nodes.forEach(function(node, index){
	// 		var pageHTML = node.content;
	// 		// //CDN для ресурсов
	// 		// pageHTML = pageHTML.split('https://www.carrotquest.io/blog/wp-content/uploads/').join('https://cdn-www.carrotquest.io/blog/wp-content/uploads/')
	// 		// //Lazyload
	// 		// pageHTML = pageHTML.split('<img src').join('<img loading="lazy" src')
	// 		// //PRE
	// 		// pageHTML = pageHTML.split('<code><').join('<code>&lt;')
	// 		// pageHTML = pageHTML.split('></code>').join('&gt;</code>')
	// 		// //Carrot quest
	// 		// pageHTML = pageHTML.split('Carrot quest').join('Carrot&nbsp;quest')

	// 		createPage({
	// 			path: `/blogtest/${node.slug}`,
	// 			component: './src/templates/Post.vue',
	// 			context: {
	// 				id: node.id,
	// 				slug: node.slug,

	// 				//SEO
	// 				meta: [
	// 					{ canonical: node.seo.canonical },
	// 				],

	// 				//Категория
	// 				category: node.categories.nodes[0].name,
	// 				cslug: '/blogtest/' + node.categories.nodes[0].slug + '/',
					
	// 				//Тело статьи
	// 				title: node.title,
	// 				featuredImage: node.featuredImage.node.mediaDetails.sizes[1].sourceUrl,
	// 			}
	// 		})
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
				featured_media: item.featured_media_medium
			})
		}
		// Делаем страницы статей
		api.createManagedPages(async ({ createPage }) => {
			for (const item of data) {
				createPage({
					path: `/blogtest/${item.slug}`,
					component: './src/templates/Post.vue',
					context: {
						id: item.id,
						slug: item.slug,
						
						//Информация
						author: item.author,
						date: item.date,
						category: item.categories,
						
						//Тело статьи
						title: item.title.rendered,
						description: item.excerpt.rendered,
						content: item.content.rendered
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
					path: `/${item.slug}/`,
					component: './src/templates/Category.vue',
					context: {
						id: item.id,
						ids: [item.id],
					}
				})
			}
		})
	})
  
	api.loadSource(({ addCollection }) => {
	// Use the Data Store API here: https://gridsome.org/docs/data-store-api/
	})

	api.createPages(({ createPage }) => {
	// Use the Pages API here: https://gridsome.org/docs/pages-api/
	})
}
