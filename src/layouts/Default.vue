<template>
	<div>
		<Header />
		
		<slot />

		<Footer />
	</div>
</template>


<script>
	import Header from '~/components/Header/Header.vue'
	import Footer from '~/components/Footer/Footer.vue'

	export default {
		components: {
			Header,
			Footer,

			//Прогресс бар
			ReadProgress: () =>
				import("vue-read-progress")
					.then(m => m.default)
					.catch()
		}
	};
</script>

<style lang="scss">

</style>