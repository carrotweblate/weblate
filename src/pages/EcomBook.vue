<template>
	<Layout>
		<ClientOnly>

			<!-- Прогрес бар чтения -->
			<read-progress color="#717171" height="2px" :shadow="false"></read-progress>

			<!-- Страница из тильды -->
			<div class="tilda" v-html="this.$page.allTildaPages.edges[0].node.html" />

		</ClientOnly>
	</Layout>
</template>

<style lang="scss">
	#t-header, #t-footer {
		display: none;
	}
	*, *::before, *::after {
		box-sizing: border-box !important;
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
		allTildaPages {
			edges {
				node {
					id
					title
					description
					cover
					alias
					html
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
				cssFiles: [],
			}
		},

		//Прогресс бар
		components: {
			ReadProgress: () =>
				import("vue-read-progress")
					.then(m => m.default)
					.catch()
		},

		//Делаем в HEAD
		metaInfo() {
			return {
				title: this.$page.allTildaPages.edges[0].node.title,
				meta: [
					{
						key: 'description',
						name: 'description',
						content: this.$page.allTildaPages.edges[0].node.description
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
					{ 
						src: 'https://code.jquery.com/jquery-1.12.4.min.js',
						integrity: 'sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=',
						crossorigin: 'anonymous'
					}, //jquery
					// { src: this.$page.allTildaFiles.edges[21].node.js }, //jquery
					{ src: this.$page.allTildaFiles.edges[20].node.js },
					{ src: this.$page.allTildaFiles.edges[19].node.js },
					{ src: this.$page.allTildaFiles.edges[18].node.js },
					{ src: this.$page.allTildaFiles.edges[17].node.js },
					{ src: this.$page.allTildaFiles.edges[16].node.js },
					{ src: this.$page.allTildaFiles.edges[15].node.js },
					{ src: this.$page.allTildaFiles.edges[14].node.js },
					{ src: this.$page.allTildaFiles.edges[13].node.js },
					{ src: this.$page.allTildaFiles.edges[12].node.js },
					{ src: this.$page.allTildaFiles.edges[11].node.js },
					{ src: this.$page.allTildaFiles.edges[10].node.js },
					//{ src: this.$page.allTildaFiles.edges[9].node.js }, //bootstrap
					//{ src: this.$page.allTildaFiles.edges[8].node.js }, //forms
					{ src: this.$page.allTildaFiles.edges[7].node.js },
					{ src: this.$page.allTildaFiles.edges[6].node.js },
					{ src: this.$page.allTildaFiles.edges[5].node.js },
					{ src: this.$page.allTildaFiles.edges[4].node.js },
					{ src: this.$page.allTildaFiles.edges[3].node.js },
					{ src: this.$page.allTildaFiles.edges[2].node.js },
					{ src: this.$page.allTildaFiles.edges[1].node.js },
					{ src: this.$page.allTildaFiles.edges[0].node.js }
				]
			}
		},

		mounted () {

			//Отмена отправки форм
			setTimeout(function(){
				document.querySelector('#form54773744').addEventListener('submit', event => {
					event.preventDefault()
					
					var email = document.querySelector('#form54773744 input[name="email"]').value
					carrotquest.track("клик - скачать книгу для ecommerce", {
						'Email': email
					});
					carrotquest.identify([
						{"op": "update_or_create", "key": "$email", "value": email}
					]);
					dataLayer.push({ event: 'UAevent', eventCategory: 'leads', eventAction: 'email', eventLabel: location.host + location.pathname })
					//fbq('trackCustom', 'get_demo', {page: location.pathname})

				})
			}, 0)

			//Плавное перемещение по ссылке
			setTimeout(function(){
				const anchors = document.querySelectorAll('.tilda a[href="#"]')
				for (let anchor of anchors) {
					anchor.addEventListener("click", function(e) {
						e.preventDefault()

						const blockID = anchor.getAttribute("href")
						document.querySelector(blockID).scrollIntoView({
							behavior: "smooth",
							block: "center"
						})

						return false
					})
				}
			}, 0)
		}
	}
</script>