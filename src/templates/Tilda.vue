<template>
	<Layout>

		<!-- Страница из тильды -->
		<div class="page-tilda" v-html="$context.html" />

	</Layout>
</template>




<script>
	export default {
		//Делаем в HEAD
		metaInfo() {
			return {
				title: this.$context.title,
				meta: [
					{
						key: 'description',
						name: 'description',
						content: this.$context.description
					},
					{
						key: 'og:url',
						property: "og:url",
						content: 'https://www.carrotquest.io/' + this.$context.slug
					},
					{
						key: "og:title",
						property: "og:title",
						content: this.$context.title
					},
					{
						key: "og:description",
						property: "og:description",
						content: this.$context.description
					},
					{	
						key: "og:image",
						property: "og:image",
						content: this.$context.cover
					},
				],
				link: [
					{
						key: "canonical",
						rel: 'canonical',
						href: 'https://www.carrotquest.io/' + this.$context.slug
					}
				]
			}
		},
		beforeMount () {
			//Подгружаем стили и скрипты тильды
			for ( var value of this.$page.allTildaFiles.edges.reverse() ) {
				if ( ( value.node.js ) && (value.node.js.indexOf('jquery-1.10.2.min.js') >= 0) ) {
					let tildaScript = document.createElement("script")
					tildaScript.src = value.node.js
					tildaScript.setAttribute('rel' , 'preload')
					document.head.appendChild(tildaScript)
				}
			}
		},
		mounted() {
			//Подгружаем стили и скрипты тильды
			for ( var value of this.$page.allTildaFiles.edges.reverse() ) {
				if (value.node.css) {
					let tildaCss = document.createElement("link")
					tildaCss.setAttribute('rel', 'stylesheet')
					tildaCss.setAttribute('href', value.node.css)
					document.head.appendChild(tildaCss)
				} else {
					if ( value.node.js ) {
						let tildaScript = document.createElement("script")
						tildaScript.src = value.node.js
						if (tildaScript.src.indexOf('jquery-1.10.2.min.js') < 0) {
							tildaScript.setAttribute('defer' , '')
						}
						document.head.appendChild(tildaScript)
					}
				}
			}

			//Копируем массив тильды для удаления
			this.tilda = this.$page.allTildaFiles.edges
		},
		beforeDestroy () {
			//Удаляем стили и скрипты тильды
			for ( var value of this.tilda ) {
				if (value.node.css) {
					let tildaCss = document.querySelector('link[href*="' + value.node.css + '"]')
					document.head.removeChild(tildaCss)
				} else {
					let tildaScript = document.querySelector('script[src*="' + value.node.js + '"]')
					document.head.removeChild(tildaScript)
				}
			}
		}
	}
</script>



<style lang="scss">
	.page-tilda {
		overflow: hidden;
		#t-header, #t-footer {
			display: none;
		}
	}
	* , :before , :after {
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
	}
</page-query>