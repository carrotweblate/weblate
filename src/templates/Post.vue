<template>
	<Layout :header="true" :footer="true" class="post">
		<b-container>

			<!-- Редактировать статью -->
			<b-row v-if="wpUser">
				<b-col class="mt-5">
					<b-button :href="'https://wp.carrotquest.io/blog/wp-admin/post.php?post=' + $context.id + '&action=edit'" variant="outline-primary" target="_blank">Редактировать статью</b-button>
				</b-col>
			</b-row>

			<!-- Хлебные крошки -->
			<b-row class="mt-3 mt-md-5 mb-md-5">
				<b-col md="8">
					<b-breadcrumb class="d-flex">
						<b-breadcrumb-item href="/">Главная</b-breadcrumb-item>
						<template v-if="$context.breadcrumb.title == ''">
							<b-breadcrumb-item href="/blog/" text="Блог" />
							<template v-for="{ node } in $page.allCategories.edges">
								<b-breadcrumb-item  v-if="$context.category[0] == node.id" :href="'/blog/' + node.slug + '/'" :text="node.title" :key="node.id" />
							</template>
						</template>
						<template v-else>
							<b-breadcrumb-item :href="$context.breadcrumb.url" :text="$context.breadcrumb.title" />
						</template>
					</b-breadcrumb>
				</b-col>
				<b-col md="4" class="amp text-md-right my-3 my-md-0">
					<a :href="'/blog/' + $context.slug + '/amp/'">
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clip-path="url(#clip0)">
							<path d="M10.0001 20C15.523 20 20.0002 15.5228 20.0002 9.99988C20.0002 4.47696 15.523 -0.000244141 10.0001 -0.000244141C4.47721 -0.000244141 0 4.47696 0 9.99988C0 15.5228 4.47721 20 10.0001 20Z" fill="#FF7C16"/>
							<path d="M10.7471 8.48866H13.1694C13.1694 8.48866 13.6807 8.48866 13.4173 9.06811L9.23416 16.0192H8.4595L9.19698 11.475L6.73742 11.4595C6.73742 11.4595 6.30051 11.286 6.63207 10.722L10.7393 3.92822H11.545L10.7471 8.48866Z" fill="white"/>
							</g>
							<defs>
							<clipPath id="clip0">
							<rect width="20" height="20" fill="white"/>
							</clipPath>
							</defs>
						</svg>
						AMP<span class="d-none d-md-inline"> страница</span>
					</a>
				</b-col>
			</b-row>
			
			<!-- Заголовок и описание -->
			<b-row>
				<b-col col xl="9">
					<h1 class="post__title" v-html="$context.title" />
					<div class="lightgrey-text my-4">
						<span class="mr-4 mr-md-5">Время чтения: {{ this.timeToRead }}</span>
						<span v-html="$context.date" />
					</div>
					<!-- <div class="post__description font24px" v-html="$context.description" /> -->
				</b-col>
			</b-row>
			
			<!-- Изображение записи -->
			<b-row v-if="$context.featured_media != '0'">
				<b-col col cols="12" class="post__image mt-4 mb-5">
					<img v-if="$context.featured_media[2] != 274 " :src="$context.featured_media[0].split('wp.carrotquest.io').join('www.carrotquest.io')" :width="$context.featured_media[1]" :height="$context.featured_media[2]" />
					<img v-else :src="$context.featured_media[0].split('wp.carrotquest.io').join('www.carrotquest.io')" :width="($context.featured_media[1] * 1.71875)" :height="( $context.featured_media[2] * 1.71875)" />
				</b-col>
			</b-row>

			<!-- Текст статьи -->
			<b-row>
				<b-col col xl="8" class="font20px post__text" v-html="$context.content" />
				<b-col col cols="4" class="post__info d-none d-xl-block">
					<div v-if="$context.contents" class="post__info__contents">
						Содержание:
						<div class="mt-4" v-html="$context.contents" />
					</div>
					<!-- Автор -->
					<template v-for="{ node } in $page.allAuthors.edges">
						<div v-if="$context.author == node.id" class="post__authors" :key="node.id">
							<img :src="node.avatar._96" width="80" height="80" :alt="node.name">
							<p>
								<b v-text="node.name" />
								<br>
								<span class="grey-text" v-text="node.description" />
							</p>
						</div>
					</template>
				</b-col>
			</b-row>

			<ClientOnly>
				<!-- Что еще читать по теме -->
				<b-row class="post__more">
					<b-col cols="12" class="h2 mb-5">
						Что еще читать по теме:
					</b-col>
					<PostCard v-for="{ node } in $page.allPost.edges" :key="node.id" :node="node" :categoryPage="false" />
				</b-row>
			
				<!-- Комментарии -->
				<b-row class="disqus">
					<b-col>
						<Disqus shortname="carrotquest" :identifier="$context.id + ' https://www.carrotquest.io/blog/?p=' + $context.id" lang="ru" />
					</b-col>
				</b-row>

			</ClientOnly>

		</b-container>

		<VideoRegistration />

		<!-- Прогрес бар чтения -->
		<ClientOnly>
			<read-progress color="#ff892a" height="2px" :shadow="false"></read-progress>
		</ClientOnly>

	</Layout>
</template>


<page-query>
	query post ($id: ID!) {
		post (id: $id) {
			id
		}
		allPost (limit: 10 , filter: {sticky: { eq: true }}) {
			edges {
				node {
					title
					slug
					categories
					featured_media
					sticky
				}
			}
			pageInfo {
				totalPages
				currentPage
			}
		}
		allCategories {
			edges {
				node {
					id
					title
					slug
				}
			}
		}
		allAuthors {
			edges {
				node {
					id
					name
					description
					avatar {
						_96
					}
				}
			}
		}
	}
</page-query>


<script>
	import Layout from '~/layouts/Blog.vue'
	
	import '~/assets/scss/post.scss'
	import { BBreadcrumb , BBreadcrumbItem } from 'bootstrap-vue'
	import VideoRegistration from '~/components/Ads/VideoRegistration.vue'
	import axios from 'axios'
	import { Disqus } from 'vue-disqus'
	import PostCard from '~/components/PostCard.vue'

	export default {
		components: {
			Layout,
			//Прогресс бар
			ReadProgress: () =>
				import("vue-read-progress")
					.then(m => m.default)
					.catch(),
			BBreadcrumb, BBreadcrumbItem,
			VideoRegistration,
			BannerSobirayte,
			Disqus,
			PostCard
		},
		//Делаем в HEAD
		metaInfo() {
			let postMeta = []
			let postLink = []
			let postJSON = this.$context.seo.json_ld[0]
			//Создаём META статьи
			for (let item in this.$context.seo.meta) {
				let seo = this.$context.seo.meta[item]
				if (!!seo.name) {
					postMeta.push(
						{
							key: seo.name,
							name: seo.name,
							content: seo.content.split('wp.carrotquest.io').join('www.carrotquest.io')
						}
					)
					if (seo.name=='twitter:data1') {
						this.timeToRead = seo.content
					}
				} else {
					postMeta.push(
						{
							key: seo.property,
							property: seo.property,
							content: seo.content.split('wp.carrotquest.io').join('www.carrotquest.io')
						}
					)
					if (seo.property=='og:url') {
						this.metaCanonical = seo.content.split('wp.carrotquest.io').join('www.carrotquest.io')
					}
				}
			}
			//Меняем урл в JSON
			function findAndReplace(object){
				for(var x in object){
					if(typeof object[x] == typeof {}){
						findAndReplace(object[x]);
					}
					if (typeof object[x] === 'string') {
						object[x] = object[x].split('wp.carrotquest.io').join('www.carrotquest.io')
					}
				}
			}
			findAndReplace(postJSON)
			//Ссылка на AMP страницу
			postLink.push(
				{
					rel: 'amphtml',
					href: 'https://www.carrotquest.io/blog/' + this.$context.slug + '/amp/'
				}
			)
			return {
				title: this.$context.seo.title,
				meta: postMeta,
				link: postLink,
				script: [{
					type: 'application/ld+json',
					json: postJSON
				}]
			}
		},
		data() {
			return {
				timeToRead: '',
				metaCanonical: '',
				wpUser: false
			}
		},
		async mounted() {
			// let routes = '' + location
			// let url = ''
			// if (routes.search('localhost') != -1) {
			// 	url = 'https://cors-anywhere.herokuapp.com/'
			// }
			// axios.get(url + 'https://www.carrotquest.io/blog/wp-json/wp/v2/posts/' + this.$context.id + '?_fields=modified')
			// 	.then(response => {
			// 		if (response.data.modified != this.$context.modified) {
			// 			url = url + 'https://www.carrotquest.io/blog/wp-json/wp/v2/posts/' + this.$context.id + '?_fields=content'
			// 			axios.get(url)
			// 				.then(response => {
			// 					var pageHTML = response.data.content.rendered
			// 					//CDN для ресурсов
			// 					pageHTML = pageHTML.split('http://').join('https://')
			// 					pageHTML = pageHTML.split('wp.carrotquest.io').join('www.carrotquest.io')
			// 					//Lazyload
			// 					pageHTML = pageHTML.split('<img src').join('<img loading="lazy" src')
			// 					//Видео
			// 					pageHTML = pageHTML.split('<video ').join('<video autoplay loop muted playsinline ')
			// 					pageHTML = pageHTML.split('controls').join('')
			// 					//Carrot quest
			// 					pageHTML = pageHTML.split('Carrot quest').join('Carrot&nbsp;quest')
			// 					this.$context.content = pageHTML
			// 				})
			// 				.catch(error => {
			// 					console.log(error)
			// 					this.errored = true
			// 				})
			// 			}
			// 		}
			// 	)
			this.searchLeadForms()
			this.$page.allPost.edges = this.$page.allPost.edges.sort(function (a, b) {return Math.random() - 0.5;}).slice(0, 3)
			this.wpLogined()
		},
		updated() {
			this.searchLeadForms()
		},
		methods: {
			wpLogined: function(e) {
				if (document.cookie.indexOf('wp-settings-') !== -1) {
					this.wpUser = true
				}
			},

			//Лидформы
			searchLeadForms: function(e) {
				//Ищем универсальные лидформы
				if ( document.querySelector('.lidform-universal-container') ) {
					document.querySelectorAll('.lidform-universal-container form').forEach(function(item) {
						item.addEventListener('submit', function(e) {
							e.preventDefault()

							//Переменные формы
							let event = item.dataset.event
							let site = 'нет'
							let email = ''
							let phone = ''

							//Определяем, скачивается ли файл
							if (event.indexOf('скач') + event.indexOf('Скач') + event.indexOf('в лид-форме') + event.indexOf('-лист') + 4) {
								carrotquest.track('Скачал лид-магнит')
							}

							if (!!item.querySelector('input[name="site"]')) {
								site = item.querySelector('input[name="site"]').value
							}
							if (!!item.querySelector('input[name="email"]')) {
								email = item.querySelector('input[name="email"]').value
								carrotquest.track(event, {
									'Email': email,
									'Сайт:': site
								})
								carrotquest.identify({
									'$email': email
								},{ 
									doubleSubscribe: true
								})
							}
							if (!!item.querySelector('input[name="phone"]')) {
								phone = item.querySelector('input[name="phone"]').value
								carrotquest.track(event, {
									'Телефон:': phone,
									'Сайт:': site
								})
								carrotquest.identify({
									'$phone': phone
								})
							}
							
							//Записался на демо или нет
							if (event == 'Запрос на консультацию') {
								carrotquest.track("Заполнил форму на демо", {
									'phone': phone,
									'type': 'form',
									'url': location.host + location.pathname
								})
								dataLayer.push({ event: 'UAevent', eventCategory: 'leads', eventAction: 'phone', eventLabel: location.host + location.pathname })
								fbq('trackCustom', 'get_demo', {page: location.pathname})
							} else {
								dataLayer.push({ event: 'UAevent', eventCategory: 'leads', eventAction: 'email', eventLabel: location.host + location.pathname })
								fbq('trackCustom', 'get_lead', {page: location.pathname})
							}
							
							item.classList = 'd-none'
							document.getElementById(item.id.replace('form-begin_' , 'form-done_')).classList = document.getElementById(item.id.replace('form-begin_' , 'form-done_')).classList + ' d-block'
						})
					})
				}

				//Ищем лидформы карт
				if ( document.querySelector('.download_map') ) {
					document.querySelectorAll('.download_map form').forEach(function(item) {
						item.addEventListener('submit', function(e) {
							e.preventDefault()

							//Переменные формы
							let event = item.dataset.event
							let file = item.dataset.file
							let email = ''

							if (!!item.querySelector('input[name="email"]')) {
								email = item.querySelector('input[name="email"]').value
							}
							carrotquest.track('Скачал лид-магнит')
							carrotquest.track(event, {
								'source' : 'Блог'
							})
							carrotquest.identify({
								'$email': email
							} , {
								doubleSubscribe: true
							})
							dataLayer.push({ event: 'UAevent', eventCategory: 'leads', eventAction: 'email', eventLabel: location.host + location.pathname })
							fbq('trackCustom', 'get_email', {page: location.pathname});
							window.open(file, '_blank')

							document.querySelector('.download_map .before').classList = 'd-none'
        					document.querySelector('.download_map .after').classList = 'd-block'
						})
					})
				}
			}
		}
	}	
</script>