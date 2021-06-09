<template>
	<Layout :header="true" :footer="true"  class="page page-404">
		<b-container>
			<b-row>
				<b-col>
					<h1 class="my-5">
						Результаты поиска:
					</h1>
				</b-col>
			</b-row>

			<ClientOnly>
				<ais-instant-search index-name="prod_Blog" :search-client="searchClient">
					<ais-configure
						:hits-per-page.camel="12"
						:distinct="true"
					/>
					<ais-search-box placeholder="Поиск по блогу" v-model="search" :show-loading-indicator="true" class="mb-5" />
					<ais-hits>
						<b-row slot-scope="{ items }" class="row">
							<PostCard v-for="item in items" :key="item.objectID" :node="item" />
						</b-row>
					</ais-hits>
					<ais-pagination class="Pagination" />
					<ais-powered-by />
				</ais-instant-search>
			</ClientOnly>
			
		</b-container>
	</Layout>
</template>


<page-query>
	query Search {
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

	import algoliasearch from 'algoliasearch/lite'
	import PostCard from '~/components/PostCard.vue'

	function onCatch(err) {
		console.warn(err)
	}

	export default {
		components: {
			Layout,
			//Для поиска
			AisInstantSearch: () =>
				import ('vue-instantsearch')
				.then(a => a.AisInstantSearch)
				.catch(onCatch),
			AisConfigure: () =>
				import ('vue-instantsearch')
				.then(a => a.AisConfigure)
				.catch(onCatch),
			AisSearchBox: () =>
				import ('vue-instantsearch')
				.then(a => a.AisSearchBox)
				.catch(onCatch),
			AisHits: () =>
				import ('vue-instantsearch')
				.then(a => a.AisHits)
				.catch(onCatch),
			AisPagination: () =>
				import ('vue-instantsearch')
				.then(a => a.AisPagination)
				.catch(onCatch),
			AisPoweredBy: () =>
				import ('vue-instantsearch')
				.then(a => a.AisPoweredBy)
				.catch(onCatch)
			,

			//Карточка записи
			PostCard
		},
		data() {
			return {
				//Делаем в HEAD
				metaTitle: 'Результаты поиска',
				metaDescription: '',
				metaCanonical: 'https://www.carrotquest.io/blog/search/',
				metaImage: '',

				//Поиск
				search: '',
				searchClient: algoliasearch(
					'7Y1P83X4M1',
					'e36d6dd387707c8db30176196678b929'
				)
			}
		},
		beforeMount() {
			this.search = this.$route.query.q
		},
		updated() {
			this.$router.push('/blog/search/?q=' + this.search)
		}
	}	
</script>


<style lang="scss">
	.ais-SearchBox-form {
		.ais-SearchBox-input {
			width: 100%;
			height: calc(1.5em + 0.75rem + 2px);
			padding: 0.375rem 0.75rem;
			font-size: 1rem;
			font-weight: 400;
			line-height: 1.5;
			color: #495057;
			background-color: #fff;
			background-clip: padding-box;
			border: 1px solid #ced4da;
			border-radius: 0.25rem;
			transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
		}
		.ais-SearchBox-submit , .ais-SearchBox-reset {
			display: none;
		}
	}
	.ais-PoweredBy {
		text-align: right;
	}
</style>