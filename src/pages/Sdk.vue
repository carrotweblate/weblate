<template>
	<Layout class="page page-sdk">

		<div class="hero blue">
			<b-container>
				<b-row class="align-items-center">
					<b-col lg="5" class="order-2 order-lg-1 d-none d-lg-block">
						<g-image src="@/assets/images/sdk/hero.png" quality="100" class="mw-100" alt="SDK Carrot quest" />
					</b-col>
					<b-col lg="7" class="order-1 order-lg-2">
						<h1>
							Возвращение, поддержка и обучение пользователей в вашем мобильном приложении
						</h1>
						<p class="my-4">
							Все необходимые инструменты и актуальные данные о пользователях доступны в одном месте
						</p>
						<b-button href="#Consultation" variant="primary">Оставить заявку на подключение</b-button>
						<p class="mt-3">
							Документация для подключения SDK на GitHub: <a target="_blank" rel="noopener" href="https://github.com/carrotquest/android-sdk/tree/beta" title="Документация для подключения Android на GitHub">Android</a> и <a target="_blank" rel="noopener" href="https://github.com/carrotquest/ios-sdk" title="Документация для подключения iOS на GitHub">iOS</a>
						</p>
					</b-col>
				</b-row>
			</b-container>
		</div>

		<!-- Настраивайте сценарии автоматизации -->
		<section class="scenario">
			<b-container>
				<b-row>
					<b-col lg="10" xl="8">
						<h2 class="mb-3 mb-lg-4">
							Настраивайте сценарии автоматизации быстро и без разработчиков
						</h2>
						<p class="mb-3 mb-lg-4">
							Настраивайте сценарии автоматизации быстро и без разработчиков. Все необходимые инструменты и актуальные данные о пользователях доступны в одном месте
						</p>
					</b-col>
				</b-row>
				<b-row>
					<b-col md="6" lg="3" class="mb-5 mb-lg-0">
						<div class="scenario__box h-100">
							<g-image src="@/assets/images/sdk/device-1.png" quality="100" class="mw-100" alt="Чат" />
							<div class="scenario__text h-100">
								<div class="h5">Чат</div>
								<p class="column__caption">
									Увеличивайте конверсию в покупку, работайте с возражениями — все с помощью встроенного чата
								</p>
							</div>
						</div>
					</b-col>
					<b-col md="6" lg="3" class="mb-5 mb-lg-0">
						<div class="scenario__box h-100">
							<g-image src="@/assets/images/sdk/device-2.png" quality="100" class="mw-100" alt="Пуш-уведомления" />
							<div class="scenario__text h-100">
								<div class="h5">Пуш-уведомления</div>
								<p class="column__caption">
									Возвращайте пользователей с помощью пушей, работающих в связке с сообщениями в чате
								</p>
							</div>
						</div>
					</b-col>
					<b-col md="6" lg="3" class="mb-5 mb-lg-0">
						<div class="scenario__box h-100">
							<g-image src="@/assets/images/sdk/device-3.png" quality="100" class="mw-100" alt="Письма" />
							<div class="scenario__text h-100">
								<div class="h5">Письма</div>
								<p class="column__caption">
									Возвращайте пользователей в приложение. Выстраивайте email-маркетинг на основе данных из мобильного приложения и с сайта
								</p>
							</div>
						</div>
					</b-col>
					<b-col md="6" lg="3" class="mb-md-5 mb-lg-0">
						<div class="scenario__box h-100">
							<g-image src="@/assets/images/sdk/device-4.png" quality="100" class="mw-100" alt="Поп-ап" />
							<div class="scenario__text h-100">
								<div class="h5">Поп-ап</div>
								<p class="column__caption">
									Обучайте пользователей, проверяйте гипотезы и рассказывайте про обновления прямо в мобильном приложении
								</p>
							</div>
						</div>
					</b-col>
				</b-row>
			</b-container>
		</section>

		<!-- Качественная поддержка пользователей прямо в вашем мобильном приложении -->
		<section class="knowledge-base">
			<b-container>
				<b-row>
					<b-col lg="6">
						<h2>
							Качественная поддержка пользователей прямо в вашем мобильном приложении
						</h2>
						<p class="my-4">
							Помогать пользователям в чате в приложении быстрее и эффективнее, чем в сторах или по почте. <i>Больше довольных пользователей — выше оценки в сторах</i>
						</p>
					</b-col>
					<b-col lg="6" class="text-lg-right">
						<g-image src="@/assets/images/sdk/deviceNotice.png" quality="100" class="mw-100" alt="Качественная поддержка пользователей" />
					</b-col>
				</b-row>
			</b-container>
		</section>

		<Contacts 
			title="Хотите обсудить свой проект? Свяжитесь с нами"
			bg="#FFEAD2"
			consultation
		/>

		<!-- Качественная поддержка пользователей прямо в вашем мобильном приложении -->
		<section class="knowledge-base">
			<b-container>
				<b-row>
					<b-col lg="6" class="order-2 order-lg-1">
						<g-image src="@/assets/images/sdk/designDevice.gif" quality="100" class="mw-100" alt="Чат, который подходит под дизайн вашего мобильного приложения" />
					</b-col>
					<b-col lg="6" class="text order-1 order-lg-2">
						<h2>
							Чат, который подходит под дизайн вашего мобильного приложения
						</h2>
						<ul class="my-4">
							<li>
								Выберите цвет и иконку чата в айдентике вашего приложения
							</li>
							<li>
								Подключите необходимые соцсети и мессенджеры
							</li>
							<li>
								Настройте триггерные сообщения в чат
							</li>
							<li>
								Настройте открытие чата по нажатию ваших кнопок
							</li>
						</ul>
					</b-col>
				</b-row>
			</b-container>
		</section>

		<!-- Настраивайте сценарии автоматизации -->
		<section class="data blue pt-4 pt-lg-5">
			<b-container>
				<b-row>
					<b-col lg="10" xl="8">
						<h2 class="mb-3 mb-lg-4">
							Собирайте данные обо всех действиях и свойствах пользователей в вашем мобильном приложении и на сайте
						</h2>
						<p class="mb-4 mb-lg-5">
							Все данные и события будут собираться в индивидуальную карточку пользователя. Эту информацию можно использовать для точной аналитики и персонализированной коммуникации с пользователями
						</p>
					</b-col>
				</b-row>
				<b-row>
					<b-col>
						<g-image src="@/assets/images/sdk/laptopMobile.png" quality="100" class="mw-100" alt="Собирайте данные обо всех действиях и свойствах пользователей" />
					</b-col>
				</b-row>
			</b-container>
		</section>

		<Consultation 
			title="Запишитесь на бесплатную демонстрацию сервиса" 
			text="Мы познакомимся, определим ваши задачи, за 30 минут обучим продукту и&nbsp;🎁&nbsp;бесплатно настроим базовый сценарий сбора лидов на вашем сайте"
			pic="medium-3.png"
			alt="Девочка, живущая в сети"
			bg="#FFEAD2"
		/>

		<Cases />

		<Logos />

		<Study />

	</Layout>
</template>


<script>
	import Contacts 		from '~/components/Contacts.vue'
	import Consultation 	from '~/components/Consultation.vue'
	import Cases 			from '~/components/Cases/Cases.vue'
	import Logos 			from '~/components/Logos.vue'
	import Study 			from '~/components/Study.vue'

	export default {
		components: {
			Contacts,
			Consultation,
			Cases,
			Logos,
			Study
		},
		data() {
			return {
				//Делаем в HEAD
				metaTitle: 'SDK Carrot quest – Автоматизация коммуникаций в мобильном приложении',
				metaDescription: 'Помогите пользователю найти ответ на вопрос или решить проблему с помощью чата в вашем мобильном приложении, пуш-уведомлений и писем',
				metaCanonical: 'https://www.carrotquest.io/sdk/',
				metaImage: 'https://www.carrotquest.io/assets/images/cover/index.gif',
			}
		},
	}	
</script>


<style lang="scss">
	.page-sdk {
		.blue {
			background-color: #F3F3FF;
		}

		.scenario {
			img {
				position: absolute;
				top: 0;
				z-index: 2;
			}
			p {
				margin-bottom: 0;
			}
			&__text {
				position: relative;
				z-index: 1;
				background-color: #F3F3FF;
				border-radius: 5px;
				padding: 16px;
			}
			@media (min-width: 1200px) {
				img {
					top: 0;
					margin-left: 22px;
				}
				&__box {
					padding-top: 370px;
				}
				&__text {
					padding-top: 60px;
				}
			}
			@media (max-width: 1199.98px) {
				img {
					width: 150px;
					margin-left: 26px;
				}
				&__box {
					padding-top: 260px;
				}
				&__text {
					padding-top: 60px;
				}
			}
			@media (max-width: 991.98px) {
				img {
					width: 150px;
					margin-left: 16px;
				}
				&__box {
					padding-top: 260px;
				}
				&__text {
					padding-top: 60px;
				}
			}
		}
	}
</style>