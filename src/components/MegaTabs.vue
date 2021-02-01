<template>
	<b-container class="MegaTabs">

		<!-- Заголовок блока -->
		<b-row class="justify-content-center">
			<b-col cols="12" lg="10" xl="9">
				<h2 class="h1 mb-3 mb-md-5" v-html="title" />
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
							type="video" 
							aspect="1by1"
							autoplay loop muted playsinline
							>
							<source :src="item.pic.replace('mp4','webm')" type="video/webm">
							<source :src="item.pic" type="video/mp4">
						</b-embed>
						<!-- Изображение -->
						<template v-else>
							<g-image
								:src="require(`!!assets-loader?width=1440&height=1080&fit=contain&background=transparent!@/assets/images/components/${item.pic}`)"
								:alt="item.title"
								quality="100"
							/>
						</template>
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
					<div class="title p-2" v-html="item.title" />
					<div class="p-3">
						<!-- Видео -->
						<b-embed v-if="item.pic.search('mp4') > 0"
							type="video" 
							aspect="1by1"
							autoplay loop muted playsinline
							>
							<source :src="item.pic.replace('mp4','webm')" type="video/webm">
							<source :src="item.pic" type="video/mp4">
						</b-embed>
						<!-- Изображение -->
						<g-image v-else
							:src="require(`!!assets-loader?width=800&height=700&fit=contain&background=#ffffff!@/assets/images/components/${item.pic}`)"
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
					<g-image
						:src="require(`!!assets-loader?width=160&height=96&fit=contain&background=#fff!@/assets/images/components/${item.pic}`)"
						:alt="item.title.replace('<i>', '').replace('</i>', '')"
					/>
					<div class="title" v-html="item.title" />
				</a>
			</b-col>
		</b-row>
		
	</b-container>
</template>



<script>
	export default {
		props: {
			title: String,
			tabs: Array,
			more: Object,
			text: String,
			instruments: Array
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
						border-bottom: 1px dashed #FF7C16;
					}
					&:hover {
						color: #FF7C16;
						span {
							border-bottom: 1px dashed #fff;
						}
					}
					&.active {
						background-color: #FF7C16;
						color: #fff;
						span {
							border-bottom: 1px dashed #FF7C16;
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
				margin-bottom: 24px;
			}
			img , video {
				display: block;
				max-width: 100%;
				margin: 0 auto;
			}
			.title {
				border-radius: 5px 5px 0 0;
				background-color: #FF7C16;
				color: #fff;
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
					background-color: #FF7C16;
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
					color: #FF7C16;
				}
				@media (max-width: 575.98px) {
					font-size: 0.875rem;
					line-height: 1.5rem;
				}
			}
		}
		@media (max-width: 991.98px) {
			.mobile .title {
				color: #000;
				border-bottom: 1px solid rgba(0, 0, 0, 0.125);
				background-color: #fff;
			}
		}
		
	}
</style>