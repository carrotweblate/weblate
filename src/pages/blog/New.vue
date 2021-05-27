<template>
	<Layout :header="true" :footer="true"  class="page blog-index">

		<b-container>
			<b-row>
				<b-col>
					<h1 class="my-5">
						Обновления
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
		allPost (page: $page, perPage: 12) @paginate {
			edges {
				node {
					title
					slug
					categories
					featured_media_medium
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
				metaTitle: 'Обновления | Блог Carrot quest',
				metaDescription: 'Всё течёт, всё изменяется. Следите за тем, как меняется и растёт Carrot Quest, а также какие новые возможности открываются перед вами',
				metaCanonical: 'https://www.carrotquest.io/blog/new/',
				metaImage: '',
			}
		}
	}	
</script>
