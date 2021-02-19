<template>
	
	<b-container fluid class="Logos">
		<b-row>
			<b-col cols="12">

				<ClientOnly>
					<vue-horizontal-list
					:items="logos"
					:options="{
						navigation: {
							start: 999999,
						},
						autoplay: {
							play: true,
							repeat: true,
							speed: 3000,
						},
						responsive: [
							{ end: 576, size: 2 },
							{ start: 576, end: 768, size: 4 },
							{ start: 768, end: 1200, size: 6 },
							{ start: 1200, end: 1980, size: 8 },
							{ start: 1980, end: 2440, size: 12 },
							{ size: 12 },
						],
					}"
					>
						<template v-slot:default="{item}">
							<img :src="'/assets/images/logos/' + item.pic" :alt="item.pic" :key="item.pic" />
						</template>
					</vue-horizontal-list>
				</ClientOnly>

			</b-col>
		</b-row>
	</b-container>
	
</template>



<script>
	import VueHorizontalList from "vue-horizontal-list";
	
	export default {
		components: {
			VueHorizontalList,
		},
		data() {
			return {
				swiperOption: {
					slidesPerView: 3,
					spaceBetween: 30,
					pagination: {
						el: '.swiper-pagination',
						clickable: true
					}
				},
				logos: [
					{ pic: 'aquafour.svg' },
					{ pic: 'armani-beauty.svg' },
					{ pic: 'avis-white.svg' },
					{ pic: 'bank-spb.svg' },
					{ pic: 'bks.svg' },
					{ pic: 'domru.svg' },
					{ pic: 'elama.png' },
					{ pic: 'gant.svg' },
					{ pic: 'geekbrains.svg' },
					{ pic: 'insales.svg' },
					{ pic: 'instaplus.svg' },
					{ pic: 'k50_logo.svg' },
					{ pic: 'kontur.svg' },
					{ pic: 'loreal.svg' },
					{ pic: 'maria.svg' },
					{ pic: 'planeta-zdorovya.svg' },
					{ pic: 'popmechanic.png' },
					{ pic: 'Sape.png' },
					{ pic: 'skillfactory.svg' },
					{ pic: 'softline.svg' },
					{ pic: 'talan.png' },
					{ pic: 'timepad.png' },
					{ pic: 'tooligram.svg' },
					{ pic: 'uralsib.svg' },
					{ pic: 'westfalika.svg' },
					{ pic: 'wikium.svg' },
					{ pic: 'yagla.png' },
					{ pic: 'geekbrains.png' },
					{ pic: 'kontur.png' },
					{ pic: 'marquiz.png' },
					{ pic: 'cscart.png' },
					{ pic: 'progressme.png' },
					{ pic: 'R-broker.png' },
				]
			}
		},
		mounted() {
			this.logos = this.logos.sort(() => Math.random() - 0.5)
		}
	}
</script>



<style lang="scss">
	.Logos {
		img {
			width: calc(100% - 40px);
			transition: all .2s ease;
			filter: grayscale(100%);
			&:hover {
				filter: grayscale(0);
			}
		}
		.vhl {
			overflow: inherit !important;
		}
		.vhl-item {
			display: flex;
			align-items: center;
		}
	}
</style>