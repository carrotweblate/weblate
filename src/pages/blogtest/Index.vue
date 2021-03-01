<template>
	<Layout :header="true" :footer="true"  class="page page-404">

		<b-container>
			<b-row>
				<b-col>
					<h1 class="my-5">
						Блог
					</h1>
				</b-col>
			</b-row>
			<b-row>
				<b-col v-for="{ node } in $page.allPost.edges" :key="node.id" md="6" lg="4" class="mb-5">
					<g-link :to="'/blogtest/' + node.slug + '/'">
						<img :src="node.featured_media" alt="" class="mw-100 mb-3">
						<span v-html="node.title" />
					</g-link>
					<p class="mt-3 mb-0">
						Категория:
					</p>
					<template v-for="edges in $page.allCategories.edges" >
						<g-link v-if="edges.node.id == node.categories" :to="edges.node.slug + '/'" :key="edges.node.id">
							{{ edges.node.title }}
						</g-link>
					</template>
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
	query Blog ($page: Int) {
		allPost (page: $page, perPage: 9) @paginate {
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
