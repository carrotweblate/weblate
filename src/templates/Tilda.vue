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
			let tildaLink = [{
				rel: 'canonical', href: 'https://www.carrotquest.io/' + this.$context.slug
			}]
			let tildaScripts = []
			for ( var file of this.$context.files.css ) {
				tildaLink.push({ rel: 'stylesheet' , href: file })
			}
			for ( var file of this.$context.files.js ) {
				if (file === 'https://static.tildacdn.com/js/jquery-1.10.2.min.js') {
					tildaScripts.push({ src: 'https://code.jquery.com/jquery-1.12.4.min.js' , async: 'false' })
				} else {
					tildaScripts.push({ src: file , async: 'false' })
				}
				
			}
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
				link: tildaLink,
				script: tildaScripts
			}
		},
		mounted() {
			// Ищем ссылки для открытия видео
			if ( document.querySelector('a[href*="#open-modal-video"]') ) {
				document.querySelectorAll('a[href*="#open-modal-video"]').forEach(function(item) {
					item.addEventListener('click', function(e) {
						e.preventDefault()
						this.$refs['open-modal-video'].show()
					}.bind(this))
				}.bind(this))
			}
			if (localStorage.getItem('reloaded')) {
				localStorage.removeItem('reloaded');
			} else {
				window.addEventListener("load", function(event) {
					localStorage.setItem('reloaded', '1');
					location.reload();
				});
			}
		},
		updated() {
			if (localStorage.getItem('reloaded')) {
				localStorage.removeItem('reloaded');
			} else {
				localStorage.setItem('reloaded', '1');
				location.reload();
			}
		},
	}
</script>



<style lang="scss">
	.page-tilda {
		overflow: hidden;
		*, :after, :before {
			box-sizing: content-box !important;
		}
		#t-header, #t-footer {
			display: none;
		}
		.t-video-lazyload {
			height: 300px;
		}
		.t-col_8 .t-video-lazyload {
			height: 430px;
			@media (max-width: 991.98px) {
				height: 350px;
			}
			@media (max-width: 575.98px) {
				height: 235px;
			}
		}
	}
	header , footer , .modal-dialog {
		* , :before , :after {
			box-sizing: border-box !important;
		}
	}
</style>