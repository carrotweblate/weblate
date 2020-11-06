<template>
	<header>
		
		<b-navbar toggleable="lg" :class="{'pt-2 pb-2': scrolled, 'pt-3 pb-3 pt-md-4 pb-md-4': !scrolled, 'hideHeader': hideHeader, '': !hideHeader}" v-scroll="handleScroll">

			<!-- Страницы сайта -->
			<template v-if="!(this.isPost)">
				<!-- Логотип -->
				<g-link to="/">
					<g-image src="~/components/Header/logo.svg" width="170" height="35" class="logo ml-2 ml-md-3" alt="Carrot blog" />
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
					<b-navbar-nav class="ml-auto">
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
					<b-button variant="primary" href="/panel/register/" class="ml-1 mr-1 px-2 ml-xl-3 mr-xl-3 px-xl-4">
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
							url: '/email-marketing/'
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
			//Скрипт Carrot quest
			(function() {
				function Build(name, args) {
					return function() {
						window.carrotquestasync.push(name, arguments);
					}
				}
				if (typeof carrotquest === 'undefined') {
					var s = document.createElement('script');
					s.type = 'text/javascript';
					s.async = true;
					s.src = '//cdn.carrotquest.io/api.min.js';
					var x = document.getElementsByTagName('head')[0];
					x.appendChild(s);
					window.carrotquest = {};
					window.carrotquestasync = [];
					carrotquest.settings = {};
					var m = ['connect', 'track', 'identify', 'auth', 'open', 'onReady', 'addCallback', 'removeCallback', 'trackMessageInteraction'];
					for (var i = 0; i < m.length; i++) carrotquest[m[i]] = Build(m[i]);
				}
			})();
			carrotquest.connect('100-675e2c8860097948c325b680f4da');
			carrotquest.track('Зашел на лендинг', {
				'URL': location.href
			});

			//Блог или нет
			if (document.location.href.search('/blog/') != -1){
				this.isPost = true
			}

			//Плавное перемещение по ссылке
			setTimeout(function(){
				const anchors = document.querySelectorAll('a[href*="#"]')
				for (let anchor of anchors) {
					anchor.addEventListener("click", function(e) {
						e.preventDefault()
						const blockID = anchor.getAttribute("href")
						document.querySelector(blockID).scrollIntoView({
							behavior: "smooth",
							block: "start"
						})
					})
				}
			}, 0)

			//Антифликер
			function expRedirect() {
				switch(location.pathname) {
					case '/blog/40-email-newsletters/': location.href = 'https://www.carrotquest.io/blog/40-email-newsletters-2/';
					break;
					case '/blog/kak-sdelat-email-rassylku/': location.href = 'https://www.carrotquest.io/blog/kak-sdelat-email-rassylku-2/';
					break;
					case '/blog/onboarding-chto-eto/': location.href = 'https://www.carrotquest.io/blog/onboarding-chto-eto-2/';
					break;
					case '/blog/obzor-servisov-email-rassylok/': location.href = 'https://www.carrotquest.io/blog/obzor-servisov-email-rassylok-2/';
					break;
					case '/blog/index-nps/': location.href = 'https://www.carrotquest.io/blog/index-nps-2/';
					break;
					case '/blog/formula-roi/': location.href = 'https://www.carrotquest.io/blog/formula-roi-2/';
					break;
					case '/blog/ltv-lifetime-value-schitaem/': location.href = 'https://www.carrotquest.io/blog/ltv-lifetime-value-schitaem-2/';
					break;
					default: true;
				};
			};
			if (localStorage.getItem('group')) {
				if (localStorage.getItem('group') == 'test') {
					expRedirect();
				};
			}
			else {
				if (Math.random() <= 0.5) {
					localStorage.setItem('group', 'test');
					expRedirect();
				}
				else {
					localStorage.setItem('group', 'control');
				};
			}

		}
	}
</script>