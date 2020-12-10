<template>
	<Layout class="page automation-marketing-page">

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
						content: '/assets/images/cover/automation-marketing.jpg'
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

		.collect {
			.col-6 {
				margin-top: 20px;
				margin-bottom: 20px;
			}
			&__box {
				background-color: #F8F8FF;
				border-radius: 5px;
				
				height: 100%;
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

		@media (max-width: 767.98px) {
			.automation {
				&__box {
					margin-bottom: 3rem;
				}
			}
		}
	}
</style>