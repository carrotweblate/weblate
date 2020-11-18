<template>
	<b-container class="MegaTabs">

		<!-- Заголовок блока -->
		<b-row class="justify-content-center">
			<b-col cols="12" lg="10" xl="9">
				<div class="h1 mb-5" v-html="title" />
			</b-col>
		</b-row>

		<!-- Вкладки -->
		<b-row class="d-none d-lg-flex">
			<b-col>
				<b-tabs pills vertical end nav-wrapper-class="col-4">
					<b-tab v-for="item in tabs" :key="item.title" :title="item.title">
						<!-- Видео -->
						<b-embed v-if="item.pic.search('mp4') > 0"
							type="video" 
							aspect="4by3"
							autoplay loop muted playsinline
							>
							<source :src="item.pic" type="video/mp4">
						</b-embed>
						<!-- Изображение -->
						<g-image v-else
							:src="require(`!!assets-loader?width=720&height=540&fit=contain&background=#F5F6FE!@/assets/images/components/${item.pic}`)"
							:alt="item.title"
						/>
					</b-tab>
					<template v-if="more" #tabs-end>
						<div class="more">
							<a :href="more.href" v-text="more.text" />
						</div>
					</template>
				</b-tabs>
			</b-col> 
		</b-row>

		<!-- Аккардеон -->
		<b-row class="d-lg-none">
			<b-col cols="12">
				<div class="accordion" role="tablist">
					<b-card no-body v-for="(item , index) in tabs" :key="item.title" :title="item.title">
						<div role="tab">
							<b-button block v-b-toggle="'accordion-' + index" v-html="item.title" class="p-3" />
						</div>
						<b-collapse :id="'accordion-' + index" visible accordion="my-accordion" role="tabpanel" class="p-5">
							<!-- Видео -->
							<b-embed
								v-if="item.pic.search('mp4') > 0"
								type="video" 
								autoplay loop muted playsinline
								>
								<source :src="item.pic" type="video/mp4">
							</b-embed>
							<!-- Изображение -->
							<g-image
								v-else
								:src="require(`!!assets-loader?width=540&height=540&fit=contain&background=#fff!@/assets/images/components/${item.pic}`)"
								:alt="item.title"
							/>
						</b-collapse>
					</b-card>
				</div>
				<div v-if="more" class="more">
					<a :href="more.href" v-text="more.text" />
				</div>
			</b-col>
		</b-row>

		<!-- Инструменты для этих задач -->
		<b-row v-if="instruments" class="instruments">
			<b-col cols="12">
				<div class="h2">
					Инструменты для этих задач
				</div>
			</b-col>
			<b-col cols="6" lg="3" v-for="item in instruments" :key="item.title" class="mt-4 mt-md-5 mt-lg-4">
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
			more: Array,
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
				height: 540px;
				text-align: center;
				img , video {
					max-width: 100%;
					max-height: 540px;
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
					&:hover {
						color: #FF6600;
					}
					&.active {
						background-color: #FF6600;
						color: #fff;
					}
					@media (min-width: 1200px) {
						padding: 1.5rem;
						padding-right: 3rem;
						&.active {
							padding-left: 3rem;
							padding-right: 1.5rem;
							&::before {
								content: "←";
								position: absolute;
								margin-left: -1.5rem;
							}
						}
					}
				}
			}
			
			
		}

		.accordion {
			img , video {
				max-width: 100%;
			}
			.btn {
				color: #000;
				background-color: #fff;
				border: 0;
				border-radius: 0;
			}
			.btn.not-collapsed {
				background-color: #FF6600;
				color: #fff;
			}
		}

		.more {
			margin-top: 2rem;
			& a::after {
				content: "→";
				margin-left: 0.5rem;
			}
			@media (min-width: 1200px) {
				margin-top: 2.5rem;
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
					color: #FF6600;
				}
				@media (max-width: 575.98px) {
					font-size: 0.875rem;
					line-height: 1.5rem;
					img {
						width: 100%;
						height: initial;
					}
				}
			}
			
		}
		
		
	}
</style>