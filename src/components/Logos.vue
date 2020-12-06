<template>
	
	<b-container class="Logos">
		<b-row>
			<b-col cols="12">
				<ClientOnly>
					<Carousel :perPageCustom="[[768, 3], [1024, 6]]">
						<slide v-for="item in logos" :key="item.pic">
							<img :src="'/assets/images/logos/' + item.pic" :alt="item.pic" />
						</slide>
					</Carousel>
				</ClientOnly>
			</b-col>
		</b-row>
	</b-container>
	
</template>



<script>
	export default {
		components: {
			Carousel: () =>
				import ('vue-carousel')
				.then(m => m.Carousel)
				.catch(),
			Slide: () =>
				import ('vue-carousel')
				.then(m => m.Slide)
				.catch()
		},
		data() {
			return {
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
			width: 100%;
			transition: all .2s ease;
			filter: grayscale(100%);
			&:hover {
				filter: grayscale(0);
			}
		}
		.VueCarousel-wrapper {
			overflow: inherit !important;
		}
		.VueCarousel-slide {
			display: flex;
			align-items: center;
		}
	}
</style>