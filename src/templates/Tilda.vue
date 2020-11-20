<template>
	<Layout>

		<!-- Страница из тильды -->
		<div class="tilda" v-html="$context.html" />

	</Layout>
</template>

<style lang="scss">
	.tilda {
		overflow: hidden;
		#t-header, #t-footer {
			display: none;
		}
	}
	* , *::before , *::after {
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
				title: this.$context.title,
				meta: [
					{
						key: 'description',
						name: 'description',
						content: this.$context.description
					}
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
					if ( value.node.js ) {
						let tildaScript = document.createElement("script")
						tildaScript.src = value.node.js
						tildaScript.setAttribute('defer' , '')
						document.head.appendChild(tildaScript)
					}
				}
			}
		}
	}
</script>