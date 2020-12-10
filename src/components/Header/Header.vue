<template>
	<header>
		
		<b-navbar toggleable="lg" :class="{'pt-2 pb-2': scrolled, 'pt-3 pb-3 pt-md-4 pb-md-4': !scrolled, 'hideHeader': hideHeader, '': !hideHeader}" v-scroll="handleScroll">

			<!-- Страницы сайта -->
			<template v-if="!(this.isPost)">
				<!-- Логотип -->
				<a href="/">
					<g-image src="~/components/Header/ny_carrotquest_logo.png" width="236" height="35" class="logo ml-2 ml-md-3" alt="Carrot blog" />
				</a>

				<!-- Мобильное меню гамбургер -->
				<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
				
				<b-collapse is-nav id="nav_collapse">

					<!-- Выпадающее меню -->
					<b-navbar-nav class="ml-auto mt-3 mt-lg-0">
						<template v-for="( item , index ) in topMenu">

							<b-nav-item v-if="!item.subLinks" :href="item.to" :key="index" class="mr-1">
								{{ item.title }}
							</b-nav-item>

							<b-nav-item-dropdown hover v-else-if="item.subLinks" :text="item.title" :key="index" class="mr-1">
								<b-dropdown-item v-for="( subLink , index ) in item.subLinks" :href="subLink.to" :key="index">
									{{ subLink.title }}
								</b-dropdown-item>
							</b-nav-item-dropdown>
							
						</template>
					</b-navbar-nav>

					<!-- Кнопки -->
					<b-button variant="primary" href="/panel/register/" class="ml-0 mt-3 mr-1 px-2 ml-xl-3 mt-lg-0 mr-xl-3 px-xl-4">
						Зарегистрироваться
					</b-button>
					<b-button variant="outline" href="/panel/login/" class="mt-3 mt-lg-0">
						Войти
					</b-button>
				</b-collapse>
			</template>

			<!-- Страницы блога -->
			<template v-else>
				<!-- Логотип -->
				<a href="/blog/">
					<g-image src="~/components/Header/blogLogo.svg" width="170" height="35" class="logo ml-2 ml-md-3" alt="Carrot quest" />
				</a>

				<!-- Мобильное меню гамбургер -->
				<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
				
				<b-collapse is-nav id="nav_collapse">

					<!-- Выпадающее меню -->
					<b-navbar-nav class="ml-auto mt-3 mt-lg-0">
						<template v-for="( item , index ) in blogMenu">

							<b-nav-item v-if="!item.subLinks" :href="item.to" :key="index" class="mr-1">
								{{ item.title }}
							</b-nav-item>

							<b-nav-item-dropdown hover v-else-if="item.subLinks" :text="item.title" :key="index" class="mr-1">
								<b-dropdown-item v-for="( subLink , index ) in item.subLinks" :href="subLink.to" :key="index">
									{{ subLink.title }}
								</b-dropdown-item>
							</b-nav-item-dropdown>
							
						</template>
					</b-navbar-nav>

					<!-- Кнопки -->
					<b-button variant="primary" href="/panel/register/" class="ml-0 mt-3 mr-1 px-2 ml-xl-3 mt-lg-0 mr-xl-3 px-xl-4">
						Подключить Carrot quest
					</b-button>
				</b-collapse>
			</template>

			<!-- Подложка -->
			<div class="blur"></div>

		</b-navbar>

		<ClientOnly>
			<!-- Прогрес бар чтения -->
			<read-progress color="#ff892a" height="2px" :shadow="false"></read-progress>
		</ClientOnly>

	</header>
</template>

<script>
	export default {
		methods: {
			handleScroll() {
				if (this.lastPosition < window.scrollY && this.limitPosition+550 < window.scrollY) {
					this.hideHeader = true;
					// move up!
				} 
				
				if (this.lastPosition > window.scrollY) {
					this.scrolled = true;
					this.hideHeader = false;
					// move down
				}
				
				this.lastPosition = window.scrollY;
				this.scrolled = window.scrollY > this.limitPosition;
			}
		},
		components: {
			//Прогресс бар
			ReadProgress: () =>
				import("vue-read-progress")
					.then(m => m.default)
					.catch()
		},
		data: () => ({
			lastPosition: 0,
			limitPosition: 500,
      		scrolled: false,
			hideHeader: false,
			isPost: false,
			topMenu: [
				{
					title: 'Инструменты',
					subLinks: [
						{
							title: 'Лид-бот',
							to: '/chatbot/'
						},
						{
							title: 'База знаний',
							to: '/knowledge-base/'
						},
						{
							title: 'eCRM',
							to: '/lead-manager'
						},
						{
							title: 'Онлайн-консультант',
							to: '/online-consultant/'
						},
						{
							title: 'Email-маркетинг',
							to: '/email-marketing/'
						},
						{
							title: 'Pop-up окна',
							to: '/pop-up/'
						},
						{
							title: 'Автоматизация воронки',
							to: '/automation-marketing'
						},
						{
							title: 'А/Б тесты автосообщений',
							to: '/ab-tests/'
						},
						{
							title: 'SDK для Android и iOS',
							to: '/sdk/'
						}
					]
				},
				{
					title: 'Решения',
					subLinks: [
						{
							title: 'Продуктовым компаниям и SAAS',
							to: '/saas/'
						},
						{
							title: 'Интернет-магазинам и e‑commerce',
							to: '/ecommerce/'
						},
						{
							title: 'Внедрение для крупных компаний',
							to: '/introduction-carrotquest'
						}
					]
				},
				{
					title: 'Тарифы',
					to: '/price/'
				},
				{
					title: 'Ресурсы',
					subLinks: [
						{
							title: 'Библиотека',
							to: '/library/'
						},
						{
							title: 'Кейсы',
							to: '/cases/'
						},
						{
							title: 'Гайды',
							to: '/academy/usecases'
						},
						{
							title: 'Вебинары',
							to: '/blog/webinars/'
						},
						{
							title: 'База знаний Carrot quest',
							to: 'https://help.carrotquest.io/'
						},
						{
							title: 'Интеграции',
							to: '/integration/'
						},
						{
							title: 'API разработчикам',
							to: '/developers/'
						}
					]
				},
				{
					title: 'Блог',
					to: '/blog/'
				},
				{
					title: 'Партнерам',
					to: '/partner/'
				}
			],
			blogMenu: [
				{
					title: 'Кейсы',
					to: '/cases/'
				},
				{
					title: 'Библиотека',
					to: '/library/'
				}
			]
		}),
		mounted () {
			//Блог или нет
			if (document.location.href.search('/blog/') != -1){
				this.isPost = true
			}
		}
	}
</script>