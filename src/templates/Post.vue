<template>
	<Layout :header="true" :footer="true"  class="post">
		<b-container>

			<!-- Хлебные крошки -->
			<b-row>
				<b-col>
					<b-breadcrumb class="font20px d-none d-md-flex">
						<b-breadcrumb-item href="/">Главная</b-breadcrumb-item>
						<b-breadcrumb-item href="/blogtest/">Блог</b-breadcrumb-item>
						<b-breadcrumb-item :href="$context.cslug" :text="$context.category" />
					</b-breadcrumb>
				</b-col>
			</b-row>

			<!-- Заголовок и описание -->
			<b-row>
				<b-col col xl="9">
					<h1 class="post__title" v-html="$page.post.title" />
					<div class="font20px lightgrey-text my-4">
						<span class="mr-5">Время чтения: {{ $context.time }}</span>
						<span>21.09.2020</span>
					</div>
					<div class="post__description font24px" v-html="$context.description" />
				</b-col>
			</b-row>

			<!-- Изображение записи -->
			<b-row>
				<b-col col cols="12" class="post__image mt-4 mb-5">
					<img :src="$page.post.featuredImage.node.mediaItemUrl" />
				</b-col>
			</b-row>

			<!-- Текст статьи -->
			<b-row>
				<b-col col xl="8" class="font20px post__text" v-html="$context.content" />
				<b-col col cols="4" class="post__info d-none d-xl-block">
					<div class="post__info__contents">
						Содержание:
						<div class="mt-4" v-html="$page.post.contents" />
					</div>
					<div class="post__authors" v-html="$context.author" />
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
	query Post ($databaseId: ID!){
		post(idType: DATABASE_ID, id: $databaseId) {
			title
			featuredImage {
				node {
					mediaItemUrl
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
	}	
</script>