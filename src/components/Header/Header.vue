<template>
	<header>
		
		<b-navbar toggleable="lg" :class="{'pt-2 pb-2': scrolled, 'pt-3 pb-3 pt-md-4 pb-md-4': !scrolled, 'hideHeader': hideHeader, '': !hideHeader}" v-scroll="handleScroll">

			<!-- Логотип -->
			<a href="/">
				<g-image src="~/components/Header/ny_carrotquest_logo.png" width="193" height="35" class="logo ml-2 ml-md-3" alt="Carrot blog" />
			</a>

			<!-- Мобильное меню гамбургер -->
			<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
			
			<b-collapse is-nav id="nav_collapse">

				<!-- Выпадающее меню -->
				<b-navbar-nav class="ml-auto mt-3 mt-lg-0">
					<template v-for="( item , index ) in topMenu">

						<b-nav-item v-if="!item.subLinks" :href="item.href" :key="index" class="mr-1">
							{{ item.title }}
						</b-nav-item>

						<b-nav-item-dropdown hover v-else-if="item.subLinks" :text="item.title" :key="index" class="mr-1">
							<b-dropdown-item v-for="( subLink , index ) in item.subLinks" :href="subLink.href" :key="index">
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
							href: '/chatbot/'
						},
						{
							title: 'База знаний',
							href: '/knowledge-base/'
						},
						{
							title: 'eCRM',
							href: '/lead-manager'
						},
						{
							title: 'Онлайн-консультант',
							href: '/online-consultant/'
						},
						{
							title: 'Email-маркетинг',
							href: '/email-marketing/'
						},
						{
							title: 'Pop-up окна',
							href: '/pop-up/'
						},
						{
							title: 'Автоматизация воронки',
							href: '/automation-marketing'
						},
						{
							title: 'А/Б тесты автосообщений',
							href: '/ab-tests/'
						},
						{
							title: 'SDK для Android и iOS',
							href: '/sdk/'
						}
					]
				},
				{
					title: 'Решения',
					subLinks: [
						{
							title: 'Продуктовым компаниям и SAAS',
							href: '/saas/'
						},
						{
							title: 'Интернет-магазинам и e‑commerce',
							href: '/ecommerce/'
						},
						{
							title: 'Внедрение для крупных компаний',
							href: '/introduction-carrotquest'
						}
					]
				},
				{
					title: 'Тарифы',
					href: '/price/'
				},
				{
					title: 'Ресурсы',
					subLinks: [
						{
							title: 'Библиотека',
							href: '/library/'
						},
						{
							title: 'Кейсы',
							href: '/cases/'
						},
						{
							title: 'Гайды',
							href: '/academy/usecases'
						},
						{
							title: 'Вебинары',
							href: '/blog/webinars/'
						},
						{
							title: 'База знаний Carrot quest',
							href: 'https://help.carrotquest.io/'
						},
						{
							title: 'Интеграции',
							href: '/integration/'
						},
						{
							title: 'API разработчикам',
							href: '/developers/'
						}
					]
				},
				{
					title: 'Блог',
					href: '/blog/'
				},
				{
					title: 'Партнерам',
					href: '/partner/'
				}
			],
			blogMenu: [
				{
					title: 'Кейсы',
					href: '/cases/'
				},
				{
					title: 'Библиотека',
					href: '/library/'
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