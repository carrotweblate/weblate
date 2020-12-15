<template>
	<Layout class="page automation-marketing-page">

		<div class="hero">
			<b-container>
				<b-row class="align-items-center">
					<b-col lg="6">
						<h1>
							Автоматизируйте маркетинг, превратите посетителей в покупателей
						</h1>
						<p class="py-3">
							С помощью поп-апов, чат-бота, и email-рассылок автоматизируйте воронку и увеличивайте продажи
						</p>
						<RegistrationForm />
					</b-col>
				</b-row>
				<g-image class="hero__pic d-none d-lg-block" src="@/assets/images/automation-marketing/hero.png" width="909" alt=" " />
				<g-image class="hero__pic d-lg-none" src="@/assets/images/automation-marketing/hero-mobile.png" width="909" alt=" " />
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
								Для eCommerce и B2C
							</h3>
						</b-col>
						<b-col cols="6">
							<div class="tasks__box tasks__box-ecom text-center">
								<g-image class="tasks__box__pic mb-4" src="@/assets/images/components/small-13.png" height="90" fit="inside" alt="Увеличение конверсии в лиды" />
								<p>
									Увеличение конверсии в лиды
								</p>
							</div>
						</b-col>
						<b-col cols="6">
							<div class="tasks__box tasks__box-ecom text-center">
								<g-image class="tasks__box__pic mb-4" src="@/assets/images/components/small-15.png" height="90" fit="inside" alt="Увеличение конверсии в заказы" />
								<p>
									Увеличение конверсии в заказы
								</p>
							</div>
						</b-col>
						<b-col cols="6">
							<div class="tasks__box tasks__box-ecom text-center">
								<g-image class="tasks__box__pic mb-4" src="@/assets/images/components/small-16.png" height="90" fit="inside" alt="Увеличение количества первых покупок" />
								<p>
									Увеличение количества первых покупок
								</p>
							</div>
						</b-col>
						<b-col cols="6">
							<div class="tasks__box tasks__box-ecom text-center">
								<g-image class="tasks__box__pic mb-4" src="@/assets/images/components/small-17.png" height="90" fit="inside" alt="Увеличение количества первых покупок" />
								<p>
									Увеличение количества повторных покупок
								</p>
							</div>
						</b-col>
					</b-row>
				</b-col>

				<!-- Для SaaS и B2B -->
				<b-col lg="6">
					<b-row>
						<b-col cols="12">
							<h3 class="font17px">
								Для SaaS и B2B
							</h3>
						</b-col>
						<b-col cols="6" class="h-50">
							<div class="tasks__box tasks__box-saas text-center">
								<g-image class="tasks__box__pic mb-4" src="@/assets/images/components/small-12.png" height="90" fit="inside" alt="Увеличение LTV" />
								<p>
									Увеличение LTV
									<br><br>
								</p>
							</div>
						</b-col>
						<b-col cols="6">
							<div class="tasks__box tasks__box-saas text-center">
								<g-image class="tasks__box__pic mb-4" src="@/assets/images/components/small-18.png" height="90" fit="inside" alt="Увеличение ретеншн" />
								<p>
									Увеличение ретеншн
								</p>
							</div>
						</b-col>
						<b-col cols="6">
							<div class="tasks__box tasks__box-saas text-center">
								<g-image class="tasks__box__pic mb-4" src="@/assets/images/components/small-14.png" width="120" height="90" fit="contain" background="#F8F8FF" alt="Увеличение количества регистраций" />
								<p>
									Увеличение количества регистраций
								</p>
							</div>
						</b-col>
						<b-col cols="6">
							<div class="tasks__box tasks__box-saas text-center">
								<g-image class="tasks__box__pic mb-4" src="@/assets/images/components/small-19.png" width="120" height="90" fit="contain" background="#F8F8FF"  alt="Оптимизация онбординга пользователей" />
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
		<b-container class="pipeline outline-tabs">
			<b-row>
				<b-col lg="10" xl="8">
					<h2>
						Анализируйте эффективность автосообщений и проводите А/В тесты
					</h2>
				</b-col>
			</b-row>
			<b-row>
				<b-col cols-12>
					<b-tabs pills class="mt-3 mt-lg-4">
						<b-tab title="Воронка для SaaS" active lazy>
							<b-row class="mt-4 mt-md-5">
								
								<!-- Зашёл на сайт -->
								<b-col cols="12" lg class="pipeline__step pipeline__step-1 mb-5 mb-lg-0">
									<div class="text-lg-center">
										<p>
											<b class="font16px d-none d-lg-inline">
												Зашёл на сайт
											</b>
											<b class="h2 d-lg-none">
												Зашёл на сайт
											</b>
										</p>
										<p class="pipeline__step__number">
											+60%<br>
											<span class="font14px">лидов</span>
										</p>
									</div>
									<p>
										<b class="font16px">
											Лид-бот
										</b><br>
										<span class="font14px grey-text">
											вовлекайте пользователя в диалог и соберите контакты
										</span>
									</p>
									<p>
										<b class="font16px">
											Поп-ап
										</b><br>
										<span class="font14px grey-text">
											соберите контакты и постройте велкам серии
										</span>
									</p>
									<p>
										<b class="font16px">
											Онлайн-чат
										</b><br>
										<span class="font14px grey-text">
											помогите пользователю зарегистрироваться
										</span>
									</p>
								</b-col>

								<!-- Зарегистрировался -->
								<b-col cols="12" lg class="pipeline__step pipeline__step-2 mb-5 mb-lg-0">
									<div class="text-lg-center">
										<p>
											<b class="font16px d-none d-lg-inline">
												Зарегистрировался
											</b>
											<b class="h2 d-lg-none">
												Зарегистрировался
											</b>
										</p>
										<p class="pipeline__step__number">
											+30%<br>
											<span class="font14px">лидов</span>
										</p>
									</div>
									<p>
										<b class="font16px">
											Серия писем
										</b><br>
										<span class="font14px grey-text">
											постройте welcom-серии, верните в продукт
										</span>
									</p>
									<p>
										<b class="font16px">
											Лид-бот
										</b><br>
										<span class="font14px grey-text">
											помогите зарегистрироваться и подобрать нужные инструменты в сервисе
										</span>
									</p>
								</b-col>

								<!-- Активировался -->
								<b-col cols="12" lg class="pipeline__step pipeline__step-3 mb-5 mb-lg-0">
									<div class="text-lg-center">
										<p>
											<b class="font16px d-none d-lg-inline">
												Активировался
											</b>
											<b class="h2 d-lg-none">
												Активировался
											</b>
										</p>
										<p class="pipeline__step__number">
											+15%<br>
											<span class="font14px">лидов</span>
										</p>
									</div>
									<p>
										<b class="font16px">
											Лид-бот
										</b><br>
										<span class="font14px grey-text">
											помогите  разобраться в продукте, настройте онбординг
										</span>
									</p>
									<p>
										<b class="font16px">
											Онлайн-чат
										</b><br>
										<span class="font14px grey-text">
											помогите пользователю разобраться в продукте
										</span>
									</p>
									<p>
										<b class="font16px">
											Поп-ап
										</b><br>
										<span class="font14px grey-text">
											настройте онбординг пользователя, покажите полезные функции
										</span>
									</p>
									<p>
										<b class="font16px">
											Серия писем
										</b><br>
										<span class="font14px grey-text">
											помогите узнать о продукте, возвращайте в продукт
										</span>
									</p>
								</b-col>

								<!-- Оплатил подписку -->
								<b-col cols="12" lg class="pipeline__step pipeline__step-4 mb-5 mb-lg-0">
									<div class="text-lg-center">
										<p>
											<b class="font16px d-none d-lg-inline">
												Оплатил подписку
											</b>
											<b class="h2 d-lg-none">
												Оплатил подписку
											</b>
										</p>
										<p class="pipeline__step__number">
											+25%<br>
											<span class="font14px">продаж</span>
										</p>
									</div>
									<p>
										<b class="font16px">
											Лид-бот
										</b><br>
										<span class="font14px grey-text">
											помогите выбрать тариф
										</span>
									</p>
									<p>
										<b class="font16px">
											Онлайн-чат
										</b><br>
										<span class="font14px grey-text">
											помогите пользователю с оплатой
										</span>
									</p>
									<p>
										<b class="font16px">
											Серия писем
										</b><br>
										<span class="font14px grey-text">
											возвращайте в продукт, напоминайте о продукте
										</span>
									</p>
								</b-col>

								<!-- Оплатил повторно -->
								<b-col cols="12" lg class="pipeline__step pipeline__step-5">
									<div class="text-lg-center">
										<p>
											<b class="font16px d-none d-lg-inline">
												Оплатил повторно
											</b>
											<b class="h2 d-lg-none">
												Оплатил повторно
											</b>
										</p>
										<p class="pipeline__step__number">
											+10%<br>
											<span class="font14px">повторных продаж</span>
										</p>
									</div>
									<p>
										<b class="font16px">
											Онлайн-чат
										</b><br>
										<span class="font14px grey-text">
											помогайте успеху пользователя
										</span>
									</p>
									<p>
										<b class="font16px">
											Серия писем
										</b><br>
										<span class="font14px grey-text">
											делитесь обновлениями о продукте
										</span>
									</p>
									<p>
										<b class="font16px">
											Лид-бот
										</b><br>
										<span class="font14px grey-text">
											собирайте обратную связь, рассказывайте про обновления и платные функции
										</span>
									</p>
								</b-col>
							</b-row>
							<b-row class="d-none d-lg-block">
								<b-col>
									<g-image class="pipeline__all" src="@/assets/images/automation-marketing/pipeline-saas.png" width="1100" alt="Шаги" />
								</b-col>
							</b-row>
						</b-tab>
						<b-tab title="Воронка для eCommerce" lazy>

						</b-tab>
					</b-tabs>
				</b-col>
			</b-row>
		</b-container>

		<!-- Данные действий пользователя -->
		<b-container class="data">
			<b-row>
				<b-col lg="10" xl="8">
					<h2 class="mb-3 mb-lg-4">
						Автоматизация маркетинга основана на данных о действиях пользователя
					</h2>
					<p class="mb-3 mb-lg-4">
						Ваша команда увидит каждую мелочь о клиенте. Это помогает успешно закрывать сделки 
						и решать вопросы. Собирайте данные, чтобы улучшить автоматизацию маркетинга
					</p>
				</b-col>
			</b-row>
			<b-row>
				<b-col>
					<g-image src="@/assets/images/automation-marketing/data.png" width="1100" alt="Автоматизация маркетинга основана на данных о действиях пользователя" />
				</b-col>
			</b-row>
		</b-container>

		<!-- Регистрация -->
		<b-container>
			<b-col class="p-4" style="background-color: #FFF3E6; border-radius: 5px;">
				<b-row class="align-items-center justify-content-center">
					<b-col lg="6">
						<g-image src="@/assets/images/components/medium-1.png" width="494" alt="Регистрация в сервисе" title="Поехали!" style="max-width: 100%" />
					</b-col>
					<b-col lg="6">
						<div class="h1 mb-4">Регистрация в сервисе</div>
						<RegistrationForm text="14 дней бесплатно" />
					</b-col>
				</b-row>
			</b-col>
		</b-container>

		<!-- Собирай -->
		<b-container class="collect">
			<b-row>
				<b-col lg="10" xl="8">
					<h2 class="mb-3 mb-lg-4">
						Собирайте все способы коммуникации вместе
					</h2>
					<p>
						Инструменты для автоматизации маркетинга
					</p>
				</b-col>
			</b-row>
			<b-row>
				<b-col cols="6" lg="4">
					<a href="/pop-up/" class="collect__box box text-center p-4">
						<p>
							Поп-ап окна
						</p>
						<g-image src="@/assets/images/automation-marketing/collect-1.svg" height="158" />
					</a>
				</b-col>
				<b-col cols="6" lg="4">
					<a href="/online-consultant/" class="collect__box box text-center p-4">
						<p>
							Через чат на сайте
						</p>
						<g-image src="@/assets/images/automation-marketing/collect-2.svg" height="158" />
					</a>
				</b-col>
				<b-col cols="6" lg="4">
					<a href="/email-marketing/" class="collect__box box text-center p-4">
						<p>
							Email-рассылка
						</p>
						<g-image src="@/assets/images/automation-marketing/collect-3.svg" height="158" />
					</a>
				</b-col>
				<b-col cols="6" lg="4">
					<a href="/chatbot/" class="collect__box box text-center p-4">
						<p>
							Чат-бот
						</p>
						<g-image src="@/assets/images/automation-marketing/collect-4.svg" height="158" />
					</a>
				</b-col>
				<b-col cols="6" lg="4">
					<div class="collect__box text-center p-4">
						<p>
							Sms и звонки
						</p>
						<g-image src="@/assets/images/automation-marketing/collect-5.svg" height="158" />
					</div>
				</b-col>
			</b-row>
		</b-container>

		<!-- Автоматизируй -->
		<b-container class="automation">
			<b-row>
				<b-col lg="10" xl="8">
					<h2 class="mb-3 mb-lg-4">
						Автоматизируйте продажи с помощью триггерных сообщений, основанных на действиях пользователей
					</h2>
				</b-col>
			</b-row>
			<b-row class="automation__box">
				<b-col class="order-lg-2">
					<div class="h4 mt-lg-5">
						Подготовьте чат-сообщение, поп-ап, письмо, лид-бота или что-то более хитрое
					</div>
					<p>
						Настраивайте разные типы сообщений, с персонализацией, с классным дизайном, с возможностью выбрать из десятка шаблонов. 
					</p>
					<g-image class="automation__box__pic-small automation__box__pic-small-1 d-none d-xl-block" src="@/assets/images/components/small-7.png" width="200" />
				</b-col>
				<b-col cols="12" lg="8" class="order-lg-1">
					<g-image class="automation__box__pic" src="@/assets/images/automation-marketing/automation-1.png" width="760" />
				</b-col>
			</b-row>
			<b-row class="automation__box">
				<b-col class="order-lg-2">
					<div class="h4 mt-lg-5">
						Выберите триггер, событие/время
					</div>
					<p>
						Один или несколько триггеров запускают автоматическое сообщение
					</p>
					<p>
						Таймаут для отложенной отправки сообщения
					</p>
					<g-image class="automation__box__pic-small automation__box__pic-small-2 d-none d-xl-block" src="@/assets/images/components/small-10.png" width="150" />
				</b-col>
				<b-col cols="12" lg="8" class="order-lg-1">
					<g-image class="automation__box__pic" src="@/assets/images/automation-marketing/automation-2.png" width="760" />
				</b-col>
			</b-row>
			<b-row class="automation__box">
				<b-col class="order-lg-2">
					<div class="h4 mt-lg-5">
						Определите аудиторию
					</div>
					<p>
						Определение аудитории, которой показывать автоматическое сообщение
					</p>
					<g-image class="automation__box__pic-small automation__box__pic-small-3 d-none d-xl-block" src="@/assets/images/components/small-11.png" width="150" />
				</b-col>
				<b-col cols="12" lg="8" class="order-lg-1">
					<g-image class="automation__box__pic" src="@/assets/images/automation-marketing/automation-3.png" width="760" />
				</b-col>
			</b-row>
			<b-row class="automation__box">
				<b-col class="order-lg-2">
					<div class="h4 mt-lg-5">
						Результаты автоматизации
					</div>
					<p>
						Подробная статистика по каждому сообщению поможет контролировать и улучшать результаты автоматизации маркетинга
					</p>
					<g-image class="automation__box__pic-small automation__box__pic-small-4 d-none d-xl-block" src="@/assets/images/components/small-8.png" width="200" />
				</b-col>
				<b-col cols="12" lg="8" class="order-lg-1">
					<g-image class="automation__box__pic" src="@/assets/images/automation-marketing/automation-4.png" width="760" />
				</b-col>
			</b-row>
		</b-container>

		<!-- Анализируй -->
		<b-container class="analize outline-tabs">
			<b-row>
				<b-col lg="10" xl="8">
					<h2>
						Анализируйте эффективность автосообщений и проводите А/В тесты
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
						<g-image src="@/assets/images/components/medium-2.png" width="494" alt="Регистрация в сервисе" title="Поехали!" style="max-width: 100%" />
					</b-col>
					<b-col lg="6">
						<div class="h1 mb-4">Регистрация в сервисе</div>
						<RegistrationForm text="14 дней бесплатно" />
					</b-col>
				</b-row>
			</b-col>
		</b-container>

	</Layout>
</template>

<script>
	import RegistrationForm from '~/components/Forms/RegistrationForm.vue'
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
						content: '/assets/images/cover/automation-marketing.png'
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
			overflow: hidden;
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
			}
		}

		.pipeline {
			img {
				max-width: 100%;
			}
			&__step {
				position: relative;
				
				&__number {
					color: #FF6600;
					font-size: 32px;
					line-height: 1.8rem;
				}
			}
			&__all {
				position: absolute;
				bottom: 140px;
				max-width: 920px !important;
			}
		}

		.data {
			img {
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
			.collect {
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
			.pipeline {
				&__step {
					&-1 {
						padding-bottom: 450px;
					} 
					.text-lg-center {
						position: absolute;
						bottom: 0;
						width: calc(100% - 30px);
						margin-left: -20px;
					}
				}
			}
		}
		@media (min-width: 1200px) {
			.hero {
				&__pic {
					left: 40%;
				}
			}
			.pipeline {
				&__step {
					&-1 {
						padding-bottom: 420px;
					}
				}
				&__all {
					left: 20px;
					max-width: 100% !important;
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