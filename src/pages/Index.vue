<template>
	<Layout class="page page-index">

		<div class="hero">
			<b-container>
				<b-row class="align-items-center">
					<b-col lg="7">
						<div class="hero__title">
							<h1 class="h1 h1_1st">
								Продавайте больше на том же объёме трафика с помощью онлайн-чата и автоматизации
							</h1>
							<div class="h1 h1_2nd">
								Оптимизируйте поддержку пользователей, используя чат-ботов и базу знаний
							</div>
							<div class="h1 h1_3rd">
								Сделайте менеджеров продаж и поддержку ближе к вашим клиентам в онлайне
							</div>
						</div>
						<p class="py-3">
							Инструменты Carrot quest помогают увеличить продажи на сайтах без привлечения нового трафика и обеспечить лучшую поддержку пользователей
						</p>
						<RegistrationForm text="14 дней бесплатно. Регистрируйтесь" />
					</b-col>
				</b-row>
				
				<div class="hero__bg">
					<video autoplay loop muted playsinline class="d-none d-lg-block">
						<source src="/assets/video/components/index-hero.webm" type="video/webm">
						<source src="/assets/video/components/index-hero.mp4" type="video/mp4">
					</video>
					<svg class="d-lg-none" width="835" height="680" viewBox="0 0 835 680" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M729.839 140.08C705.697 41.511 606.221 -18.8239 507.652 5.31796L140.08 95.3452C41.5109 119.487 -18.8238 218.963 5.31796 317.532C29.4598 416.101 128.936 476.436 227.505 452.294L595.077 362.267C693.646 338.125 753.981 238.648 729.839 140.08Z" fill="#FFEEDB"></path>
						<path d="M192.521 259.73C192.521 259.73 176.493 331.149 133.45 402.115C90.4077 473.081 49.0844 496.219 49.0844 496.219L239.047 449.693L192.521 259.73Z" fill="#FFEEDB"></path>
						<path d="M211.124 566.133C191.528 486.123 240.503 405.376 320.513 385.779L618.879 312.702C698.889 293.106 779.635 342.081 799.232 422.091C818.828 502.101 769.853 582.848 689.843 602.444L391.478 675.521C311.468 695.118 230.721 646.143 211.124 566.133Z" fill="#E6E5FF"></path>
						<path d="M642.549 450.412C642.549 450.412 680.917 495.857 738.582 530.831C796.246 565.806 834.712 566.963 834.712 566.963L680.355 604.768L642.549 450.412Z" fill="#E6E5FF"></path>
					</svg>
				</div>
			</b-container>
		</div>

		<!-- Баннер с видео и цифрами -->
		<section class="video-numbers">
			<b-container>
				<b-row >
					<b-col col-12 lg="7" xl="8" class="mb-4 mb-lg-0 h-100">
						<a v-b-modal.youtubeCQ class="video-numbers__play box">
							<g-image src="@/assets/images/components/VideoAbout.png" width="1440" height="760" alt="Видео" />
						</a>
						<b-modal id="youtubeCQ" size="xl" hide-header hide-footer>
							<b-embed
								type="iframe"
								aspect="16by9"
								src="https://www.youtube.com/embed/RNOS-68LaSk?autoplay=1"
								allowfullscreen
							></b-embed>
						</b-modal>
					</b-col>
					<b-col col-12 lg="5" xl="4">
						<div class="video-numbers__box p-4 h-100 text-lg-center">
							<h3 class="h4 mb-4">
								Наши клиенты получили:
							</h3>
			
							<p class="h2 mb-1 counter">
								<animated-number
									:value="carrotNumbersCommunications"
									:formatValue="formatToPrice"
									:duration="2000"
								/>
							</p>
							<p class="grey-text mt-1 mb-4">Коммуникаций с клиентами</p>
			
							<p class="h2 mb-1">
								<animated-number
									:value="carrotNumbersLids"
									:formatValue="formatToPrice"
									:duration="2000"
								/>
							</p>
							<p class="grey-text mt-1 mb-4">Собранных лидов</p>
			
							<p class="h2 mb-1">
								<animated-number
									:value="carrotNumbersSites"
									:formatValue="formatToPrice"
									:duration="2000"
								/>
							</p>
							<p class="grey-text mt-1">Сайтов использующих Carrot quest</p>
						</div>
					</b-col>
				</b-row>
			</b-container>
		</section>

		<!-- Готовые решения -->
		<section class="ready">
			<b-container>
				<b-row>
					<b-col lg="9" xl="7">
						<div class="h1">Готовые решения для разных типов бизнеса</div>
					</b-col>
				</b-row>
				<b-row>
					<b-col lg="4" class="mb-5 mb-lg-0">
						<div class="box h-100">
							<g-image src="@/assets/images/components/small-15.png" fit="contain" background="transparent" height="222" alt="Для интернет магазинов" class="mb-4" />
							<div class="h5 mb-3">Для интернет-магазинов</div>
							<ul>
								<li>Увеличение количества лидов на том же трафике</li>
								<li>Борьба с брошенными корзинами</li>
								<li>Возвращение уходящих пользователей</li>
								<li>Увеличение повторных продаж</li>
							</ul>
							<a href="/ecommerce/" class="btn btn-primary">Подробнее</a>
						</div>
					</b-col>
					<b-col lg="4"  class="my-5 my-lg-0">
						<div class="box h-100">
							<g-image src="@/assets/images/components/small-24.png" fit="contain" background="transparent" height="222" alt="Для интернет сервисов (SaaS)" class="mb-4" />
							<div class="h5 mb-3">Для онлайн-сервисов (SaaS)</div>
							<ul>
								<li>Увеличение количества лидов на том же трафике сайта</li>
								<li>Организация поддержки пользователей</li>
								<li>Вовлечение и удержание пользователей в продукте</li>
								<li>Аналитика поведения пользователей в продукте и использования фичей</li>
							</ul>
							<g-link to="/saas/" class="btn btn-primary">Подробнее</g-link>
						</div>
					</b-col>
					<b-col lg="4" class="mt-5 mt-lg-0">
						<div class="box h-100">
							<g-image src="@/assets/images/components/small-25.png" fit="contain" background="transparent" height="222" alt="Для крупных компаний" class="mb-4" />
							<div class="h5 mb-3">Для крупных компаний</div>
							<ul>
								<li>Весь сервис без ограничений</li>
								<li>Подключим нашего эксперта</li>
								<li>Поделимся экспертизой по автоматизации маркетинга и построению процесса тестирования гипотез</li>
								<li>Запустим гипотезы на увеличение конверсии на вашем сайте (на сбор лидов, на удержание клиентов, на возвращение клиентов)</li>
							</ul>
							<g-link to="/introduction-carrotquest/" class="btn btn-primary">Подробнее</g-link>
						</div>
					</b-col>
				</b-row>
			</b-container>
		</section>

		<Logos />

		<section class="blue">
			<b-container>
				<b-row class="features">

					<!-- Бизнес-чат — основной способ продаж и поддержки -->
					<MegaTabs 
						title="Бизнес-чат — основной способ продаж и поддержки клиентов"
						:tabs="[
							{
								title: 'Начинайте диалог проактивно с высокой конверсией в ответ',
								pic: '/assets/video/components/4.mp4'
							},
							{
								title: 'Планируйте в онлайн-консультанте демонстрации и созвоны с клиентом',
								pic: '/assets/video/components/5.mp4'
							},
							{
								title: 'Устраивайте видеозвонки с клиентами в Zoom из онлайн-консультанта',
								pic: '/assets/video/components/6.mp4'
							},
							{
								title: 'Объединяйте каналы общения (почта, соцсети, мессенджеры), оставаясь в одном интерфейсе',
								pic: '/assets/video/components/7.mp4'
							}
						]"
						:more="{
							href: '/online-consultant/', 
							text: 'Подробнее про онлайн-консультант'
						}"
						text="
							<p>
								«147% — прирост конверсии в&nbsp;оплату благодаря общению с&nbsp;пользователями и&nbsp;автоматизации в&nbsp;веб-сервисе Instaplus.me» <a href=/blog/kejs-instaplus/>Читать кейс</a>
							</p>
							<p>
								Михаил Ермачков <br>
								CEO <a href=https://instaplus.me/ rel=nofollow target=_blank>Instaplus.me</a>
							</p>
						"
					/>

					<!-- Чат-бот сделает половину работы менеджеров -->
					<MegaTabs 
						title="Чат-бот и база знаний <br>сделают половину работы менеджеров"
						:tabs="[
							{
								title: 'Чат-бот проведёт опрос пользователей и распределит на нужных менеджеров',
								pic: '/assets/video/components/8.mp4'
							},
							{
								title: 'Логика чат-бота настраивается за несколько минут без программистов',
								pic: '11.png'
							},
							{
								title: 'Модуль «База знаний» поможет менеджеру ответить на сложные вопросы',
								pic: '/assets/video/components/9.mp4'
							}
						]"
						:more="{
							href:'/online-consultant/', 
							text:'Подробнее про лид-бота'
						}"
						text="
							<p>
								«У нас выросли продажи на 29,61% за счет замены менеджеров на автоматизацию»
								<a href=/blog/yagla-prodazhi/>Читать кейс</a>
							</p>
							<p>
								Александр Алимов <br>
								CEO & Founder в <a href=https://yagla.ru/ rel=nofollow target=_blank>yagla.ru</a>
							</p>
						"
					/>

					<!-- Поп-ап окна, чат-бот и триггерные письма -->
					<MegaTabs 
						title="Поп-ап окна, чат-бот и триггерные письма выжимают из вашего трафика максимум и автоматизируют продажи"
						:tabs="[
							{
								title: 'Триггерные письма обучают вашему продукту, уменьшают количество брошенных заказов и возвращают клиентов',
								pic: '15.png'
							},
							{
								title: 'Триггерные поп-ап окна и чат-бот собирают лидов с вашего сайта в зависимости от поведения пользователя',
								pic: '/assets/video/components/10.mp4'
							}
						]"
						:more="{
							href:'/automation-marketing/', 
							text:'Подробнее про автоматизацию'
						}"
						text="
							<p>
								«Дом.ru увеличил конверсию сайта на 30% благодаря автоматизации и экспериментам» 
								<a href=/blog/kejs-kak-dom-ru-uvelichil-konversiyu-sajta-na-30-s-pomoshhyu-carrot-quest/>Читать кейс</a>
							</p>
							<p>
								Андрей Шубин <br>
								Руководитель <a href=https://domru.ru/ target=_blank>Дом.ru Digital</a>
							</p>
						"
					/>

					<!-- Не потеряйте ни одного клиента в суматохе нового времени -->
					<MegaTabs 
						title="Не потеряйте ни одного клиента в суматохе нового времени"
						:tabs="[
							{
								title: 'Сегментируйте всех собранных лидов в нашей eCRM, изучайте поведение клиентов, делайте email-рассылки',
								pic: '/assets/video/components/11.mp4'
							},
							{
								title: 'Анализируйте эффективность вашего сайта, автоматизации продаж и маркетинга',
								pic: '16.png'
							},
							{
								title: 'Интегрируйте сервис с вашими CRM, аналитикой и другими сервисами',
								pic: '17.png'
							}
						]"
						:more="{
							href:'/lead-manager/', 
							text:'Подробнее про сбор и сегментацию лидов'
						}"
						text="
							<p>
								«Мы в интернет-магазине SkyShop в 2,5 раза увеличили конверсию в заказ с помощью триггерных поп-апов, писем и чата»
								<a href=/blog/case_skyshop/>Читать кейс</a>
							</p>
							<p>
								Цепков Сергей <br>
								Менеджер интернет-проектов <a href=https://skyshop.aeromar.ru/ rel=nofollow target=_blank>SkyShop</a>
							</p>
						"
					/>
				</b-row>
			</b-container>
		</section>

		<Consultation 
			title="Запишитесь на бесплатную демонстрацию сервиса" 
			text="Мы познакомимся, определим ваши задачи, за 30 минут обучим продукту и&nbsp;🎁&nbsp;бесплатно настроим базовый сценарий сбора лидов на вашем сайте"
			pic="medium-2.png"
			alt="Девочка, живущая в сети"
			bg="#fff3e6"
		/>

		<!-- Возможности платформы -->
		<b-container class="functions">
			<b-row>
				<b-col lg="10" xl="8">
					<h2>
						Посмотрите подробнее возможности платформы Carrot&nbsp;quest
					</h2>
				</b-col>
			</b-row>
			<b-row>
				<b-col cols="6" lg="3">
					<a href="/online-consultant/" class="functions__box box text-center p-4">
						<g-image src="@/assets/images/components/small-26.svg" height="158" alt="Онлайн-консультант" />
						<p class="mt-3 mb-0">
							Онлайн-консультант
						</p>
					</a>
				</b-col>
				<b-col cols="6" lg="3">
					<a href="/knowledge-base/" class="functions__box box text-center p-4">
						<g-image src="@/assets/images/components/small-27.svg" height="158" alt="База знаний" />
						<p class="mt-3 mb-0">
							База знаний
						</p>
					</a>
				</b-col>
				<b-col cols="6" lg="3">
					<a href="/lead-manager/" class="functions__box box text-center p-4">
						<g-image src="@/assets/images/components/small-28.svg" height="158" alt="eCRM" />
						<p class="mt-3 mb-0">
							eCRM
						</p>
					</a>
				</b-col>
				<b-col cols="6" lg="3">
					<a href="/chatbot/" class="functions__box box text-center p-4">
						<g-image src="@/assets/images/components/small-29.svg" height="158" alt="Чат-бот" />
						<p class="mt-3 mb-0">
							Чат-бот
						</p>
					</a>
				</b-col>
				<b-col cols="6" lg="3">
					<a href="/pop-up/" class="functions__box box text-center p-4">
						<g-image src="@/assets/images/components/small-30.svg" height="158" alt="Поп-ап окна" />
						<p class="mt-3 mb-0">
							Поп-ап окна
						</p>
					</a>
				</b-col>
				<b-col cols="6" lg="3">
					<a href="/sdk/" class="functions__box box text-center p-4">
						<g-image src="@/assets/images/components/small-31.svg" height="158" alt="SDK для iOS и Android" />
						<p class="mt-3 mb-0">
							SDK для iOS и Android
						</p>
					</a>
				</b-col>
				<b-col cols="6" lg="3">
					<a href="/email-marketing/" class="functions__box box text-center p-4">
						<g-image src="@/assets/images/components/small-32.svg" height="158" alt="Email-рассылки" />
						<p class="mt-3 mb-0">
							Email-рассылки
						</p>
					</a>
				</b-col>
			</b-row>
		</b-container>

		<Integrations />

		<Cases />

		<b-container>
			<b-col class="p-4" style="background-color: #fff3e6; border-radius: 5px;">
				<b-row class="align-items-center justify-content-center">
					<b-col lg="6">
						<g-image src="@/assets/images/components/10.png" width="494" alt="Регистрация в сервисе" title="Поехали!" style="max-width: 100%" />
					</b-col>
					<b-col lg="6">
						<div class="h1 mb-4">Регистрация в сервисе</div>
						<RegistrationForm text="14 дней бесплатно" />
					</b-col>
				</b-row>
			</b-col>
		</b-container>

		<Study />

	</Layout>
</template>

<script>
	import AnimatedNumber 		from "animated-number-vue"
	import Logos 				from '~/components/Logos.vue'
	import MegaTabs 			from '~/components/MegaTabs.vue'
	import Consultation 		from '~/components/Consultation.vue'
	import Integrations 		from '~/components/Integrations.vue'
	import Cases 				from '~/components/Cases/Cases.vue'
	import RegistrationForm 	from '~/components/Forms/RegistrationForm.vue'
	import Study 				from '~/components/Study.vue'

	export default {
		components: {
			AnimatedNumber,
			Logos,
			MegaTabs,
			Consultation,
			Integrations,
			Cases,
			RegistrationForm,
			Study
		},
		data() {
			return {
				carrotNumbersCommunications: 758464786,
				carrotNumbersLids: 94324071,
				carrotNumbersSites: 9325
			};
		},
		methods: {
			formatToPrice(value) {
				return `${value.toLocaleString('ru', {maximumFractionDigits: 0})}`;
			}
		},
		//Делаем в HEAD
		metaInfo() {
			return {
				title: 'Инструменты для увеличения продаж на сайтах без привлечения нового трафика',
				meta: [
					{
						key: 'description',
						name: 'description',
						content: 'Carrot quest — сервис для увеличения продаж, автоматизации маркетинга, улучшения коммуникации с клиентами ✔️онлайн-консультант ✔️чат-боты ✔️поп-ап окна ✔️триггерные письма ✔️eCRM'
					},
					{
						property: "og:image",
						content: 'https://www.carrotquest.io/assets/images/cover/index.gif'
					},
				],
				link: [
					{
						rel: 'canonical',
						href: 'https://www.carrotquest.io/'
					}
				]
			}
		}
	}	
</script>


<style lang="scss">
	.page-index {
		.hero {
			@keyframes h1_1st {
				0%  { top: 0px; opacity:1; z-index:0;}
				32% { top: 0px; opacity:1; z-index:0; }
				33% { top: 0px; opacity: 0; z-index: 0; } 
				99% { top: 0px; opacity: 0; z-index: 0; }
				100%{ top: 0px; opacity: 1; }
			}
			@keyframes h1_2nd {
				0%  { top: 0; opacity: 0; }
				32% { top: 0px; opacity: 0; }
				33% { top: 0; opacity: 1; }
				65% { top: 0; opacity: 1; z-index: 0; }
				66% { top: 0; opacity: 0; z-index: -1; }
				100%{ top: 0; opacity: 0; z-index: 0; }
			}
			@keyframes h1_3rd {
				0%  { top: 0; opacity: 0; }
				65% { top: 0px; opacity: 0; }
				66% { top: 0; opacity: 1; }
				98% { top: 0; opacity: 1; }
				99%{ top: 0; opacity: 0; z-index: -1; }
				100%{ top: 0; opacity: 0; z-index: -1; }
			}

			.h1 {
				position: absolute;
				opacity: 1;
				margin: 0;
				top: 0;

				&.h1_1st {
					animation: h1_1st 18s linear infinite;
				}
				&.h1_2nd {
					animation: h1_2nd 18s linear infinite;
				}
				&.h1_3rd {
					animation: h1_3rd 18s linear infinite;
				}
			}
			&__title { 
				position: relative;
				margin: 0 0 24px;
				height: 8rem;
			}
			&__bg {
				position: absolute;
				z-index: -5;
				top: 50%;
				right: 50%;
				margin-top: -460px;
				margin-right: -750px;
			}
			@media (max-width: 1199.98px) {
				&__bg {
					margin-top: -360px;
					margin-right: -680px;
					video {
						width: 800px;
					}
				}
				&__title {
					height: 11rem;
				}
			}
			@media (max-width: 991.98px) {
				&__title {
					height: 8rem;
				}
			}
			@media (max-width: 575.98px) {
				&__bg {
					margin-top: -560px;
				}
				&__title {
					height: 6.5rem;
				}
				br {
					display: none;
				}
			}
		}

		.video-numbers {
			margin-top: -15rem;
			&__play {
				position: relative;
				box-shadow: 0 5px 10px rgba(0,0,0,.1);
				border-radius: 5px;
				overflow: hidden;
				img {
					max-width: 100%;
				}
				&::after {
					position: absolute;
					top: 50%;
					left: 50%;
					margin-top: -76px;
					margin-left: -76px;
					z-index: 4;
					content: "";
					background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUyIiBoZWlnaHQ9IjE1MiIgdmlld0JveD0iMCAwIDE1MiAxNTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNTIiIGhlaWdodD0iMTUyIiByeD0iNzYiIGZpbGw9IiNGRjY2MDAiLz4KPHBhdGggZD0iTTk2Ljc4NTIgNzMuNjg3NkM5OC43ODUyIDc0Ljg0MjMgOTguNzg1MiA3Ny43MjkxIDk2Ljc4NTIgNzguODgzOEw2Ny44NTY2IDk1LjU4NTdDNjUuODU2NiA5Ni43NDA0IDYzLjM1NjYgOTUuMjk3IDYzLjM1NjYgOTIuOTg3Nkw2My4zNTY2IDU5LjU4MzhDNjMuMzU2NiA1Ny4yNzQ0IDY1Ljg1NjYgNTUuODMxIDY3Ljg1NjYgNTYuOTg1N0w5Ni43ODUyIDczLjY4NzZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjYuMTk0NCA2My4zMjM5TDE1IDU5LjY4NTdMMTcuNzk4NiA1MS4xNDk5TDI4Ljk5MyA1NC43ODgxTDI4LjQzMzMgNTYuNjA3MkwxOC42MzgyIDUzLjM4ODhMMTYuOTU5IDU4LjI4NjRMMjYuNzU0MiA2MS41MDQ4TDI2LjE5NDQgNjMuMzIzOVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0zMC44MDk4IDQ5LjA1MDdDMjkuNjkwMyA0OS4zMzA2IDI4LjU3MDkgNDkuMDUwNyAyNy40NTE0IDQ4LjM1MUMyNS4wNzI2IDQ2LjgxMTggMjQuNjUyOCA0NC4yOTMxIDI2LjA1MjEgNDIuMTk0MUMyNy40NTE0IDQwLjA5NTEgMjkuODMwMyAzOS41MzU0IDMyLjIwOTEgNDEuMDc0N0MzMy4zMjg1IDQxLjc3NDMgMzQuMDI4MiA0Mi43NTM4IDM0LjMwOCA0My44NzMzQzM0LjU4NzkgNDQuOTkyNyAzNC4zMDggNDYuMTEyMiAzMy42MDg0IDQ3LjA5MTdDMzIuNzY4OCA0OC4wNzEyIDMxLjkyOTIgNDguNzcwOCAzMC44MDk4IDQ5LjA1MDdaTTMyLjc2ODggNDQuNDMzQzMyLjYyODkgNDMuNzMzMyAzMi4wNjkyIDQzLjE3MzYgMzEuMDg5NiA0Mi42MTM5QzMwLjI1MDEgNDEuOTE0MiAyOS40MTA1IDQxLjc3NDMgMjguNzEwOCA0MS43NzQzQzI4LjAxMTIgNDEuOTE0MiAyNy40NTE0IDQyLjE5NDEgMjcuMDMxNyA0Mi44OTM4QzI2LjYxMTkgNDMuNTkzNCAyNi40NzE5IDQ0LjE1MzEgMjYuNzUxOCA0NC44NTI4QzI3LjAzMTcgNDUuNTUyNCAyNy41OTE0IDQ2LjExMjIgMjguNDMxIDQ2LjgxMThDMjkuMjcwNSA0Ny4zNzE1IDMwLjExMDEgNDcuNjUxNCAzMC44MDk4IDQ3LjUxMTVDMzEuNTA5NCA0Ny4zNzE1IDMyLjA2OTIgNDcuMDkxNyAzMi40ODg5IDQ2LjM5MkMzMi43Njg4IDQ1LjY5MjQgMzIuOTA4NyA0NS4xMzI2IDMyLjc2ODggNDQuNDMzWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTM4LjIyODkgMzguODM2QzM3LjEwOTQgMzguODM2IDM2LjEyOTkgMzguMjc2MyAzNS4xNTA0IDM3LjI5NjhDMzMuMTkxNCAzNS4zMzc3IDMzLjMzMTMgMzIuNjc5MSAzNS4xNTA0IDMwLjk5OTlDMzUuNzEwMSAzMC41ODAxIDM2LjEyOTkgMzAuMTYwMyAzNi41NDk3IDMwLjAyMDRDMzYuOTY5NSAyOS44ODA0IDM3LjM4OTMgMjkuNzQwNSAzNy42NjkyIDI5LjYwMDZMMzguNjQ4NyAzMC41ODAxTDM4LjA4OSAzMS4xMzk4QzM3LjUyOTIgMzEuMTM5OCAzNi44Mjk2IDMxLjI3OTggMzYuMTI5OSAzMS45Nzk0QzM1LjU3MDIgMzIuNTM5MSAzNS4yOTA0IDMzLjA5ODggMzUuMjkwNCAzMy45Mzg0QzM1LjI5MDQgMzQuNjM4MSAzNS43MTAxIDM1LjQ3NzcgMzYuNDA5OCAzNi4xNzczQzM3LjEwOTQgMzYuODc3IDM3LjgwOTEgMzcuMjk2OCAzOC41MDg4IDM3LjQzNjdDMzkuMjA4NCAzNy40MzY3IDM5LjkwODEgMzcuMjk2OCA0MC40Njc4IDM2LjczN0M0MC44ODc2IDM2LjMxNzIgNDEuMTY3NCAzNS44OTc1IDQxLjMwNzQgMzUuNjE3NkM0MS40NDczIDM1LjE5NzggNDEuNDQ3MyAzNC45MTc5IDQxLjQ0NzMgMzQuNjM4MUw0MS44NjcxIDM0LjIxODNMNDIuODQ2NiAzNC43NzhDNDIuODQ2NiAzNS4wNTc5IDQyLjcwNjcgMzUuNDc3NyA0Mi40MjY4IDM2LjAzNzRDNDIuMjg2OSAzNi40NTcyIDQxLjg2NzEgMzcuMDE2OSA0MS4zMDc0IDM3LjQzNjdDNDAuNDY3OCAzOC40MTYyIDM5LjM0ODMgMzguOTc1OSAzOC4yMjg5IDM4LjgzNloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik00Mi40Mjg1IDI0Ljk4MjdMNDQuNTI3NSAyMy44NjMzTDQ5Ljg0NDkgMjcuOTIxM0w0OC44NjUzIDIxLjM0NDVMNTAuOTY0MyAyMC4yMjUxTDU1LjQ0MjEgMjcuNjQxNEw1My45MDI4IDI4LjQ4MUw1MC40MDQ2IDIyLjYwMzlMNTEuNTI0IDI5Ljg4MDNMNTAuNTQ0NSAzMC40NEw0NC42Njc0IDI1Ljk2MjJMNDguMTY1NyAzMS44MzkzTDQ2LjkwNjMgMzIuNTM5TDQyLjQyODUgMjQuOTgyN1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02MC4xOTk4IDI0LjcwMjhDNTkuMjIwMyAyNC4xNDMgNTguNTIwNiAyMy4xNjM1IDU4LjEwMDggMjEuOTA0MkM1Ny40MDEyIDE5LjI0NTUgNTguNjYwNSAxNy4wMDY2IDYxLjAzOTQgMTYuMzA2OUM2My40MTgyIDE1LjYwNzMgNjUuNjU3MSAxNi44NjY3IDY2LjM1NjcgMTkuNTI1M0M2Ni43NzY1IDIwLjkyNDYgNjYuNjM2NiAyMi4wNDQxIDY2LjA3NjkgMjMuMDIzNkM2NS41MTcxIDI0LjAwMzEgNjQuNTM3NiAyNC43MDI4IDYzLjQxODIgMjQuOTgyNkM2Mi4yOTg3IDI1LjQwMjQgNjEuMTc5MyAyNS4yNjI1IDYwLjE5OTggMjQuNzAyOFpNNjQuODE3NSAyMi42MDM4QzY1LjA5NzMgMjIuMDQ0MSA2NS4wOTczIDIxLjIwNDUgNjQuODE3NSAyMC4wODUxQzY0LjUzNzYgMTkuMTA1NSA2NC4xMTc4IDE4LjI2NiA2My41NTgxIDE3Ljg0NjJDNjIuOTk4NCAxNy40MjY0IDYyLjI5ODcgMTcuMjg2NCA2MS41OTkxIDE3LjU2NjNDNjAuODk5NCAxNy43MDYyIDYwLjMzOTcgMTguMjY2IDYwLjA1OTggMTguODI1N0M1OS43OCAxOS41MjUzIDU5Ljc4IDIwLjM2NDkgNjAuMDU5OCAyMS4zNDQ0QzYwLjMzOTcgMjIuMzIzOSA2MC43NTk1IDIzLjAyMzYgNjEuMzE5MiAyMy40NDM0QzYxLjg3ODkgMjMuODYzMiA2Mi41Nzg2IDIzLjg2MzIgNjMuMjc4MiAyMy43MjMyQzYzLjk3NzkgMjMuNTgzMyA2NC41Mzc2IDIzLjE2MzUgNjQuODE3NSAyMi42MDM4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTcwLjY5MzUgMTQuNjI4TDc4LjEwOTkgMTQuMzQ4MVYxNS42MDc1TDc1LjMxMTIgMTUuNzQ3NEw3NS41OTExIDIzLjMwMzdMNzMuNzcyIDIzLjQ0MzZMNzMuNDkyMiAxNS44ODc0TDcwLjY5MzUgMTYuMDI3M1YxNC42MjhaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNODQuNTQ3MiAyMi44ODRMODMuOTg3NSAyNi4zODIzTDgyLjMwODMgMjYuMTAyNEw4NC4yNjc0IDE0Ljc2ODFMODUuMzg2OCAxNC45MDhDODUuNjY2NyAxNC45MDggODUuODA2NiAxNS4wNDc5IDg1LjgwNjYgMTUuMTg3OUM4NS44MDY2IDE1LjMyNzggODUuODA2NiAxNS42MDc2IDg1LjgwNjYgMTYuMTY3NEM4Ni4yMjY0IDE1Ljg4NzUgODYuNjQ2MiAxNS43NDc2IDg3LjIwNTkgMTUuNDY3N0M4Ny43NjU2IDE1LjE4NzkgODguMzI1NCAxNS4zMjc4IDg5LjAyNSAxNS4zMjc4QzkwLjcwNDIgMTUuNjA3NiA5Mi4xMDM1IDE3LjAwNyA5MS41NDM4IDIwLjIyNTRDOTEuMTI0IDIxLjkwNDUgOTAuNDI0MyAyMi44ODQgODkuNTg0NyAyMy41ODM3Qzg4Ljc0NTIgMjQuMTQzNCA4Ny43NjU2IDI0LjI4MzMgODYuNzg2MSAyNC4xNDM0Qzg1LjgwNjYgMjMuODYzNSA4NS4xMDcgMjMuNDQzOCA4NC41NDcyIDIyLjg4NFpNODkuNTg0NyAyMC4wODU0QzkwLjAwNDUgMTcuNTY2NyA4OS4wMjUgMTYuODY3IDg3LjkwNTYgMTYuNTg3MkM4Ny42MjU3IDE2LjU4NzIgODcuMDY2IDE2LjU4NzIgODYuNjQ2MiAxNi43MjcxQzg2LjIyNjQgMTYuODY3IDg1LjgwNjYgMTcuMDA3IDg1LjUyNjcgMTcuMjg2OEw4NC44MjcxIDIxLjYyNDdDODUuMjQ2OSAyMi4xODQ0IDg1LjgwNjYgMjIuNjA0MiA4Ni43ODYxIDIyLjc0NDFDODcuOTA1NiAyMi44ODQgODkuMTY0OSAyMi42MDQyIDg5LjU4NDcgMjAuMDg1NFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMDEuNjE4IDI4LjIwMTVDMTAwLjc3OSAyOC4zNDE0IDk5Ljc5OSAyOC4zNDE0IDk4LjI1OTggMjcuNjQxOEM5Ny4wMDA0IDI3LjA4MjEgOTYuMTYwOCAyNi4yNDI1IDk1Ljc0MSAyNS4yNjNDOTUuMzIxMiAyNC4yODM0IDk1LjQ2MTIgMjMuMDI0MSA5Ni4wMjA5IDIxLjkwNDZDOTcuMTQwMyAxOS4zODU5IDk5LjUxOTEgMTguNDA2NCAxMDEuNjE4IDE5LjM4NTlDMTAyLjczOCAxOS44MDU3IDEwMy40MzcgMjAuNTA1MyAxMDMuNzE3IDIxLjQ4NDhDMTAzLjk5NyAyMi4zMjQ0IDEwMy44NTcgMjMuNDQzOSAxMDMuMjk3IDI0Ljg0MzJDMTAzLjE1NyAyNS4xMjMgMTAzLjAxNyAyNS4yNjMgMTAzLjAxNyAyNS40MDI5TDk3LjQyMDIgMjMuMDI0MUM5Ny4wMDA0IDI0LjAwMzYgOTcuMDAwNCAyNC44NDMyIDk3LjI4MDMgMjUuNDAyOUM5Ny41NjAxIDI1Ljk2MjYgOTguMTE5OCAyNi41MjIzIDk4LjgxOTUgMjYuODAyMkM5OS45Mzg5IDI3LjIyMiAxMDAuNzc5IDI3LjIyMiAxMDEuNDc4IDI3LjA4MjFMMTAyLjAzOCAyNy4zNjE5TDEwMS42MTggMjguMjAxNVpNOTkuNTE5MSAyMC4zNjU0Qzk4Ljk1OTQgMjAuNTA1MyA5OC41Mzk2IDIxLjA2NSA5Ny45Nzk5IDIxLjkwNDZMMTAyLjAzOCAyMy41ODM4QzEwMi40NTggMjIuNzQ0MiAxMDIuNDU4IDIyLjA0NDYgMTAyLjMxOCAyMS40ODQ4QzEwMi4xNzggMjEuMDY1IDEwMS43NTggMjAuNjQ1MiAxMDEuMTk4IDIwLjM2NTRDMTAwLjYzOSAyMC4yMjU1IDEwMC4wNzkgMjAuMjI1NSA5OS41MTkxIDIwLjM2NTRaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTA5Ljg3NCAyMy44NjMzTDExNS44OTEgMjguMjAxMUwxMTUuMDUxIDI5LjE4MDZMMTEyLjgxMyAyNy41MDE1TDEwOC40NzUgMzMuNTE4NUwxMDcuMDc1IDMyLjUzOUwxMTEuNDEzIDI2LjUyMkwxMDkuMTc0IDI0Ljg0MjhMMTA5Ljg3NCAyMy44NjMzWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTExOS4yNTEgMzUuNDc3NUwxMjAuMjMgMzYuNTk2OUMxMjEuNjMgMzguMTM2MSAxMjIuMDUgMzkuODE1MyAxMjAuNTEgNDEuMjE0NkMxMTguOTcxIDQyLjYxMzkgMTE3LjQzMiA0Mi4wNTQyIDExNS44OTMgNDAuMzc1TDExMy43OTQgMzcuOTk2MkwxMjAuMzcgMzIuMTE5MUwxMjEuNDkgMzMuMzc4NUwxMTkuMjUxIDM1LjQ3NzVaTTExNS44OTMgMzguNTU1OUwxMTYuODcyIDM5LjUzNTVDMTE3LjI5MiAzOS45NTUyIDExNy43MTIgNDAuMzc1IDExOC4xMzEgNDAuMzc1QzExOC41NTEgNDAuMzc1IDExOC45NzEgNDAuMzc1IDExOS4zOTEgMzkuOTU1MkMxMTkuODExIDM5LjUzNTUgMTIwLjA5MSAzOS4xMTU3IDExOS45NTEgMzguNjk1OUMxMTkuOTUxIDM4LjI3NjEgMTE5LjY3MSAzNy44NTYzIDExOS4yNTEgMzcuMjk2NkwxMTguMjcxIDM2LjE3NzFMMTE1Ljg5MyAzOC41NTU5WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEzMC41OCA1NS43Njc2QzEzMC44NiA1Ny4wMjY5IDEzMC41OCA1OC4wMDY1IDEyOS40NjEgNTguNDI2M0MxMjcuNzgyIDU5LjEyNTkgMTI2LjY2MiA1OC4yODYzIDEyNS44MjIgNTYuMTg3NEwxMjQuNDIzIDUyLjY4OTFMMTMyLjUzOSA0OS40NzA3TDEzMy45MzggNTIuODI5QzEzNC43NzggNTQuNzg4MSAxMzQuMzU4IDU2LjA0NzQgMTMzLjA5OSA1Ni42MDcyQzEzMS45NzkgNTcuMDI2OSAxMzEuMTQgNTYuNzQ3MSAxMzAuNTggNTUuNzY3NlpNMTI2LjEwMiA1My44MDg1TDEyNi44MDIgNTUuNjI3NkMxMjcuMjIyIDU2Ljc0NzEgMTI3LjkyMSA1Ny4wMjY5IDEyOC43NjEgNTYuNzQ3MUMxMjkuNjAxIDU2LjQ2NzIgMTI5Ljg4IDU1Ljc2NzYgMTI5LjMyMSA1NC42NDgxTDEyOC42MjEgNTIuODI5TDEyNi4xMDIgNTMuODA4NVpNMTMxLjk3OSA1MS40Mjk3TDEyOS43NDEgNTIuMjY5M0wxMzAuNDQgNTMuOTQ4NUMxMzAuODYgNTQuOTI4IDEzMS40MiA1NS4yMDc5IDEzMi4xMTkgNTQuOTI4QzEzMi44MTkgNTQuNjQ4MSAxMzIuOTU5IDUzLjk0ODUgMTMyLjY3OSA1Mi45NjlMMTMxLjk3OSA1MS40Mjk3WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEzNy4wMTggNjQuMTYzNUwxMzAuNTgxIDY1LjE0MzFMMTM3LjcxOCA2OC4yMjE1TDEzNy45OTcgNzAuMDQwNkwxMjkuMzIyIDcxLjNMMTI5LjA0MiA2OS42MjA4TDEzNS42MTkgNjguNjQxM0wxMjguNDgyIDY1LjU2MjhMMTI4LjIwMiA2My43NDM4TDEzNi44NzggNjIuNDg0NEwxMzcuMDE4IDY0LjE2MzVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTI3LjM2NCA3Ni42MTcxTDEyNy41MDQgNzUuMjE3OEwxMzAuNzIzIDc1LjQ5NzZWNzUuNzc3NUMxMzAuODYzIDc2LjE5NzMgMTMxLjAwMyA3Ni40NzcxIDEzMS40MjIgNzYuNzU3QzEzMS44NDIgNzcuMDM2OSAxMzIuNDAyIDc3LjE3NjggMTMzLjI0MiA3Ny4zMTY3QzEzMy45NDEgNzcuNDU2NyAxMzUuMjAxIDc3LjU5NjYgMTM2LjE4IDc3LjczNjVDMTM2Ljc0IDc3Ljg3NjUgMTM3LjQzOSA3Ny44NzY1IDEzNy45OTkgNzguMDE2NEwxMzcuMyA4NC43MzNMMTI5Ljc0MyA4NC4wMzM0TDEyOS44ODMgODUuMTUyOEwxMjYuNjY1IDg0Ljg3M0wxMjYuODA1IDgzLjQ3MzdIMTI4Ljc2NEwxMjkuNDYzIDc2Ljg5NjlMMTI3LjM2NCA3Ni42MTcxWk0xMzAuNDQzIDc3Ljg3NjRMMTMwLjAyMyA4Mi4yMTQzTDEzNi4zMiA4Mi43NzRMMTM2LjYgNzkuNDE1N0MxMzYuMTggNzkuNDE1NyAxMzUuNjIgNzkuMjc1OCAxMzUuMjAxIDc5LjI3NThDMTM0Ljc4MSA3OS4yNzU4IDEzNC4zNjEgNzkuMTM1OCAxMzMuOTQxIDc5LjEzNThDMTMzLjUyMSA3OS4xMzU4IDEzMy4xMDIgNzguOTk1OSAxMzIuODIyIDc4Ljk5NTlDMTMxLjg0MiA3OC43MTYgMTMxLjAwMyA3OC40MzYyIDEzMC40NDMgNzcuODc2NFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMjUuOTY3IDk2LjA2NzVDMTI1LjgyNyA5NS4zNjc4IDEyNS42ODcgOTQuMjQ4NCAxMjYuMjQ3IDkyLjU2OTJDMTI2LjY2NiA5MS4zMDk4IDEyNy4zNjYgOTAuMzMwMyAxMjguNDg1IDg5LjkxMDVDMTI5LjQ2NSA4OS40OTA4IDEzMC41ODQgODkuNDkwOCAxMzEuOTg0IDg5LjkxMDVDMTM0LjY0MiA5MC44OTAxIDEzNS43NjIgOTIuOTg5IDEzNC45MjIgOTUuMjI3OUMxMzQuNTAzIDk2LjM0NzMgMTMzLjk0MyA5Ny4xODY5IDEzMy4xMDMgOTcuNjA2N0MxMzIuMjY0IDk4LjAyNjUgMTMxLjE0NCA5OC4wMjY1IDEyOS43NDUgOTcuNDY2OEMxMjkuNDY1IDk3LjMyNjkgMTI5LjE4NSA5Ny4zMjY5IDEyOS4xODUgOTcuMTg2OUwxMzEuMTQ0IDkxLjQ0OThDMTMwLjE2NSA5MS4xNjk5IDEyOS4zMjUgOTEuMTY5OSAxMjguNzY1IDkxLjQ0OThDMTI4LjIwNiA5MS43Mjk2IDEyNy43ODYgOTIuMjg5NCAxMjcuNTA2IDkzLjEyODlDMTI3LjA4NiA5NC4yNDg0IDEyNy4yMjYgOTUuMDg4IDEyNy41MDYgOTUuNzg3NkwxMjcuMzY2IDk2LjM0NzNMMTI1Ljk2NyA5Ni4wNjc1Wk0xMzMuNjYzIDkzLjQwODhDMTMzLjM4MyA5Mi44NDkxIDEzMi45NjMgOTIuNDI5MyAxMzEuOTg0IDkyLjAwOTVMMTMwLjU4NCA5Ni4wNjc1QzEzMS40MjQgOTYuMzQ3MyAxMzIuMTI0IDk2LjM0NzMgMTMyLjY4MyA5Ni4yMDc0QzEzMy4xMDMgOTUuOTI3NiAxMzMuNTIzIDk1LjY0NzcgMTMzLjY2MyA5NC45NDhDMTMzLjk0MyA5NC4zODgzIDEzMy45NDMgOTMuOTY4NSAxMzMuNjYzIDkzLjQwODhaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTIzLjg2NCAxMDEuMTA1QzEyNC45ODMgMTAwLjgyNSAxMjYuMTAzIDEwMS4xMDUgMTI3LjM2MiAxMDEuODA0QzEyOS43NDEgMTAzLjM0NCAxMzAuMTYxIDEwNS44NjIgMTI4LjkwMiAxMDcuOTYxQzEyNy42NDIgMTEwLjA2IDEyNS4xMjMgMTEwLjYyIDEyMi43NDUgMTA5LjIyMUMxMjEuNjI1IDEwOC41MjEgMTIwLjkyNSAxMDcuNTQyIDEyMC42NDYgMTA2LjQyMkMxMjAuMzY2IDEwNS4zMDMgMTIwLjY0NiAxMDQuMTgzIDEyMS4zNDUgMTAzLjIwNEMxMjEuNzY1IDEwMi4wODQgMTIyLjc0NSAxMDEuMzg1IDEyMy44NjQgMTAxLjEwNVpNMTIxLjkwNSAxMDUuODYyQzEyMi4wNDUgMTA2LjU2MiAxMjIuNjA1IDEwNy4xMjIgMTIzLjU4NCAxMDcuNjgyQzEyNC40MjQgMTA4LjI0MSAxMjUuMjYzIDEwOC41MjEgMTI1Ljk2MyAxMDguMzgxQzEyNi42NjMgMTA4LjI0MSAxMjcuMjIyIDEwNy45NjEgMTI3LjY0MiAxMDcuMjYyQzEyOC4wNjIgMTA2LjU2MiAxMjguMjAyIDEwNi4wMDIgMTI3LjkyMiAxMDUuMzAzQzEyNy42NDIgMTA0LjYwMyAxMjcuMDgyIDEwNC4wNDMgMTI2LjI0MyAxMDMuNDg0QzEyNS40MDMgMTAyLjkyNCAxMjQuNTY0IDEwMi42NDQgMTIzLjg2NCAxMDIuNzg0QzEyMy4xNjQgMTAyLjkyNCAxMjIuNjA1IDEwMy4yMDQgMTIyLjE4NSAxMDMuOTAzQzEyMS43NjUgMTA0LjQ2MyAxMjEuNzY1IDEwNS4xNjMgMTIxLjkwNSAxMDUuODYyWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==') center no-repeat;
					background-size: 120px 120px;
					width: 152px;
					height: 152px;
					transition: all .2s ease-in-out;
				}
				&:hover {
					&::after {
						background-size: 152px 152px;
					}
				}
			}
			&__box {
				background-color: #fff;
				border-radius: 5px;
				box-shadow: 0 5px 10px rgba(0,0,0,.1);
			}
			@media (max-width: 1199.98px) {
				margin-top: -8rem;
				&__play {
					img {
						max-width: 569px;
						height: 362px;
					}
				}
			}
			@media (max-width: 991.98px) {
				
				&__play {
					img {
						max-width: 100%;
						height: auto;
					}
					&::after {
						background-size: 90px 90px;
					}
					&:hover {
						&::after {
							background-size: 120px 120px;
						}
					}
				}
			}
			@media (max-width: 767.98px) {
				margin-top: 0;
			}

		}

		.ready {
			.box {
				background: #FFFFFF;
				box-shadow: 0 5px 10px rgba(0,0,0,.1);
				border-radius: 5px;
				padding: 1.5rem 1.25rem;
			}
			img {
				display: block;
				margin: -5rem auto 0;
				width: auto;
				height: 111px;
			}
			.h1 {
				margin-bottom: 5rem;
			}
			ul {
				padding: 0;
				margin-bottom: 3.5rem;
				li {
					margin: 0;
					margin-bottom: 8px;
					padding-left: 1.5rem !important;
					position: relative;
					list-style: none;
				}
				li::before {
					content: url("data:image/svg+xml,%3Csvg width='16' height='2' viewBox='0 0 16 2' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.640625 1.30469V0.117188H15.3594V1.30469H0.640625Z' fill='%23FF6600'/%3E%3C/svg%3E%0A") !important;
					top: -4px !important;
					left: 0;
					position: absolute;
				}
			}
			.btn {
				position: absolute;
				bottom: 20px;
			}
		}

		.blue {
			padding-top: 5rem;
			background-color: #F5F6FE;
		}
	}

	
</style>