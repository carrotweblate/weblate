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
							<img :src="'/assets/images/logos/' + item.pic" :width="item.width" :height="item.height" :alt="item.pic" :key="item.pic" />
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
					{ 
						pic: 'aquafour.svg',
						width: '365',
						height: '68'
					},
					{ 
						pic: 'armani-beauty.svg',
						width: '328',
						height: '140'
					},
					{ 
						pic: 'avis-white.svg',
						width: '589',
						height: '180'
					},
					{ 
						pic: 'bank-spb.svg',
						width: '632',
						height: '127'
					},
					{ 
						pic: 'bks.svg',
						width: '527',
						height: '189'
					},
					{ 
						pic: 'domru.svg',
						width: '70',
						height: '70'
					},
					{ 
						pic: 'elama.png',
						width: '832',
						height: '264'
					},
					{ 
						pic: 'gant.svg',
						width: '50',
						height: '50'
					},
					{ 
						pic: 'geekbrains.svg',
						width: '100',
						height: '43'
					},
					{ 
						pic: 'insales.svg',
						width: '185',
						height: '62'
					},
					{ 
						pic: 'instaplus.svg',
						width: '135',
						height: '50'
					},
					{ 
						pic: 'k50_logo.svg',
						width: '150',
						height: '150'
					},
					{ 
						pic: 'kontur.svg',
						width: '150',
						height: '150'
					},
					{ 
						pic: 'loreal.svg',
						width: '150',
						height: '150'
					},
					{ 
						pic: 'maria.svg',
						width: '150',
						height: '150'
					},
					{ 
						pic: 'planeta-zdorovya.svg',
						width: '150',
						height: '150'
					},
					{ 
						pic: 'popmechanic.png',
						width: '370',
						height: '90'
					},
					{ 
						pic: 'Sape.png',
						width: '350',
						height: '179'
					},
					{ 
						pic: 'skillfactory.svg',
						width: '150',
						height: '150'
					},
					{ 
						pic: 'softline.svg',
						width: '150',
						height: '150'
					},
					{ 
						pic: 'talan.png',
						width: '504',
						height: '360'
					},
					{
						pic: 'timepad.png',
						width: '1667',
						height: '834'
					},
					{ 
						pic: 'tooligram.svg',
						width: '150',
						height: '150'
					},
					{ 
						pic: 'uralsib.svg',
						width: '150',
						height: '150'
					},
					{ 
						pic: 'westfalika.svg',
						width: '150',
						height: '150'
					},
					{ 
						pic: 'wikium.svg',
						width: '150',
						height: '150'
					},
					{
						pic: 'yagla.png',
						width: '550',
						height: '200'
					},
					{ 
						pic: 'geekbrains.svg',
						width: '150',
						height: '150'
					},
					{ 
						pic: 'kontur.svg',
						width: '150',
						height: '150'
					},
					{ 
						pic: 'marquiz.png',
						width: '386',
						height: '119'
					},
					{ 
						pic: 'cscart.png',
						width: '494',
						height: '120'
					},
					{ 
						pic: 'progressme.png',
						width: '402',
						height: '94'
					},
					{ 
						pic: 'R-broker.png',
						width: '165',
						height: '56'
					},
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
			height: auto;
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