<template>
	<Layout>
		<!-- Страница из тильды -->
		<div class="tilda" v-html="$page.tilda.html" />
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
	query tilda ($id: ID!) {
		tilda(id: $id) {
			title
			description
			cover
			slug
			html
		}
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
	export default {
		data() {
			return {
				cssFiles: [],
			}
		},

		//Делаем в HEAD
		metaInfo() {
			return {
				title: this.$page.tilda.title,
				meta: [
					{
						key: 'description',
						name: 'description',
						content: this.$page.tilda.description
					}
				],
				script: [
					{ src: this.$page.allTildaFiles.edges[0].node.js }
				]
			}
		},

		mounted () {

			//Подгружаем стили и скрипты тильды
			for ( var value of this.$page.allTildaFiles.edges.reverse() ) {
				if (value.node.css) {
					let tildaCss = document.createElement("link")
					tildaCss.setAttribute('rel', 'stylesheet')
					tildaCss.setAttribute('href', value.node.css)
					document.head.appendChild(tildaCss)
				} else {
					if ( value.node.js != this.$page.allTildaFiles.edges[0].node.js ) {
						let tildaScript = document.createElement("script")
						tildaScript.setAttribute('src', value.node.js)
						document.head.appendChild(tildaScript)
					}
				}
			}

			//Отмена отправки форм
			// setTimeout(function(){
			// 	document.querySelector('#form54773744').addEventListener('submit', event => {
			// 		event.preventDefault()
					
			// 		var email = document.querySelector('#form54773744 input[name="email"]').value
			// 		carrotquest.track("клик - скачать книгу для ecommerce", {
			// 			'Email': email
			// 		});
			// 		carrotquest.identify([
			// 			{"op": "update_or_create", "key": "$email", "value": email}
			// 		]);
			// 		dataLayer.push({ event: 'UAevent', eventCategory: 'leads', eventAction: 'email', eventLabel: location.host + location.pathname })
			// 		//fbq('trackCustom', 'get_demo', {page: location.pathname})

			// 	})
			// }, 0)

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