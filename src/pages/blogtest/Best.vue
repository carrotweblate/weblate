<template>
	<Layout :header="true" :footer="true"  class="page blog-index">

		<b-container>
			<b-row>
				<b-col>
					<h1 class="my-5">
						Лучшее
					</h1>
				</b-col>
			</b-row>
			<b-row>
				<PostCard v-for="{ node } in $page.allPost.edges" :key="node.id" :node="node" :categoryPage="false" />
			</b-row>
			<b-row>
				<b-col class="Pagination">
					<Pager :info="$page.allPost.pageInfo" />
				</b-col>
			</b-row>
		</b-container>

	</Layout>
</template>

<page-query>
	query Blog ($page: Int) {
		allPost (page: $page , perPage: 12 , filter: {sticky: { eq: true }}) @paginate {
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
					slug
					title
				}
			}
		}
	}
</page-query>

<script>
	import PostCard from '~/components/PostCard.vue'
	import { Pager } from 'gridsome'

	export default {
		components: {
			PostCard,
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
