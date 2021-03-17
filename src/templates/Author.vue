<template>
	<Layout :header="true" :footer="true"  class="page page-author">

		<b-container class="mt-5">
			<!-- Хлебные крошки -->
			<b-row>
				<b-col md="8" class="d-none d-md-block">
					<b-breadcrumb class="font20px d-md-flex">
						<b-breadcrumb-item href="/">Главная</b-breadcrumb-item>
						<b-breadcrumb-item href="/blogtest/">Блог</b-breadcrumb-item>
						<b-breadcrumb-item href="/authors/">Авторы</b-breadcrumb-item>
					</b-breadcrumb>
				</b-col>
			</b-row>

			<b-row class="mb-5">
				<b-col lg="4">
					<img :src="$context.featured_media" class="photo mw-100" />
				</b-col>
				<b-col lg="8">
					<h1 class="mb-4" v-html="$context.title"/>
					<div class="text" v-html="$context.content" />
				</b-col>
			</b-row>
			<b-row class="mb-5">
				<b-col cols="12">
					<div class="h1 mb-4">
						Статьи автора
					</div>
				</b-col>
				<PostCard v-for="{ node } in $page.allPost.edges" :key="node.id" :node="node" :categoryPage="false" />
				<b-col class="Pagination">
					<Pager :info="$page.allPost.pageInfo" />
				</b-col>
			</b-row>
			<b-row class="mb-5">
				<b-col cols="12">
					<div class="h1 mb-4">
						Другие материалы с автором
					</div>
				</b-col>
				<template v-for="item in $context.another_publications">
					<b-col md="6" lg="4" class="post-card mb-5" :key="item.id">
						<a :href="item.url" class="post__box box-shadow box h-100 d-block" target="_blank">
							<!-- Изображение -->
							<div class="post__box__pic mb-3" :style="'background-image: url(' + item.pic + ')'"></div>			
							
							<!-- Заголовок -->
							<div class="post__box__title  px-3  pb-4" v-html="item.title" />
						</a>
					</b-col>
				</template>
			</b-row>
			<b-row>
				<b-col cols="12">
					<div class="h1 mb-4">
						Другие авторы блога
					</div>
				</b-col>
				<template v-for="{ node } in $page.allAuthors.edges">
					<b-col v-if="node.description" lg="3" class="page-author__authors" :key="node.id">
						<img :src="node.avatar._96" alt="">
						<p>
							<b v-text="node.name" />
							<br>
							<span class="grey-text" v-text="node.description" />
						</p>
					</b-col>
				</template>
			</b-row>
		</b-container>

	</Layout>
</template>


<page-query>
	query author ($page: Int, $id: Int) {
		allPost (page: $page, perPage: 6, filter: { author: { eq: $id }}) @paginate {
			edges {
				node {
					title
					slug
					categories
					featured_media
					author
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
		allAuthors {
			edges {
				node {
					id
					name
					description
					avatar {
						_96
					}
				}
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
		}
	}	
</script>


<style lang="scss">
	.page-author {
		.breadcrumb {
			margin-bottom: 45px;
		}
		.photo {
			border-radius: 5px;
		}
		&__authors {
			img {
				display: block;
				width: 80px;
				height: inherit;
				border-radius: 50%;
				margin-bottom: 1rem;
			}
			p {
				margin-bottom: 2rem;
			}
		}
	}
</style>