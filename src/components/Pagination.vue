<template>
	<div>
		<ul v-if="pageInfo">
			<li v-for="i in Math.ceil(pageInfo.total / perPage)" :key="i">
				<g-link :class="{ active: pageInfo.currentPage == i }" :to="i === 1 ? `/blog/` : `/blog/page/${i}/`">{{ i }}</g-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: ["pageInfo", "perPage"],
	};
</script>
