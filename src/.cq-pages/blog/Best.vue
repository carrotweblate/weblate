<template>
	<Layout :header="true" :footer="true"  class="page blog-index">

		<b-container>
			<b-row>
				<b-col>
					<h1 class="my-5">
						Лучшие статьи
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
					featured_media_medium
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
	import Layout from '~/layouts/Blog.vue'

	import PostCard from '~/components/PostCard.vue'
	import { Pager } from 'gridsome'

	export default {
		components: {
			Layout,
			PostCard,
			Pager
		},
		data() {
			return {
				//Делаем в HEAD
				metaTitle: 'Лучшие статьи | Блог Carrot quest',
				metaDescription: 'Лучшие статьи в блоге о конверсии, аналитике, коммуникации с пользователями и эффективном интернет-маркетинге — Carrot Quest',
				metaCanonical: 'https://www.carrotquest.io/blog/best/',
				metaImage: '',
			}
		}
	}	
</script>
