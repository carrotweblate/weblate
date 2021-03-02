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
					<div class="post__description font24px" v-html="$context.description" />
				</b-col>
			</b-row>

			<!-- Изображение записи -->
			<b-row>
				<b-col col cols="12" class="post__image mt-4 mb-5">
					<img :src="$context.featured_media" />
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

	export default {
		components: {
			VideoRegistration,
			BannerSobirayte
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
	}	
</script>