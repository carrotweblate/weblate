<template>
	<Layout :header="true" :footer="true"  class="page page-404">

		<b-container>
			<b-row>
				<b-col>
					<h1 class="my-5" v-html="$context.title"/>
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
	query categories ($page: Int, $ids: [Int]) {
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
		//Делаем в HEAD
		metaInfo() {
			return {
				title: 'Блог Carrot quest | ' + this.$context.title,
				meta: [
					{
						key: 'description',
						name: 'description',
						content:  this.$context.description
					},
					{
						key: 'og:url',
						property: 'og:url',
						content: 'https://www.carrotquest.io/blog/' +  this.$context.slug + '/'
					},
					{
						key: 'og:title',
						property: 'og:title',
						content: 'Блог Carrot quest | ' + this.$context.title,
					},
					{
						key: 'og:description',
						property: 'og:description',
						content: this.$context.description
					}
				],
				link: [
					{
						rel: 'canonical',
						href: 'https://www.carrotquest.io/blog/' +  this.$context.slug + '/'
					}
				]
			}
		},
	}	
</script>