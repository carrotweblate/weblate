<template>
	<b-navbar toggleable="lg" :class="{'pt-2 pb-2': scrolled, 'pt-3 pb-3 pt-md-4 pb-md-4': !scrolled}" v-scroll="handleScroll">

		<!-- Логотип -->
		<g-link to="https://www.carrotquest.io/">
			<g-image src="~/assets/images/cq_logo.svg" width="170" height="35" class="logo ml-2 ml-md-3" alt="Dashly" />
		</g-link>

		<!-- Мобильное меню гамбургер -->
		<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
		
		<b-collapse is-nav id="nav_collapse">

			<!-- Выпадающее меню -->
			<b-navbar-nav class="ml-auto">
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
			<b-button variant="primary" href="/panel/register/" class="ml-1 mr-1 px-2 ml-xl-3 mr-xl-3 px-xl-4">
				Зарегистрироваться
			</b-button>
			<b-button variant="outline" href="/panel/login/">
				Войти
			</b-button>

		</b-collapse>

		<!-- Подложка -->
		<div class="blur"></div>

	</b-navbar>

</template>

<script>
	export default {
		methods: {
			handleScroll() {
				if (this.lastPosition < window.scrollY && this.limitPosition < window.scrollY) {
					this.scrolled = true;
					// move up!
				} 
				
				if (this.lastPosition > window.scrollY) {
					this.scrolled = false;
					// move down
				}
				
				this.lastPosition = window.scrollY;
				// this.scrolled = window.scrollY > 250;
			}
		},
		data: () => ({
			limitPosition: 500,
      		scrolled: false,
			lastPosition: 0,
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
							url: '/email-marketing'
						},
						{
							title: 'Pop-up окна',
							url: '/pop-up/'
						},
						{
							title: 'Web Push уведомления',
							url: '/web-push'
						},
						{
							title: 'Автоматизация воронки',
							url: '/automation-marketing'
						},
						{
							title: 'А/Б тесты автосообщений',
							url: '/ab-tests/'
						},
						{
							title: 'SDK для Android и iOS',
							url: '/sdk/'
						}
					]
				},
				{
					title: 'Решения',
					subLinks: [
						{
							title: 'Продуктовым компаниям и SAAS',
							to: '/saas'
						},
						{
							title: 'Интернет-магазинам и e‑commerce',
							to: '/ecommerce'
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
			]
		}),
	}
</script>