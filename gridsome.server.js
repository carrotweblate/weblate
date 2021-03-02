// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')

module.exports = function (api) {
	// API from Tilda Files
	api.loadSource(async actions => {
		const { data } = await axios.get(
			'https://api.tildacdn.info/v1/getproject/?publickey=h6wlwdtglx70dzkz1fnn&secretkey=cz7a318b3jpkqm6nzz4l&projectid=62329'
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
			'https://api.tildacdn.info/v1/getpageslist/?publickey=h6wlwdtglx70dzkz1fnn&secretkey=cz7a318b3jpkqm6nzz4l&projectid=62329'
		)
		const collection = actions.addCollection('Tilda')
		api.createManagedPages(async ({ createPage }) => {
			for (const item of data.result) {
				if ( 
					( item.id != '312699' ) && ( item.id == '12011344' || item.id == '17091896' || item.id == '11937240' || item.id == '16075876' || item.id == '16080876' || item.id == '16083784' || item.id == '2833995' || item.id == '16218892' || item.id == '11880600' || item.id == '10518279' || item.id == '10714391' || item.id == '10714999' || item.id == '10715060' || item.id == '15337194'
					//Интеграции
					|| item.id == '9970780' || item.id == '11191195' || item.id == '11193030' || item.id == '11193800' || item.id == '11195611' || item.id == '11431149' || item.id == '11431453' || item.id == '11431738' || item.id == '11007077' || item.id == '11183247' || item.id == '11183537' || item.id == '11194593' || item.id == '11195339' || item.id == '11430916' || item.id == '11432052' || item.id == '11432895' || item.id == '11433520' || item.id == '13669305' || item.id == '13670106' || item.id == '13670549' || item.id == '13670751' || item.id == '3785072' || item.id == '3195986'
					//Вебинары
					|| item.id == '17071238' || item.id == '17091896'
				) ) {
				// if ( item.id != '312699' || item.id == '1048214' || item.id == '2883968' || item.id == '11437990' ) {
				// if ( item.id == '16083784') {
					const { data } = await axios.get(
						'https://api.tildacdn.info/v1/getpage/?publickey=h6wlwdtglx70dzkz1fnn&secretkey=cz7a318b3jpkqm6nzz4l&pageid=' + item.id
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
  
	api.loadSource(({ addCollection }) => {
	// Use the Data Store API here: https://gridsome.org/docs/data-store-api/
	})

	api.createPages(({ createPage }) => {
	// Use the Pages API here: https://gridsome.org/docs/pages-api/
	})
}
