<template>
	<Layout :header="true" :footer="true"  class="page page-chatbot">

		<div class="hero blue">
			<b-container>
				<b-row class="align-items-center">
					<b-col lg="6" class="order-2 order-lg-1 d-none d-lg-block">
						<video autoplay="autoplay" loop="loop" muted="muted" playsinline="" class="embed-responsive-item">
							<source src="/assets/video/components/8.webm" type="video/webm">
							<source src="/assets/video/components/8.mp4" type="video/mp4">
						</video>
					</b-col>
					<b-col lg="6" class="order-1 order-lg-2">
						<h1>
							Лид-бот от&nbsp;Carrot quest поможет собирать больше квалифицированных лидов с&nbsp;сайта без дополнительной нагрузки на&nbsp;ваших сотрудников
						</h1>
						<b-button href="/panel/toapp/messages/chat-bot/" variant="primary" class="my-3">Подключить к&nbsp;своему сайту</b-button>
						<p>
							14&nbsp;дней бесплатно
						</p>
					</b-col>
				</b-row>
			</b-container>
		</div>

		<!-- Зачем нужен лид-бот? -->
		<section class="why">
			<b-container>
				<b-row>
					<b-col>
						<h2 class="mb-4 mb-lg-5">Зачем нужен лид-бот?</h2>
					</b-col>
				</b-row>
				<b-row class="why__list">
					<b-col lg="4" class="mb-4 mb-lg-0">
						<div class="why__list__review h-100">
							<p>Общение и&nbsp;брифование с&nbsp;каждым из&nbsp;входящим лидов занимает у&nbsp;аккаунта от&nbsp;15&nbsp;минут до&nbsp;часа, при этом далеко не&nbsp;каждый из&nbsp;лидов является целевым</p>
							<div class="why__list__review__person">
								<g-image src="@/assets/images/components/feedback-tatiana-zorina.png" width="96" alt="Татьяна Зорина" class="mb-2" />
								<p>
									<b>Татьяна Зорина</b> <br>
									Managing director <a href="https://rick.ai/" target="_blank" rel="noopener">Rick.ai</a>
								</p>
							</div>
						</div>
					</b-col>
					<b-col lg="4" class="mb-4 mb-lg-0">
						<div class="why__list__review h-100">
							<p>Менеджеры по&nbsp;продажам тратят&nbsp;70% времени на&nbsp;нецелевых лидов. Поэтому квалифицировать со&nbsp;стороны маркетинга важно</p>
							<div class="why__list__review__person">
								<g-image src="@/assets/images/components/feedback-nikita-dmitrievskiy.png" width="96" alt="Никита Дмитриевский" class="mb-2" />
								<p>
									<b>Никита Дмитриевский</b> <br>
									Маркетолог образовательных программ &laquo;<a href="https://accelerator.iidf.ru/" target="_blank" rel="noopener">Акселератора ФРИИ</a>&raquo;
								</p>
							</div>
						</div>
					</b-col> 
					<b-col lg="4">
						<div class="why__list__review h-100">
							<p>Без дополнительных инструментов мы&nbsp;тратим 10-20&nbsp;минут, чтобы собрать первичную информацию о&nbsp;клиенте</p>
							<div class="why__list__review__person">
								<g-image src="@/assets/images/components/feedback-sokovnin-paver.png" width="96"  alt="Соковнин Павел" class="mb-2" />
								<p>
									<b>Соковнин Павел</b> <br>
									Head of&nbsp;Sales, Carrot quest
								</p>
							</div>
						</div>
					</b-col>
				</b-row>
			</b-container>
		</section>

		<!-- Лид-бот проактивно вовлекает клиентов в диалог, собирает первичную информацию и передаёт их соответствующим операторам -->
		<section class="blue">
			<b-container>
				<b-row class="features">
					<MegaTabs 
						title="Лид-бот проактивно вовлекает клиентов в диалог, собирает первичную информацию и передаёт операторам"
						:tabs="[
							{
								title: 'Вовлекает в&nbsp;диалог только нужный сегмент клиентов',
								pic: '24.png'
							},
							{
								title: 'Задаёт вопросы с&nbsp;вариантами ответа для квалификации',
								pic: '25.png'
							},
							{
								title: 'Снимает самые частые вопросы и&nbsp;передаёт вам только сложные',
								pic: '21.png'
							},
							{
								title: 'В&nbsp;зависимости от&nbsp;ответов соберёт контакты лидов, запишет на&nbsp;встречу или переведёт на&nbsp;оператора',
								pic: '/assets/video/components/11.mp4'
							},
							{
								title: 'Назначит диалог на&nbsp;конкретного оператора или канал',
								pic: '19.png'
							}
						]"
						:more="{
							href: '/panel/toapp/messages/chat-bot/', 
							text: 'Подключить к&nbsp;своему сайту'
						}"
					/>
				</b-row>
			</b-container>
		</section>

		<!-- Настройте и запустите чат-бота за 5 минут в визуальном конструкторе -->
		<section class="setting">
			<b-container>
				<b-row class="row text-center justify-content-center">
					<b-col lg="10">
						<h2>Настройте и&nbsp;запустите чат-бота за&nbsp;5&nbsp;минут в&nbsp;визуальном конструкторе. Программист не&nbsp;понадобится</h2>
					</b-col>
					<b-col lg="7" xl="6" class="my-3 my-lg-4">
						<p>Вы&nbsp;сразу видите, как лид-бот будет выглядеть для клиента. Это уменьшает вероятность ошибки</p>
					</b-col>
					<div class="col-12">
						<g-image src="@/assets/images/components/11.png" width="1140" quality="100" alt="Настройте и запустите за 5 минут" />
					</div>
				</b-row>
			</b-container>
		</section>

		<!-- Сценарии для решения ваших задач -->
		<section class="solution">
			<b-container>
				<b-row class="row justify-content-start ">
					<b-col lg="10" xl="9">
						<div class="h1 mb-4 mb-lg-5">
							У&nbsp;нас есть сценарии для решения ваших задач
						</div>
					</b-col>
				</b-row>
				<div class="solution__box">
					<b-row>
						<b-col lg="4">
							<div class="h5">Онлайн-сервис</div>
							<ul class="mb-4">
								<li :class="{ active : solutionIndex == 0 }" class="my-2">
									<b-link @click="solutionIndex=0">
										Сценарий сбора лидов
									</b-link>
									<g-image src="@/assets/images/chatbot/solution-1.png" width="844" quality="100" alt="Сценарий сбора лидов" class="d-lg-none my-4" />
								</li>
								<li :class="{ active : solutionIndex == 1 }" class="my-2">
									<b-link @click="solutionIndex=1">
										Персональная работа с&nbsp;каждым сегментом клиентов
									</b-link>
									<g-image src="@/assets/images/chatbot/solution-2.png" width="844" quality="100" alt="Персональная работа с каждым сегментом клиентов" class="d-lg-none my-4" />
								</li>
								<li :class="{ active : solutionIndex == 2 }" class="my-2">
									<b-link @click="solutionIndex=2" >
										Передаём в&nbsp;поддержку только сложные вопросы
									</b-link>
									<g-image src="@/assets/images/chatbot/solution-3.png" width="844" quality="100" alt="Передаём в поддержку только сложные вопросы" class="d-lg-none my-4" />
								</li>
							</ul>

							<div class="h5">Интернет-магазин</div>
							<ul class="mb-4">
								<li :class="{ active : solutionIndex == 3 }" class="my-2">
									<b-link @click="solutionIndex=3">
										Собираем контакты и&nbsp;записываем на&nbsp;консультацию
									</b-link>
									<g-image src="@/assets/images/chatbot/solution-4.png" quality="100" alt="Собираем контакты и записываем на консультацию" class="d-lg-none my-4" />
								</li>
								<li :class="{ active : solutionIndex == 4 }" class="my-2">
									<b-link @click="solutionIndex=4">
										Сегментируем VIP клиентов
									</b-link>
									<g-image src="@/assets/images/chatbot/solution-5.png" quality="100" alt="Сегментируем VIP клиентов" class="d-lg-none my-4" />
								</li>
								<li :class="{ active : solutionIndex == 5 }" class="my-2">
									<b-link @click="solutionIndex=5" >
										Угадываем и&nbsp;отвечаем на&nbsp;самые частые вопросы
									</b-link>
									<g-image src="@/assets/images/chatbot/solution-6.png" quality="100" alt="Угадываем и отвечаем на самые частые вопросы" class="d-lg-none my-4" />
								</li>
							</ul>

							<div class="h5">Консультации и услуги</div>
							<ul>
								<li :class="{ active : solutionIndex == 6 }" class="my-2">
									<b-link @click="solutionIndex=6">
										Собираем заявки
									</b-link>
									<g-image src="@/assets/images/chatbot/solution-7.png" quality="100" alt="Собираем заявки" class="d-lg-none my-4" />
								</li>
								<li :class="{ active : solutionIndex == 7 }" class="my-2">
									<b-link @click="solutionIndex=7">
										Собираем обратную связь после занятий
									</b-link>
									<g-image src="@/assets/images/chatbot/solution-8.png" quality="100" alt="Собираем обратную связь после занятий" class="d-lg-none my-4" />
								</li>
								<li :class="{ active : solutionIndex == 8 }" class="my-2">
									<b-link @click="solutionIndex=8" >
										Закрываем частотные вопросы
									</b-link>
									<g-image src="@/assets/images/chatbot/solution-9.png" quality="100" alt="Угадываем и отвечаем на самые частые вопросы" class="d-lg-none my-4" />
								</li>
							</ul>
							<p class="my-4">
								<i>Вы можете настроить сценарии любой длины и сложности, сочетая и усложняя базовые сценарии</i>
							</p>
							<b-button href="/panel/toapp/messages/chat-bot/" variant="primary">Подключить к&nbsp;своему сайту</b-button>
						</b-col>
						<b-col lg="8" class="d-none d-lg-flex justify-content-center py-5">
							<b-tabs v-model="solutionIndex" no-nav-style>
								<b-tab active lazy>
									<g-image src="@/assets/images/chatbot/solution-1.png" quality="100" alt="Сценарий сбора лидов" />
								</b-tab>
								<b-tab>
									<g-image src="@/assets/images/chatbot/solution-2.png" quality="100" alt="Персональная работа с каждым сегментом клиентов" />
								</b-tab>
								<b-tab>
									<g-image src="@/assets/images/chatbot/solution-3.png" quality="100" alt="Передаём в поддержку только сложные вопросы" />
								</b-tab>

								<b-tab>
									<g-image src="@/assets/images/chatbot/solution-4.png" quality="100" alt="Собираем контакты и записываем на консультацию" />
								</b-tab>
								<b-tab>
									<g-image src="@/assets/images/chatbot/solution-5.png" quality="100" alt="Сегментируем VIP клиентов" />
								</b-tab>
								<b-tab>
									<g-image src="@/assets/images/chatbot/solution-6.png" quality="100" alt="Передаём в поддержку только сложные вопросы" />
								</b-tab>

								<b-tab>
									<g-image src="@/assets/images/chatbot/solution-7.png" quality="100" alt="Собираем заявки" />
								</b-tab>
								<b-tab>
									<g-image src="@/assets/images/chatbot/solution-8.png" quality="100" alt="Собираем обратную связь после занятий" />
								</b-tab>
								<b-tab>
									<g-image src="@/assets/images/chatbot/solution-9.png" quality="100" alt="Закрываем частотные вопросы" />
								</b-tab>
							</b-tabs>
						</b-col>
					</b-row>
				</div>
			</b-container>
		</section>

		<!-- Подписка в сервисе -->
		<section style="background-color: #fff3e6;">
			<b-container>
				<b-col class="p-4 pb-lg-0">
					<b-row class="align-items-center justify-content-center">
						<b-col lg="4" class="d-none d-lg-block">
							<g-image src="@/assets/images/components/medium-4.png" width="494" alt="Регистрация в сервисе" title="Поехали!" style="max-width: 100%" />
						</b-col>
						<b-col lg="8">
							<div class="h4">Станьте экспертом по&nbsp;сбору и&nbsp;квалификации лидов</div>
							<p class="mb-4">
								Делимся лучшими методиками квалификации лидов в&nbsp;нашем гайде. Мы&nbsp;пришлём его на&nbsp;почту
							</p>
							<b-button href="#open-modal-download?title=Скачать гайд&amp;cqe=скачал гайд по квалификации" variant="primary">
								Скачать гайд сейчас
							</b-button>
						</b-col>
					</b-row>
				</b-col>
			</b-container>
		</section>

		<!-- Что еще умеет лид-бот -->
		<section class="more">
			<b-container>
				<b-row>
					<b-col>
						<h2 class="mb-4 mb-lg-5">Что еще умеет лид-бот</h2>
					</b-col>
				</b-row>
				<b-row class="more__list">
					<b-col lg="4" class="mb-5">
						<g-image src="@/assets/images/components/small-33.svg" alt="Добавляйте картинки и документы к сообщениям бота" class="mb-3" />
						<p class="mb-0">
							Добавляйте картинки и&nbsp;документы к&nbsp;сообщениям бота
						</p>
					</b-col>
					<b-col lg="4" class="mb-5">
						<g-image src="@/assets/images/components/small-34.svg" alt="Бот предлагает до 10 вариантов ответов пользователям" class="mb-3" />
						<p class="mb-0">
							Бот предлагает до&nbsp;10&nbsp;вариантов ответов пользователям
						</p>
					</b-col>
					<b-col lg="4" class="mb-5">
						<g-image src="@/assets/images/components/small-35.svg" alt="Автоматический сбор контактов" class="mb-3" />
						<p class="mb-0">
							Автоматический сбор контактов
						</p>
					</b-col>
					<b-col lg="4" class="mb-5 mb-lg-0">
						<g-image src="@/assets/images/components/small-36.svg" alt="Автоматическая запись на демо или созвон" class="mb-3" />
						<p>
							Автоматическая запись на&nbsp;демо или созвон
						</p>
						<b-badge variant="primary" class="px-3 py-2 text-white text-uppercase">Скоро</b-badge>
					</b-col>
					<b-col lg="4">
						<g-image src="@/assets/images/components/small-37.svg" alt="Отправка статей из базы знаний" class="mb-3" />
						<p>
							Отправка статей из&nbsp;базы знаний
						</p>
						<b-badge variant="primary" class="px-3 py-2 text-white text-uppercase">Скоро</b-badge>
					</b-col>
				</b-row>
			</b-container>
		</section>

		<FAQ 
			title="Часто задаваемые вопросы"
			:items="[
				{
					question: 'Что такое чат-бот?',
					answer: 'Чат-бот&nbsp;&mdash; это функционал <a href=/online-consultant/>чата Carrot quest</a>, который автоматически задаёт вопросы посетителям вашего сайта и&nbsp;предлагает ответы в&nbsp;виде кнопок на&nbsp;выбор или поля для заполнения. В&nbsp;зависимости от&nbsp;ответа чат-бот задаёт следующий вопрос, отправляет форму или назначает диалог на&nbsp;оператора.'
				},
				{
					question: 'Что может лид-бот?',
					answer: '<ul><li>Отправлять пользователям текстовые сообщения по&nbsp;триггеру;</li><li>Предлагать до&nbsp;10&nbsp;вариантов ответа на&nbsp;каждое сообщение и&nbsp;совершать следующие действия в&nbsp;зависимости от&nbsp;ответа;</li><li>Отправлять файлы и&nbsp;картинки;</li><li>Собирать контакты (имя, емейл, телефон) или спрашивать другие данные у&nbsp;клиентов;</li><li>Назначать диалог на&nbsp;конкретного оператора или в&nbsp;канал;</li><li>Наполнять карточку лида информацией на&nbsp;основе ответов на&nbsp;вопросы для последующей сегментации и&nbsp;отправки триггерных сообщений;</li></ul><br>Какие возможности появятся в&nbsp;ближайшее время:<ul><li>Отправлять формы Calendly для самостоятельной записи на&nbsp;мероприятия;</li><li>Отправлять статьи из&nbsp;<a href=/knowledge-base/>базы знаний Carrot quest</a>.</li></ul>'
				},
				{
					question: 'Как чат-бот может помочь моей компании?',
					answer: 'За&nbsp;счёт того, что чат-бот запускается по&nbsp;триггеру и&nbsp;задаёт стандартные вопросы, он&nbsp;помогает компаниям вовлекать больше посетителей в&nbsp;диалог. Лид-бот собирает контакты лида и&nbsp;<a href=/blog/lead-qualification-guide/>задаёт квалифицирующие вопросы</a>. В&nbsp;результате диалога бот может передать целевых лидов в&nbsp;отдел продаж или на&nbsp;определённую команду поддержки.'
				},
				{
					question: 'Чат-бот будет отвечать на вопросы клиентов в чате?',
					answer: 'Нет, этот чат-бот запускается, когда пользователь на&nbsp;сайте сделает целевое действие. Если клиент первый напишет в&nbsp;чат, то&nbsp;бот ничего не&nbsp;ответит (но&nbsp;такой бот тоже скоро появится).'
				},
				{
					question: 'Как подключить лид-бота?',
					answer: 'Если у вас на сайте установлен чат Carrot quest, дополнительного подключения чат-бота не требуется. Чтобы настроить чат-бота, вам не нужен программист, бот настраивается не сложнее автосообщения.'
				},
				{
					question: 'Сколько стоит лид-бот?',
					answer: 'Чат-бот подключается как дополнительный модуль к&nbsp;вашей основной подписке и&nbsp;стоит 2&nbsp;000&nbsp;₽ в&nbsp;месяц.'
				}
			]"
			:button="{
				text: 'Подключить к&nbsp;своему сайту',
				href: '/panel/toapp/messages/chat-bot/'
			}"
		/>

		<!-- Возможности платформы -->
		<b-container class="functions">
			<b-row>
				<b-col lg="10" xl="8" class="mb-4">
					<h2>
						Посмотрите подробнее возможности платформы Carrot quest
					</h2>
				</b-col>
			</b-row>
			<b-row>
				<b-col cols="6" lg="3">
					<g-link to="/online-consultant/" class="functions__box box text-center p-4">
						<g-image src="@/assets/images/components/small-26.svg" height="158" alt="Онлайн-консультант" />
						<p class="mt-3 mb-0">
							Онлайн‑консультант
						</p>
					</g-link>
				</b-col>
				<b-col cols="6" lg="3">
					<g-link to="/knowledge-base/" class="functions__box box text-center p-4">
						<g-image src="@/assets/images/components/small-27.svg" height="158" alt="База знаний" />
						<p class="mt-3 mb-0">
							База знаний
						</p>
					</g-link>
				</b-col>
				<b-col cols="6" lg="3">
					<g-link to="/lead-manager/" class="functions__box box text-center p-4">
						<g-image src="@/assets/images/components/small-28.svg" height="158" alt="eCRM" />
						<p class="mt-3 mb-0">
							eCRM
						</p>
					</g-link>
				</b-col>
				<b-col cols="6" lg="3">
					<g-link to="/chatbot/" class="functions__box box text-center p-4">
						<g-image src="@/assets/images/components/small-29.svg" height="158" alt="Чат-бот" />
						<p class="mt-3 mb-0">
							Чат-бот
						</p>
					</g-link>
				</b-col>
				<b-col cols="6" lg="3">
					<g-link to="/pop-up/" class="functions__box box text-center p-4">
						<g-image src="@/assets/images/components/small-30.svg" height="158" alt="Поп-ап окна" />
						<p class="mt-3 mb-0">
							Поп-ап окна
						</p>
					</g-link>
				</b-col>
				<b-col cols="6" lg="3">
					<g-link to="/sdk/" class="functions__box box text-center p-4">
						<g-image src="@/assets/images/components/small-31.svg" height="158" alt="SDK для iOS и Android" />
						<p class="mt-3 mb-0">
							SDK для iOS и&nbsp;Android
						</p>
					</g-link>
				</b-col>
				<b-col cols="6" lg="3">
					<g-link to="/email-marketing/" class="functions__box box text-center p-4">
						<g-image src="@/assets/images/components/small-32.svg" height="158" alt="Email-рассылки" />
						<p class="mt-3 mb-0">
							Email-рассылки
						</p>
					</g-link>
				</b-col>
			</b-row>
		</b-container>

		<Cases />

		<Logos />

		<!-- Регистрация в сервисе -->
		<b-container>
			<b-col class="p-4" style="background-color: #fff3e6; border-radius: 5px;">
				<b-row class="align-items-center justify-content-center">
					<b-col lg="6">
						<g-image src="@/assets/images/components/10.png" width="494" alt="Регистрация в сервисе" title="Поехали!" class="mw-100" />
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
	import MegaTabs 			from '~/components/MegaTabs.vue'
	import FAQ 					from '~/components/FAQ.vue'
	import Cases 				from '~/components/Cases/Cases.vue'
	import Logos 				from '~/components/Logos.vue'
	import RegistrationForm 	from '~/components/Forms/RegistrationForm.vue'
	import Study 				from '~/components/Study.vue'
	import { BBadge , BLink , BTabs , BTab } from 'bootstrap-vue'

	export default {
		components: {
			MegaTabs,
			FAQ,
			Cases,
			Logos,
			RegistrationForm,
			Study,
			BBadge,
			BLink,
			BTabs , BTab
		},
		data() {
			return {
				//Делаем в HEAD
				metaTitle: 'Чат-бот для бизнеса, конструктор ботов для сайта',
				metaDescription: 'Создание и разработка ботов для сайтов. С помощью нашего конструктора вы можете настроить, установить и бесплатно использовать чат-бота на сайте для своего бизнеса',
				metaCanonical: 'https://www.carrotquest.io/chatbot/',
				metaImage: 'https://www.carrotquest.io/assets/images/cover/chatbot.png',
				
				//Сценарии, переключение
				solutionIndex: 0
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

		.why {
			&__list__review {
				background: #F3F3FF;
				border-radius: 5px;
				padding: 20px 20px 150px;
				&__person {
					position: absolute;
					left: 40px;
					right: 40px;
					bottom: 10px;
				}
			   }
			img {
				max-width: 48px;
			}
		}

		.setting {
			.container {
				background-color: #4B45FF;
				border-radius: 20px;
				color: #fff;
				max-width: 1160px;
				padding-top: 3rem;
				padding-bottom: 3rem;
			}
			img {
				max-width: 100%;
			}
			@media (max-width: 1199.98px) {
				.container {
					border-radius: 0;
				}
			}
		}

		.solution {
			.col-lg-4 {
				padding-top: 2rem;
				padding-bottom: 3rem;
			}
			ul {
				padding: 0;
				li {
					list-style: none;
				}
				img {
					display: none;
				}
				.active a {
					color: #000;
				}
				.active img {
					display: block;
				}
			}
			img {
				max-width: 100%;
			}
			@media (min-width: 1200px) {
				&__box {
					position: relative;
					left: -30px;
					width: 1160px;
					padding: 0 30px;
					box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
					border-radius: 5px;
				}
				.col-lg-4 {
					border-right: 1px solid #ECECEC;
				}
			}
		}

		.more {
			img {
				height: 64px;
			}
		}

		.functions {
			.box {
				border-radius: 5px;
			}
			img {
				max-width: 100%;
			}
			a {
				color: #000;
				&:hover {
					color: #FF7C16;
				}
			}
		}

		.blue {
			padding-top: 5rem;
			background-color: #F3F3FF;
		}
	}
</style>