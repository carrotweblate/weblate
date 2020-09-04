<template>
	<div>
		<Navbar />

		<b-container class="page">
			<slot />
		</b-container>

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
	
</style>