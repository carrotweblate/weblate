<template>
	<div>
		<!-- <b-overlay :show="showOverlay" v-on:click="showOverlay = false"> -->

			<Header v-if="header" v-on:overlay-show="overlay" v-on:overlay-close="overlayClose" />

			<slot />

			<Footer v-if="footer" />

			<Balcony />
			
		<!-- </b-overlay> -->

		<!-- Модалка для скачивания файлов -->
		<b-modal ref="open-modal-download" hide-footer :title="modalTitle">
			<b-form v-on:submit.prevent="modalDownload">
				<b-form-input 
					placeholder="Имя" 
					type="text" 
					required
					v-model="modalName"
					class="px-3 py-4"
				/>
				<b-form-input 
					placeholder="Телефон" 
					type="text" 
					pattern="^[^A-zА-я]{5,}"
					required
					v-model="modalPhone"
					class="px-3 py-4 mt-3"
				/>
				<b-form-input 
					placeholder="Email" 
					type="email" 
					required
					v-model="modalEmail"
					class="px-3 py-4 mt-3"
				/>
				<b-form-input 
					placeholder="Должность" 
					type="text"
					required
					v-model="modalRole"
					class="px-3 py-4 mt-3"
				/>
				<b-form-input 
					placeholder="URL вашего сайта" 
					type="text"
					pattern="([\D\d]+)([.]+)([\D\d]+)"
					required
					v-model="modalSite"
					class="px-3 py-4 mt-3"
				/>
				<b-button 
					type="submit" 
					variant="primary" 
					class="px-3 py-2 mt-4">
					Отправить
				</b-button>
			</b-form>
		</b-modal>

		<!-- Модалка для ссылок и файлов -->
		<b-modal ref="open-modal-url" hide-footer :title="modalTitle">
			<b-form v-on:submit.prevent="modalUrl">
				<b-form-input 
					placeholder="Имя" 
					type="text" 
					required
					v-model="modalName"
					class="px-3 py-4"
				/>
				<b-form-input 
					placeholder="Телефон" 
					type="text" 
					pattern="^[^A-zА-я]{5,}"
					required
					v-model="modalPhone"
					class="px-3 py-4 mt-3"
				/>
				<b-form-input 
					placeholder="Email" 
					type="email" 
					required
					v-model="modalEmail"
					class="px-3 py-4 mt-3"
				/>
				<b-form-input 
					placeholder="Должность" 
					type="text"
					required
					v-model="modalRole"
					class="px-3 py-4 mt-3"
				/>
				<b-form-input 
					placeholder="URL вашего сайта" 
					type="text"
					required
					v-model="modalSite"
					class="px-3 py-4 mt-3"
				/>
				<b-button 
					type="submit" 
					variant="primary" 
					class="px-3 py-2 mt-4">
					Отправить
				</b-button>
			</b-form>
		</b-modal>

		<!-- Модалка для Вебинаров -->
		<b-modal ref="open-modal-webinar" hide-footer title="Регистрация на вебинар">
			<b-form v-on:click.once="modalWebinarStart" v-on:submit.prevent="modalWebinar">
				<b-form-input 
					placeholder="Имя" 
					type="text" 
					required
					v-model="modalName"
					class="px-3 py-4"
				/>
				<b-form-input 
					placeholder="Телефон" 
					type="text" 
					pattern="^[^A-zА-я]{5,}"
					required
					v-model="modalPhone"
					class="px-3 py-4 mt-3"
				/>
				<b-form-input 
					placeholder="Email" 
					type="email" 
					required
					v-model="modalEmail"
					class="px-3 py-4 mt-3"
				/>
				<b-button 
					type="submit" 
					variant="primary" 
					class="px-3 py-2 mt-4">
					Принять участие
				</b-button>
			</b-form>
		</b-modal>

		<b-modal ref="suсcessDownload" hide-footer title="Всё успешно отправлено">
			Проверьте свой email: {{modalEmail}}
		</b-modal>

	</div>
	
</template>



<script>
	import Header from '~/components/Header.vue'
	import Footer from '~/components/Footer.vue'
	import Balcony from '~/components/Balcony.vue'

	export default {
		components: {
			Header,
			Footer,
			Balcony
		},
		props: ['header' , 'footer'],
		data: function() {
			return {
				modalTitle: 'Получить на email',
				modalName: '',
				modalPhone: '',
				modalEmail: '',
				modalSite: '',
				modalRole: '',
				modalEvent: '',
				modalOpenUrl: '',
				modealSend: false,

				showOverlay: false,
			};
		},
		methods: {
			// Ищем ссылки на страницах
			searchHrefs () {
				// Ищем ссылки для открытия чата
				if ( document.querySelector('[href="#open-chat"]') ) {
					document.querySelectorAll('[href="#open-chat"]').forEach(function(item) {
						item.addEventListener('click', function(e) {
							e.preventDefault()
							carrotquest.open()
						})
					})
				}

				// Ищем ссылки для записи на демо
				if ( document.querySelector('a[href*="#open-demo-pop-up"]') ) {
					document.querySelectorAll('a[href*="#open-demo-pop-up"]').forEach(function(item) {
						item.addEventListener('click', function(e) {
							e.preventDefault()
							carrotquest.track('Записаться на демо через поп-ап');
						}.bind(this))
					}.bind(this))
				}

				// Ищем ссылки для открытия модалок на скачивание файлов
				if ( document.querySelector('a[href*="#open-modal-download"]') ) {
					document.querySelectorAll('a[href*="#open-modal-download"]').forEach(function(item) {
						item.addEventListener('click', function(e) {
							e.preventDefault()
							this.$refs['open-modal-download'].show()

							let addr = new URL(e.srcElement.href.replace('#open-modal-download' , ''))

							this.modalTitle = addr.searchParams.get('title')
							this.modalEvent = addr.searchParams.get('cqe')
						}.bind(this))
					}.bind(this))
				}

				// Ищем ссылки для открытия модалок на переход или открытие файлов
				if ( document.querySelector('a[href*="#open-modal-url"]') ) {
					document.querySelectorAll('a[href*="#open-modal-url"]').forEach(function(item) {
						item.addEventListener('click', function(e) {
							e.preventDefault()
							this.$refs['open-modal-url'].show()

							let addr = new URL(e.srcElement.href.replace('#open-modal-url' , ''))

							this.modalTitle = addr.searchParams.get('title')
							this.modalEvent = addr.searchParams.get('cqe')
							this.modalOpenUrl = addr.searchParams.get('url')
						}.bind(this))
					}.bind(this))
				}

				// Ищем ссылки для открытия модалок для регистрации на вебинар
				if ( document.querySelector('a[href*="#open-modal-webinar"]') ) {
					document.querySelectorAll('a[href*="#open-modal-webinar"]').forEach(function(item) {
						item.addEventListener('click', function(e) {
							e.preventDefault()
							this.$refs['open-modal-webinar'].show()

							let addr = new URL(e.srcElement.href.replace('#open-modal-webinar' , ''))

							this.modalTitle = addr.searchParams.get('title')
							this.modalOpenUrl = addr.searchParams.get('url')
							carrotquest.track('webinar_form_open')
						}.bind(this))
					}.bind(this))
				}

				// Ищем ссылки на получение награды
				if ( document.querySelector('a[href*="tg://resolve?domain=CQ_Webinar_Revenue_Bot&start=ml11"]') ) {
					document.querySelectorAll('a[href*="tg://resolve?domain=CQ_Webinar_Revenue_Bot&start=ml11"]').forEach(function(item) {
						item.addEventListener('click', function(e) {
							e.preventDefault()
							carrotquest.track('webinar_bonus_requested')
							window.open( e.srcElement.href , '_self' )
						}.bind(this))
					}.bind(this))
				}
			},

			//Скачивание файлов
			modalDownload () {
				carrotquest.identify([
					{"op": "update_or_create", "key": "$phone", "value": this.modalPhone},
					{"op": "update_or_create", "key": "$name", "value": this.modalName},
					{"op": "update_or_create", "key": "$email", "value": this.modalEmail},
					{"op": "update_or_create", "key": "Должность", "value": this.modalRole},
					{"op": "update_or_create", "key": "Адрес сайта", "value": this.modalSite}
				]);
				carrotquest.track(this.modalEvent , {
					'Телефон': this.modalPhone,
					'Имя': this.modalName,
					'Email': this.modalEmail,
					'Должность': this.modalRole,
					'Адрес сайта': this.modalSite,
					'url': location.host + location.pathname
				})
				carrotquest.track("Заполнил форму на скачивание файлов", {
					'Телефон': this.modalPhone,
					'Имя': this.modalName,
					'Email': this.modalEmail,
					'Должность': this.modalRole,
					'Адрес сайта': this.modalSite,
					'url': location.host + location.pathname
				})
				carrotquest.track('Скачал лид-магнит')
				

				dataLayer.push({ event: 'UAevent', eventCategory: 'leads', eventAction: 'phone', eventLabel: location.host + location.pathname })
				fbq('trackCustom', 'get_lead', {page: location.pathname})

				this.$refs['open-modal-download'].hide()
				this.$refs['suсcessDownload'].show()
				setTimeout(() => {
					this.$refs['suсcessDownload'].hide()
				}, 7000);
			},

			//Открытие страницы (книга)
			modalUrl () {
				if (!this.modealSend) {
					carrotquest.identify([
						{"op": "update_or_create", "key": "$phone", "value": this.modalPhone},
						{"op": "update_or_create", "key": "$name", "value": this.modalName},
						{"op": "update_or_create", "key": "$email", "value": this.modalEmail},
						{"op": "update_or_create", "key": "Адрес сайта", "value": this.modalSite},
						{"op": "update_or_create", "key": "Источник", "value": "Книга продуктовые исследования"}
					]);
					carrotquest.track("Заполнил форму на скачивание файлов", {
						'Телефон': this.modalPhone,
						'Имя': this.modalName,
						'Email': this.modalEmail,
						'Адрес сайта': this.modalSite,
						'Должность': this.modalRole,
						'url': location.host + location.pathname
					})
					carrotquest.track(this.modalEvent, {
						'Телефон': this.modalPhone,
						'Имя': this.modalName,
						'Email': this.modalEmail,
						'Адрес сайта': this.modalSite,
						'Должность': this.modalRole,
						'url': location.host + location.pathname
					})

					dataLayer.push({ event: 'UAevent', eventCategory: 'leads', eventAction: 'phone', eventLabel: location.host + location.pathname })
					fbq('trackCustom', 'get_lead', {page: location.pathname})

					this.modealSend = !this.modealSend
				}

				this.$refs['open-modal-url'].hide()
				this.$refs['suсcessDownload'].show()
				setTimeout(() => {
					this.$refs['suсcessDownload'].hide()
				}, 7000);
			},
			
			//Регистрация на вебинар
			modalWebinarStart() {
				carrotquest.track('webinar_form_started')
			},
			modalWebinar () {
				carrotquest.identify([
					{"op": "update_or_create", "key": "$phone", "value": this.modalPhone},
					{"op": "update_or_create", "key": "$name", "value": this.modalName},
					{"op": "update_or_create", "key": "$email", "value": this.modalEmail}
				]);
				carrotquest.track( 'webinar_' + this.modalTitle , {
					'Телефон': this.modalPhone,
					'Имя': this.modalName,
					'Email': this.modalEmail,
					'url': location.host + location.pathname
				})
				carrotquest.track('webinar_form_finished')

				dataLayer.push({ event: 'UAevent', eventCategory: 'leads', eventAction: 'phone', eventLabel: location.host + location.pathname })
				fbq('trackCustom', 'get_webinar', {page: location.pathname})

				this.$refs['open-modal-webinar'].hide()

				window.open( this.modalOpenUrl + '?cq_event=webinar_bonus_landing_opened' + '&from=webinar-' + this.modalTitle , '_self' )
			},

			//Управляем оверлеем
			overlay() {
				this.showOverlay = true
			},
			overlayClose() {
				this.showOverlay = false
			}
		},
		mounted () {
			this.searchHrefs()
		},
		updated () {
			this.searchHrefs()
		},
		//Делаем в HEAD
		metaInfo() {
			return {
				title: this.$parent.metaTitle,
				meta: [
					{
						key: 'description',
						name: 'description',
						content: this.$parent.metaDescription
					},
					{
						key: 'og:url',
						property: 'og:url',
						content: this.$parent.metaCanonical
					},
					{
						key: 'og:title',
						property: 'og:title',
						content: this.$parent.metaTitle
					},
					{
						key: 'og:description',
						property: 'og:description',
						content: this.$parent.metaDescription
					},
					{
						key: 'og:image',
						property: 'og:image',
						content: this.$parent.metaImage
					},
				],
				link: [
					{
						key: 'canonical',
						rel: 'canonical',
						href: this.$parent.metaCanonical
					},
					// Подключаем Open sans
					{
						rel: 'preload',
						href: 'https://cdn-www.carrotquest.io/assets/font/OpenSans-Regular.woff2',
						as: 'font', 
						type: 'font/woff2', 
						crossorigin: 'anonymous'
					},
					{
						rel: 'preload',
						href: 'https://cdn-www.carrotquest.io/assets/font/OpenSans-Bold.woff2',
						as: 'font', 
						type: 'font/woff2', 
						crossorigin: 'anonymous'
					},
					// Подключаем Stag sans
					{
						rel: 'preload',
						href: 'https://cdn-www.carrotquest.io/assets/font/Stag-Sans-Medium-Web.woff2',
						as: 'font', 
						type: 'font/woff2', 
						crossorigin: 'anonymous'
					},
				]
			}
		}
	};
</script>