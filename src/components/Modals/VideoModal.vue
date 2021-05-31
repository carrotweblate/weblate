<template>
	<b-modal id="youtubeCQ" content-class="universalModal" ref="youtubeCQ" size="xl" hide-header hide-footer>
		<!-- Кнопка закрытия модалки -->
		<b-button @click="hideModal" class="universalModal__close font12px">
			<span>Закрыть</span>
		</b-button>
		<b-embed
			type="iframe"
			aspect="16by9"
			src="https://www.youtube.com/embed/RNOS-68LaSk?autoplay=1"
			allowfullscreen
		></b-embed>
	</b-modal>
</template>


<script>
	import { BEmbed } 			from 'bootstrap-vue'

	export default {
		components: {
			BEmbed
		},
		methods: {
			// Закрытие модалки
			hideModal() {
				this.$refs['youtubeCQ'].hide()
			}
		}
	}
</script>


<style lang="scss">
	#youtubeCQ .embed-responsive {
		border-radius: 5px;
	}
</style>
