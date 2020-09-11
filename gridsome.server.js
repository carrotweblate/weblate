// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')

module.exports = function (api) {
	//API from Tilda Files
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

	//API from Tilda: Список страниц
	api.loadSource(async actions => {
		const { data } = await axios.get(
			'https://api.tildacdn.info/v1/getpageslist/?publickey=h6wlwdtglx70dzkz1fnn&secretkey=cz7a318b3jpkqm6nzz4l&projectid=62329'
		)
		const collection = actions.addCollection('Tilda')
		for (const item of data.result) {
			if (
				item.id == '2833995' || 
				item.id == '9970780'
			) {
				const { data } = await axios.get(
					'https://api.tildacdn.info/v1/getpage/?publickey=h6wlwdtglx70dzkz1fnn&secretkey=cz7a318b3jpkqm6nzz4l&pageid=' + item.id
				)
				collection.addNode({
					id: item.id,
					title: item.title,
					description: item.descr,
					cover: item.img,
					slug: item.alias,
					html: data.result.html
				})
			}
		}
	})
  
	api.loadSource(({ addCollection }) => {
	// Use the Data Store API here: https://gridsome.org/docs/data-store-api/
	})

	api.createPages(({ createPage }) => {
	// Use the Pages API here: https://gridsome.org/docs/pages-api/
	})
}
