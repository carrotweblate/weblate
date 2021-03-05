<template>
	<b-col md="6" lg="4" class="post-card mb-5">
		<g-link :to="'/blogtest/' + node.slug + '/'" class="post__box box-shadow box h-100 d-block">
			<!-- Изображение -->
			<div class="post__box__pic mb-3" :style="'background-image: url(' + node.featured_media + ')'" />
			<!-- Категории -->
			<div v-if="!categoryPage" class="post__box__categories px-3 mb-3">
				<template v-for="edges in $page.allCategories.edges" >
					<template v-if="node.categories.includes(Number(edges.node.id))">
						<span :key="edges.node.id" class="grey-text text-uppercase font14px">
							{{ edges.node.title }}
						</span>
					</template>
				</template>
			</div>
			<!-- Заголовок -->
			<div class="post__box__title  px-3  pb-4" v-html="node.title" />
		</g-link>
	</b-col>
</template>


<script>
	export default {
		props: {
			node: Object,
			categoryPage: Boolean
		}
	};
</script>


<style lang="scss">
	.post-card {
		.post__box {
			border-radius: 5px;
			overflow: hidden;
			color: #333;
			&__pic {
				width: 100%;
				height: 150px;
				background-size: cover;
				background-position: left center;
			}
		}
	}
</style>