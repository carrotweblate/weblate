<template>
	<b-container class="MegaTabs">

		<!-- Заголовок блока -->
		<b-row class="justify-content-center">
			<b-col cols="12" lg="10" xl="9" class="mb-3 mb-md-5 text-center">
				<h2 class="h1" v-html="title" />
				<p v-if="description" v-html="description" class="mt-4" />
			</b-col>
		</b-row>

		<!-- Вкладки -->
		<b-row class="d-none d-lg-flex">
			<b-col>
				<b-tabs pills vertical end nav-wrapper-class="col-4">
					<b-tab v-for="item in tabs" :key="item.title">
						<template #title>
							<span v-html="item.title" />
						</template>
						<!-- Видео -->
						<b-embed v-if="item.pic.search('mp4') > 0"
							v-b-visible.once="callback"
							type="video" 
							aspect="1by1"
							autoplay loop muted playsinline
							loading="lazy"
							>
							<source v-if="visible" :src="'https://www.carrotquest.io' + item.pic.replace('mp4','webm')" type="video/webm">
							<source v-if="visible" :src="'https://www.carrotquest.io' + item.pic" type="video/mp4">
						</b-embed>
						<!-- Изображение -->
						<ik-image v-else
							:path="'/components/' + item.pic"
							:transformation="[{width:720,height:600,crop:'at_max'}]"
							width="720"
							height="600"
							loading="lazy"
							class="mw-100"
							:alt="item.title"
						/>
					</b-tab>
					<template #tabs-end>
						<div v-if="more" class="more mt-4">
							<a :href="more.href" v-html="more.text" />
						</div>
						<div v-if="text" class="text mt-4" v-html="text" />
					</template>
				</b-tabs>
			</b-col> 
		</b-row>

		<!-- Блоки на мобиле -->
		<b-row class="d-lg-none mobile">
			<b-col cols="12">
				<b-card no-body v-for="item in tabs" :key="item.title">
					<div class="h4 p-3 mb-0" v-html="item.title" />
					<div class="p-3">
						<!-- Видео -->
						<b-embed v-if="item.pic.search('mp4') > 0"
							v-b-visible.once="callback"
							type="video" 
							aspect="1by1"
							autoplay loop muted playsinline
							>
							<source v-if="visible" :src="'https://www.carrotquest.io' + item.pic.replace('mp4','webm')" type="video/webm">
							<source v-if="visible" :src="'https://www.carrotquest.io' + item.pic" type="video/mp4">
						</b-embed>
						<ik-image v-else
							:path="'/components/' + item.pic"
							:transformation="[{width:720,height:600,crop:'at_max'}]"
							:lqip="{active:true, quality: 40, blur: 10}"
							width="720"
							height="600"
							loading="lazy"
							class="mw-100"
							:alt="item.title"
						/>
					</div>
				</b-card>
				<div v-if="more" class="more">
					<a :href="more.href" v-text="more.text" />
				</div>
				<div v-if="text" class="text mt-4" v-html="text" />
			</b-col>
		</b-row>

		<!-- Инструменты для этих задач -->
		<b-row v-if="instruments" class="instruments">
			<b-col cols="12">
				<h3 class="h2">
					Инструменты для этих задач
				</h3>
			</b-col>
			<b-col lg="3" v-for="item in instruments" :key="item.title" class="mt-4 mt-md-5 mt-lg-4">
				<a :href="item.href" class="box">
					<ik-image
						:path="'/components/' + item.pic"
						:transformation="[{width:160,height:96,crop:'at_max'}]"
						:lqip="{active:true, quality: 40, blur: 10}"
						width="160"
						height="96"
						loading="lazy"
						class="mw-100"
						:alt="item.title.replace('<i>', '').replace('</i>', '')"
					/>
					<div class="title" v-html="item.title" />
				</a>
			</b-col>
		</b-row>
		
	</b-container>
</template>



<script>
	import { BTabs , BTab , BCard , BEmbed } from 'bootstrap-vue'

	export default {
		components: {
			BTabs,
			BTab,
			BCard,
			BEmbed
		},
		props: {
			title: String,
			description: String,
			tabs: Array,
			more: Object,
			text: String,
			instruments: Array
		},
		data() {
			return {
				visible: false
			}
		},
		methods: {
			callback(visible) {
				if (visible) {
					this.visible = true
				}
			}
		}
	}
</script>



<style lang="scss">
	.MegaTabs {
		.h1 {
			@media (min-width: 768px) { 
				text-align: center;
			}
		}
		.tabs {
			.tab-pane {
				height: 600px;
				text-align: center;
				img , video {
					width: auto;
					height: auto;
					max-width: 100%;
					border-radius: 5px;
					max-height: 600px;
				}
			}
			.nav {
				.nav-item {
					&:first-child .nav-link {
						border-radius: 5px 5px 0 0;
					}
					&:last-of-type .nav-link {
						border-radius: 0 0 5px 5px;
						border-bottom: 0;
					}
				}
				.nav-link {
					border-radius: 0;
					border-bottom: 1px solid #EEE;
					background-color: #fff;
					color: #000;
					transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
					span {
						border-bottom: 1px dashed $primary;
					}
					&:hover {
						color: $primary;
						span {
							border-bottom: 1px dashed #fff;
						}
					}
					&.active {
						background-color: $primary;
						color: #fff;
						span {
							border-bottom: 1px dashed $primary;
						}
					}
					@media (min-width: 1200px) {
						padding: 1rem 1.5rem;
						// padding-right: 3rem;
						&.active {
							// padding-left: 3rem;
							padding-right: 1.5rem;
							// &::before {
							// 	content: "←";
							// 	position: absolute;
							// 	margin-left: -1.5rem;
							// }
						}
					}
				}
			}
		}

		.mobile {
			.card {
				margin-bottom: 1.5rem;
				background-color: #fff;
				border-radius: 5px;
			}
			img , video {
				display: block;
				max-width: 100%;
				height: inherit;
				margin: 0 auto;
			}
			.h4 {
				border-bottom: 1px solid rgba(0, 0, 0, 0.125);
			}
		}

		.more {
			a {
				display: block;
				background-color: #fff;
				padding: 1rem;
				border-radius: 5px;
				transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
				&:hover {
					background-color: $primary;
					color: #fff;
				}
			}
			& a::after {
				content: "→";
				margin-left: 0.5rem;
			}
		}

		.instruments {
			margin-top: 3.5rem;
			a {
				display: block;
				padding: 2rem 1rem 1.5rem;
				background-color: #fff;
				border-radius: 5px;
				text-align: center;
				color: #000;
				height: 100%;
				img {
					width: auto;
					height: 96px;
					margin-bottom: 1.5rem;
				}
				i {
					font-style: normal;
					color: $primary;
				}
				@media (max-width: 575.98px) {
					font-size: 0.875rem;
					line-height: 1.5rem;
				}
			}
		}		
	}
</style>