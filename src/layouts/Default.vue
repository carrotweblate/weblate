<template>
	<div>
		<ClientOnly>
			<!-- Прогрес бар чтения -->
			<read-progress color="#ff892a" height="2px" :shadow="false"></read-progress>
		</ClientOnly>

		<Navbar />
		
		<slot />

		<Footer />
	</div>
</template>


<script>
	import Navbar from '~/components/Navbar.vue'
	import Footer from '~/components/Footer/Footer.vue'

	export default {
		components: {
			Navbar,
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
	.t-zoomer__wrapper {
		display: none;
	}
	.t-zoomer__show .t-zoomer__wrapper {
		display: block;
	}
</style>