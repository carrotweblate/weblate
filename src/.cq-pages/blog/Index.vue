<template>
	<Layout :header="true" :footer="true" class="page blog-index">
		
		<!-- Новое и подписка -->
		<section class="new">
			<b-container>
				<b-row>
					<b-col>
						<h1 class="my-4 my-md-5">
							Блог Carrot quest
						</h1>
					</b-col>
				</b-row>
				
				<b-row>
					<b-col>
						<h2 class="mb-4">
							<g-link to="/blog/recent/">
								Новое
							</g-link>
						</h2>
					</b-col>
				</b-row>
				<b-row>
					<b-col md="12" lg="8" class="post-card mb-4 mb-md-5">
						<g-link :to="'/blog/' + $page.recent.edges[0].node.slug + '/'" class="post__box box-shadow box h-100 d-block">
							<!-- Изображение -->
							<div class="post__box__pic mb-4" :style="'background-image: url(' + $page.recent.edges[0].node.featured_media_large.split('wp.carrotquest.io').join('www.carrotquest.io') + ')'"></div>
							<!-- Категории -->
							<div class="post__box__categories px-3 mb-4">
								<template v-for="edges in $page.allCategories.edges" >
									<span v-if="$page.recent.edges[0].node.categories.includes(Number(edges.node.id))" :key="edges.node.id" class="grey-text text-uppercase font14px">
										{{edges.node.title}}
									</span>	
								</template>
							</div>				
							<!-- Заголовок -->
							<div class="h1 px-3 pb-4" v-html="$page.recent.edges[0].node.title" />
						</g-link>
					</b-col>
					<b-col md="12" lg="4" class="post-card mb-lg-5">
						<b-row>
							<b-col md="6" lg="12" class="post-card mb-4 mb-md-5">
								<g-link :to="'/blog/' + $page.recent.edges[1].node.slug + '/'" class="post__box box-shadow box h-100 d-block">
									<!-- Изображение -->
									<div class="post__box__pic mb-3" :style="'background-image: url(' + $page.recent.edges[1].node.featured_media_medium + ')'"></div>
									<!-- Категории -->
									<div class="post__box__categories px-3 mb-3">
										<template v-for="edges in $page.allCategories.edges" >
											<span v-if="$page.recent.edges[1].node.categories.includes(Number(edges.node.id))" :key="edges.node.id" class="grey-text text-uppercase font14px">
												{{edges.node.title}}
											</span>	
										</template>
									</div>				
									<!-- Заголовок -->
									<div class="post__box__title  px-3  pb-4" v-html="$page.recent.edges[1].node.title" />
								</g-link>
							</b-col>
							<b-col md="6" lg="12" class="post-card mb-4 mb-md-5 mb-lg-0">
								<g-link :to="'/blog/' + $page.recent.edges[2].node.slug + '/'" class="post__box box-shadow box h-100 d-block">
									<!-- Изображение -->
									<div class="post__box__pic mb-3" :style="'background-image: url(' + $page.recent.edges[2].node.featured_media_medium + ')'"></div>
									<!-- Категории -->
									<div class="post__box__categories px-3 mb-3">
										<template v-for="edges in $page.allCategories.edges" >
											<span v-if="$page.recent.edges[2].node.categories.includes(Number(edges.node.id))" :key="edges.node.id" class="grey-text text-uppercase font14px">
												{{edges.node.title}}
											</span>	
										</template>
									</div>				
									<!-- Заголовок -->
									<div class="post__box__title  px-3  pb-4" v-html="$page.recent.edges[2].node.title" />
								</g-link>
							</b-col>
						</b-row>
					</b-col>
				</b-row>
				<b-row>
					<b-col class="text-lg-center">
						<div class="h1">Вы ещё не подписаны?</div>
						<p class="mt-3 mb-4">Присылаем статьи и кейсы, которые помогают бизнесам расти. Польза и ничего кроме!</p>
						<LidsMiniForm event="Подписался на рассылку из блога" />
					</b-col>
				</b-row>
			</b-container>
		</section>
		
		
		<section>
			<b-container>
				<!-- Кейсы -->
				<b-row>
					<b-col>
						<h2 class="mb-4">
							<g-link to="/blog/kejsy/">
								Кейсы
							</g-link>
						</h2>
					</b-col>
				</b-row>
				<b-row class="mb-5">
					<b-col md="12" lg="4" class="post-card mb-lg-5">
						<b-row>
							<b-col md="6" lg="12" class="post-card mb-4 mb-md-5">
								<g-link :to="'/blog/' + $page.cases.edges[1].node.slug + '/'" class="post__box box-shadow box h-100 d-block">
									<!-- Изображение -->
									<div class="post__box__pic mb-3" :style="'background-image: url(' + $page.cases.edges[1].node.featured_media_medium + ')'"></div>
									<!-- Заголовок -->
									<div class="post__box__title  px-3  pb-4" v-html="$page.cases.edges[1].node.title" />
								</g-link>
							</b-col>
							<b-col md="6" lg="12" class="post-card mb-4 mb-md-5 mb-lg-0">
								<g-link :to="'/blog/' + $page.cases.edges[2].node.slug + '/'" class="post__box box-shadow box h-100 d-block">
									<!-- Изображение -->
									<div class="post__box__pic mb-3" :style="'background-image: url(' + $page.cases.edges[2].node.featured_media_medium + ')'"></div>
									<!-- Заголовок -->
									<div class="post__box__title  px-3  pb-4" v-html="$page.cases.edges[2].node.title" />
								</g-link>
							</b-col>
						</b-row>
					</b-col>
					<b-col md="12" lg="8" class="post-card mb-4 mb-md-5">
						<g-link :to="'/blog/' + $page.cases.edges[0].node.slug + '/'" class="post__box box-shadow box h-100 d-block">
							<!-- Изображение -->
							<div class="post__box__pic mb-3" :style="'background-image: url(' + $page.cases.edges[0].node.featured_media_large.split('wp.carrotquest.io').join('www.carrotquest.io') + ')'"></div>
							<!-- Заголовок -->
							<div class="h1 px-3 pb-4" v-html="$page.cases.edges[0].node.title" />
						</g-link>
					</b-col>
				</b-row>

				<!-- Лучшее -->
				<b-row>
					<b-col>
						<h2 class="mb-4">
							<g-link to="/blog/best/">
								Лучшее
							</g-link>
						</h2>
					</b-col>
				</b-row>
				<b-row class="mb-5">
					<PostCard v-for="{ node } in $page.best.edges" :key="node.id" :node="node" />
				</b-row>
				<b-row class="mb-5">
					<b-col class="text-lg-center">
						<div class="h1">Крутая книга</div>
						<p class="mt-3 mb-4">Получите бесплатно книгу «Коммуникации и управление воронкой пользователя в e−commerce»</p>
						<LidsMiniForm event="Блог - Получить книгу" button="Получить книгу" />
					</b-col>
				</b-row>

				<!-- Обновления -->
				<b-row class="pt-5">
					<b-col>
						<h2 class="mb-4">
							<g-link to="/blog/new/">
								Обновления
							</g-link>
						</h2>
					</b-col>
				</b-row>
				<b-row class="mb-5">
					<PostCard v-for="{ node } in $page.updates.edges" :key="node.id" :node="node" :categoryPage="true" />
				</b-row>
		
				<!-- Популярное -->
				<b-row>
					<b-col>
						<h2 class="mb-4">
							<g-link to="/blog/popular/">
								Популярное
							</g-link>
						</h2>
					</b-col>
				</b-row>
				<b-row>
					<PostCard v-for="{ node } in $page.popular.edges" :key="node.id" :node="node" />
				</b-row>
			</b-container>
		</section>

		<section>
			<b-container>
				<b-row>
					<b-col>
						<div class="h1">Как опубликовать гостевой пост в Carrot quest?</div>
						<b-button to="/blog/gostevoj-post/" variant="primary">Узнать больше</b-button>
					</b-col>
				</b-row>
			</b-container>
		</section>

	</Layout>
</template>

<page-query>
	query {
		recent: allPost (limit: 3) {
			edges {
				node {
					title
					slug
					categories
					featured_media_medium
					featured_media_large
				}
			}
		}
		cases: allPost (limit: 3, filter: { categories: { containsAny: 13 }} ) {
			edges {
				node {
					title
					slug
					categories
					featured_media_medium
					featured_media_large
				}
			}
		}
		best: allPost (limit: 3 , filter: {sticky: { eq: true }} ) {
			edges {
				node {
					title
					slug
					categories
					featured_media_medium
					sticky
				}
			}
		}
		updates: allPost (limit: 3, filter: { categories: { containsAny: 6 }} ) {
			edges {
				node {
					title
					slug
					categories
					featured_media_medium
				}
			}
		}
		popular: allPost (limit: 6 , sortBy: "page_views", order: DESC) {
			edges {
				node {
					title
					slug
					categories
					featured_media_medium
					page_views
				}
			}
		}
		allCategories {
			edges {
				node {
					id
					slug
					title
				}
			}
		}
	}
</page-query>

<script>
	import Layout from '~/layouts/Blog.vue'

	import PostCard from '~/components/PostCard.vue'
	import LidsMiniForm from '~/components/Forms/LidsMiniForm.vue'
	import { Pager } from 'gridsome'

	export default {
		components: {
			Layout,
			PostCard,
			LidsMiniForm,
			Pager
		},
		data() {
			return {
				//Делаем в HEAD
				metaTitle: 'Блог Carrot quest | Автоматизация маркетинга, конверсия в покупку, сегментация пользователей',
				metaDescription: 'Блог о конверсии, аналитике, коммуникации с пользователями и эффективном интернет-маркетинге. Статьи, кейсы, фишки',
				metaCanonical: 'https://www.carrotquest.io/blog/',
				metaImage: '',
			}
		}
	}	
</script>


<style lang="scss">
	.blog-index {
		.LidsMiniForm {
			max-width: 480px;
			margin-left: auto;
			margin-right: auto;
			.TakeMe__group {
				border: 1px solid $light-grey;
			}
		}
		.text-lg-center .input-group {
			@media (min-width: 992px) {
				margin: 0 auto;
			}
		}
	}
</style>