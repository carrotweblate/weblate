<template>
	<Layout :header="true" :footer="true"  class="page blog">
		<div class="container">
			<h1 class="my-5">
				Блог:
			</h1>
			<PostGrid :posts="$page.posts.edges" />
			<Pagination :perPage="$context.perPage" :pageInfo="$context.pageInfo" />
		</div>
	</Layout>
</template>

<page-query>
	query ($offset: Int, $perPage: Int) {
		posts(where: {offsetPagination: {offset: $offset, size: $perPage}}) {
			edges {
				node {
					title
					slug
					id
					categories {
						edges {
							node {
								name
								slug
							}
						}
					}
					excerpt(format: RENDERED)
					featuredImage {
						node {
							sourceUrl(size: MEDIUM_LARGE)
						}
					}
				}
			}
		}
	}
</page-query>

<script>
import PostGrid from "../components/PostGrid";
import Pagination from "../components/Pagination";

export default {
	components: {
		PostGrid,
		Pagination,
	},
};
</script>