<template>
	<Layout :header="true" :footer="true"  class="page lead-manager-page">

		<div class="hero">
			<b-container>
				<b-row class="align-items-center">
					<b-col lg="7">
						<h1 class="mb-4">
							Собирайте данные о&nbsp;пользователях, их&nbsp;действиях, оплатах и&nbsp;коммуникациях. Находите инсайты и&nbsp;точки роста
						</h1>
						<RegistrationForm text="14 дней бесплатно. Регистрируйтесь" />
					</b-col>
				</b-row>
				<g-image class="hero__pic d-none d-lg-block" src="@/assets/images/lead-manager/hero.png" width="2010" alt=" " style="max-width: 1005px;" />
				<g-image class="hero__pic d-lg-none" src="@/assets/images/lead-manager/hero-mobile.png" width="800" alt=" " />
			</b-container>
		</div>

		<!-- Вся информация о лидах, их действиях на сайте и история общения -->
		<b-container class="information">
			<b-row>
				<b-col lg="10" xl="8">
					<h2 class="mb-3 mb-lg-4">
						Вся информация о&nbsp;лидах, их&nbsp;действиях на&nbsp;сайте и&nbsp;история общения
					</h2>
					<p class="mb-3 mb-lg-4">
						Ваша команда увидит каждую мелочь о&nbsp;клиенте. Это помогает успешно закрывать сделки 
						и&nbsp;решать вопросы. Собирайте данные, чтобы улучшить автоматизацию маркетинга
					</p>
				</b-col>
			</b-row>
			<b-row>
				<b-col>
					<video type="video" autoplay loop muted playsinline>
						<source src="/assets/video/components/3.webm" type="video/webm">
						<source src="/assets/video/components/3.mp4" type="video/mp4">
					</video>
				</b-col>
			</b-row>
		</b-container>

		<!-- Все карточки лидов собираются в одной eCRM -->
		<b-container class="liads">
			<b-row>
				<b-col lg="4" class="order-lg-2">
					<h2 class="mb-3 mb-lg-4">
						Все карточки лидов собираются в&nbsp;одной eCRM
					</h2>
					<p class="mb-4">
						Поиск и&nbsp;гибкая сегментация по&nbsp;свойствам и&nbsp;событиям пользователей поможет выделить только нужный сегмент для рассылки или выгрузки
					</p>
					<div class="d-none d-xl-block text-right mt-5">
						<g-image src="@/assets/images/components/small-1.png" width="180" />
					</div>
				</b-col>
				<b-col lg="8">
					<video type="video" autoplay loop muted playsinline>
						<source src="/assets/video/components/2.webm" type="video/webm">
						<source src="/assets/video/components/2.mp4" type="video/mp4">
					</video>
				</b-col>
			</b-row>
		</b-container>

		<div class="blue">
			<b-container>
				<b-row class="collect">
					<MegaTabs 
						title="Собирайте данные с сайта и других систем в Carrot quest удобным для вас способом"
						:tabs="[
							{
								title: 'Базовые события, такие как посещение страниц и клики на элементы, можно настроить без программистов',
								pic: '14.png'
							},
							{
								title: 'Используйте инструменты коммуникаций, чтобы собирать инсайты',
								pic: '12.png'
							},
							{
								title: 'Если вам недостаточно стандартных способов сбора данных, воспользуйтесь инструментами для разработчиков',
								pic: '13.png'
							}
						]"
					/>
				</b-row>
			</b-container>
		</div>

		<Integrations />

		<div class="blue">
			<b-container>
				<b-row class="analize">
					<b-col lg="4" class="order-lg-2">
						<h2 class="mb-3 mb-lg-4">
							Анализируйте данные и&nbsp;используйте инсайты для роста ваших метрик
						</h2>
						<p>
							После идентификации пользователей собранные данные можно использовать для анализа поведения пользователей в&nbsp;воронках, запуска персонализированных триггерных сообщений и&nbsp;передачи в&nbsp;другие сервисы
						</p>
					</b-col>
					<b-col lg="8">
						<g-image src="@/assets/images/components/medium-3.png" width="720" />
					</b-col>
				</b-row>
			</b-container>
		</div>

		<Cases />

		<!-- Логотипы по отрослям -->
		<b-container class="logostabs outline-tabs">
			<b-row>
				<b-col lg="10" xl="8">
					<h2>
						Carrot quest полезен для разных сегментов бизнеса
					</h2>
				</b-col>
			</b-row>
			<b-row>
				<b-col cols-12>
					<b-tabs pills class="mt-3 mt-lg-4">
						<b-tab title="eCommerce" active lazy>
							<div class="logostabs__box mt-4">
								<img src="/assets/images/logos/loreal.png" alt="loreal" />
								<img src="/assets/images/logos/planeta-zdorovya.svg" alt="planeta-zdorovya" />
								<img src="/assets/images/logos/armani-beauty.svg" alt="armani-beauty" />
								<img src="/assets/images/logos/maria.svg" alt="maria" />
								<img src="/assets/images/logos/lancome.png" alt="lancome" />
								<img src="/assets/images/logos/aquafour.svg" alt="aquafour" />
								<img src="/assets/images/logos/postel_deluxe.png" alt="postel_deluxe" />
								<img src="/assets/images/logos/lancome.png" alt="lancome" />
							</div>
						</b-tab>
						<b-tab title="SaaS" lazy>
							<div class="logostabs__box mt-4">
								<img src="/assets/images/logos/timepad.png" alt="timepad" />
								<img src="/assets/images/logos/domru.svg" alt="domru" />
								<img src="/assets/images/logos/instaplus.svg" alt="instaplus" />
								<img src="/assets/images/logos/kontur.svg" alt="kontur" />
								<img src="/assets/images/logos/Sape.png" alt="Sape" />
							</div>
						</b-tab>
						<b-tab title="Автодилеры и недвижимость" lazy>
							<div class="logostabs__box mt-4">
								<img src="/assets/images/logos/samolet.svg" alt="samolet" />
								<img src="/assets/images/logos/talan.png" alt="talan" />
								<img src="/assets/images/logos/jaguar.svg" alt="jaguar" />
								<img src="/assets/images/logos/avis-red.svg" alt="avis" />
								<img src="/assets/images/logos/Land_Rover.svg" alt="Land_Rover" />
							</div>
						</b-tab>
						<b-tab title="B2B, банки и страховые компании" lazy>
							<div class="logostabs__box mt-4">
								<img src="/assets/images/logos/modulbank.svg" alt="modulbank" />
								<img src="/assets/images/logos/bank-spb.svg" alt="bank-spb" />
								<img src="/assets/images/logos/R-broker.png" alt="R-broker" />
								<img src="/assets/images/logos/bks.svg" alt="bks" />
								<img src="/assets/images/logos/Pervofd.png" alt="__Pervofd___" />
							</div>
						</b-tab>
					</b-tabs>
				</b-col>
			</b-row>
		</b-container>

		<Study />

		<!-- Регистрация -->
		<b-container>
			<b-col class="p-4" style="background-color: #FFF3E6; border-radius: 5px;">
				<b-row class="align-items-center justify-content-center">
					<b-col lg="6">
						<div class="h1 mb-4">Зарегистрируйтесь и&nbsp;получите 14&nbsp;дней бесплатно</div>
						<RegistrationForm button="Зарегистрироваться" />
					</b-col>
					<b-col lg="6">
						<g-image src="@/assets/images/components/medium-2.png" width="494" alt="Регистрация в сервисе" title="Поехали!" style="max-width: 100%" />
					</b-col>
				</b-row>
			</b-col>
		</b-container>

	</Layout>
</template>

<script>
	import RegistrationForm from '@/components/Forms/RegistrationForm.vue'
	import MegaTabs 		from '@/components/MegaTabs.vue'
	import Cases 			from '@/components/Cases/Cases.vue'
	import Integrations 	from '@/components/Integrations.vue'
	import Study 			from '@/components/Study.vue'
	import { BTabs , BTab } from 'bootstrap-vue'

	export default {
		components: {
			RegistrationForm,
			MegaTabs,
			Cases,
			Integrations,
			Study,
			BTabs , BTab
		},
		data() {
			return {
				//Делаем в HEAD
				metaTitle: 'eCRM, собирайте данных о клиентах и используйте их для роста',
				metaDescription: 'eCRM от в Carrot quest: собирайте данные о каждом пользователе и сегментируйте их, добийтесь максимальной персонализации и повысьте конверсию',
				metaCanonical: 'https://www.carrotquest.io/lead-manager/',
				metaImage: 'https://www.carrotquest.io/assets/images/cover/lead-manager.png',
			}
		}
	}	
</script>

<style lang="scss">
	.lead-manager-page {
		.hero {
			&__pic {
				position: absolute;
				top: -50px;
				left: 10%;
				z-index: -1;
			}
		}

		.information {
			video {
				max-width: 100%;
				border-radius: 5px;
			}
		}

		.liads {
			video {
				max-width: 100%;
				border: 1px solid #EDEDED;
				border-radius: 5px;
			}
		}

		.collect {
			padding-top: 6rem;
		}

		.analize {
			padding-top: 6rem;
			padding-bottom: 6rem;
			img {
				max-width: 100%;
			}
		}

		.logostabs {
			img {
				max-width: 140px;
				max-height: 100px;
				margin: 2rem 4rem 2rem 0;
			}
		}

		.blue {
			background-color: #F3F3FF;
		}

		@media (max-width: 575.98px) {
			.logostabs {
				img {
					max-width: calc(50% - 2rem);
					margin: 1rem;
				}
			}
		}
		@media (min-width: 992px) {
			.hero {
				&__pic {
					left: 30%;
				}
			}
		}
		@media (min-width: 1200px) {
			.hero {
				&__pic {
					left: 35%;
				}
			}
		}
		@media (min-width: 1440px) {
			.hero {
				&__pic {
					top: 0;
					left: 40%;
				}
			}
		}
	}
</style>