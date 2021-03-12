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
			}
		})
	})

	// API Wordpress - создаём Посты
	api.loadSource(async actions => {
		const { data } = await axios.get(
			'https://www.carrotquest.io/blog/wp-json/wp/v2/posts?&per_page=1'
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
				featured_media: item.featured_media_medium,
				featured_media_large: item.featured_media_large,
				content: tp.execute(item.content.rendered),
				sticky: item.sticky,
				page_views: item.meta.wpb_post_views_count,
			})
		}
		// Делаем страницы статей
		fs.rmdirSync( './static/blogtest/', { recursive: true }) //Удаляем старый AMP
		fs.mkdirSync('./static/blogtest/') //Создаём новый AMP
		api.createManagedPages(async ({ createPage }) => {
			for (const item of data) {
				let pageHTML = item.content.rendered
				let featured_media_large = item.featured_media_large
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

				//Делаем AMP
				pageHTML = item.content.rendered
				pageHTML = pageHTML.split('https://www.carrotquest.io/blog/wp-content/uploads/').join('https://cdn-www.carrotquest.io/blog/wp-content/uploads/')
				pageHTML = pageHTML.split('<video').join('<amp-video')
				pageHTML = pageHTML.split('<img').join('<amp-img')
				const html = `
					<!doctype html>
						<html ⚡ lang="ru">
						<head>
							<meta charset="utf-8">
							<meta name="viewport" content="width=device-width">
							<meta name="description" content="This is the AMP Boilerplate.">
							<link rel="preload" as="script" href="https://cdn.ampproject.org/v0.js">
							<link rel="canonical" href=https://www.carrotquest.io/blog/`+item.slug+`/>
							<script async src="https://cdn.ampproject.org/v0.js"></script>
							<!-- Import other AMP Extensions here -->
							<script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script>
							<script async custom-element="amp-video" src="https://cdn.ampproject.org/v0/amp-video-0.1.js"></script>
							<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
							<style amp-custom> .wp-block-image { margin-bottom: 1em } .wp-block-image amp-img { max-width: 100% } .wp-block-image:not(.is-style-rounded) amp-img { border-radius: inherit } .wp-block-image.aligncenter { text-align: center } .wp-block-image .aligncenter { display: table } .wp-block-image .aligncenter>figcaption { display: table-caption; caption-side: bottom } .wp-block-image .aligncenter { margin-left: auto; margin-right: auto } .wp-block-image figcaption { margin-top: .5em; margin-bottom: 1em } p:empty:before { content: "​" } .wp-block-video { margin-left: 0; margin-right: 0 } .wp-block-video amp-video { width: 100% } .wp-block-video.aligncenter { text-align: center } .wp-block-video figcaption { margin-top: .5em; margin-bottom: 1em } .has-text-align-center { text-align: center } .aligncenter { clear: both } .wp-block-image figcaption { color: #555; font-size: 13px; text-align: center } .wp-block-video figcaption { color: #555; font-size: 13px; text-align: center } amp-img.amp-wp-enforced-sizes[layout="intrinsic"]>img { object-fit: contain } .alignnone, .aligncenter { margin-top: 1em; margin-right: auto; margin-bottom: 1em; margin-left: auto } .aligncenter { display: block; text-align: center; margin-left: auto; margin-right: auto } .amp-wp-enforced-sizes { max-width: 100%; margin: 0 auto } html { background: #fff } body { background: #fff; color: #353535; font-family: "Open Sans", sans-serif; font-weight: 300; line-height: 1.75em } p, ol, ul, figure { margin: 0 0 1em; padding: 0 } a { color: #FF7C16; } a, a:visited { color: #FF7C16 } a:hover, a:active, a:focus { color: #353535 } .amp-wp-header { background-color: #fff; border-bottom: 1px solid #f3f3f3; margin-bottom: 0.5rem; } .amp-wp-header div { font-size: 1em; font-weight: 400; margin: 0 auto; max-width: calc(840px - 32px); padding: .875em 16px; position: relative } .amp-wp-header a { font-size: 24px; text-decoration: none } .amp-wp-header .amp-wp-site-icon { background-color: #fff; border: 1px solid #fff; border-radius: 50%; position: absolute; right: 18px; top: 10px } .amp-wp-article { color: #353535; font-weight: 400; margin: 1.5em auto; max-width: 840px; overflow-wrap: break-word; word-wrap: break-word } .amp-wp-article-header { align-items: center; align-content: stretch; display: flex; flex-wrap: wrap; justify-content: space-between; margin: 1.5em 16px 0 } .amp-wp-title { color: #353535; display: block; flex: 1 0 100%; font-weight: 900; margin: 0.5rem 0 .625em; width: 100% } .amp-wp-meta { color: #696969; display: inline-block; flex: 2 1 50%; font-size: .875em; line-height: 1.5em; margin: 0 0 1.5em; padding: 0 } .amp-wp-article-header .amp-wp-meta:last-of-type { text-align: right } .amp-wp-article-header .amp-wp-meta:first-of-type { text-align: left } .amp-wp-byline amp-img { display: inline-block; vertical-align: middle } .amp-wp-byline amp-img { border: 1px solid #0a89c0; border-radius: 50%; position: relative; margin-right: 6px } .amp-wp-posted-on { text-align: right } .amp-wp-article-featured-image { margin: 0 0 1em } .amp-wp-article-featured-image amp-img { margin: 0 auto } .amp-wp-article-content { margin: 0 16px } .amp-wp-article-content ul, .amp-wp-article-content ol { margin-left: 1em } .amp-wp-article-content .wp-caption { max-width: 100% } .amp-wp-article-content amp-img { margin: 0 auto } .wp-caption { padding: 0 } .amp-wp-article-footer .amp-wp-meta { display: block } .amp-wp-tax-category, .amp-wp-tax-tag { color: #696969; font-size: .875em; line-height: 1.5em; margin: 1.5em 16px } .amp-wp-comments-link { color: #696969; font-size: .875em; line-height: 1.5em; text-align: center; margin: 2.25em 0 1.5em } .amp-wp-comments-link a { border-style: solid; border-color: #c2c2c2; border-width: 1px 1px 2px; border-radius: 4px; background-color: transparent; color: #0a89c0; cursor: pointer; display: block; font-size: 14px; font-weight: 600; line-height: 18px; margin: 0 auto; max-width: 200px; padding: 11px 16px; text-decoration: none; width: 50%; -webkit-transition: background-color .2s ease; transition: background-color .2s ease } .amp-wp-footer { border-top: 1px solid #c2c2c2; margin: calc(1.5em - 1px) 0 0 } .amp-wp-footer div { margin: 0 auto; max-width: calc(840px - 32px); padding: 1.25em 16px 1.25em; position: relative } .amp-wp-footer h2 { font-size: 1em; line-height: 1.375em; margin: 0 0 .5em } .amp-wp-footer p { color: #696969; font-size: .8em; line-height: 1.5em; margin: 0 85px 0 0 } .amp-wp-footer a { text-decoration: none } .lidform-universal-container { display: none; } video, img {max-width: 100%;} </style>
							<title>` + item.yoast_title + `</title>
						</head>
						<body>
							<header id="top" class="amp-wp-header">
								<div>
									<a href="/blogtest/">
										<span class="amp-site-title">
											Блог Carrot quest
										</span>
									</a>
								</div>
							</header>
							<article class="amp-wp-article">
								<div class="amp-wp-article-header">
									<a href=/blogtest/`+item.slug+`/>Полная версия страницы</a>
									<h1 class="amp-wp-title">` + item.title.rendered + `</h1>
									<amp-img src="` + featured_media_large + `" alt="` + item.title.rendered + `" />
								</div>
								<div class="amp-wp-article-content">
									` + pageHTML + `
								</div>
							</article>
							<amp-analytics type="gtag" data-credentials="include"><script type="application/json">{"vars" : {"gtag_id": "G-QWX1N5X5XL","config" : {"G-QWX1N5X5XL": {"groups": "default"}}}}</script></amp-analytics>
						</body>
					</html>
				`

				fs.mkdirSync('./static/blogtest/' + item.slug)
				fs.mkdirSync('./static/blogtest/' + item.slug + '/amp/')
				fs.writeFile('./static/blogtest/' + item.slug + '/amp/index.html', html, 'utf8' , function (err) {
					if (err) return console.log(err)
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
			}
		})
	})

	// API Wordpress - создаём Авторов
	api.loadSource(async actions => {
		const { data } = await axios.get(
			'https://www.carrotquest.io/blog/wp-json/wp/v2/users?_fields=id,name,description,slug,avatar_urls&per_page=50'
		)
		// Данные для вывода категорий
		const collection = actions.addCollection('authors')
		for (const item of data) {
			collection.addNode({
				id: item.id,
				name: tp.execute(item.name),
				description: tp.execute(item.description),
				avatar: item.avatar_urls
			})
			
		}
		// // Делаем страницы авторов
		// api.createManagedPages(async ({ createPage }) => {
		// 	for (const item of data) {
		// 		createPage({
		// 			path: `/blogtest/authors/${item.slug}/`,
		// 			component: './src/templates/Author.vue',
		// 			context: {
		// 				id: item.id,
		// 			}
		// 		})
		// 	}
		// })
	})
  
	api.loadSource(({ addCollection }) => {
	// Use the Data Store API here: https://gridsome.org/docs/data-store-api/
	})

	api.createPages(({ createPage }) => {
	// Use the Pages API here: https://gridsome.org/docs/pages-api/
	})
}
