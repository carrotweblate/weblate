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
			Footer
		},
		mounted () {
			// Ищем ссылки для открытия чата
			if ( document.querySelector('[href="#open-chat"]') ) {
				document.querySelectorAll('[href="#open-chat"]').forEach(function(item) {
					item.addEventListener('click', function(e) {
						e.preventDefault()
						carrotquest.open()
					})
				})
			}
		}
	};
</script>

<style lang="scss">

</style>