<template>
	<Layout :header="true" :footer="true"  class="page page-404">

		<b-container>
			<b-row>
				<b-col>
					<h1 class="my-5" v-html="$page.categories.title"/>
				</b-col>
			</b-row>
			<b-row>
				<b-col v-for="{ node } in $page.allPost.edges" :key="node.id" md="6" lg="4" class="mb-5">
					<g-link :to="'/blogtest/' + node.slug + '/'">
						<img :src="node.featured_media.sizes.medium.source_url" alt="" class="mw-100 mb-3">
						<span v-html="node.title" />
					</g-link>
				</b-col>
			</b-row>
			<b-row>
				<b-col>
					<Pager :info="$page.allPost.pageInfo"/>
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
		allPost (page: $page, perPage: 9, filter: { categories: { containsAny: $ids }}) @paginate {
			edges {
				node {
					title
					slug
					categories
					featured_media {
						sizes {
							medium {
								source_url
							}
						}
					}
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
	import { Pager } from 'gridsome'

	export default {
		components: {
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