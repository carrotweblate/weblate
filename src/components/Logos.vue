<template>
	<ClientOnly>
		<b-container class="Logos">
			<b-row>
				<b-col cols="12">
					<Carousel
						:items="3"
						:autoplay="true" 
						:autoplayTimeout="4000"
						:autoplayHoverPause="true"
						:loop="true"
						:margin="40"
						:stagePadding="0"
						:nav="false" 
						:dots="false"
						:smartSpeed="1500"
						class="d-lg-none"
					>	
						<template v-for="item in logos">
							<img :src="'/assets/images/logos/' + item.pic" :alt="item.pic" :key="item.pic" />
						</template>
						
					</Carousel>

					<Carousel
						:items="6"
						:autoplay="true" 
						:autoplayTimeout="4000"
						:autoplayHoverPause="true"
						:loop="true"
						:margin="80"
						:stagePadding="0"
						:nav="false" 
						:dots="false"
						:smartSpeed="1500"
						class="d-none d-lg-block"
					>	
						<template v-for="item in logos">
							<img :src="'/assets/images/logos/' + item.pic" :alt="item.pic" :key="item.pic" />
						</template>
						
					</Carousel>
				</b-col>
			</b-row>
		</b-container>
	</ClientOnly>
</template>



<script>
	import Carousel from 'vue-owl-carousel2'

	export default {
		components: { Carousel },
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
			transition: all .2s ease;
			filter: grayscale(100%);
			&:hover {
				filter: grayscale(0);
			}
		}
		.owl-stage-outer {
			overflow: inherit !important;
		}
		.owl-stage {
			display: flex;
			align-items: center;
		}
	}
</style>