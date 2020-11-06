<template>
	<Layout class="post">
		<ClientOnly>
			<b-container>

				<!-- Хлебные крошки -->
				<b-row>
					<b-col>
						<b-breadcrumb class="font20px d-none d-md-flex">
							<b-breadcrumb-item href="/">Главная</b-breadcrumb-item>
							<b-breadcrumb-item href="/blog/">Блог</b-breadcrumb-item>
							<b-breadcrumb-item :href="$context.cslug" :text="$context.category" />
						</b-breadcrumb>
					</b-col>
				</b-row>

				<!-- Заголовок и описание -->
				<b-row>
					<b-col col xl="8">
						<h1 class="post__title" v-html="$context.title" />
						<div class="font20px lightgrey-text my-4">
							<span class="mr-5">Время чтения: 59 минуты</span>
							<span>21.09.2020</span>
						</div>
						<div class="post__description font24px" v-html="$context.description" />
					</b-col>
				</b-row>

				<!-- Изображение записи -->
				<b-row>
					<b-col col cols="12" class="post__image mt-4 mb-5">
						<img :src="$context.featuredImage" />
					</b-col>
				</b-row>

				<!-- Текст статьи -->
				<b-row>
					<b-col col lg="8" class="font20px post__text" v-html="$context.content" />
					<b-col col cols="4" class="post__info d-none d-lg-block">
						<div class="post__info__contents">
							Содержание:
							<div class="mt-4" v-html="$context.contents" />
						</div>
						<div class="mb-5 font20px">
							<g-image src="~/assets/images/blog/masha.png" alt="Мария Бурдина" />
							<p>
							<b>Записала</b>
							</p>
							<p>Мария Бурдина</p>
							<p class="grey-text">Рассказываю интересные истории в блоге</p>
						</div>
						<div class="font20px">
							<g-image src="~/assets/images/blog/olya.png" alt="Оля Кузеванова" />
							<p>
							<b>Нарисовала</b>
							</p>
							<p>Оля Кузеванова</p>
							<p class="grey-text">Иллюстрирую блог Carrot quest</p>
						</div>
					</b-col>
				</b-row>

				<b-row class="post__more">
					<b-col cols="12" class="h2 mb-5">
						Так же читайте
					</b-col>
					<template v-for="( item , index ) in $context.more">

						<b-col cols="12" lg="6" xl="4" :key="index" class="mb-5">
							<a :href="item.url" class="post__more__box" :style="item.pic"></a>
							<span v-text="item.category" class="font12px lightgrey-text mt-4 mb-3"/>
							<a :href="item.url" class="h3">
								{{ item.title }}
							</a>
						</b-col>
						
					</template>
				</b-row>

			</b-container>

			<VideoRegistration />

		</ClientOnly>

	</Layout>
</template>

<script>
	import $ from 'jquery';  // подключаем jQuery
	import '~/assets/scss/blog/post.scss'
	import VideoRegistration from '~/components/VideoRegistration/VideoRegistration.vue'

	export default {
		components: {
			VideoRegistration
		},

		mounted() {
			window.$ = require('jquery')
			window.jQuery = require('jquery');
		},

		//Делаем в HEAD
		metaInfo() {
			return {
				title: this.$context.seo.title,
				meta: [
					{
						name: 'description',
						content: this.$context.seo.description
					},

					{
						property: 'article:publisher',
						content: 'https://www.facebook.com/carrotquest/'
					},
					{
						property: 'article:published_time',
						content: '2020-05-20T05:24:56+00:00'
					},
					{
						property: 'article:modified_time',
						content: '2020-06-11T04:44:33+00:00'
					},

					{ property: 'og:locale', content: 'ru_RU' },
					{ property: 'og:type', content: 'article' },
					{
						property: 'og:title',
						content: this.$context.seo.title,
					},
					{
						property: 'og:description',
						content: this.$context.seo.description
					},
					{
						property: 'og:url',
						content: 'https://www.carrotquest.io/blog/kak-sdelat-email-rassylku/'
					},
					{ property: 'og:site_name', content: 'Блог Carrot quest' },
					{
						property: 'og:image',
						content: this.$context.featuredImage
					},
					{ property: 'og:image:width', content: '1202' },
					{ property: 'og:image:height', content: '634' },
				],
				link: [
					{
						rel: 'canonical',
						href: 'https://www.carrotquest.io/blog/' + this.$context.slug.replace('-2', '/')
					}
				]
			}
		}
	}	
</script>