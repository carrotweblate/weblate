<template>
	<Layout :header="true" :footer="true"  class="post">
		<b-container>

			<!-- Хлебные крошки -->
			<b-row>
				<b-col>
					<b-breadcrumb class="font20px d-none d-md-flex">
						<b-breadcrumb-item href="/">Главная</b-breadcrumb-item>
						<b-breadcrumb-item href="/blogtest/">Блог</b-breadcrumb-item>
						<template v-for="{ node } in $page.allCategories.edges">
							<b-breadcrumb-item  v-if="$context.category[0] == node.id" :href="'/blogtest/' + node.slug + '/'" :text="node.title" :key="node.id" />
						</template>
					</b-breadcrumb>
				</b-col>
			</b-row>

			<!-- Заголовок и описание -->
			<b-row>
				<b-col col xl="9">
					<h1 class="post__title" v-html="$context.title" />
					<div class="font20px lightgrey-text my-4">
						<span class="mr-5">Время чтения: {{ Math.ceil($context.content.length/1500) }} мин.</span>
						<span v-html="$context.date" />
					</div>
					<!-- <div class="post__description font24px" v-html="$context.description" /> -->
				</b-col>
			</b-row>

			<!-- Изображение записи -->
			<b-row>
				<b-col col cols="12" class="post__image mt-4 mb-5">
					<img :src="$context.featured_media" />
				</b-col>
			</b-row>

			<!-- Текст статьи -->
			<b-row class="mb-5">
				<b-col col xl="8" class="font20px post__text" v-html="$context.content" />
				<b-col col cols="4" class="post__info d-none d-xl-block">
					<div v-if="$context.contents" class="post__info__contents">
						Содержание:
						<div class="mt-4" v-html="$context.contents" />
					</div>
					<!-- Автор -->
					<template v-for="{ node } in $page.allAuthors.edges">
						<div v-if="$context.author == node.id" class="post__authors" :key="node.id">
							<img :src="node.avatar._96" alt="">
							<p>
								<b v-text="node.name" />
								<br>
								<span class="grey-text" v-text="node.description" />
							</p>
						</div>
					</template>
				</b-col>
			</b-row>

			<Disqus shortname="carrotquest" :identifier="$context.id + ' https://www.carrotquest.io/blog/?p=' + $context.id" lang="ru" />

			<BannerSobirayte />

			<!-- <b-row class="post__more">
				<b-col cols="12" class="h2 mb-5">
					Что еще читать по теме:
				</b-col>
				<template v-for="( item , index ) in $context.more">

					<b-col cols="12" lg="6" xl="4" :key="index" class="mb-5">
						<a :href="item.url" class="post__more__box" :style="item.pic"></a>
						<span v-text="item.category" class="font12px lightgrey-text mt-4 mb-3"/>
						<a :href="item.url" class="h4">
							{{ item.title }}
						</a>
					</b-col>
					
				</template>
			</b-row> -->

		</b-container>

		<VideoRegistration />

	</Layout>
</template>


<page-query>
	query post {
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
	import '~/assets/scss/post.scss'
	import VideoRegistration from '~/components/VideoRegistration.vue'
	import BannerSobirayte from '~/components/BannerSobirayte/BannerSobirayte.vue'
	import axios from 'axios'
	import Typograf from 'typograf'
	import { Disqus } from 'vue-disqus'

	export default {
		components: {
			VideoRegistration,
			BannerSobirayte,
			Disqus
		},
		//Делаем в HEAD
		metaInfo() {
			return {
				title: this.$context.seo.title,
				meta: [
					{
						key: 'description',
						name: 'description',
						content: this.$context.seo.description
					},
					{
						key: 'og:url',
						property: 'og:url',
						content: 'https://www.carrotquest.io/' + this.$context.slug + '/'
					},
					{
						key: 'og:title',
						property: 'og:title',
						content: this.$context.seo.title
					},
					{
						key: 'og:description',
						property: 'og:description',
						content: this.$context.seo.description
					},
					{	
						key: 'og:image',
						property: 'og:image',
						content: this.$context.seo.cover
					},
				],
				link: [
					{
						key: 'canonical',
						rel: 'canonical',
						href: 'https://www.carrotquest.io/' + this.$context.slug + '/'
					}
				]
			}
		},
		async mounted () {
			//Типограф
			const tp = new Typograf({locale: ['ru', 'en-US']});
			tp.enableRule('common/nbsp/*');
			this.$context.title = tp.execute(this.$context.title)
			this.$context.content = tp.execute(this.$context.content)

			try {
				let routes = '' + location
				let url = ''
				if (routes.search('localhost') != -1) {
					url = 'https://cors-anywhere.herokuapp.com/'
				}
				url = url + 'https://www.carrotquest.io/blog/wp-json/wp/v2/posts/' + this.$context.id + '?_fields=content'
				const results = await axios.get( url ).then(function() {
						var pageHTML = results.data.content.rendered
						//CDN для ресурсов
						pageHTML = pageHTML.split('http://').join('https://')
						pageHTML = pageHTML.split('https://www.carrotquest.io/blog/wp-content/uploads/').join('https://cdn-www.carrotquest.io/blog/wp-content/uploads/')
						//Lazyload
						pageHTML = pageHTML.split('<img src').join('<img loading="lazy" src')
						//PRE
						// pageHTML = pageHTML.split('<code><').join('<code>&lt;')
						// pageHTML = pageHTML.split('></code>').join('&gt;</code>')
						//Видео
						pageHTML = pageHTML.split('<video ').join('<video autoplay loop muted playsinline ')
						pageHTML = pageHTML.split('controls').join('')
						//Carrot quest
						pageHTML = pageHTML.split('Carrot quest').join('Carrot&nbsp;quest')

						this.$context.content = pageHTML
						this.$context.content = tp.execute(this.$context.content)
						this.searchLeadForms()
					}
				)
			} catch (error) {
				console.log(error)
				this.searchLeadForms()
			}
		},
		methods: {
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
							document.getElementById(item.id.replace('form-begin_' , 'form-done_')).classList = 'd-block'
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
</script2>