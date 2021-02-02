<template>
	<Layout class="page page-online-consultant">

		<div class="hero blue">
			<b-container>
				<b-row class="align-items-center">
					<b-col lg="6" class="order-2 order-lg-1">
						<g-image src="@/assets/images/online-consultant/hero.png" quality="100" alt="Онлайн-консультант" />
					</b-col>
					<b-col lg="6" class="order-1 order-lg-2">
						<h1>
							Повышайте продажи на сайте и улучшайте поддержку ваших клиентов с помощью онлайн-консультанта
						</h1>
						<b-button href="/panel/register/" variant="primary" class="my-3">Подключить к своему сайту</b-button>
						<p>
							14 дней бесплатно
						</p>
					</b-col>
				</b-row>
			</b-container>
		</div>

		<section class="advantages">
			<b-container>
				<b-row class="advantages__automatization align-items-start">
					<b-col lg="4" class="mb-5 d-flex align-items-center align-items-lg-start">
						<g-image src="@/assets/images/components/small-22.png" width="158" height="158" alt="Live Chat" fit="inside" class="mr-4" />
						<p><b>Live Chat</b> с персонализацией и аудио/видео звонками ;)</p>
					</b-col>
					<b-col lg="4" class="mb-5 d-flex align-items-center align-items-lg-start">
						<g-image src="@/assets/images/components/small-2.png" width="158" height="158" alt="Лид-бот" fit="inside" class="mr-4" />
						<p><b>Лид-бот</b> на сайте для генерации и квалификации лидов</p>
					</b-col>
					<b-col lg="4" class="mb-5 d-flex align-items-center align-items-lg-start">
						<g-image src="@/assets/images/components/small-9.png" width="158" height="158" alt="Объединени почты, мессенджеров, соцсетей" fit="inside" class="mr-4" />
						<p><b>Объединение почты, мессенджеров, соцсетей</b> чтобы не потерять ни одного клиента</p>
					</b-col>
					<b-col lg="4" class="mb-5 d-flex align-items-center align-items-lg-start">
						<g-image src="@/assets/images/components/small-7.png" width="158" height="158" alt="Каналы диалогов" fit="inside" class="mr-4" />
						<p><b>Каналы диалогов</b> для автоматического распределения диалогов по командам и менеджерам</p>
					</b-col>
					<b-col lg="4" class="mb-5 d-flex align-items-center align-items-lg-start">
						<g-image src="@/assets/images/components/small-6.png" width="158" height="158" alt="База знаний" fit="inside" class="mr-4" />
						<p><b>База знаний</b> для самообслуживания клиентов и ускорения работы менеджеров</p>
					</b-col>
				</b-row>
			</b-container>
		</section>

		<section class="blue">
			<b-container>
				<b-row class="features">

					<!-- Будьте с клиентами настолько близко, насколько это возможно -->
					<MegaTabs 
						title="Будьте с клиентами настолько близко, насколько это возможно"
						:tabs="[
							{
								title: 'Аудио и&nbsp;видео звонки с&nbsp;помощью ZOOM интеграции помогут проводить демо, консультацию или разобраться в&nbsp;баге',
								pic: '/assets/video/components/6.mp4'
							},
							{
								title: 'Интеграция с&nbsp;Calendly автоматически согласует и&nbsp;добавит в&nbsp;календарь звонок с&nbsp;клиентом',
								pic: '/assets/video/components/5.mp4'
							},
							{
								title: 'Еще больше интеграций, чтобы встроить бизнес чат в&nbsp;ваши бизнес процессы',
								pic: '18.png'
							}
						]"
					/>

					<!-- Лид-бот помогает собирать больше качественных лидов -->
					<MegaTabs 
						title="Лид-бот помогает собирать больше качественных лидов с&nbsp;сайта без нагрузки на&nbsp;ваших менеджеров"
						:tabs="[
							{
								title: 'На&nbsp;основе поведения посетителя задаст ему вопросы и&nbsp;либо соберет контакты, либо переключит на&nbsp;менеджера',
								pic: '19.png'
							},
							{
								title: 'Может организовать запись на&nbsp;демо или консультацию с&nbsp;перспективным клиентом',
								pic: '/assets/video/components/8.mp4'
							},
							{
								title: 'Настройте за&nbsp;5&nbsp;минут в&nbsp;визуальном конструкторе. Программист не&nbsp;понадобится',
								pic: '11.png'
							}
						]"
						:more="{
							href:'/chatbot/', 
							text:'Подробнее про лид-бота'
						}"
					/>
				</b-row>
			</b-container>
		</section>

		<!-- Вы не потеряете ни одного клиента -->
		<b-container class="messegers">
			<b-row>
				<b-col lg="10" xl="8">
					<h2 class="mb-3 mb-lg-5">
						Вы не потеряете ни одного клиента. Собирайте все сообщения из соцсетей и мессенджеров в одном месте и отвечайте быстрее
					</h2>
				</b-col>
			</b-row>
			<b-row>
				<b-col lg="3" class="text">
					<ul>
						<li>Facebook</li>
						<li>ВКонтакте</li>
						<li>Telegram</li>
						<li>Viber</li>
						<li>Яндекс.Диалоги</li>
						<li>Почта</li>
						<li>Чат на сайте</li>
					</ul>
				</b-col>
				<b-col lg="9">
					<g-image src="@/assets/images/components/20.png" width="815" quality="100" alt="Вы не потеряете ни одного клиента" />
					<svg class="messegers_bg d-none d-lg-block" width="1344" height="850" viewBox="0 0 1344 850" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M823.88 193.048C829.064 153.794 860.787 60.2276 946.202 0C944.1 42.3388 916.694 140.223 823.88 193.048Z" fill="#F3F3FF"/>
						<path d="M464.48 315.438C473.728 287.82 506.179 221.564 562.002 177.486C559.76 194.45 551.325 234.518 535.519 259.08C558.499 230.76 612.78 167.645 646.072 141.737C639.206 182.113 610.93 271.613 552.754 306.606C552.333 303.662 552.333 294.998 555.696 283.894C538.742 294.409 496.763 315.438 464.48 315.438Z" fill="#F3F3FF"/>
						<path d="M130.722 388.199C130.722 374.46 138.036 340.757 167.292 315.858C170.515 328.756 167.713 361.282 130.722 388.199Z" fill="#F3F3FF"/>
						<path d="M7.13857 503.439C7.83916 482.69 19.665 432.192 61.3638 396.19C63.7458 417.64 56.2355 469.119 7.13857 503.439Z" fill="#F3F3FF"/>
						<path d="M711.226 229.218C710.245 216.32 716.018 183.459 746.956 155.195C747.376 173.14 740.819 213.068 711.226 229.218Z" fill="#F3F3FF"/>
						<path d="M764.611 636.764C745.415 558.255 782.013 346.982 1081.98 129.96C1079.31 151.691 1063.9 213.741 1023.55 288.1C1040.78 273.239 1090.47 237.462 1151.33 213.236L1029.85 404.181C1099.07 356.655 1260.2 253.191 1351 219.545C1288.65 310.391 1134.52 513.701 1016.82 600.173C1049.89 594.285 1121.49 579.649 1143.35 568.209C1113.64 605.781 1016.74 694.132 866.756 746.957C871.52 722.703 886.68 664.775 909.211 627.091C879.086 651.625 812.11 705.319 785.208 723.825C794.596 682.047 817.827 590.079 835.65 556.432L764.611 636.764Z" fill="#F3F3FF"/>
						<path d="M109.704 472.736C64.3062 524.216 29.1368 624.287 17.2269 667.887C-3.62251 763.78 -1.26854 829.251 2.51462 850C38.4966 791.455 87.2854 688.215 107.182 643.914C98.7749 667.13 91.3487 704.618 88.6865 720.46C105.501 699.263 138.008 649.942 152.159 627.932C139.133 664.025 121.987 728.83 114.892 757.316C113.469 759.609 113.712 759.368 114.748 757.892L114.892 757.316C118.469 751.549 132.577 729.753 171.075 671.252C224.88 589.49 275.322 453.81 293.818 396.19C279.021 410.322 212.83 503.299 181.584 548.021C192.009 526.487 227.963 406.985 244.637 349.926C201.929 394.339 117.27 527.693 80.2795 588.817C85.3237 569.639 101.998 503.439 109.704 472.736Z" fill="#F3F3FF"/>
					</svg>
				</b-col>
			</b-row>
		</b-container>

		<!-- Чат, который подходит под ваш дизайн -->
		<section class="design" :class="{ design_light: !designChatDark, design_dark: designChatDark }">
			<b-container>
				<!-- Настройка дизайна -->
				<b-row class="design__editor">
					<b-col md="6" lg="5" class="design__rele">
						<div class="design__rele__desc text">
							<h2>
								Чат, который подходит под ваш дизайн
							</h2>
							<ul>
								<li>
									Выберите цвет, иконку чата и фон, которые подходят под дизайн вашего сайта
								</li>
								<li>
									Подключите соцсети и мессенджеры
								</li>
							</ul>
							<b-button href="/panel/register/" variant="primary">Подключить к своему сайту</b-button>

							<!-- Переключатели -->
							<div class="switch_box d-none d-lg-block">
								<label class="switch">
									<input id="dark_mode" type="checkbox" v-model="designChatDark">
									<span class="slider round"></span>
								</label>
							</div>
						</div>

						<!-- Фоны переключателей -->
						<svg v-if="!designChatDark" class="design__rele__bg d-none d-lg-block" width="530" height="530" viewBox="0 0 530 530" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="265" cy="265" r="265" fill="#D3D1FF"/>
						</svg>
						<svg v-else  class="design__rele__bg d-none d-lg-block" width="530" height="530" viewBox="0 0 530 530" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="265" cy="265" r="265" fill="#393E46"/>
						</svg>

						<!-- Текст переключателей -->
						<g-image v-if="!designChatDark" class="design__rele__text d-none d-lg-block" src="@/assets/images/online-consultant/design_rele_light_text.png" alt="Текст для переключателя светлый" />
						<g-image v-else class="design__rele__text d-none d-lg-block" src="@/assets/images/online-consultant/design_rele_dark_text.png" alt="Текст для переключателя тёмный" />

					</b-col>
					<b-col md="6" lg="7" class="design__editor__pic">
						<g-image v-if="!designChatDark" src="@/assets/images/online-consultant/design_light_editor.png" alt="Вы не потеряете ни одного клиента" quality="100" />
						<g-image v-else src="@/assets/images/online-consultant/design_chat_dark.png" alt="Тёмный чат Carrot quest" quality="100" />
					</b-col>
				</b-row>

				<!-- Команда продажи и поддержки может работать слаженно -->
				<div class="row design__team">
					<div class="col-12 col-lg-10 col-xl-8 text">
						<h2 class="mb-4">
							Команда продаж или поддержки может работать слаженно, сокращая время первого ответа и повышая конверсию в продажу
						</h2>
						<ul>
							<li>
								Входящие сообщения разделены по командам и каналам
							</li>
							<li>
								Неограниченное количество ваших операторов и возможности для их совместной работы. На любом тарифе
							</li>
							<li>
								Максимум информации о клиенте всегда перед глазами, чтобы понимать контекст общения
							</li>
						</ul>
					</div>
					<div class="col-12">
						<video muted autoplay loop playsinline class="design__team__pic" :class="{ 'd-none':designChatDark }">
							<source src="/assets/video/online-consultant/design_light_team_vid.webm" type="video/webm">
							<source src="/assets/video/online-consultant/design_light_team_vid.mp4" type="video/mp4">
						</video>
						<video muted autoplay loop playsinline class="design__team__pic" :class="{ 'd-none':!designChatDark }">
							<source src="/assets/video/online-consultant/design_dark_team_vid.webm" type="video/webm">
							<source src="/assets/video/online-consultant/design_dark_team_vid.mp4" type="video/mp4">
						</video>
					</div>
				</div>
				<div class="row design__functions">
					<div class="col-12 col-lg-8 text">
						<ul>
							<li>
								Поиск по диалогам
							</li>
							<li>
								Уведомления для операторов
							</li>
							<li>
								Заметки в чате, которые видят только операторы
							</li>
							<li>
								Фильтрация диалогов
							</li>
							<li>
								Теги и каналы для диалогов
							</li>
							<li>
								Интеграции, которые работают прямо в разделе Диалоги
							</li>
							<li>
								Назначайте и переназначайте диалоги
							</li>
							<li>
								Разные права доступа для членов команды
							</li>
							<li>
								Горячие клавиши
							</li>
						</ul>
					</div>
					<div class="col-12 col-lg-4 design__functions__video">
						<a v-b-modal.youtubeCQChat href="#" v-on:click.prevent>
							<g-image class="design__functions__video__pic" src="@/assets/images/online-consultant/design_functions_pic.png" alt="Вы не потеряете ни одного клиента" />
						</a>
						<a v-b-modal.youtubeCQChat href="#" v-on:click.prevent>
							Посмотреть видео<br>
							о работе операторов
						</a>
						<b-modal id="youtubeCQChat" size="xl" hide-header hide-footer>
							<b-embed
								type="iframe"
								aspect="16by9"
								src="https://www.youtube.com/embed/mkeIkJNffWM?autoplay=1"
								allowfullscreen
							></b-embed>
						</b-modal>
					</div>
				</div>
				<div class="row design__functions">
					<div class="col-12">
						<b-button href="#Consultation" variant="primary">Записаться на демонстрацию</b-button>
					</div>
				</div>
			</b-container>
		</section>

		<!-- Ускорьте ответы на часто задаваемые вопросы -->
		<section class="knowledge-base">
			<b-container>
				<b-row>
					<b-col lg="5" xl="4" class="text">
						<h2>
							Ускорьте ответы на часто задаваемые вопросы, чтобы команда сфокусировалась на сложных
						</h2>
						<p class="my-4">Создайте или импортируйте свою базу знаний. Она будет встроена в чат и в ваш сайт</p>
						<b-button href="/knowledge-base/" variant="primary" class="mb-4">Подробнее про базу знаний</b-button>
					</b-col>
					<b-col lg="7" xl="8">
						<g-image src="@/assets/images/components/21.png" width="816" quality="100" alt="Регистрация в сервисе" title="Поехали!" />
					</b-col>
				</b-row>
			</b-container>
		</section>

		<!-- Мобильное приложение -->
		<section class="mobile-app">
			<b-container>
				<b-row>
					<b-col lg="6" class="order-lg-2 mb-5">
						<h2 class="mb-4">
							Общайтесь с пользователями на ходу. Используйте мобильное приложение
						</h2>
						<p class="mb-5">
							Те же возможности для операторов, но в мобильном приложении. Отвечайте на диалоги, смотрите карточку пользователя, оставляйте заметки
						</p>
						<p>
							Скачивайте мобильное приложение для операторов:
						</p>
						<a href="https://apps.apple.com/us/app/carrot-quest/id1259157795" target="_blank" rel="noopener" class="AppStore mr-4">
							<img src="@/assets/images/components/AppStore-button.png" alt="AppStore" />
						</a>
						<a href="https://play.google.com/store/apps/details?id=carrotquest.mobil.inkov.carrotquest" target="_blank" rel="noopener" class="GooglePlay">
							<img src="@/assets/images/components/GooglePlay-button.png" alt="GooglePlay" />
						</a>
					</b-col>
					<b-col lg="6">
						<g-image src="@/assets/images/components/1.png" width="530" quality="100" alt="Скачивайте мобильное приложение для операторов" title="Mobile Apps" />
					</b-col>
				</b-row>
			</b-container>
		</section>

		<!-- Сделайте свою команду поддержки и продаж эффективной с помощью аналитики и оценок пользователей -->
		<section class="analitics">
			<b-container>
				<b-row>
					<b-col lg="6" class="text">
						<h2>
							Сделайте свою команду поддержки и&nbsp;продаж эффективной с&nbsp;помощью аналитики и&nbsp;оценок пользователей
						</h2>
						<ul class="my-4">
							<li>Выявляйте нагрузку на&nbsp;вашу команду</li>
							<li>Находите самые нагруженные часы</li>
							<li>Определите, кто из&nbsp;вашей команды самый продуктивный, а&nbsp;кто плохо общается с&nbsp;пользователями</li>
							<li>Узнайте, какие тематики обращений в&nbsp;чат самые частые</li>
						</ul>
						<b-button href="/panel/register/" variant="primary" class="mb-4">Подключить к&nbsp;своему сайту за&nbsp;3&nbsp;минуты</b-button>
					</b-col>
					<b-col lg="6">
						<g-image src="@/assets/images/components/22.png" width="573" quality="100" alt="Сделайте свою команду поддержки и продаж эффективной с помощью аналитики и оценок пользователей" title="Аналитика" />
					</b-col>
				</b-row>
			</b-container>
		</section>

		<!-- Подключение сервиса занимает 3 минуты -->
		<section class="time">
			<b-container>
				<b-row>
					<b-col>
						<h2>
							Подключение сервиса занимает 3 минуты
						</h2>
						<p class="mt-4 mb-5">
							Подключите к своей CMS без привлечения программиста
						</p>
					</b-col>
				</b-row>
				<b-row>
					<b-col lg="6">
						<b-row>
							<b-col cols="6" lg="4" class="text-center mb-4">
								<a href="https://help.carrotquest.io/article/157">
									<g-image src="@/assets/images/online-consultant//time_1.png" alt="1С-Битрикс" class="mb-2" />
									<br>
									1С-Битрикс
								</a>
							</b-col>
							<b-col cols="6" lg="4" class="text-center mb-4">
								<a href="https://help.carrotquest.io/article/153">
									<g-image src="@/assets/images/online-consultant//time_2.png" alt="WordPress" class="mb-2" />
									<br>
									WordPress
								</a>
							</b-col>
							<b-col cols="6" lg="4" class="text-center mb-4">
								<a href="https://help.carrotquest.io/article/152">
									<g-image src="@/assets/images/online-consultant//time_3.png" alt="NexShops" class="mb-2" />
									<br>
									NexShops
								</a>
							</b-col>
							<b-col cols="6" lg="4" class="text-center mb-4">
								<a href="https://help.carrotquest.io/article/172">
									<g-image src="@/assets/images/online-consultant//time_4.png" alt="Prestashop" class="mb-2" />
									<br>
									Prestashop
								</a>
							</b-col>
							<b-col cols="6" lg="4" class="text-center mb-4">
								<a href="https://help.carrotquest.io/article/155">
									<g-image src="@/assets/images/online-consultant//time_5.png" alt="InSales" class="mb-2" />
									<br>
									InSales
								</a>
							</b-col>
							<b-col cols="6" lg="4" class="text-center mb-4">
								<a href="https://help.carrotquest.io/category/20">
									<g-image src="@/assets/images/online-consultant//time_more.png" alt="More" class="mb-2" />
									<br>
									Tilda, LPgenetator, uCoz и другие CMS
								</a>
							</b-col>
						</b-row>
					</b-col>
					<b-col lg="6" class="mb-4 text-right">
						<a v-b-modal.youtubeCQInstall href="#" v-on:click.prevent>
							<g-image src="@/assets/images/online-consultant//time_pic.png" alt="Подключение сервиса занимает 3 минуты" />
						</a>
						<b-modal id="youtubeCQInstall" size="xl" hide-header hide-footer>
							<b-embed
								type="iframe"
								aspect="16by9"
								src="https://www.youtube.com/embed/a3o4w8Wotf8?autoplay=1"
								allowfullscreen
							></b-embed>
						</b-modal>
					</b-col>
				</b-row>
				<b-row>
					<b-col lg="6" class="text">
						<ul>
							<li>Подробная и простая инструкция для программиста</li>
							<li>Установка через Google Tag Manager</li>
						</ul>
						<b-button href="#Consultation" variant="primary" class="mt-3">Записаться на демонстрацию</b-button>
					</b-col>
				</b-row>
			</b-container>
		</section>

		<!-- SDK -->
		<section class="sdk">
			<b-container>
				<b-row>
					<b-col lg="6">
						<h2>
							Установите чат Carrot quest <span>в ваше мобильное приложение</span> и используйте все инструменты поддержки пользователей
						</h2>
						<p class="my-4">
							SDK работает для приложений на Android и скоро будет работать для приложений на iOS
						</p>
						<b-button href="/sdk/" variant="primary" class="mb-4">Подробнее об SDK</b-button>
					</b-col>
					<b-col lg="6">
						<g-image src="@/assets/images/components/23.png" width="573" quality="100" alt="SDK работает для приложений на Android и скоро будет работать для приложений на iOS" title="SDK" />
					</b-col>
				</b-row>
			</b-container>
		</section>

		<Integrations />

		<Consultation 
			title="Запишитесь на бесплатную демонстрацию сервиса" 
			text="Мы познакомимся, определим ваши задачи, за 30 минут обучим продукту и&nbsp;🎁&nbsp;бесплатно настроим базовый сценарий сбора лидов на вашем сайте"
			pic="medium-2.png"
			alt="Девочка, живущая в сети"
			bg="#fff3e6"
		/>

		<Cases />

		<Logos />

		<b-container>
			<b-col class="p-4" style="background-color: #fff3e6; border-radius: 5px;">
				<b-row class="align-items-center justify-content-center">
					<b-col lg="6">
						<g-image src="@/assets/images/components/10.png" width="494" alt="Регистрация в сервисе" title="Поехали!" style="max-width: 100%" />
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
				//Делаем в HEAD
				metaTitle: 'Онлайн-консультант для сайта',
				metaDescription: 'Онлайн-консультант для вашего сайта. Повышает конверсию и продажи. Установка за 10 минут. Попробуйте сейчас - 14 дней бесплатно',
				metaCanonical: 'https://www.carrotquest.io/online-consultant/',
				metaImage: 'https://www.carrotquest.io/assets/images/cover/online-consultant.png',

				//Переключение дизайна
				designChatDark: false,
			}
		}
	}	
</script>


<style lang="scss">
	.page-online-consultant {
		.hero {
			padding-top: 0 !important;
			img {
				max-width: 100%;
			}
		}

		.advantages {
			img {
				width: 74px;
			}
			p {
				margin-bottom: 0;
			}
		}

		.messegers {
			img {
				position: relative;
				z-index: 2;
				max-width: 100%;
			}
			&_bg {
				position: absolute;
				top: -260px;
				right: -150px;
				width: 130%;
				z-index: 1;
			}
			@media (max-width: 991.98px) {
				ul {
					columns: 2;
					li {
						margin-top: 0;
					}
				}
			}
		}

		.design {
			padding-top: 6rem;
			transition: all .4s;
			&__rele {
				position: relative;
				&__desc {
					position: relative;
					z-index: 3;
					h2 {
						margin-bottom: 1.5rem;
					}
					// Переключатель
					.switch_box {
						width: 77px;
						height: 77px;
						border-radius: 50%;
						background: #fff;
						position: absolute;
						z-index: 3;
						top: 279px;
						right: 28px;
						@media (max-width: 991.98px) {
							right: -47px;
						}
						.switch {
							position: relative;
							display: inline-block;
							top: 28px;
							left: 16px;
							width: 45px;
							height: 24px;
							input {
								opacity: 0;
								width: 100px;
								height: 100px;
								position: relative;
								top: -40px;
								left: -25px;
								cursor: pointer;
							}
							.slider {
								position: absolute;
								cursor: pointer;
								top: 0;
								left: 0;
								right: 0;
								bottom: 0;
								background-color: #D4D4F2;
								transition: .4s;
							}
							.slider:before {
								position: absolute;
								content: "";
								height: 20px;
								width: 20px;
								left: 2px;
								bottom: 2px;
								background-color: white;
								transition: .4s;
							}
							input:checked+.slider {
								background-color: #FF8246;
							}
							input:checked+.slider:before {
								transform: translateX(21px);
							}
							.slider.round {
								border-radius: 34px;
							}
							.slider.round:before {
								border-radius: 50%;
							}
						}
					}
					.link-button {
						margin-top: 2rem;
					}
				}
				&__bg {
					position: absolute;
					z-index: 1;
					top: -135px;
					right: 0;
					@media (max-width: 991.98px) {
						right: -40px;
					}
				}
				@keyframes rotating {
					0% {
						transform: rotate(0deg);
					}
					100% {
						transform: rotate(360deg);
					}
				}
				&__text {
					position: absolute;
					z-index: 2;
					top: 233px;
					left: 303px;
					animation: rotating 25s linear infinite;
				}
			}
			&__editor {
				margin-bottom: 96px;
				@media (max-width: 767.98px) {
					margin-bottom: 3rem;
				}
				@media (max-width: 575.98px) {
					margin-bottom: 3rem;
				}
				&__pic {
					height: 452px;
					@media (max-width: 991.98px) {
						height: auto;
					}
					img {
						position: relative;
						display: block;
						margin: 0 auto;
						@media (max-width: 1199.98px) {
							right: -40px;
						}
						@media (max-width: 991.98px) {
							right: 0;
							max-width: 100%;
							margin-top: 2rem;
						}
					}
				}
			}
			&__team {
				&__pic {
					margin-top: 2rem;
					max-width: 100%;
					margin-bottom: 3rem;
					@media (max-width: 991.98px) {
						margin-bottom: 2rem;
					}
				}
			}
			&__functions {
				ul {
					columns: 2;
					li {
						margin-top: 0;
						margin-bottom: 1rem;
					}
					@media (max-width: 991.98px) {
						margin-bottom: 3rem;
					}
					@media (max-width: 575.98px) {
						columns: 1;
					}
				}
				&__video {
					text-align: center;
					@media (max-width: 991.98px) {
						text-align: left;
					}
					@media (max-width: 575.98px) {
						text-align: center;
					}
					img {
						display: block;
						margin: 0 auto 1rem;
						@media (max-width: 991.98px) {
							margin-left: 0;
						}
						@media (max-width: 575.98px) {
							columns: 1;
							margin-left: auto;
						}
					}
				}
				.btn {
					margin-top: 1rem;
					margin-bottom: 10rem;
				}
			}
			&_light {
				background: url("data:image/svg+xml,%0A%3Csvg width='4233' height='2040' viewBox='0 0 4233 2040' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='2116.22' cy='1020' rx='2116' ry='1020' fill='%23F3F3FF'/%3E%3C/svg%3E%0A") top center no-repeat;
				background-size: auto 100%;
				.design__rele__dark_bg {
					display: none !important;
				}
			}
			&_dark {
				background: url("data:image/svg+xml,%0A%3Csvg width='4232' height='2040' viewBox='0 0 4232 2040' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='2116' cy='1020' rx='2116' ry='1020' fill='%231A1C20'/%3E%3C/svg%3E%0A") top center no-repeat;
				background-size: auto 100%;
				h2 {
					color: #fff !important;
				}
				li {
					color: #E1E1E1 !important;
				}
			}
		}

		.knowledge-base {
			@media (max-width: 991.98px) {
				img {
					max-width: 100%;
				}
			}
		}

		.mobile-app {
			img {
				max-width: 100%;
			}
		}

		.analitics {
			margin-top: -3rem;
			padding-top: 3rem;
			background: url("data:image/svg+xml,%0A%3Csvg width='1295' height='490' viewBox='0 0 1295 490' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M487.2 260.873C406.933 260.873 417.317 87.5 343 87.5C278.58 87.5 282.333 321.5 229.133 321.5C196.125 321.5 195.557 260.873 164.015 260.873C116.253 260.873 78.4 490 0 490H1295C1259.52 490 1238.84 284.927 1196.05 284.927C1153.25 284.927 1171.52 385.151 1109.18 385.151C1035.77 385.151 1021.63 191.796 962.945 191.796C904.256 191.796 902.619 347.5 808.078 347.5C713.536 347.5 716.517 0 636.572 0C556.626 0 580.696 260.873 487.2 260.873Z' fill='%23F3F3FF'/%3E%3Cpath d='M487.2 260.873C406.933 260.873 417.317 87.5 343 87.5C278.58 87.5 282.333 321.5 229.133 321.5C196.125 321.5 195.557 260.873 164.015 260.873C116.253 260.873 78.4 490 0 490H1295C1259.52 490 1238.84 284.927 1196.05 284.927C1153.25 284.927 1171.52 385.151 1109.18 385.151C1035.77 385.151 1021.63 191.796 962.945 191.796C904.256 191.796 902.619 347.5 808.078 347.5C713.536 347.5 716.517 0 636.572 0C556.626 0 580.696 260.873 487.2 260.873Z' fill='url(%23paint0_linear)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear' x1='647.5' y1='466' x2='647.5' y2='120' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='white'/%3E%3Cstop offset='0.533857' stop-color='white' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A") center top no-repeat;
		}

		.time {
			img {
				max-width: 100%;
			}
		}

		.sdk {
			span {
				color: #FF8246;
			}
			img {
				max-width: 100%;
			}
		}

		.blue {
			padding-top: 5rem;
			background-color: #F3F3FF;
		}
	}

	
</style>