<template>
	<Layout class="page automation-marketing-page">

		<div class="hero">
			<b-container>
				<b-row class="align-items-center">
					<b-col lg="6">
						<h1>
							Автоматизируйте маркетинг, превратите посетителей в&nbsp;покупателей
						</h1>
						<p class="py-3">
							С&nbsp;помощью поп-апов, чат-бота, и&nbsp;email-рассылок автоматизируйте воронку и&nbsp;увеличивайте продажи
						</p>
						<RegistrationForm text="14 дней бесплатно. Регистрируйтесь" />
					</b-col>
				</b-row>
				<g-image class="hero__pic d-none d-lg-block" src="@/assets/images/automation-marketing/hero.png" width="1818" quality="100" style="max-width: 909px;" alt="hero" />
				<g-image class="hero__pic d-lg-none" src="@/assets/images/automation-marketing/hero-mobile.png" width="800" alt=" " />
			</b-container>
		</div>

		<!-- Решает задачи -->
		<b-container class="tasks outline-tabs">
			<b-row class="mb-4">
				<b-col lg="10" xl="8">
					<h2>
						Aвтоматизация маркетинга решает задачи
					</h2>
				</b-col>
			</b-row>
			<b-row>

				<!-- Для eCommerce и B2C -->
				<b-col lg="6">
					<b-row>
						<b-col cols="12">
							<h3 class="font17px">
								Для eCommerce и&nbsp;B2C
							</h3>
						</b-col>
						<b-col cols="6">
							<div class="tasks__box tasks__box-ecom text-center">
								<g-image class="tasks__box__pic mb-4" src="@/assets/images/components/small-13.png" height="180" style="max-height:90px;" fit="inside" alt="Увеличение конверсии в лиды" />
								<p>
									Увеличение конверсии в&nbsp;лиды
								</p>
							</div>
						</b-col>
						<b-col cols="6">
							<div class="tasks__box tasks__box-ecom text-center">
								<g-image class="tasks__box__pic mb-4" src="@/assets/images/components/small-15.png" height="180" style="max-height:90px;" fit="inside" alt="Увеличение конверсии в заказы" />
								<p>
									Увеличение конверсии в&nbsp;заказы
								</p>
							</div>
						</b-col>
						<b-col cols="6">
							<div class="tasks__box tasks__box-ecom text-center">
								<g-image class="tasks__box__pic mb-4" src="@/assets/images/components/small-16.png" height="180" style="max-height:90px;" fit="inside" alt="Увеличение количества первых покупок" />
								<p>
									Увеличение количества первых покупок
								</p>
							</div>
						</b-col>
						<b-col cols="6">
							<div class="tasks__box tasks__box-ecom text-center">
								<g-image class="tasks__box__pic mb-4" src="@/assets/images/components/small-17.png" height="180" style="max-height:90px;" fit="inside" alt="Увеличение количества повторных покупок" />
								<p>
									Увеличение количества повторных покупок
								</p>
							</div>
						</b-col>
					</b-row>
				</b-col>

				<!-- Для SaaS и B2B -->
				<b-col lg="6" class="mt-5 mt-lg-0">
					<b-row>
						<b-col cols="12">
							<h3 class="font17px">
								Для SaaS и&nbsp;B2B
							</h3>
						</b-col>
						<b-col cols="6" class="h-50">
							<div class="tasks__box tasks__box-saas text-center">
								<g-image class="tasks__box__pic mb-4" src="@/assets/images/components/small-12.png" height="180" style="max-height:90px;" fit="inside" alt="Увеличение LTV" />
								<p>
									Увеличение LTV
									<br><br>
								</p>
							</div>
						</b-col>
						<b-col cols="6">
							<div class="tasks__box tasks__box-saas text-center">
								<g-image class="tasks__box__pic mb-4" src="@/assets/images/components/small-18.png" height="180" style="max-height:90px;" fit="inside" alt="Увеличение Retention" />
								<p>
									Увеличение Retention
								</p>
							</div>
						</b-col>
						<b-col cols="6">
							<div class="tasks__box tasks__box-saas text-center">
								<g-image class="tasks__box__pic mb-4" src="@/assets/images/components/small-14.png" width="240" height="180" fit="contain" background="#F8F8FF" style="max-height:90px;" alt="Увеличение количества регистраций" />
								<p>
									Увеличение количества регистраций
								</p>
							</div>
						</b-col>
						<b-col cols="6">
							<div class="tasks__box tasks__box-saas text-center">
								<g-image class="tasks__box__pic mb-4" src="@/assets/images/components/small-19.png" width="240" height="180" fit="contain" background="#F8F8FF" style="max-height:90px;" alt="Оптимизация онбординга пользователей" />
								<p>
									Оптимизация онбординга пользователей
								</p>
							</div>
						</b-col>
					</b-row>
				</b-col>
			</b-row>
		</b-container>

		<!-- Автоваронка -->
		<Pipeline title="Анализируйте эффективность триггерных сообщений и&nbsp;проводите А/В тесты" />

		<!-- Данные действий пользователя -->
		<b-container class="data">
			<b-row>
				<b-col lg="10" xl="8">
					<h2 class="mb-3 mb-lg-4">
						Автоматизация маркетинга основана на&nbsp;данных о&nbsp;действиях пользователя
					</h2>
					<p class="mb-3 mb-lg-4">
						Ваша команда увидит каждую мелочь о&nbsp;клиенте. Это помогает успешно закрывать сделки 
						и&nbsp;решать вопросы пользователей. Собирайте данные, чтобы улучшить автоматизацию маркетинга
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

		<!-- Регистрация -->
		<b-container>
			<b-col class="p-4" style="background-color: #FFF3E6; border-radius: 5px;">
				<b-row class="align-items-center justify-content-center">
					<b-col lg="6">
						<g-image src="@/assets/images/components/medium-1.png" width="450" alt="Регистрация в сервисе" title="Поехали!" style="max-width: 100%" />
					</b-col>
					<b-col lg="6">
						<h2 class="h1 mb-4">Зарегистрируйтесь и&nbsp;получите 14&nbsp;дней бесплатно</h2>
						<RegistrationForm button="Зарегистрироваться" />
					</b-col>
				</b-row>
			</b-col>
		</b-container>

		<!-- Собирай -->
		<b-container class="collect">
			<b-row>
				<b-col lg="10" xl="8">
					<h2>
						Собирайте все способы коммуникации вместе
					</h2>
				</b-col>
			</b-row>
			<b-row>
				<b-col cols="6" lg="4">
					<a href="/pop-up/" class="collect__box box text-center p-4">
						<p>
							Поп-ап окна
						</p>
						<g-image src="@/assets/images/automation-marketing/collect-1.svg" height="158" alt="Поп-ап окна" />
					</a>
				</b-col>
				<b-col cols="6" lg="4">
					<g-link to="/online-consultant/" class="collect__box box text-center p-4">
						<p>
							Онлайн-чат на&nbsp;сайте
						</p>
						<g-image src="@/assets/images/automation-marketing/collect-2.svg" height="158" alt="Онлайн-чат на сайте" />
					</g-link>
				</b-col>
				<b-col cols="6" lg="4">
					<a href="/email-marketing/" class="collect__box box text-center p-4">
						<p>
							Email-рассылка
						</p>
						<g-image src="@/assets/images/automation-marketing/collect-3.svg" height="158" alt="Email-рассылка" />
					</a>
				</b-col>
				<b-col cols="6" lg="4">
					<a href="/chatbot/" class="collect__box box text-center p-4">
						<p>
							Чат-бот
						</p>
						<g-image src="@/assets/images/automation-marketing/collect-4.svg" height="158" alt="Чат-бот" />
					</a>
				</b-col>
				<b-col cols="6" lg="4">
					<div class="collect__box text-center p-4">
						<p>
							SMS и&nbsp;звонки
						</p>
						<g-image src="@/assets/images/automation-marketing/collect-5.svg" height="158" alt="SMS и&nbsp;звонки" />
					</div>
				</b-col>
			</b-row>
		</b-container>

		<!-- Автоматизируй -->
		<b-container class="automation">
			<b-row>
				<b-col lg="10" xl="8">
					<h2 class="mb-3 mb-lg-4">
						Автоматизируйте продажи с&nbsp;помощью триггерных сообщений, основанных на&nbsp;действиях пользователей
					</h2>
				</b-col>
			</b-row>
			<b-row class="automation__box">
				<b-col class="order-lg-2">
					<h3 class="h4 mt-lg-5">
						Подготовьте сообщения в&nbsp;чат, поп-ап, письмо, лид-бота или что-то более хитрое
					</h3>
					<p>
						Настраивайте разные типы сообщений, с&nbsp;персонализацией, с&nbsp;классным дизайном (с&nbsp;десятком готовых шаблонов).
					</p>
					<g-image class="automation__box__pic-small automation__box__pic-small-1 d-none d-xl-block" src="@/assets/images/components/small-7.png" width="200" />
				</b-col>
				<b-col cols="12" lg="8" class="order-lg-1">
					<g-image class="automation__box__pic" src="@/assets/images/automation-marketing/automation-1.png" width="1520" quality="100" />
				</b-col>
			</b-row>
			<b-row class="automation__box">
				<b-col class="order-lg-2">
					<h3 class="h4 mt-lg-5">
						Выберите триггер, событие/время
					</h3>
					<p>
						Один или несколько триггеров запускают триггерное сообщение
					</p>
					<p>
						Таймаут для отложенной отправки сообщения
					</p>
					<g-image class="automation__box__pic-small automation__box__pic-small-2 d-none d-xl-block" src="@/assets/images/components/small-10.png" width="150" />
				</b-col>
				<b-col cols="12" lg="8" class="order-lg-1">
					<g-image class="automation__box__pic" src="@/assets/images/automation-marketing/automation-2.png" width="1520" quality="100" />
				</b-col>
			</b-row>
			<b-row class="automation__box">
				<b-col class="order-lg-2">
					<h3 class="h4 mt-lg-5">
						Определите аудиторию
					</h3>
					<p>
						Определение аудитории, которой показывать автоматическое сообщение
					</p>
					<g-image class="automation__box__pic-small automation__box__pic-small-3 d-none d-xl-block" src="@/assets/images/components/small-11.png" width="150" />
				</b-col>
				<b-col cols="12" lg="8" class="order-lg-1">
					<g-image class="automation__box__pic" src="@/assets/images/automation-marketing/automation-3.png" width="1520" quality="100" />
				</b-col>
			</b-row>
			<b-row class="automation__box">
				<b-col class="order-lg-2">
					<h3 class="h4 mt-lg-5">
						Результаты автоматизации
					</h3>
					<p>
						Подробная статистика по&nbsp;каждому сообщению поможет контролировать и&nbsp;улучшать результаты автоматизации маркетинга
					</p>
					<g-image class="automation__box__pic-small automation__box__pic-small-4 d-none d-xl-block" src="@/assets/images/components/small-8.png" width="200" />
				</b-col>
				<b-col cols="12" lg="8" class="order-lg-1">
					<g-image class="automation__box__pic" src="@/assets/images/automation-marketing/automation-4.png" width="1520" quality="100" />
				</b-col>
			</b-row>
		</b-container>

		<!-- Анализируй -->
		<b-container class="analize outline-tabs">
			<b-row>
				<b-col lg="10" xl="8">
					<h2>
						Анализируйте эффективность триггерных сообщений и&nbsp;проводите А/В тесты
					</h2>
				</b-col>
			</b-row>
			<b-row>
				<b-col cols-12>
					<b-tabs pills class="mt-3 mt-lg-4">
						<b-tab title="Воронки" active lazy>
							<div class="analize__box p-4 p-md-5 mt-4 text-center">
								<p class="pb-2">
									Постройте воронку своего бизнеса, чтобы найти узкие места
								</p>
								<g-image src="@/assets/images/automation-marketing/analize-1.png" width="760" height="617" />
							</div>
						</b-tab>
						<b-tab title="А/Б тесты" lazy>
							<div class="analize__box p-4 p-md-5 mt-4 text-center">
								<p>
									Постройте воронку своего бизнеса, чтобы найти узкие места
								</p>
								<g-image src="@/assets/images/automation-marketing/analize-2.png" width="760" height="617" />
							</div>
						</b-tab>
					</b-tabs>
				</b-col>
			</b-row>
		</b-container>

		<Integrations />

		<Cases />

		<Study />

		<!-- Регистрация -->
		<b-container>
			<b-col class="p-4" style="background-color: #FFF3E6; border-radius: 5px;">
				<b-row class="align-items-center justify-content-center">
					<b-col lg="6">
						<g-image src="@/assets/images/components/medium-2.png" width="494" alt="Регистрация в сервисе" title="Поехали!" style="max-width: 100%" />
					</b-col>
					<b-col lg="6">
						<div class="h1 mb-4">Запустите автоматизацию маркетинга.&nbsp;14&nbsp;дней бесплатно</div>
						<RegistrationForm />
					</b-col>
				</b-row>
			</b-col>
		</b-container>

	</Layout>
</template>

<script>
	import RegistrationForm from '~/components/Forms/RegistrationForm.vue'
	import Pipeline 		from '~/components/Pipeline.vue'
	import Cases 			from '~/components/Cases/Cases.vue'
	import Integrations 	from '~/components/Integrations.vue'
	import Study 			from '~/components/Study.vue'

	export default {
		components: {
			RegistrationForm,
			Cases,
			Integrations,
			Study
		},

		//Делаем в HEAD
		metaInfo() {
			return {
				title: 'Автоматизация маркетинга и продаж',
				meta: [
					{
						key: 'description',
						name: 'description',
                        content: 'Автоматизируйте маркетинг и продажи ✅  превратите посетителей своего сайта в покупателей, используя все инструменты коммуникации'
					},
					{
						property: "og:image",
						content: 'https://www.carrotquest.io/assets/images/cover/automation-marketing.png'
					},
				],
				link: [
					{
						rel: 'canonical',
						href: 'https://www.carrotquest.io/automation-marketing/'
					}
				]
			}
		},
	}	
</script>

<style lang="scss">
	.automation-marketing-page {
		.hero {
			&__pic {
				position: absolute;
				top: -50px;
				left: 50%;
				z-index: -1;
			}
		}

		.tasks {
			.col-6 {
				margin-top: 20px;
				margin-bottom: 20px;
			}
			&__box {
				border-radius: 5px;
				height: 100%;
				padding: 20px 10px 5px 10px;
				&-ecom {
					background-color: #FFF7EC;
				}
				&-saas {
					background-color: #F8F8FF;
				}
				img {
					width: initial;
				}
			}
		}

		.data {
			video {
				max-width: 100%;
				border-radius: 5px;
			}
		}

		.collect {
			.col-6 {
				margin-top: 20px;
				margin-bottom: 20px;
			}
			&__box {
				background-color: #F8F8FF;
				border-radius: 5px;
				height: 100%;
				img {
					max-width: 100%;
				}
			}
		}

		.automation {
			&__box {
				margin-bottom: 6rem;
				&__pic {
					border-radius: 5px;
					max-width: 100%;
				}
				&__pic-small {
					float: right;
					margin-top: 3rem;
				}
			}
		}

		.analize {
			&__box {
				background-color: #F8F8FF;
				border-radius: 5px;
				img {
					max-width: 100%;
				}
			}
		}

		@media (max-width: 575.98px) {
			.tasks {
				&__box {
					img {
						width: inherit;
						height: 60px;
					}
					p {
						font-size: 0.875rem;
						line-height: 1.5rem;
					}
				}
			}
		}
		@media (max-width: 767.98px) {
			.hero {
				&__pic {
					left: 20%;
				}
			}
			.tasks , .collect {
				.col-6 {
					margin-top: 10px;
					margin-bottom: 10px;
					padding-left: 10px;
					padding-right: 10px;
				}
			}
			.automation {
				&__box {
					margin-bottom: 3rem;
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
					left: 40%;
				}
			}
		}
		@media (min-width: 1440px) {
			.hero {
				&__pic {
					top: 20px;
					left: 50%;
				}
			}
		}
	}
</style>