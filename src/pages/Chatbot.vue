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
						<video autoplay="autoplay" loop="loop" muted="muted" playsinline="" width="530" height="463" class="embed-responsive-item">
							<source src="https://cdn-www.carrotquest.io/assets/video/components/8.webm" type="video/webm">
							<source src="https://cdn-www.carrotquest.io/assets/video/components/8.mp4" type="video/mp4">
						</video>
					</b-col>
				</b-row>
			</b-container>
		</div>

		<!-- Масштабируйте персональные продажи и поддержку без найма новых сотрудников -->
		<section class="night">
			<!-- Лид-бот соберёт лидов за вас ночью и в нерабочее время -->
			<b-container>
				<b-row class="align-items-center">
					<b-col lg="5" class="d-none d-lg-block">
						<ik-image
								path="/components/medium-7.png"
								:transformation="[{width:481,height:426}]"
								:lqip="{active:true, quality: 40, blur: 10}"
								width="481"
								height="426"
								loading="lazy"
								class="w-100"
								alt="Лид-бот соберёт лидов за вас ночью и в нерабочее время"
							/>
						<!-- <g-image class="w-100" src="@/assets/images/chatbot/night-1.png" width="1010" quality="100" alt="Ночной бот" /> -->
					</b-col>
					<b-col lg="6" class="offset-lg-1">
						<h2>Лид-бот соберёт лидов за вас ночью и в нерабочее время</h2>
						<p>
							Лид-бот работает круглосуточно без выходных. Он соберет за вас лиды и передаст в команду продаж или поддержки. Потенциальная заявка не потеряется ночью
						</p>
						<b-button href="/panel/toapp/messages/chat-bot/" variant="primary" class="mt-3">Подключить лид-бот к себе на сайт</b-button>
					</b-col>
				</b-row>
			</b-container>
			<b-container>
				<b-row>
					<b-col>
						<g-image class="w-100" src="@/assets/images/chatbot/night-2.png" width="1739" quality="100" alt="Лид-бот соберёт лидов за вас ночью и в нерабочее время" />
					</b-col>
				</b-row>
			</b-container>
			<!-- Лид-бот обогатит информацию о лиде без участия менеджера -->
			<b-container>
				<b-row>
					<b-col lg="4" class="order-lg-1 mb-3">
						<h2 class="mb-3">
							Лид-бот обогатит информацию о лиде без участия менеджера
						</h2>
						<p>
							Лид-бот наполнит карточку лида подробной информацией на основе ответов на вопросы. Она полезна менеджерам продаж и поддержки, чтобы работать с каждым клиентом персонально в маштабе.
						</p>
						<b-button href="/panel/toapp/messages/chat-bot/" variant="primary" class="my-3">Подключить лид-бот к себе на сайт</b-button>
					</b-col>
					<b-col lg="8" class="order-lg-2">
						<g-image class="w-100" src="@/assets/images/chatbot/night-3.png" width="1142" quality="100" alt="Лид-бот обогатит информацию о лиде без участия менеджера" />
					</b-col>
				</b-row>
			</b-container>
		</section>

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
								pic: '/assets/video/components/8.mp4'
							},
							{
								title: 'Задаёт вопросы с вариантами ответа для квалификации',
								pic: '24.png'
							},
							{
								title: 'В зависимости от ответов соберет контакты и передаст менеджеру продаж',
								pic: '/assets/video/components/11.mp4'
							},
							{
								title: 'Передаст потенциального клиента в вашу CRM',
								pic: '35.png'
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
				<b-row>
					<b-col lg="10" xl="8">
						<h2>Настройте и запустите за 5 минут в визуальном конструкторе. Программист не понадобится</h2>
					</b-col>
					<b-col lg="7" xl="6" class="my-3 my-lg-4">
						<p>Вы сразу видите, как лид-бот будет выглядеть для клиента. Это уменьшает вероятность ошибки</p>
					</b-col>
					<b-col cols="12" class="text-lg-center">
						<video autoplay="autoplay" loop="loop" muted="muted" playsinline="" width="1100" height="619" class="embed-responsive-item w-100">
							<source src="/assets/video/components/14.webm" type="video/webm">
							<source src="/assets/video/components/14.mp4" type="video/mp4">
						</video>
						<b-button href="/chatbot/constructor/" variant="outline-primary" class="mt-4 mt-md-5">Смотреть подробнее про конструктор лид-бота</b-button>
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
							<p class="font17px  font-weight-bold">Собирайте и квалифицируйте лидов на вашем сайте</p>
							<div class="badges">
								<b-badge class="font14px">Маркетологу</b-badge>
							</div>
						</g-link>
					</b-col>
					<b-col md="6" lg="4" xl="3">
						<g-link to="/chatbot/automatic-collect-lead-at-night/" class="scripts__box box h-100">
							<p class="font17px  font-weight-bold">Не теряйте лиды даже ночью, когда все менеджеры спят</p>
							<div class="badges">
								<b-badge class="font14px">Маркетологу</b-badge>
							</div>
						</g-link>
					</b-col>
					<b-col md="6" lg="4" xl="3">
						<g-link to="/chatbot/collect-user-feedback/" class="scripts__box box h-100">
							<p class="font17px  font-weight-bold">Собирайте обратную связь с пользователей</p>
							<div class="badges">
								<b-badge class="font14px green">Продакту</b-badge>
							</div>
						</g-link>
					</b-col>
					<b-col md="6" lg="4" xl="3">
						<g-link to="/chatbot/close-duplicate-questions/" class="scripts__box box h-100">
							<p class="font17px  font-weight-bold">Проактивно закрывайте повторяющиеся вопросы до того, как пользователь задал их в чат</p>
							<div class="badges">
								<b-badge class="font14px yellow">Руководителю продаж</b-badge>
							</div>
						</g-link>
					</b-col>
					<b-col md="6" lg="4" xl="3">
						<g-link to="/chatbot/increase-efficiency-sales-manager-calls/" class="scripts__box box h-100">
							<p class="font17px  font-weight-bold">Увеличьте эффективность звонков менеджера по продажам</p>
							<div class="badges">
								<b-badge class="font14px">Маркетологу</b-badge>
								<b-badge class="font14px yellow mt-2">Руководителю продаж</b-badge>
							</div>
						</g-link>
					</b-col>
					<b-col md="6" lg="4" xl="3">
						<g-link to="/chatbot/share-features-with-desired-segment/" class="scripts__box box h-100">
							<p class="font17px  font-weight-bold">Рассказывайте о новых фичах нужному сегменту аудитории</p>
							<div class="badges">
								<b-badge class="font14px green">Продакту</b-badge>
							</div>
						</g-link>
					</b-col>
					<b-col md="6" lg="4" xl="3">
						<g-link to="/chatbot/offer-products-for-specific-user/" class="scripts__box box h-100">
							<p class="font17px  font-weight-bold">Предлагайте товары под задачи конкретного пользователя</p>
							<div class="badges">
								<b-badge class="font14px">Маркетологу</b-badge>
							</div>
						</g-link>
					</b-col>
					<b-col md="6" lg="4" xl="3">
						<div class="scripts__box box h-100 text-center d-flex align-items-center">
							<p class="font17px w-100">Еще больше сценариев совсем скоро</p>
						</div>
					</b-col>
				</b-row>
			</b-container>
		</section>

		<!-- Карта автоматизации в SaaS и eCom с использованием чат-бота на сайте -->
		<b-container class="maps">
			<b-col class="p-4 px-lg-4 py-lg-5" style="background-color: #fff3e6; border-radius: 5px;">
				<b-row class="align-items-center justify-content-center">
					<b-col lg="4" class="d-none d-lg-block maps__pics">
						<g-image class="maps__pic maps__pic-1" src="@/assets/images/components/map-saas.png" width="400" alt="Для онлайн-сервисов" />
						<g-image class="maps__pic maps__pic-2" src="@/assets/images/components/map-ecom-bot.png" width="400" alt="Для интернет-магазинов с использованием чат-бота на сайте" />
					</b-col>
					<b-col lg="8">
						<div class="h2">
							Карта автоматизации в SaaS и eCom с использованием чат-бота на сайте
						</div>
						<p>
							Оставьте email, чтобы получить карту
						</p>
						<SubscribeForm title="Карты отправлены" event="Скачал карты SaaS и ecom для лид-бота" button="Скачать" />
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
				<b-row class="pt-lg-3">
					<PostCard v-for="{ node } in $page.cases.edges" :key="node.id" :node="node" parentPage="/chatbot/" />
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
			<b-col class="p-4 px-lg-4 py-lg-5" style="background-color: #fff3e6; border-radius: 5px;">
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
						<b-button href="/panel/toapp/messages/chat-bot/" variant="primary" class="mt-3">Подключить к своему сайту</b-button>
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
			& , .container {
				margin-bottom: 0;
			}
			video {
				border-radius: 5px;
			}
		}

		.night {
			padding-top: 5rem;
			padding-bottom: 5rem;
			background: {
				color: #181648; 
				image: url('../assets/images/chatbot/night-bg-stars.png') , url('../assets/images/chatbot/night-bg-flame.png');
				position: center;
				repeat: repeat , repeat-y;
			}
			color: #fff;
			img {
				border-radius: 5px;
				height: inherit;
			}
		}

		.settings {
			video {
				border-radius: 5px;
				height: inherit;
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
				min-height: 260px;
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

		.maps {
			&__pics {
				position: relative;
				height: 220px;
			}
			&__pic {
				position: absolute;
				top: 0;
				z-index: 1;
				width: 75%;
				box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
				&-2 {
					z-index: 2;
					top: 40px;
					left: 60px;
				}
			}
			@media (max-width: 1199.98px) {
				&__pics {
					height: 200px;
				}
				&__pic {
					left: 0;
					&-2 {
						left: 40px;
					}
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
			background-color: #F3F3FF;
			@media (max-width: 1199.98px) {
				padding-top: 5rem
			}
			@media (min-width: 1200px) {
				padding-top: 10rem
			}
		}
	}
</style>