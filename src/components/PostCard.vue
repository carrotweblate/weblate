<template>
	<b-col md="6" lg="4" class="post-card mb-4 mb-md-5" v-b-visible.once="callback">
		<g-link :to="parentPage + node.slug + '/'" class="post__box box-shadow box h-100 d-block">
			<!-- Изображение -->
			<div v-if="visible" class="post__box__pic mb-3" :style="'background-image: url(' + node.featured_media_medium + ')'"></div>
			
			<!-- Категории -->
			<div v-if="!categoryPage" class="post__box__categories px-3 mb-3">
				<template v-for="edges in $page.allCategories.edges" >
					<span v-if="node.categories.includes(Number(edges.node.id))" :key="edges.node.id" class="grey-text text-uppercase font14px">
						{{edges.node.title}}
					</span>	
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
			categoryPage: Boolean,
			parentPage: {
				default: '/blog/',
				type: String
			}
		},
		data() {
			return {
				index: 1,
				visible: false
			}
		},
		methods: {
			callback(visible) {
				if (visible) {
					this.visible = true
				}
			}
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
				background-position: center;
			}
		}
		&.col-lg-8 {
			.post__box__pic {
				@media (min-width: 768px) {
					height: 250px;
				}
				@media (min-width: 992px) {
					height: 350px;
				}
			}
			.post__box__title {
				@media (min-width: 992px) {
					font-size: 1.5rem;
					font-weight: bold;
				}
			}
		}
	}
</style>