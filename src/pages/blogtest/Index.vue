<template>
	<Layout :header="true" :footer="true"  class="page blog-index">
		
		<!-- Новое и подписка -->
		<section class="new">
			<b-container>
				<b-row>
					<b-col>
						<h1 class="mt-5">
							Блог Carrot quest
						</h1>
					</b-col>
				</b-row>
				
				<b-row>
					<b-col>
						<h2 class="my-5">
							<g-link to="/blogtest/recent/">
								Новое
							</g-link>
						</h2>
					</b-col>
				</b-row>
				<b-row>
					<PostCard v-for="{ node } in $page.recent.edges" :key="node.id" :node="node" :categoryPage="false" />
				</b-row>
				<b-row>
					<b-col>
						<div class="h1">Вы ещё не подписаны?</div>
						<p>Присылаем статьи и кейсы, которые помогают бизнесам расти. Польза и ничего кроме!</p>
						<SubscribeForm event="Подписался на рассылку из блога" />
					</b-col>
				</b-row>
			</b-container>
		</section>
		
		<!-- Кейсы -->
		<section class="new">
			<b-container>
				<b-row>
					<b-col>
						<h2 class="my-5">
							<g-link to="/blogtest/kejsy/">
								Кейсы
							</g-link>
						</h2>
					</b-col>
				</b-row>
				<b-row>
					<PostCard v-for="{ node } in $page.cases.edges" :key="node.id" :node="node" :categoryPage="true" />
				</b-row>
			</b-container>
		</section>

		<!-- Лучшее -->
		<section class="best">
			<b-container>
				<b-row>
					<b-col>
						<h2 class="my-5">
							<g-link to="/blogtest/best/">
								Лучшее
							</g-link>
						</h2>
					</b-col>
				</b-row>
				<b-row>
					<PostCard v-for="{ node } in $page.best.edges" :key="node.id" :node="node" />
				</b-row>
			</b-container>
		</section>

		<section>
			<b-container>
				<b-row>
					<b-col>
						<div class="h1">Крутая книга</div>
						<p>Получите бесплатно книгу «Коммуникации и управление воронкой пользователя в e−commerce»</p>
						<SubscribeForm event="Блог - Получить книгу" button="Получить книгу" />
					</b-col>
				</b-row>
			</b-container>
		</section>

		<!-- Обновления -->
		<section class="new">
			<b-container>
				<b-row>
					<b-col>
						<h2 class="my-5">
							<g-link to="/blogtest/new/">
								Обновления
							</g-link>
						</h2>
					</b-col>
				</b-row>
				<b-row>
					<PostCard v-for="{ node } in $page.updates.edges" :key="node.id" :node="node" :categoryPage="true" />
				</b-row>
			</b-container>
		</section>
		
		<!-- Популярное -->
		<section class="new">
			<b-container>
				<b-row>
					<b-col>
						<h2 class="my-5">
							<g-link to="/blogtest/popular/">
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

		<!-- Разделы -->
		<section class="new">
			<b-container>
				<b-row>
					<g-link v-for="{ node } in $page.allCategories.edges" :key="node.id">
						{{ node.title }}
					</g-link>
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
					featured_media
				}
			}
		}
		cases: allPost (limit: 3, filter: { categories: { containsAny: 13 }} ) {
			edges {
				node {
					title
					slug
					categories
					featured_media
				}
			}
		}
		best: allPost (limit: 3 , filter: {sticky: { eq: true }} ) {
			edges {
				node {
					title
					slug
					categories
					featured_media
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
					featured_media
				}
			}
		}
		popular: allPost (limit: 6 , sortBy: "page_views", order: DESC) {
			edges {
				node {
					title
					slug
					categories
					featured_media
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
	import PostCard from '~/components/PostCard.vue'
	import SubscribeForm from '~/components/Forms/SubscribeForm.vue'
	import { Pager } from 'gridsome'

	export default {
		components: {
			PostCard,
			SubscribeForm,
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
