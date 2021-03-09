<template>
	<header>
		
		<b-navbar toggleable="lg" :class="{'pt-2 pb-2': scrolled, 'pt-3 pb-3 pt-md-4 pb-md-4': !scrolled, 'hideHeader': hideHeader, '': !hideHeader}" v-scroll="handleScroll">

			<!-- Логотип -->
			<g-link v-if="!isBlog" to="/">
				<g-image src="~/assets/images/components/logo.svg" width="386" height="70" class="logo ml-2 ml-md-3" style="max-width: 193px;" alt="Carrot quest" immediate />
			</g-link>
			<g-link v-else to="/blogtest/">
				<g-image src="~/assets/images/components/blogLogo.svg" width="386" height="70" class="logo ml-2 ml-md-3" style="max-width: 190px;" alt="Carrot quest Blog" immediate />
			</g-link>

			<!-- Мобильное меню гамбургер -->
			<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
			
			<!-- Обычное меню -->
			<b-collapse v-if="!isBlog" is-nav id="nav_collapse">
					<!-- Выпадающее меню -->
					<b-navbar-nav class="ml-auto mt-3 mt-lg-0">
						<template v-for="( item , index ) in topMenu">
							<b-nav-item v-if="!item.subLinks" :href="item.href" :key="index" class="mr-1">
								{{ item.title }}
							</b-nav-item>
							<b-nav-item-dropdown v-else :text="item.title" :key="index" class="mr-1">
								<b-dropdown-item v-for="( subLink , index ) in item.subLinks" :href="subLink.href" :key="index">
									{{ subLink.title }}
								</b-dropdown-item>
							</b-nav-item-dropdown>
							<!-- <template v-else>

								<b-nav-item-dropdown v-if="!item.jobs" :text="item.title" :key="index" class="mr-1">
									<b-dropdown-item v-for="( subLink , index ) in item.subLinks" :href="subLink.href" :key="index">
										{{ subLink.title }}
									</b-dropdown-item>
								</b-nav-item-dropdown>

								<b-nav-item-dropdown v-else :text="item.title" :key="index" class="hasmegamenu mr-1">
									<b-dropdown-item v-for="( subLink , index ) in item.subLinks" :href="subLink.href" :key="index" class="d-xl-none">
										{{ subLink.title }}
									</b-dropdown-item>
									<b-row class="megamenu d-none d-xl-flex">
										<b-col v-for="( subLink , index ) in item.subLinks" :key="index" cols="4">
											<p class="mb-4">
												<a :href="subLink.href">
													<b>{{ subLink.title }}</b>
													<span v-html="subLink.job" class="font14px grey-text mt-1" />
												</a>
											</p>
										</b-col>
									</b-row>
								</b-nav-item-dropdown>

							</template> -->
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
			<!-- Меню блога -->
			<b-collapse v-else is-nav id="nav_collapse">
				<b-navbar-nav class="ml-auto mt-3 mt-lg-0">
					<b-nav-form v-if="!isSearchBlog" class="mr-1 nav_search">
						<b-form v-on:submit.prevent="search">
							<label for="searchFormInput">
								<svg v-on:click="showSearchForm" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search mr-2" :class="{canclick: !showSearch}" viewBox="0 0 16 16">
									<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
								</svg>
							</label>
							<b-form-input v-show="showSearch" id="searchFormInput" placeholder="Поиск по блогу" v-model="searchBlog"></b-form-input>
							<svg v-show="showSearch" v-on:click="hideSearchForm" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" :class="{canclick: showSearch}" viewBox="0 0 16 16">
								<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
							</svg>
						</b-form>
					</b-nav-form>
					<b-nav-item href="/cases/" class="mr-1">
						Кейсы
					</b-nav-item>
					<b-nav-item to="/library/" class="mr-1">
						Библиотека
					</b-nav-item>
				</b-navbar-nav>
				<!-- Кнопки -->
				<b-button variant="primary" href="/panel/register/" class="ml-0 mt-3 mr-1 px-2 ml-xl-3 mt-lg-0 mr-xl-3 px-xl-4">
					Подключить Carrot quest
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
			},
			search() {
				this.$router.push("/blogtest/search/?q="+this.searchBlog)
			},
			showSearchForm() {
				this.showSearch = true
			},
			hideSearchForm() {
				this.showSearch = false
			}
		},
		components: {
			//Прогресс бар
			ReadProgress: () =>
				import("vue-read-progress")
					.then(m => m.default)
					.catch()
		},
		beforeMount () {
			//Блог или нет
			if (document.location.href.indexOf('/blogtest/') != -1){
				this.isBlog = true
			}
			//Страница поиска блога или нет
			if (document.location.href.indexOf('/blogtest/search/') != -1){
				this.isSearchBlog = true
			}
		},
		data: () => ({
			lastPosition: 0,
			limitPosition: 500,
      		scrolled: false,
			hideHeader: false,
			isBlog: false,
			isSearchBlog: false,
			showSearch: false,
			searchBlog: '',
			topMenu: [
				{
					title: 'Инструменты',
					subLinks: [
						{
							title: 'Лид-бот',
							href: '/chatbot/',
							job: 'Собирайте больше квалифицированных лидов с&nbsp;сайта сайта без дополнительной нагрузки на&nbsp;ваших сотрудников'
						},
						{
							title: 'Онлайн-консультант',
							href: '/online-consultant/',
							job: 'Повышайте продажи на&nbsp;сайте и&nbsp;улучшайте поддержку ваших клиентов'
						},
						{
							title: 'Автоматизация воронки',
							href: '/automation-marketing/',
							job: 'Увеличивайте конверсию воронки сайта с&nbsp;помощью цепочек сообщений (чат, чат-бот, поп-ап, письма)'
						},
						{
							title: 'База знаний',
							href: '/knowledge-base/',
							job: 'Сокращает время ответа на&nbsp;вопрос и&nbsp;систематизирует для клиентов знания о&nbsp;вашем продукте'
						},
						{
							title: 'Email-маркетинг',
							href: '/email-marketing/',
							job: 'Повышает эффективность рассылок за&nbsp;счет гибкой сегментации пользователей'
						},
						{
							title: 'SDK для Android и iOS',
							href: '/sdk/',
							job: 'Добавляет функционал Carrot quest в&nbsp;ваше клиентское мобильное приложение'
						},
						{
							title: 'Трекинг пользователей',
							href: '/lead-manager/',
							job: 'Собирает все данные о&nbsp;каждом пользователе, его действиях, заказах и&nbsp;коммуникациях'
						},
						{
							title: 'Поп-ап окна',
							href: '/pop-up/',
							job: 'Собирайте больше лидов и&nbsp;продаж благодаря гиперсегментации аудитории'
						},
					],
					jobs: true
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
							href: '/introduction-carrotquest/'
						}
					],
					jobs: false
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
							href: '/library/',
							job: 'Книги, гайды, чек листы, видеокурсы. Скачивайте бесплатно'
						},
						{
							title: 'Блог',
							href: '/blog/',
							job: 'О&nbsp;том, как разработчику интегрировать Carrot quest на&nbsp;сайт'
						},
						{
							title: 'API',
							href: 'https://developers.carrotquest.io/',
							job: 'О&nbsp;том, как разработчику интегрировать Carrot quest на&nbsp;сайт'
						},
						{
							title: 'Вебинары и подкасты',
							href: '/blog/webinars/',
							job: 'Более 30&nbsp;вебинаров и&nbsp;подкастов на&nbsp;темы про создание продуктов, маркетинг и&nbsp;growth hacking'
						},
						{
							title: 'Интеграции',
							href: '/integration/',
							job: 'Более 30&nbsp;готовых интеграций с&nbsp;CMS, CRM, аналитикой, мессенджерами, соц.сетями и&nbsp;другими сервисами'
						},
						{
							title: 'Кейсы',
							href: '/cases/',
							job: 'Более 60&nbsp;историй успеха наших клиентов'
						},
						{
							title: 'База знаний',
							href: 'https://help.carrotquest.io/',
							job: 'О&nbsp;том, как работает Carrot quest и&nbsp;как его настроить (для продакта, маркетолога и&nbsp;разработчика)'
						}						
					],
					jobs: true
				},
				{
					title: 'Блог',
					href: '/blog/'
				},
				{
					title: 'Партнерам',
					href: '/partner/'
				}
			]
		})
	}
</script>