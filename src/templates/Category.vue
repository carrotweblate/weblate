<template>
	<Layout :header="true" :footer="true"  class="page page-404">

		<b-container>
			<b-row>
				<b-col>
					<h1 class="my-5" v-html="$page.categories.title"/>
				</b-col>
			</b-row>
			<b-row>
				<PostCard v-for="{ node } in $page.allPost.edges" :key="node.id" :node="node" :categoryPage="true" />
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
	query categories ($id: ID!, $page: Int, $ids: [Int]) {
		categories(id: $id) {
			title
		}
		allPost (page: $page, perPage: 12, filter: { categories: { containsAny: $ids }}) @paginate {
			edges {
				node {
					title
					slug
					categories
					featured_media
				}
			}
			pageInfo {
				totalPages
				currentPage
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
				metaTitle: 'Блог',
				metaDescription: 'Страница, которую вы ищите не найдена на сайте',
				metaCanonical: 'https://www.carrotquest.io/404/',
				metaImage: '',
			}
		}
	}	
</script>