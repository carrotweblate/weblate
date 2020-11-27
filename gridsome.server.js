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

	// //API from Tilda: Список страниц
	// api.loadSource(async actions => {
	// 	const { data } = await axios.get(
	// 		'https://api.tildacdn.info/v1/getpageslist/?publickey=h6wlwdtglx70dzkz1fnn&secretkey=cz7a318b3jpkqm6nzz4l&projectid=62329'
	// 	)
	// 	const collection = actions.addCollection('Tilda')
	// 	api.createManagedPages(async ({ createPage }) => {
	// 		for (const item of data.result) {
	// 			if ( ( item.id != '312699' ) && ( item.id == '11937240' ) ) {
	// 			// if ( item.id != '312699' ) {
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

	//API from Wordpress: Список постов
	api.createPages(async ({ graphql, createPage }) =>{
		// Use the Pages API here: https://gridsome.org/docs/pages-api
		const { data } = await graphql(`
			query {
				posts{
					nodes{
						id
						slug
						categories {
							nodes {
								name
								slug
							}
						}
						title
						metacontent {
							author
							contents
							description
							time
							related {
								article1Pic {
									mediaDetails {
									  	sizes {
											sourceUrl
										}
									}
								}
								article1Category
								article1Title
								article1Url
								article2Pic {
									mediaDetails {
										sizes {
											sourceUrl
										}
									}
								  }
								article2Category
								article2Title
								article2Url
								article3Category
								article3Title
								article3Url
								article3Pic {
								  mediaDetails {
										sizes {
											sourceUrl
										}
								  	}
								}
							}
						}
						featuredImage { node { mediaDetails { sizes { sourceUrl } } } }
						content
						seo {
							metaDesc
							title
						}
					}
				}
			}
		`)
		data.posts.nodes.forEach(function(node, index){
			var pageHTML = node.content;
			//CDN для ресурсов
			pageHTML = pageHTML.split('https://www.carrotquest.io/blog/wp-content/uploads/').join('https://cdn-www.carrotquest.io/blog/wp-content/uploads/')
			//Lazyload
			pageHTML = pageHTML.split('<img src').join('<img loading="lazy" src')
			//PRE
			pageHTML = pageHTML.split('<code><').join('<code>&lt;')
			pageHTML = pageHTML.split('></code>').join('&gt;</code>')
			//Carrot quest
			pageHTML = pageHTML.split('Carrot quest').join('Carrot&nbsp;quest')
			
			createPage({
				path: `/blog/${node.slug}-2`,
				component: './src/templates/Post.vue',
				context: {
					id: node.id,
					slug: node.slug,
					category: node.categories.nodes[0].name,
					time: node.metacontent.time,
					cslug: '/blog/' + node.categories.nodes[0].slug + '/', 
					featuredImage: node.featuredImage.node.mediaDetails.sizes[1].sourceUrl,

					title: node.title,
					description: node.metacontent.description,
					contents: node.metacontent.contents,
					author: node.metacontent.author,
					content: pageHTML,

					seo: {
						title: node.seo.title,
						description: node.seo.metaDesc,
					},

					more: [
						{ 
							url: node.metacontent.related.article1Url,
							pic: 'background-image: url(' + node.metacontent.related.article1Pic.mediaDetails.sizes[0].sourceUrl + ')',
							category: node.metacontent.related.article1Category,
							title: node.metacontent.related.article1Title
						},
						{
							url: node.metacontent.related.article2Url,
							pic: 'background-image: url(' + node.metacontent.related.article2Pic.mediaDetails.sizes[0].sourceUrl + ')',
							category: node.metacontent.related.article2Category,
							title: node.metacontent.related.article2Title
						},
						{
							url: node.metacontent.related.article3Url,
							pic: 'background-image: url(' + node.metacontent.related.article3Pic.mediaDetails.sizes[0].sourceUrl + ')',
							category: node.metacontent.related.article3Category,
							title: node.metacontent.related.article3Title
						},
					]
				}
			})
		})
	})
  
	api.loadSource(({ addCollection }) => {
	// Use the Data Store API here: https://gridsome.org/docs/data-store-api/
	})

	api.createPages(({ createPage }) => {
	// Use the Pages API here: https://gridsome.org/docs/pages-api/
	})
}
