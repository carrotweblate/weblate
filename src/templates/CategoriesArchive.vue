<template>
	<Layout :header="true" :footer="true"  class="page blog-categories">
		<b-container>
			<b-row>
				<b-col>
					<h1 v-text="$context.name" class="my-5" />
				</b-col>
			</b-row>
			<PostGrid :posts="$page.posts.edges" />
			<Pagination :perPage="$context.perPage" :pageInfo="$context.pageInfo" />
		</b-container>
	</Layout>
</template>

<page-query>
	query Categories($id: Int){
		posts(where: {categoryId: $id}, first: 100) {
			edges {
			node {
				title
				slug
				id
				id
				categories {
					edges {
						node {
							name
								slug
							}
						}
					}
					excerpt
					featuredImage {
						node {
							sourceUrl(size: MEDIUM_LARGE)
						}
					}
				}
			}
		}
	},
</page-query>

<script>
	import PostGrid from "../components/PostGrid";

	export default {
		components: {
			PostGrid,
		},
	};
</script>
