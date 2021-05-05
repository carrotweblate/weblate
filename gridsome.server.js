// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

//Загрузка API
const axios = require('axios')

//Типограф
const Typograf = require('typograf')
const tp = new Typograf({locale: ['ru', 'en-US']})
tp.enableRule('common/nbsp/*')

//Работа с файлами
const fs = require('fs')

//Обработка текста и ссылок
function renderURL (data) {
	//Публичный домен
	if (!!data) {
		return data.split('wp.carrotquest.io').join('www.carrotquest.io')
	}
}
function renderText (data) {
	let pageHTML = renderURL(data)
	//Lazyload
	pageHTML = pageHTML.split('<img src').join('<img loading="lazy" src')
	//Видео
	pageHTML = pageHTML.split('<video ').join('<video autoplay loop muted playsinline ')
	pageHTML = pageHTML.split('controls').join('')
	//Carrot-quest
	pageHTML = pageHTML.split('Carrot quest').join('Carrot&nbsp;quest')
	//Типографируем
	pageHTML = tp.execute(pageHTML)

	return pageHTML
}

//Сохранение скриптов
function saveScript (name , data) {
	fs.writeFile('./static/' + name, data , 'utf8' , function (err) {
		if (err) return console.log(err)
	})
}
function saveTilda (name , data) {
	fs.writeFile('./static/tilda/' + name, data , 'utf8' , function (err) {
		if (err) return console.log(err)
	})
}


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
				// if ( 
				// 	( item.id != '312699' ) && ( item.id == '19329108' || item.id == '19328915' || item.id == '19319038' || item.id == '12011344' || item.id == '17091896' || item.id == '11937240' || item.id == '16075876' || item.id == '16080876' || item.id == '16083784' || item.id == '2833995' || item.id == '16218892' || item.id == '11880600' || item.id == '10518279' || item.id == '10714391' || item.id == '10714999' || item.id == '10715060'
				// 	//Интеграции
				// 	|| item.id == '9970780' || item.id == '11191195' || item.id == '11193030' || item.id == '11193800' || item.id == '11195611' || item.id == '11431149' || item.id == '11431453' || item.id == '11431738' || item.id == '11007077' || item.id == '11183247' || item.id == '11183537' || item.id == '11194593' || item.id == '11195339' || item.id == '11430916' || item.id == '11432052' || item.id == '11432895' || item.id == '11433520' || item.id == '13669305' || item.id == '13670106' || item.id == '13670549' || item.id == '13670751' || item.id == '3785072' || item.id == '3195986'
				// 	//Вебинары
				// 	|| item.id == '18822720' || item.id == '17071238' || item.id == '17091896' || item.id == '17931613' || item.id == '18334680' || item.id == '19158192' 
				// 	//Лидбот
				// 	|| item.id == '18405836' || item.id == '18459207' || item.id == '18461004' || item.id == '18461139' || item.id == '18493211' || item.id == '18493266' || item.id == '18493284' || item.id == '18633619'
				// 	//Плейбуки
				// 	|| item.id == '18848589' || item.id == '18859531' 
				// ) ) {
				if ( item.id != '309741' && !!item.published ) {
					console.log('Tilda - ' + item.title + ' - ' + item.id + ' - запрос!')
					await axios.get(
						// 'https://api.tildacdn.info/v1/getpage/?publickey=h6wlwdtglx70dzkz1fnn&secretkey=cz7a318b3jpkqm6nzz4l&pageid=' + item.id,
						'https://tilda.carrotquest.io/page_' + item.id + '.json'
					).then(function (data) {
						let tildaPath = ''
						if ( item.alias ) {
							tildaPath = '/' + item.alias
						} else {
							tildaPath = '/' + item.filename
						}
						let pageHTML = data.result.html
						//Carrot-quest
						pageHTML = pageHTML.split('Carrot quest').join('Carrot&nbsp;quest')
						createPage({
							path: tildaPath,
							component: './src/templates/Tilda.vue',
							context: {
								id: item.id,
								title: item.title,
								description: item.descr,
								cover: item.img,
								slug: item.alias,
								html: tp.execute(data.result.html),
								date: item.date
							}
						})
						console.log('Tilda - ' + item.title + ' - готова!')
					}).catch(function() {
						console.log('Ошибка в тильде: ' + item.id)
						await axios.get(
							'https://api.tildacdn.info/v1/getpage/?publickey=h6wlwdtglx70dzkz1fnn&secretkey=cz7a318b3jpkqm6nzz4l&pageid=' + item.id,
							// 'https://tilda.carrotquest.io/page_' + item.id + '.json'
						).then(function (data) {
							saveTilda('page_'+item.id , data)
						})
					})
				}
			}
		})
	})

	// API Wordpress - создаём Посты
	api.loadSource(async actions => {
		const { data } = await axios.get(
			'https://wp.carrotquest.io/blog/wp-json/wp/v2/posts?&per_page=9'
		)
		// Данные для вывода статей
		const collection = actions.addCollection('post')
		for (const item of data) {
			collection.addNode({
				id: item.id,
				slug: item.slug,
				title: tp.execute(item.title.rendered),
				meta: JSON.stringify(item.yoast_meta),
				date: item.date,
				modified: item.modified,
				categories: item.categories,
				authors: item.acf.post__authors,
				author: item.author,
				featured_media: renderURL(item.featured_media_medium),
				featured_media_large: item.featured_media_large[0],
				content: tp.execute(item.content.rendered),
				sticky: item.sticky,
				page_views: item.meta.wpb_post_views_count,
				tags: item.tags,
			})
		}
		// Делаем страницы статей
		api.createManagedPages(async ({ createPage }) => {
			for (const item of data) {
				pageContext = {
					id: item.id,
					slug: item.slug,

					//SEO
					breadcrumb: {
						title: '',
						url: ''
					},
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
					featured_media: item.featured_media_large,
					title: renderText(item.title.rendered),
					description: renderText(item.excerpt.rendered),
					content: renderText(item.content.rendered)
				}
				
				createPage({
					path: `/blog/${item.slug}/`,
					component: './src/templates/Post.vue',
					context: pageContext
				})
				// console.log('Пост - ' + item.id + ' - готов!')

				// Сило для Лид-бота
				if ( item.id == '26546' || item.id == '23996' || item.id == '25965' || item.id == '22648' || item.id == '24191' || item.id == '25798' || item.id == '24623' || item.id == '23719' || item.id == '24292' || item.id == '23543' || item.id == '25761' || item.id == '25194' || item.id == '22882' || item.id == '24730' ) {
					pageContext.breadcrumb.title = 'Лид-бот'
					pageContext.breadcrumb.url = '/chatbot/'
					createPage({
						path: `/chatbot/${item.slug}/`,
						component: './src/templates/Post.vue',
						context: pageContext,
					})
				}

				//Делаем AMP
				fs.readFile('./static/blog/' + item.slug + '/amp/modified.json', 'utf8', function(err, contents) {
					let ampModified = JSON.stringify({ date: '' })
					if (contents) {
						ampModified = JSON.parse(contents)
					}
					if (ampModified.date != item.modified ) {
						fs.mkdirSync('./static/blog/' + item.slug , { recursive: true })
						fs.mkdirSync('./static/blog/' + item.slug + '/amp/' , { recursive: true })
						axios.get('https://wp.carrotquest.io/blog/' + item.slug + '/amp/')
							.then(response => {
								fs.writeFile('./static/blog/' + item.slug + '/amp/index.html', renderText(response.data), 'utf8' , function (err) {
									if (err) return console.log(err)
								})
								fs.writeFile('./static/blog/' + item.slug + '/amp/modified.json', JSON.stringify({ date: item.modified }), 'utf8' , function (err) {
									if (err) return console.log(err)
								})
								// console.log('AMP - ' + item.id + ' - готов!')
							})
					}
				})
			}
		})
	})

	// API Wordpress - создаём Категории
	api.loadSource(async actions => {
		const { data } = await axios.get(
			'https://wp.carrotquest.io/blog/wp-json/wp/v2/categories?_fields=id,name,slug,description&per_page=50'
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
					path: `/blog/${item.slug}/`,
					component: './src/templates/Category.vue',
					context: {
						id: item.id,
						ids: [item.id],
						slug: item.slug,
						title: tp.execute(item.name),
						description: tp.execute(item.description)
					}
				})
				// console.log('Категория - ' + item.name + ' - готова!')
			}
		})
	})

	// API Wordpress - создаём Авторов
	api.loadSource(async actions => {
		const { data } = await axios.get(
			'https://wp.carrotquest.io/blog/wp-json/wp/v2/users?_fields=id,name,description,slug,avatar_urls&per_page=50'
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
				'https://wp.carrotquest.io/blog/wp-json/wp/v2/pages?_parent=28678'
			)
			for (const item of data) {
				let pageHTML = item.content.rendered

				if (item.parent == 28678) {
					createPage({
						path: `/blog/authors/${item.slug}/`,
						component: './src/templates/Author.vue',
						context: {
							id: item.acf.user.ID,
							title: tp.execute(item.title.rendered),
							modified: item.modified,
							featured_media: item.featured_media_large,
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
					// console.log('Автор - ' + item.title.rendered + ' - готов!')
				}
			}
		})
	})

	//Забираем sitemaps из блога, скрипты аналитики и пикселей
	api.loadSource(async actions => {
		let blogSitemaps = [
			'post-sitemap.xml',
			'page-sitemap.xml',
			'author-sitemap.xml'
		]
		blogSitemaps.forEach(async element => {
			const { data } = await axios.get('https://wp.carrotquest.io/blog/' + element)
			fs.writeFile('./static/blog/' + element, data.split('wp.carrotquest.io').join('www.carrotquest.io') , 'utf8' , function (err) {if (err) return console.log(err)})
		})
		let scripts = [
			{
				name: 'renta-analytics.js',
				url: 'https://cdn.renta.im/analytics/carrot_quest/analytics.js'
			},
			{
				name: 'yandex-metrika.js',
				url: 'https://mc.yandex.ru/metrika/tag.js'
			},
			{
				name: 'fbevents.js',
				url: 'https://connect.facebook.net/en_US/fbevents.js'
			},
			{
				name: 'openapi.js',
				url: 'https://vk.com/js/api/openapi.js?154'
			},
		]
		scripts.forEach(async element => {
			await axios.get(element.url).then(response => saveScript( element.name , response.data ))
		})
	})

  
	api.loadSource(({ addCollection }) => {
	// Use the Data Store API here: https://gridsome.org/docs/data-store-api/
	})

	api.createPages(({ createPage }) => {
	// Use the Pages API here: https://gridsome.org/docs/pages-api/
	})
}
