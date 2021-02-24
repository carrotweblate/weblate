<template>
	<b-col lg="4" class="mb-5">
		<g-link :to="`/blogtest/${node.slug}/`">
			<img :src="node.featuredImage.node.sourceUrl" class="mw-100">
			
			<div>
				<h4>{{ node.title }}</h4>
				<p v-html="node.excerpt.slice(0, 130) + '...'"></p>
				<div>
					<span v-for="{ node } in node.categories.edges.slice(0, 3)" :key="node.id">
						<g-link :to="`/blogtest/${node.slug}/`">{{ node.name }}</g-link>
					</span>
				</div>
			</div>
		</g-link>
	</b-col>
</template>

<script>
	export default {
		props: ["node"],
	};
</script>