<template>
	<Layout>

		<div class="tilda" v-html="html" />

	</Layout>
</template>

<style lang="scss">
	#t-header, #t-footer {
		display: none;
	}	
	.container, .container-fluid, .container-sm, .container-md, .container-lg, .container-xl {
		width: 100%;
		padding-right: 20px;
		padding-left: 20px;
		margin-right: auto;
		margin-left: auto;
	}
</style>

<page-query>
	query {
		allTildaFiles {
			edges {
				node {
					css
					js
				}
			}
		}
	}
</page-query>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {
				pageId: '2833995',  //ID страницы в Тильде
				html: null,
				metaTitle: null,
				metaDescription: null,
				cssFiles: [],
			}
		},

		//Делаем в HEAD
		metaInfo() {
			return {
				title: this.metaTitle,
				meta: [
					{
						key: 'description',
						name: 'description',
						content: this.metaDescription
					}
				],
				link: [
					{ href: this.$page.allTildaFiles.edges[22].node.css, rel: 'stylesheet'},
					{ href: this.$page.allTildaFiles.edges[23].node.css, rel: 'stylesheet'},
					{ href: this.$page.allTildaFiles.edges[24].node.css, rel: 'stylesheet'},
					{ href: this.$page.allTildaFiles.edges[25].node.css, rel: 'stylesheet'},
					{ href: this.$page.allTildaFiles.edges[26].node.css, rel: 'stylesheet'},
					{ href: this.$page.allTildaFiles.edges[27].node.css, rel: 'stylesheet'},
					{ href: this.$page.allTildaFiles.edges[28].node.css, rel: 'stylesheet'},
					{ href: this.$page.allTildaFiles.edges[29].node.css, rel: 'stylesheet'},
					{ href: this.$page.allTildaFiles.edges[30].node.css, rel: 'stylesheet'},
					{ href: this.$page.allTildaFiles.edges[31].node.css, rel: 'stylesheet'},
					{ href: this.$page.allTildaFiles.edges[32].node.css, rel: 'stylesheet'}
				],
				script: [
					{ src: this.$page.allTildaFiles.edges[21].node.js }, //jquery
					{ src: this.$page.allTildaFiles.edges[0].node.js },
					{ src: this.$page.allTildaFiles.edges[1].node.js },
					{ src: this.$page.allTildaFiles.edges[2].node.js },
					{ src: this.$page.allTildaFiles.edges[3].node.js },
					{ src: this.$page.allTildaFiles.edges[4].node.js },
					{ src: this.$page.allTildaFiles.edges[5].node.js },
					{ src: this.$page.allTildaFiles.edges[6].node.js },
					{ src: this.$page.allTildaFiles.edges[7].node.js },
					{ src: this.$page.allTildaFiles.edges[8].node.js },
					//{ src: this.$page.allTildaFiles.edges[9].node.js }, //bootstrap
					{ src: this.$page.allTildaFiles.edges[10].node.js },
					{ src: this.$page.allTildaFiles.edges[11].node.js },
					{ src: this.$page.allTildaFiles.edges[12].node.js },
					{ src: this.$page.allTildaFiles.edges[13].node.js },
					{ src: this.$page.allTildaFiles.edges[14].node.js },
					{ src: this.$page.allTildaFiles.edges[15].node.js },
					{ src: this.$page.allTildaFiles.edges[16].node.js },
					{ src: this.$page.allTildaFiles.edges[17].node.js },
					{ src: this.$page.allTildaFiles.edges[18].node.js },
					{ src: this.$page.allTildaFiles.edges[19].node.js },
					{ src: this.$page.allTildaFiles.edges[20].node.js },
				]
			}
		},

		//Берём данные страницы по API Tilda
		async mounted () {
			try {
				const results = await axios.get(
					'https://api.tildacdn.info/v1/getpage/?publickey=h6wlwdtglx70dzkz1fnn&secretkey=cz7a318b3jpkqm6nzz4l&pageid=' + this.pageId
				)
				this.html = results.data.result.html
				this.metaTitle = results.data.result.title
				this.metaDescription = results.data.result.descr

				

				console.log(this.$page.allTildaFiles.edges)
			} catch (error) {
				console.log(error)
			}
		}

	}
</script>