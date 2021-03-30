<template>
	<header>
		
		<b-navbar toggleable="lg" :class="{'pt-2 pb-2': scrolled, 'pt-2 pb-2 pt-md-4 pb-md-4': !scrolled, 'hideHeader': hideHeader, '': !hideHeader}" v-scroll="handleScroll" >

			<!-- Логотип -->
			<g-link v-if="!isBlog" to="/">
				<img src="@/assets/images/components/logo.svg" width="193" height="40" class="logo ml-2 ml-md-3" alt="Carrot quest" />
			</g-link>
			<g-link v-else to="/blog/">
				<img src="@/assets/images/components/blogLogo.svg" width="190" height="40" class="logo ml-2 ml-md-3" alt="Carrot quest Blog" />
			</g-link>

			<!-- Мобильное меню гамбургер -->
			<b-navbar-toggle target="nav_collapse" class="pr-0" />
			
			<!-- Обычное меню -->
			<b-collapse v-if="!isBlog" is-nav id="nav_collapse">
				<!-- Выпадающее меню -->
				<b-navbar-nav class="ml-auto mt-3 mt-lg-0">
					<template v-for="( item , index ) in topMenu">
						<b-nav-item v-if="!item.subLinks" :href="item.href" :key="index" class="mr-1" :disabled="ready" >
							{{ item.title }}
						</b-nav-item>
						<template v-else>
							<b-nav-item-dropdown :key="index" class="mr-1" :class="{hasmegamenu: !!item.jobs}" :disabled="ready" >
								<template slot="button-content">
									<span v-on:click="openMegamenu" class="d-none d-lg-inline">
										{{item.title}}
									</span>
									<span class="d-lg-none">
										{{item.title}}
									</span>
								</template>

								<b-dropdown-item v-for="( subLink , index ) in item.subLinks" :href="subLink.href" :key="index" class="d-lg-none">
									{{ subLink.title }}
								</b-dropdown-item>
								
								<!-- Инструменты и Решения -->
								<b-container v-if="(item.title == 'Инструменты') || (item.title == 'Решения')" class="megamenu  py-4 d-none d-lg-flex" :class="{'megamenu--instruments': item.title == 'Инструменты' , 'megamenu--resheniya': item.title == 'Решения'}">
									<b-row>
										<b-col lg="8">
											<ul class="row">
												<li v-for="( subLink , index ) in item.subLinks" :key="index"  class="mb-4 col-6" :class="'order-lg-' + subLink.order">
													<a :href="subLink.href">
														<b class="mb-1">{{ subLink.title }}</b>
														<span v-html="subLink.job" class="font14px grey-text mt-1" />
													</a>
												</li>
											</ul>
										</b-col>
										<b-col lg="4" class="border-left">
											<p class="text-uppercase lightgrey-text">
												Тарифы
											</p>
											<p class="mt-4 mb-2">
												Бизнес-чат и Автоматизация
											</p>
											<p class="font14px lightgrey-text">
												до 10 000 уников в месяц<br>
												2 400 ₽ в месяц
											</p>
											<p class="mt-4 mb-2">
												Премиум
											</p>
											<p class="font14px lightgrey-text">
												Максимум возможностей сервиса и персональные консультации от нашего эксперта
											</p>
											<p class="my-4">
												<g-link to="/price/">
													Посмотреть тарифы
												</g-link>
											</p>
											<!-- <p>
												<b-button href="#open-demo-pop-up" variant="primary">Записаться на демонстрацию</b-button>
											</p> -->
										</b-col>
									</b-row>
								</b-container>

								<!-- Ресурсы -->
								<b-container v-if="item.title == 'Ресурсы'" class="megamenu  py-4 d-none d-lg-flex megamenu--resurces">
									<b-row>
										<b-col lg="4">
											<p class="text-uppercase lightgrey-text mb-3">
												О продукте
											</p>
											<ul>
												<li v-for="( subLink , index ) in item.subBlocks.aboutProduct" :key="index"  class="mb-4">
													<a :href="subLink.href">
														<b class="mb-1">{{ subLink.title }}</b>
														<span v-html="subLink.job" class="font14px grey-text mt-1" />
													</a>
												</li>
											</ul>
										</b-col>
										<b-col lg="4" class="border-left border-right">
											<p class="text-uppercase lightgrey-text mb-3">
												Контент
											</p>
											<ul>
												<li v-for="( subLink , index ) in item.subBlocks.content" :key="index"  class="mb-4">
													<a :href="subLink.href">
														<b class="mb-1">{{ subLink.title }}</b>
														<span v-html="subLink.job" class="font14px grey-text mt-1" />
													</a>
												</li>
											</ul>
										</b-col>
										<b-col lg="4">
											<p class="text-uppercase lightgrey-text mb-3">
												Последние статьи из блога
											</p>
											<ul>
												<li v-for="{ node } in $static.recent.edges" :key="node.id"  class="mb-4">
													<a :href="'https://www.carrotquest.io/blog/' + node.slug + '/'" class="megamenu__post">
														<span :style="'background-image: url(' + node.featured_media + ')'" class="megamenu__post__pic d-block mr-3" />
														<span v-html="node.title" class="megamenu__post__title" />
													</a>
												</li>
											</ul>
											<p>
												<a href="https://www.carrotquest.io/blog/">
													Все статьи
												</a>
											</p>

											<p class="text-uppercase lightgrey-text mt-4 mb-3">
												Книги и материалы
											</p>
											<ul>
												<li class="mb-4">
													<a href="/product-research-book/" class="megamenu__post">
														<g-image src="~/assets/images/library/small_book_product-researc.png" width="160" height="160" class="megamenu__post__pic d-block mr-3" />
														<span class="megamenu__post__title">
															Как проводить исследования, результаты которых пойдут в бэклог, а не в стол
														</span>
													</a>
												</li>
											</ul>
											<p>
												<a href="/library/#books">
													Все книги
												</a>
											</p>
										</b-col>
									</b-row>
								</b-container>
							</b-nav-item-dropdown>
						</template>
					</template>
				</b-navbar-nav>
				<!-- Кнопки -->
				<b-button variant="primary" href="/panel/register/" class="mb-2 mb-md-0 ml-0 mt-3 mr-1 px-2 ml-xl-3 mt-lg-0 mr-xl-3 px-xl-4">
					Зарегистрироваться
				</b-button>
				<b-button variant="outline" href="/panel/login/" class="mt-3 mt-lg-0 d-none d-md-inline-block">
					Войти
				</b-button>
				<b-button variant="outline-primary" href="/panel/login/" class="mb-4 mb-md-0 mt-3 mt-lg-0 d-md-none">
					Войти
				</b-button>
			</b-collapse>

			<!-- Меню блога -->
			<b-collapse v-else is-nav id="nav_collapse" class="pt-3 pt-lg-0">
				<b-navbar-nav class="ml-auto mt-3 mt-lg-0">
					<!-- Поиск по блогу -->
					<b-nav-form v-if="!isSearchBlog" class="mr-1 nav_search d-none d-lg-flex">
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
					<!-- Поиск по блогу на мобиле -->
					<b-form v-if="!isSearchBlog" v-on:submit.prevent="search" class="mr-1 nav_search d-block d-lg-none ">
						<b-input-group class="mw-100 mb-3">
							<b-form-input id="searchFormInput" placeholder="Поиск по блогу" v-model="searchBlog" />
							<b-input-group-append>
								<b-button type="submit">
									Найти
								</b-button>
							</b-input-group-append>
						</b-input-group>
					</b-form>
					<b-nav-item href="/" class="mr-1">
						О продукте
					</b-nav-item>
					<b-nav-item href="/cases/" class="mr-1">
						Кейсы
					</b-nav-item>
					<b-nav-item to="/library/" class="mr-1">
						Библиотека
					</b-nav-item>
				</b-navbar-nav>
				<!-- Кнопки -->
				<b-button variant="primary" href="/panel/register/" class="mb-4 mb-md-0 ml-0 mt-3 mr-1 px-2 ml-xl-3 mt-lg-0 mr-xl-3 px-xl-4">
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


<static-query>
	query {
		recent: allPost (limit: 3) {
			edges {
				node {
					title
					slug
					featured_media
				}
			}
		}
	}
</static-query>


<script>
	export default {
		methods: {
			handleScroll() {
				if (this.lastPosition < window.scrollY && this.limitPosition < window.scrollY) {
					this.hideHeader = true
					if ( document.querySelector('a[aria-expanded*="true"]') ) {
						document.querySelector('a[aria-expanded*="true"]').setAttribute('aria-expanded', false)
						document.querySelector('.b-nav-dropdown.show').classList = 'nav-item b-nav-dropdown dropdown mr-1 hasmegamenu'
						document.querySelector('.dropdown-menu.show').classList = 'dropdown-menu'
					}
					// Скролим вниз
				} 
				
				if (this.lastPosition > window.scrollY) {
					this.scrolled = true
					this.hideHeader = false
					// Скролим вверх
				}
				
				this.lastPosition = window.scrollY;
				this.scrolled = window.scrollY > this.limitPosition;
			},
			search() {
				this.$router.push('/blog/search/?q=' + this.searchBlog)
			},
			showSearchForm() {
				this.showSearch = true
			},
			hideSearchForm() {
				this.showSearch = false
			},
			openMegamenu(el) {
				if (el.srcElement.parentElement.ariaExpanded == 'false') {
					this.$emit('overlay-show')
				} else {
					this.$emit('overlay-close')
				}
			}
		},
		components: {
			//Прогресс бар
			ReadProgress: () =>
				import("vue-read-progress")
					.then(m => m.default)
					.catch()
		},
		mounted () {
			this.ready = false

			//Блог или нет
			if (window.location.href.indexOf('/blog/') != -1){
				this.isBlog = true
			}
			//Страница поиска блога или нет
			if (window.location.href.indexOf('/blog/search/') != -1){
				this.isSearchBlog = true
			}
		},
		data() {
			return {
				ready: true,
				lastPosition: 0,
				limitPosition: 500,
				scrolled: false,
				hideHeader: false,

				//Навигация для блога
				isBlog: false,
				isSearchBlog: false,

				//Поиск по блогу
				showSearch: false,
				searchBlog: '',

				//Верхнее меню
				topMenu: [
					{
						title: 'Инструменты',
						subLinks: [
							{
								title: 'Онлайн-консультант',
								href: '/online-consultant/',
								job: 'Повышайте продажи на сайте и улучшайте поддержку ваших клиентов',
								order: 1
							},
							{
								title: 'Лид-бот',
								href: '/chatbot/',
								job: 'Собирайте больше квалифицированных лидов с сайта сайта без дополнительной нагрузки на ваших сотрудников',
								order: 3
							},
							
							{
								title: 'Автоматизация воронки',
								href: '/automation-marketing/',
								job: 'Увеличивайте конверсию воронки сайта с помощью цепочек сообщений (чат, чат-бот, поп-ап, письма)',
								order: 5
							},
							{
								title: 'База знаний',
								href: '/knowledge-base/',
								job: 'Сокращает время ответа на вопрос и систематизирует для клиентов знания о вашем продукте',
								order: 7
							},
							{
								title: 'Email-маркетинг',
								href: '/email-marketing/',
								job: 'Повышает эффективность рассылок за счет гибкой сегментации пользователей',
								order: 2
							},
							{
								title: 'SDK для Android и iOS',
								href: '/sdk/',
								job: 'Добавляет функционал Carrot quest в ваше клиентское мобильное приложение',
								order: 4
							},
							{
								title: 'Трекинг пользователей',
								href: '/lead-manager/',
								job: 'Собирает все данные о каждом пользователе, его действиях, заказах и коммуникациях',
								order: 6
							},
							{
								title: 'Поп-ап окна',
								href: '/pop-up/',
								job: 'Собирайте больше лидов и продаж благодаря гиперсегментации аудитории',
								order: 7
							},
						],
						jobs: true
					},
					{
						title: 'Решения',
						subLinks: [
							{
								title: 'Для продуктовых компаний',
								href: '/saas/',
								job: 'saas/онлайн-сервисы <br>Сервис помогает продакт-менеджерам, маркетологам и поддержке лучше взаимодействовать с пользователями и улучшать результаты команды и метрики продукта',
								order: 1
							},
							{
								title: 'Для eCommerce',
								href: '/ecommerce/',
								job: 'Сервис помогает маркетологам и менеджерам по продажам увеличивать ROI своей работы',
								order: 2
							},
							{
								title: 'Внедрение крупным компаниям',
								href: '/introduction-carrotquest/',
								job: 'Выделенная команда внедрения поможет вашей команде быстро настроить сервис, запустить сценарии автоматизации маркетинга и измерить результат',
								order: 3
							}
							
						],
						jobs: true
					},
					{
						title: 'Тарифы',
						href: '/price/'
					},
					{
						title: 'Ресурсы',
						subBlocks: {
							aboutProduct: [
								{
									title: 'База знаний о продукте',
									href: 'https://help.carrotquest.io/',
									job: 'Сокращает время ответа на вопрос и систематизирует для клиентов знания о вашем продукте'
								},
								{
									title: 'Интеграции',
									href: '/integration/',
									job: 'Более 30 готовых интеграций с CMS, CRM, аналитикой, мессенджерами, соц.сетями и другими сервисами'
								},
								{
									title: 'API',
									href: 'https://developers.carrotquest.io/',
									job: 'О том, как разработчику интегрировать Carrot quest на сайт'
								},
								{
									title: 'Видеокурс',
									href: '/videocourse-online-sales/',
									job: 'Как увеличить продажи на том же трафике, используя инструменты Carrot quest'
								},
							],
							content: [
								{
									title: 'Блог',
									href: 'https://www.carrotquest.io/blog/',
									job: 'О&nbsp;том, как разработчику интегрировать Carrot quest на&nbsp;сайт'
								},
								{
									title: 'Кейсы',
									href: 'https://www.carrotquest.io/cases/',
									job: 'Более 60&nbsp;историй успеха наших клиентов'
								},
								{
									title: 'Библиотека',
									href: '/library/',
									job: 'Книги, гайды, чек листы, видеокурсы. Скачивайте бесплатно'
								},
								{
									title: 'Наши книги',
									href: '/library/#books',
									job: 'Подробная экспертиза от команды carrot quest (dashly)'
								},
								{
									title: 'Вебинары и подкасты',
									href: '/blog/webinars/',
									job: 'Более 30&nbsp;вебинаров и&nbsp;подкастов на&nbsp;темы про создание продуктов, маркетинг и&nbsp;growth hacking'
								}
							]
						},
						subLinks: [
							{
								title: 'База знаний о продукте',
								href: 'https://help.carrotquest.io/'
							},
							{
								title: 'Интеграции',
								href: '/integration/'
							},
							{
								title: 'API',
								href: 'https://developers.carrotquest.io/'
							},
							{
								title: 'Видеокурс',
								href: '/videocourse-online-sales/'
							},
							{
								title: 'Блог',
								href: '/blog/'
							},
							{
								title: 'Кейсы',
								href: '/cases/'
							},
							{
								title: 'Библиотека',
								href: '/library/'
							},
							{
								title: 'Наши книги',
								href: '/library/#books'
							},
							{
								title: 'Вебинары и подкасты',
								href: '/blog/webinars/'
							}		
						],
						jobs: true
					},
					{
						title: 'Блог',
						href: 'https://www.carrotquest.io/blog/'
					},
					{
						title: 'Партнерам',
						href: '/partner/'
					}
				]
			}
		}
	}
</script>