<template>
	<div>
		<Navbar />
		
		<slot />

		<Footer />
	</div>
</template>


<script>
	import Navbar from '~/components/Navbar.vue'
	import Footer from '~/components/Footer.vue'

	export default {
		components: {
			Navbar,
			Footer
		}
	};
</script>

<style lang="scss">
	.t-zoomer__wrapper {
		display: none;
	}
	.t-zoomer__show .t-zoomer__wrapper {
		display: block;
	}
</style>