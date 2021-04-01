<template>
	<Layout :header="true" :footer="true" >

		<!-- Страница из тильды -->
		<div class="page-tilda" v-html="$context.html" />

		<!-- Модалка с видосом -->
		<b-modal ref="open-modal-video" size="xl" hide-header hide-footer>
			<b-embed
				type="iframe"
				aspect="16by9"
				src="https://www.youtube.com/embed/RNOS-68LaSk?autoplay=1"
				allowfullscreen
			></b-embed>
		</b-modal>

	</Layout>
</template>




<script>
	import { BEmbed } 		from 'bootstrap-vue'

	export default {
		components: {
			BEmbed
		},
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

			// Ищем ссылки для открытия модалок на скачивание файлов
			if ( document.querySelector('a[href*="#open-modal-video"]') ) {
				document.querySelectorAll('a[href*="#open-modal-video"]').forEach(function(item) {
					item.addEventListener('click', function(e) {
						e.preventDefault()
						this.$refs['open-modal-video'].show()
					}.bind(this))
				}.bind(this))
			}
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
		.t-video-lazyload {
			height: 300px;
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