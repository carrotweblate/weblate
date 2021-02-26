<template>
	
	<b-row>
		<Card v-for="{ node } in posts" :key="node.id" :node="node" />
	</b-row>

</template>

<script>
	export default {
		props: ["posts"],
		components: {
			Card: () => import("../components/Card"),
		},
	};
</script>