<template>
	<Layout :header="true" :footer="true"  class="page page-404">

		<b-container>
			<b-row>
				<b-col>
					<h1 class="my-5" v-html="$context.title"/>
				</b-col>
			</b-row>
		</b-container>

	</Layout>
</template>

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