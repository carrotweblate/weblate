<template>
	
	<b-container class="Logos">
		<b-row>
			<b-col cols="12">
				<!-- <ClientOnly>
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
							class="d-lg-none"
					>	
						<template v-for="item in logos">
							<img :src="'/assets/images/logos/' + item.pic" :alt="item.pic" :key="item.pic" />
						</template>

					</Carousel>
				</ClientOnly>
				<ClientOnly>
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
						class="d-none d-lg-block"
					>	
						<template v-for="item in logos">
							<img :src="'/assets/images/logos/' + item.pic" :alt="item.pic" :key="item.pic" />
						</template>

					</Carousel>
				</ClientOnly> -->

				<ClientOnly>
				<vue-horizontal-list
				:items="logos"
				:options="{
					responsive: [
					{ end: 576, size: 1 },
					{ start: 576, end: 768, size: 2 },
					{ size: 3 },
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
			width: 100%;
			transition: all .2s ease;
			filter: grayscale(100%);
			&:hover {
				filter: grayscale(0);
			}
		}
		.owl-stage-outer {
			overflow: inherit !important;
		}
		.vhl-item {
			display: flex;
			align-items: center;
		}
	}
</style>