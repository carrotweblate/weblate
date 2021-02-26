<template>
	<Layout :header="true" :footer="true"  class="page page-404">

		<b-container>
			<b-row class="align-items-center">
				<b-col>
					<h1>
						Блог
					</h1>
					<ol class="post-list">
						<li v-for="{ node } in $page.posts.edges" :key="node.id">
							<g-link :to="'/blogtest/'+node.slug">
								{{ node.title }}
							</g-link>
						</li>
					</ol>
				</b-col>
			</b-row>
		</b-container>

	</Layout>
</template>

<page-query>
	query {
		posts (where: { orderby: { field: DATE, order: DESC } }, first: 999) {
			edges {
				node {
					title
					slug
				}
			}
		}
	}
</page-query>

<script>
	export default {
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
