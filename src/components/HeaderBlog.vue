<template>
	<header>
		
		<b-navbar toggleable="lg" :class="{'pt-2 pb-2': scrolled, 'pt-2 pb-2 pt-md-4 pb-md-4': !scrolled, 'hideHeader': hideHeader, '': !hideHeader}" v-scroll="handleScroll" >

			<!-- Логотип -->
			<g-link to="/blog/">
				<img src="@/assets/images/components/blogLogo.svg" width="190" height="40" class="logo ml-2 ml-md-3" alt="Carrot quest Blog" />
			</g-link>
			<!-- Мобильное меню гамбургер -->
			<b-navbar-toggle target="nav_collapse" class="pr-0" />
			
			<!-- Обычное меню -->
			<b-collapse is-nav id="nav_collapse" class="pt-3 pt-lg-0">
				<b-navbar-nav class="ml-auto mt-3 mt-lg-0">
					<!-- Поиск по блогу -->
					<b-nav-form v-if="!isSearchBlog" class="mr-3 nav_search d-none d-lg-flex">
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
							<b-form-input id="searchFormInputMobile" placeholder="Поиск по блогу" v-model="searchBlog" />
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
		</b-navbar>

		<!-- Подложка -->
		<div class="blur" :class="{'pt-2 pb-2': scrolled, 'pt-2 pb-2 pt-md-4 pb-md-4': !scrolled, 'hideHeader': hideHeader, '': !hideHeader}" v-scroll="handleScroll"><div></div></div>

	</header>
</template>


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
		mounted () {
			this.ready = false
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
						title: 'О продукте',
						href: '/'
					},
					{
						title: 'Кейсы',
						href: '/cases/'
					},
					{
						title: 'Библиотека',
						href: '/library/'
					}
				]
			}
		}
	}
</script>