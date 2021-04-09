<template>
	<Layout :header="true" :footer="true"  class="page page-chatbot">

		<div class="hero blue">
			<b-container>
				<b-row class="align-items-center">
					<b-col lg="6">
						<h1>
							Лид-бот — это новый способ передавать в продажи только квалифицированных лидов
						</h1>
						<p>
							Масштабируйте работу команду продаж и поддержки за счет автоматизации, а не найма новых людей. Лид-бот поможет разгрузить вашу команду и оказать персональный подход к каждому клиенту
						</p>
						<b-button href="/panel/toapp/messages/chat-bot/" variant="primary" class="my-3">Подключить к своему сайту</b-button>
					</b-col>
					<b-col lg="6" class="d-none d-lg-block">
						<video autoplay="autoplay" loop="loop" muted="muted" playsinline="" class="embed-responsive-item">
							<source src="https://cdn-www.carrotquest.io/assets/video/components/8.webm" type="video/webm">
							<source src="https://cdn-www.carrotquest.io/assets/video/components/8.mp4" type="video/mp4">
						</video>
					</b-col>
				</b-row>
			</b-container>
		</div>

		<!-- Масштабируйте персональные продажи и поддержку без найма новых сотрудников -->
		<section class="blue">
			<b-container>
				<b-row class="features">
					<MegaTabs 
						title="Масштабируйте персональные продажи и поддержку без найма новых сотрудников"
						description="Настройте разные воронки для разных потенциальных клиентов. Выделите сегмент целевых клиентов и передайте в продажи. Вовлекайте и прогревайте воронку еще не готовых клиентов."
						:tabs="[
							{
								title: 'Вовлекает в диалог только нужный сегмент клиентов',
								pic: '24.png'
							},
							{
								title: 'Задаёт вопросы с вариантами ответа для квалификации',
								pic: '25.png'
							},
							{
								title: 'В зависимости от ответов соберет контакты и передаст менеджеру продаж',
								pic: '/assets/video/components/11.mp4'
							},
							{
								title: 'Передаст потенциального клиента в вашу CRM',
								pic: '/assets/video/components/11.mp4'
							}
						]"
						:more="{
							href: '/panel/toapp/messages/chat-bot/', 
							text: 'Подключить к своему сайту'
						}"
					/>
				</b-row>
			</b-container>
		</section>

		<!-- Настройте и запустите чат-бота за 5 минут в визуальном конструкторе -->
		<section class="settings">
			<b-container>
				<b-row class="row">
					<b-col lg="10" xl="8">
						<h2>Настройте и запустите за 5 минут в визуальном конструкторе. Программист не понадобится</h2>
					</b-col>
					<b-col lg="7" xl="6" class="my-3 my-lg-4">
						<p>Вы сразу видите, как лид-бот будет выглядеть для клиента. Это уменьшает вероятность ошибки</p>
					</b-col>
					<b-col cols="12" class="text-lg-center">
						<g-image src="@/assets/images/chatbot/settings.png" width="1140" quality="100" alt="Настройте и запустите за 5 минут" />
						<b-button href="/panel/toapp/messages/chat-bot/" variant="primary" class="mt-4 mt-md-5">Подключить к своему сайту</b-button>
					</b-col>
				</b-row>
			</b-container>
		</section>

		<!-- Готовые сценарии лид-ботов -->
		<section class="scripts">
			<b-container>
				<b-row>
					<b-col>
						<h2>Готовые сценарии лид-ботов</h2>
					</b-col>
				</b-row>
				<b-row>
					<b-col md="6" lg="4" xl="3">
						<g-link to="/chatbot/collect-qualify-lead-use-questions/" class="scripts__box box h-100">
							<p class="font20px">Собирайте и квалифицируйте лидов на вашем сайте</p>
							<div class="badges">
								<b-badge class="font14px">Маркетологу</b-badge>
							</div>
						</g-link>
					</b-col>
					<b-col md="6" lg="4" xl="3">
						<g-link to="/chatbot/automatic-collect-lead-at-night/" class="scripts__box box h-100">
							<p class="font20px">Не теряйте лиды даже ночью, когда все менеджеры спят</p>
							<div class="badges">
								<b-badge class="font14px">Маркетологу</b-badge>
							</div>
						</g-link>
					</b-col>
					<b-col md="6" lg="4" xl="3">
						<g-link to="/chatbot/collect-user-feedback/" class="scripts__box box h-100">
							<p class="font20px">Собирайте обратную связь с пользователей</p>
							<div class="badges">
								<b-badge class="font14px green">Продакту</b-badge>
							</div>
						</g-link>
					</b-col>
					<b-col md="6" lg="4" xl="3">
						<g-link to="/chatbot/close-duplicate-questions/" class="scripts__box box h-100">
							<p class="font20px">Проактивно закрывайте повторяющиеся вопросы до того, как пользователь задал их в чат</p>
							<div class="badges">
								<b-badge class="font14px yellow">Руководителю продаж</b-badge>
							</div>
						</g-link>
					</b-col>
					<b-col md="6" lg="4" xl="3">
						<g-link to="/chatbot/increase-efficiency-sales-manager-calls/" class="scripts__box box h-100">
							<p class="font20px">Увеличьте эффективность звонков менеджера по продажам</p>
							<div class="badges">
								<b-badge class="font14px">Маркетологу</b-badge>
								<b-badge class="font14px yellow mt-2">Руководителю продаж</b-badge>
							</div>
						</g-link>
					</b-col>
					<b-col md="6" lg="4" xl="3">
						<g-link to="/chatbot/share-features-with-desired-segment/" class="scripts__box box h-100">
							<p class="font20px">Рассказывайте о новых фичах нужному сегменту аудитории</p>
							<div class="badges">
								<b-badge class="font14px green">Продакту</b-badge>
							</div>
						</g-link>
					</b-col>
					<b-col md="6" lg="4" xl="3">
						<g-link to="/chatbot/offer-products-for-specific-user/" class="scripts__box box h-100">
							<p class="font20px">Предлагайте товары под задачи конкретного пользователя</p>
							<div class="badges">
								<b-badge class="font14px">Маркетологу</b-badge>
							</div>
						</g-link>
					</b-col>
					<b-col md="6" lg="4" xl="3">
						<div class="scripts__box box h-100 text-center d-flex align-items-center">
							<p class="font20px align-middle">Еще больше сценариев совсем скоро</p>
						</div>
					</b-col>
				</b-row>
			</b-container>
		</section>

		<!-- Стоимость лид-бота на вашем сайте -->
		<b-container class="maps">
			<b-col class="px-4 py-5" style="background-color: #fff3e6; border-radius: 5px;">
				<b-row class="align-items-center justify-content-center">
					<b-col lg="5" class="text-lg-center">
						
					</b-col>
					<b-col lg="6">
						<div class="h1">
							Карта автоматизации в SaaS и eCom с использованием чат-бота на сайте
						</div>
						<p>
							Оставьте email, чтобы получить карту
						</p>
						<SubscribeForm />
					</b-col>
				</b-row>
			</b-col>
		</b-container>


		<!-- Кейсы использования лид-бота -->
		<section class="cases">
			<b-container>
				<b-row>
					<b-col>
						<h2 class="mb-4">
							Кейсы использования лид-бота
						</h2>
					</b-col>
				</b-row>
				<b-row>
					<PostCard v-for="{ node } in $page.cases.edges" :key="node.id" :node="node" />
				</b-row>
				<b-row>
					<b-col class="all">
						<g-link href="https://www.carrotquest.io/cases/">
							Все кейсы
						</g-link>
					</b-col>
				</b-row>
			</b-container>
		</section>

		<FAQ 
			title="Часто задаваемые вопросы"
			:items="this.faq"
			:button="{
				text: 'Подключить к&nbsp;своему сайту',
				href: '/panel/toapp/messages/chat-bot/'
			}"
		/>

		<!-- Стоимость лид-бота на вашем сайте -->
		<b-container class="price">
			<b-col class="px-4 py-5" style="background-color: #fff3e6; border-radius: 5px;">
				<b-row class="align-items-center justify-content-center">
					<b-col lg="6">
						<p class="font24px">
							Стоимость лид-бота на вашем сайте
						</p>
						<p class="h1">
							2 000 ₽ в месяц
						</p>
					</b-col>
					<b-col lg="5" class="text-lg-center">
						<b-button href="/panel/toapp/messages/chat-bot/" variant="primary" class="my-3">Подключить к своему сайту</b-button>
					</b-col>
				</b-row>
			</b-col>
		</b-container>

		<Study />

	</Layout>
</template>


<page-query>
	query {
		cases: allPost (filter: { id: { in: [ "26546" , "23996" , "25965" ] }}) {
			edges {
				node {
					id
					title
					slug
					categories
					featured_media
					featured_media_large
				}
			}
		}
		allCategories {
			edges {
				node {
					id
					slug
					title
				}
			}
		}
	}
</page-query>


<script>
	import MegaTabs 			from '~/components/MegaTabs.vue'
	import FAQ 					from '~/components/FAQ.vue'
	import Study 				from '~/components/Study.vue'
	import PostCard 			from '~/components/PostCard.vue'
	import SubscribeForm		from '~/components/Forms/SubscribeForm.vue'
	import { BBadge } 			from 'bootstrap-vue'

	export default {
		components: {
			MegaTabs,
			FAQ,
			Study,
			PostCard,
			BBadge,
			SubscribeForm
		},
		metaInfo() {
			return {
				script: [
					{ 
						type: 'application/ld+json', 
						json: {
							"@context": "https://schema.org",
							"@type": "FAQPage",
							"mainEntity": this.faq
						}
						
					}
				]
			}
		},
		data() {
			return {
				//Делаем в HEAD
				metaTitle: 'Чат-бот для бизнеса, конструктор ботов для сайта',
				metaDescription: 'Создание и разработка ботов для сайтов. С помощью нашего конструктора вы можете настроить, установить и бесплатно использовать чат-бота на сайте для своего бизнеса',
				metaCanonical: 'https://www.carrotquest.io/chatbot/',
				metaImage: 'https://www.carrotquest.io/assets/images/cover/chatbot.png',
				
				//Сценарии, переключение
				solutionIndex: 0,

				//FAQ
				faq: [
					{
						'@type': "Question",
						name: 'Что такое чат-бот?',
						acceptedAnswer: {
							'@type': 'Answer',
							text: 'Чат-бот&nbsp;&mdash; это функционал <a href=/online-consultant/>чата Carrot quest</a>, который автоматически задаёт вопросы посетителям вашего сайта и&nbsp;предлагает ответы в&nbsp;виде кнопок на&nbsp;выбор или поля для заполнения. В&nbsp;зависимости от&nbsp;ответа чат-бот задаёт следующий вопрос, отправляет форму или назначает диалог на&nbsp;оператора.'
						}
					},
					{
						'@type': "Question",
						name: 'Что может лид-бот?',
						acceptedAnswer: {
							'@type': 'Answer',
							text: '<ul><li>Отправлять пользователям текстовые сообщения по&nbsp;триггеру;</li><li>Предлагать до&nbsp;10&nbsp;вариантов ответа на&nbsp;каждое сообщение и&nbsp;совершать следующие действия в&nbsp;зависимости от&nbsp;ответа;</li><li>Отправлять файлы и&nbsp;картинки;</li><li>Собирать контакты (имя, емейл, телефон) или спрашивать другие данные у&nbsp;клиентов;</li><li>Назначать диалог на&nbsp;конкретного оператора или в&nbsp;канал;</li><li>Наполнять карточку лида информацией на&nbsp;основе ответов на&nbsp;вопросы для последующей сегментации и&nbsp;отправки триггерных сообщений;</li></ul><br>Какие возможности появятся в&nbsp;ближайшее время:<ul><li>Отправлять формы Calendly для самостоятельной записи на&nbsp;мероприятия;</li><li>Отправлять статьи из&nbsp;<a href=/knowledge-base/>базы знаний Carrot quest</a>.</li></ul>'
						}
					},
					{
						'@type': "Question",
						name: 'Как чат-бот может помочь моей компании?',
						acceptedAnswer: {
							'@type': 'Answer',
							text: 'За&nbsp;счёт того, что чат-бот запускается по&nbsp;триггеру и&nbsp;задаёт стандартные вопросы, он&nbsp;помогает компаниям вовлекать больше посетителей в&nbsp;диалог. Лид-бот собирает контакты лида и&nbsp;<a href=/blog/lead-qualification-guide/>задаёт квалифицирующие вопросы</a>. В&nbsp;результате диалога бот может передать целевых лидов в&nbsp;отдел продаж или на&nbsp;определённую команду поддержки.'
						}
					},
					{
						'@type': "Question",
						name: 'Чат-бот будет отвечать на вопросы клиентов в чате?',
						acceptedAnswer: {
							'@type': 'Answer',
							text: 'Нет, этот чат-бот запускается, когда пользователь на&nbsp;сайте сделает целевое действие. Если клиент первый напишет в&nbsp;чат, то&nbsp;бот ничего не&nbsp;ответит (но&nbsp;такой бот тоже скоро появится).'
						}
					},
					{
						'@type': "Question",
						name: 'Как подключить лид-бота?',
						acceptedAnswer: {
							'@type': 'Answer',
							text: 'Если у вас на сайте установлен чат Carrot quest, дополнительного подключения чат-бота не требуется. Чтобы настроить чат-бота, вам не нужен программист, бот настраивается не сложнее автосообщения.'
						}
					},
					{
						'@type': "Question",
						name: 'Сколько стоит лид-бот?',
						acceptedAnswer: {
							'@type': 'Answer',
							text: 'Чат-бот подключается как дополнительный модуль к&nbsp;вашей основной подписке и&nbsp;стоит 2&nbsp;000&nbsp;₽ в&nbsp;месяц.'
						}
					}
				]
			}
		}
	}	
</script>


<style lang="scss">
	.page-chatbot {
		.hero {
			padding-top: 0 !important;
			video {
				max-width: 100%;
			}
		}

		.settings {
			img {
				border-radius: 5px;
				max-width: 100%;
			}
		}

		.scripts {
			.col-md-6 {
				margin-top: 40px;
			}
			&__box {
				color: #000;
				background: #F3F3FF;
				border-radius: 5px;
				padding: 20px;
				min-height: 280px;
				.badges {
					position: absolute;
					left: 20px;
					right: 20px;
					bottom: 20px;
					.badge {
						display: inline-block;
						padding: 0.3rem 1rem;
						border-radius: 1.5rem;
						background-color: #FFE0D9;
						&.green {
							background-color: #C4F67C;
						}
						&.yellow {
							background-color: #FFF27A;
						}
					}
				}
			}
			img {
				max-width: 48px;
			}
			@media (max-width: 575.98px) {
				.col-md-6:first-child {
					margin-top: 20px;
				}
				&__box {
					min-height: inherit;
					padding-bottom: 4rem;
				}
				.col-md-6:last-child .scripts__box { 
					min-height: 150px;
					padding-bottom: 0rem;
				}
			}
		}

		.cases {
			.all {
				margin-top: -1rem;
			}
		}

		.price {
			@media (min-width: 1200px) {
				.h1 {
					font-size: 4rem; line-height: 4.4rem;
				}
			}
		}

		.blue {
			padding-top: 5rem;
			background-color: #F3F3FF;
		}
	}
</style>