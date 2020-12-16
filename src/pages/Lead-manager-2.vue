<template>
	<Layout class="page lead-manager-page">
        
        <div class="hero">
			<b-container>
				<b-row class="align-items-center">
					<b-col lg="6">
						<h1 class="mb-4">
							Собирайте данные о пользователях, их действиях, оплатах и коммуникациях. Находите инсайты и точки роста
						</h1>
						<RegistrationForm text="14 дней бесплатно. Регистрируйтесь" />
					</b-col>
				</b-row>
				<g-image class="hero__pic d-none d-lg-block" src="~/assets/images/lead-manager/hero.png" srcset="~/assets/images/lead-manager/hero.png"  width="1005" alt=" " />
				<g-image class="hero__pic d-lg-none" src="~/assets/images/lead-manager/hero-mobile.png" width="800" alt=" " />
			</b-container>
		</div>

		<!-- Вся информация о лидах, их действиях на сайте и история общения -->
		<b-container class="information">
			<b-row>
				<b-col lg="10" xl="8">
					<h2 class="mb-3 mb-lg-4">
						Вся информация о лидах, их действиях на сайте и история общения
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
						Все карточки лидов собираются в одной eCRM
					</h2>
					<p class="mb-4">
						Поиск и гибкая сегментация по свойствам и событиям пользователей поможет выделить только нужный сегмент для рассылки или выгрузки
					</p>
					<div class="d-none d-xl-block text-right mt-5">
						<g-image src="~/assets/images/components/small-1.png" width="180" />
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
							Анализируйте данные и используйте инсайты для роста ваших метрик
						</h2>
						<p>
							После идентификации пользователей собранные данные можно использовать для анализа поведения пользователей в воронках, запуска персонализированных триггерных сообщений и передачи в другие сервисы
						</p>
					</b-col>
					<b-col lg="8">
						<g-image src="~/assets/images/components/medium-3.png" width="720" />
					</b-col>
				</b-row>
			</b-container>
		</div>

		<Cases />

		<!-- Регистрация -->
		<b-container>
			<b-col class="p-4" style="background-color: #FFF3E6; border-radius: 5px;">
				<b-row class="align-items-center justify-content-center">
					<b-col lg="6">
						<g-image src="~/assets/images/components/medium-2.png" width="494" alt="Регистрация в сервисе" title="Поехали!" style="max-width: 100%" />
					</b-col>
					<b-col lg="6">
						<div class="h1 mb-4">Регистрация в&nbsp;сервисе</div>
						<RegistrationForm text="14 дней бесплатно" />
					</b-col>
				</b-row>
			</b-col>
		</b-container>

		<Study />

	</Layout>
</template>

<script>
	import RegistrationForm from '~/components/Forms/RegistrationForm.vue'
	import MegaTabs 		from '~/components/MegaTabs.vue'
	import Cases 			from '~/components/Cases/Cases.vue'
	import Integrations 	from '~/components/Integrations.vue'
	import Study 			from '~/components/Study.vue'

	export default {
		components: {
			RegistrationForm,
			MegaTabs,
			Cases,
			Integrations,
			Study
		},

		//Делаем в HEAD
		metaInfo() {
			return {
				title: 'eCRM от Carrot quest: Сбор данных о клиентах и лидах на своем сайте',
				meta: [
					{
						key: 'description',
						name: 'description',
						content: 'Собирайте данные о каждом пользователе сайта и сегментируйте лиды в eCRM Carrot quest ✅ Добейтесь максимальной персонализации и повысьте конверсию'
					},
					{
						property: "og:image",
						content: '/assets/images/cover/lead-manager.jpg'
					},
				],
				link: [
					{
						rel: 'canonical',
						href: 'https://www.carrotquest.io/lead-manager/'
					}
				]
			}
		},
	}	
</script>

<style lang="scss">
	.lead-manager-page {
		.hero {
			overflow: hidden;
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

		.blue {
			background-color: #F5F6FE;
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