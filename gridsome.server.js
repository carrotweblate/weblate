// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')

const Typograf = require('typograf')
const tp = new Typograf({locale: ['ru', 'en-US']})
tp.enableRule('common/nbsp/*')

const fs = require('fs')

module.exports = function (api) {
	// API from Tilda Files
	api.loadSource(async actions => {
		const { data } = await axios.get(
			// 'https://api.tildacdn.info/v1/getproject/?publickey=h6wlwdtglx70dzkz1fnn&secretkey=cz7a318b3jpkqm6nzz4l&projectid=62329',
			'https://tilda.carrotquest.io/files_list.json'
		)
		const collection = actions.addCollection('tildaFiles')
		for (const item of data.result.css) {
			collection.addNode({css: item})
		}
		for (const item of data.result.js) {
			collection.addNode({js: item})
		}
	})

	// API from Tilda: Список страниц
	api.loadSource(async actions => {
		const { data } = await axios.get(
			// 'https://api.tildacdn.info/v1/getpageslist/?publickey=h6wlwdtglx70dzkz1fnn&secretkey=cz7a318b3jpkqm6nzz4l&projectid=62329',
			'https://tilda.carrotquest.io/pages_list.json'
		)
		const collection = actions.addCollection('Tilda')
		api.createManagedPages(async ({ createPage }) => {
			for (const item of data.result) {
				if ( 
					( item.id != '312699' ) && ( item.id == '12011344' || item.id == '17091896' || item.id == '11937240' || item.id == '16075876' || item.id == '16080876' || item.id == '16083784' || item.id == '2833995' || item.id == '16218892' || item.id == '11880600' || item.id == '10518279' || item.id == '10714391' || item.id == '10714999' || item.id == '10715060'
					//Интеграции
					|| item.id == '9970780' || item.id == '11191195' || item.id == '11193030' || item.id == '11193800' || item.id == '11195611' || item.id == '11431149' || item.id == '11431453' || item.id == '11431738' || item.id == '11007077' || item.id == '11183247' || item.id == '11183537' || item.id == '11194593' || item.id == '11195339' || item.id == '11430916' || item.id == '11432052' || item.id == '11432895' || item.id == '11433520' || item.id == '13669305' || item.id == '13670106' || item.id == '13670549' || item.id == '13670751' || item.id == '3785072' || item.id == '3195986'
					//Вебинары
					|| item.id == '17071238' || item.id == '17091896'
				) ) {
				// if ( item.id != '312699' || item.id == '1048214' || item.id == '2883968' || item.id == '11437990' ) {
				// if ( item.id == '16083784') {
					const { data } = await axios.get(
						// 'https://api.tildacdn.info/v1/getpage/?publickey=h6wlwdtglx70dzkz1fnn&secretkey=cz7a318b3jpkqm6nzz4l&pageid=' + item.id,
						'https://tilda.carrotquest.io/page_' + item.id + '.json'
					)
					if ( item.alias ) {
						createPage({
							path: `/${item.alias}`,
							component: './src/templates/Tilda.vue',
							context: {
								id: item.id,
								title: item.title,
								description: item.descr,
								cover: item.img,
								slug: item.alias,
								html: data.result.html
							}
						})
					} else {
						createPage({
							path: `/${item.filename}`,
							component: './src/templates/Tilda.vue',
							context: {
								id: item.id,
								title: item.title,
								description: item.descr,
								cover: item.img,
								slug: item.filename,
								html: data.result.html
							}
						})
					}
				}
				console.log('Tilda - ' + item.title + ' - готова!')
			}
		})
	})

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
				title: tp.execute(item.title.rendered),
				date: item.date,
				modified: item.modified,
				categories: item.categories,
				authors: item.acf.post__authors,
				author: item.author,
				featured_media: item.featured_media_medium,
				featured_media_large: item.featured_media_large,
				content: tp.execute(item.content.rendered),
				sticky: item.sticky,
				page_views: item.meta.wpb_post_views_count,
				tags: item.tags,
			})
		}
		// Делаем страницы статей
		api.createManagedPages(async ({ createPage }) => {
			for (const item of data) {
				let pageHTML = item.content.rendered
				let featured_media_large = '' + item.featured_media_large
				//CDN для ресурсов
				pageHTML = pageHTML.split('https://www.carrotquest.io/blog/wp-content/uploads/').join('https://cdn-www.carrotquest.io/blog/wp-content/uploads/')
				featured_media_large = featured_media_large.split('https://www.carrotquest.io/').join('https://cdn-www.carrotquest.io/')
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
							meta: item.yoast_meta,
							json_ld: item.yoast_json_ld
						},
						
						//Информация
						author: item.author,
						date: item.formatted_date,
						category: item.categories,
						modified: item.modified,
						
						//Тело статьи
						featured_media: featured_media_large,
						title: tp.execute(item.title.rendered),
						description: tp.execute(item.excerpt.rendered),
						content: tp.execute(pageHTML)
					}
				})
				console.log('Пост - ' + item.id + ' - готов!')

				//Делаем AMP
				fs.readFile('./static/blogtest/' + item.slug + '/amp/modified.json', 'utf8', function(err, contents) {
					let ampModified = JSON.stringify({ date: '' })
					if (contents) {
						ampModified = JSON.parse(contents)
					}
					if (ampModified.date != item.modified ) {
						fs.mkdirSync('./static/blogtest/' + item.slug , { recursive: true })
						fs.mkdirSync('./static/blogtest/' + item.slug + '/amp/' , { recursive: true })
						fs.writeFile('./static/blogtest/' + item.slug + '/amp/modified.json', JSON.stringify({ date: item.modified }), 'utf8' , function (err) {
							if (err) return console.log(err)
						})
						axios.get('https://www.carrotquest.io/blog/' + item.slug + '/amp/')
							.then(response => {
								pageHTML = response.data
								pageHTML = pageHTML.split('https://www.carrotquest.io/blog/wp-content/uploads/').join('https://cdn-www.carrotquest.io/blog/wp-content/uploads/')
								pageHTML = tp.execute(pageHTML)
								fs.writeFile('./static/blogtest/' + item.slug + '/amp/index.html', pageHTML, 'utf8' , function (err) {
									if (err) return console.log(err)
								})
								console.log('AMP - ' + item.id + ' - готов!')
							})
					}
				})
			}
		})
	})

	// API Wordpress - создаём Категории
	api.loadSource(async actions => {
		const { data } = await axios.get(
			'https://www.carrotquest.io/blog/wp-json/wp/v2/categories?_fields=id,name,slug,description&per_page=50'
		)
		// Данные для вывода категорий
		const collection = actions.addCollection('categories')
		for (const item of data) {
			collection.addNode({
				id: item.id,
				slug: item.slug,
				title: tp.execute(item.name),
				description: tp.execute(item.description)
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
						slug: item.slug,
						title: tp.execute(item.name),
						description: tp.execute(item.description)
					}
				})
				console.log('Категория - ' + item.name + ' - готова!')
			}
		})
	})

	// API Wordpress - создаём Авторов
	api.loadSource(async actions => {
		const { data } = await axios.get(
			'https://www.carrotquest.io/blog/wp-json/wp/v2/users?_fields=id,name,description,slug,avatar_urls&per_page=50'
		)
		// Данные для вывода автора
		const collection = actions.addCollection('authors')
		for (const item of data) {
			collection.addNode({
				id: item.id,
				name: tp.execute(item.name),
				description: tp.execute(item.description),
				avatar: item.avatar_urls
			})
			
		}
		// Делаем страницы авторов
		api.createManagedPages(async ({ createPage }) => {
			const { data } = await axios.get(
				'https://www.carrotquest.io/blog/wp-json/wp/v2/pages?_parent=28678'
			)
			for (const item of data) {
				let pageHTML = item.content.rendered
				let featured_media_large = '' + item.featured_media_large
				//CDN для ресурсов
				pageHTML = pageHTML.split('https://www.carrotquest.io/blog/wp-content/uploads/').join('https://cdn-www.carrotquest.io/blog/wp-content/uploads/')
				featured_media_large = featured_media_large.split('https://www.carrotquest.io/').join('https://cdn-www.carrotquest.io/')

				if (item.parent == 28678) {
					createPage({
						path: `/blogtest/authors/${item.slug}/`,
						component: './src/templates/Author.vue',
						context: {
							id: item.acf.user.ID,
							title: tp.execute(item.title.rendered),
							modified: item.modified,
							featured_media: featured_media_large,
							content: tp.execute(pageHTML),
							another_publications: item.acf.another_publications,
	
							//SEO
							seo: {
								title: item.yoast_title,
								meta: item.yoast_meta,
								json_ld: item.yoast_json_ld
							}
						}
					})
					console.log('Автор - ' + item.title.rendered + ' - готов!')
				}
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
