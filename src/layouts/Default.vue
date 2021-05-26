<template>
	<div>
		<b-overlay :show="showOverlay" v-on:click="showOverlay = false">
			<Header v-if="header" v-on:overlay-show="overlay" v-on:overlay-close="overlayClose" />

			<slot />

			<Footer v-if="footer" />

			<Balcony />
<<<<<<< HEAD
			<ConsultationModal />
			<DownloadMiniModal />
			<DownloadModal />
		</b-overlay>
=======
			
		<!-- </b-overlay> -->

		<!-- Модалка для скачивания файлов -->
		<b-modal ref="open-modal-demo" hide-footer :title="modalTitle">
			<b-form v-on:submit.prevent="modalDemo">
				<b-form-input 
					placeholder="Имя" 
					type="text" 
					name="name"
					required
					v-model="modalName"
					class="px-3 py-4"
				/>
				<b-form-input 
					placeholder="Телефон" 
					type="text" 
					pattern="^[^A-zА-я]{5,}"
					name="phone"
					required
					v-model="modalPhone"
					class="px-3 py-4 mt-3"
				/>
				<b-form-input 
					placeholder="Почта" 
					type="email" 
					name="email"
					required
					v-model="modalEmail"
					class="px-3 py-4 mt-3"
				/>
				<b-form-input 
					placeholder="Должность" 
					type="text"
					name="role"
					required
					v-model="modalRole"
					class="px-3 py-4 mt-3"
				/>
				<b-form-input 
					placeholder="URL вашего сайта" 
					type="text"
					pattern=".+\.+.+"
					name="site"
					required
					v-model="modalSite"
					class="px-3 py-4 mt-3"
				/>
				<b-button 
					type="submit" 
					variant="primary" 
					class="px-3 py-2 mt-4">
					Получить консультацию
				</b-button>
			</b-form>
		</b-modal>

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
					placeholder="Почта" 
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
					pattern=".+\.+.+"
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
					placeholder="Почта" 
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
					pattern=".+\.+.+"
					required
					v-model="modalSite"
					class="px-3 py-4 mt-3"
				/>
				<b-button 
					type="submit" 
					variant="primary" 
					class="px-3 py-2 mt-4 mr-3">
					Получить на почту
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
					placeholder="Почта" 
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

		<b-modal ref="suсcessDemo" hide-footer title="Всё успешно отправлено">
			В ближайшее время мы свяжемся с вами
		</b-modal>

>>>>>>> main
	</div>
</template>

<script>
	import Header 				from '~/components/Header.vue'
	import Footer 				from '~/components/Footer.vue'
	import { BOverlay } 		from 'bootstrap-vue'
	import Balcony 				from '~/components/Ads/Balcony.vue'
	import ConsultationModal 	from '~/components/Modals/ConsultationModal.vue'
	import DownloadMiniModal 	from '~/components/Modals/DownloadMiniModal.vue'
	import DownloadModal 		from '~/components/Modals/DownloadModal.vue'
	
	export default {
		components: {
			Header,
			Footer,
			BOverlay,
			Balcony,
			ConsultationModal,
			DownloadMiniModal,
			DownloadModal
		},
		props: ['header' , 'footer'],
		data: function() {
			return {
				showOverlay: false
			};
		},
		methods: {
			// Ищем ссылки на страницах
			searchHrefs () {
				// Ищем ссылки для открытия чата
				if ( document.querySelector('[href*="#open-chat"]') ) {
					document.querySelectorAll('[href*="#open-chat"]').forEach(function(item) {
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
						href: 'https://www.carrotquest.io/assets/font/OpenSans-Regular.woff2',
						as: 'font', 
						type: 'font/woff2', 
						crossorigin: 'anonymous'
					},
					{
						rel: 'preload',
						href: 'https://www.carrotquest.io/assets/font/OpenSans-Bold.woff2',
						as: 'font', 
						type: 'font/woff2', 
						crossorigin: 'anonymous'
					},
					// Подключаем Stag sans
					{
						rel: 'preload',
						href: 'https://www.carrotquest.io/assets/font/Stag-Sans-Medium-Web.woff2',
						as: 'font', 
						type: 'font/woff2', 
						crossorigin: 'anonymous'
					},
				]
			}
		}
	};
</script>