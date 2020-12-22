<template>
	<div>
		<Header />
		
		<slot />

		<Footer />

		<Balcony />

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
					Отправить
				</b-button>
			</b-form>
		</b-modal>

		<b-modal ref="suсcessDownload" hide-footer title="Всё успешно отправлено">
			Проверьте свой email: {{modalEmail}}
		</b-modal>

	</div>
</template>


<script>
	import Header from '~/components/Header/Header.vue'
	import Footer from '~/components/Footer/Footer.vue'
	import Balcony from '~/components/Balcony.vue'

	export default {
		components: {
			Header,
			Footer,
			Balcony
		},
		data: function() {
			return {
				modalTitle: 'Получить на email',
				modalName: '',
				modalPhone: '',
				modalEmail: '',
				modalEvent: ''
			};
		},
		methods: {
			showModal() {
				this.$refs['open-modal-download'].show()
			},
			modalDownload () {
				carrotquest.identify([
					{"op": "update_or_create", "key": "$phone", "value": this.modalPhone},
					{"op": "update_or_create", "key": "$name", "value": this.modalName},
					{"op": "update_or_create", "key": "$email", "value": this.modalEmail}
				]);
				carrotquest.track("Заполнил форму на скачивание файлов", {
					'Телефон': this.modalPhone,
					'Имя': this.modalName,
					'Email': this.modalEmail,
					'url': location.host + location.pathname
				})
				carrotquest.track(this.modalEvent)

				dataLayer.push({ event: 'UAevent', eventCategory: 'leads', eventAction: 'phone', eventLabel: location.host + location.pathname })
				fbq('trackCustom', 'get_demo', {page: location.pathname})

				this.$refs['open-modal-download'].hide()
				this.$refs['suсcessDownload'].show()
				setTimeout(() => {
					this.$refs['suсcessDownload'].hide()
				}, 7000);
			}
		},
		mounted () {

			// Ищем ссылки для открытия чата
			if ( document.querySelector('[href="#open-chat"]') ) {
				document.querySelectorAll('[href="#open-chat"]').forEach(function(item) {
					item.addEventListener('click', function(e) {
						e.preventDefault()
						carrotquest.open()
					})
				})
			}

			// Ищем ссылки для открытия модалок на скачивание файлов
			if ( document.querySelector('a[href*="open-modal-download"]') ) {
				document.querySelectorAll('a[href*="open-modal-download"]').forEach(function(item) {
					item.addEventListener('click', function(e) {
						e.preventDefault();

						this.$refs['open-modal-download'].show()

						let addr = new URL(e.srcElement.href.replace('#open-modal-download' , ''))

						this.modalTitle = addr.searchParams.get('title')
						this.modalEvent = addr.searchParams.get('cqe')

					}.bind(this))
				}.bind(this))
			}

		}
	};
</script>

<style lang="scss">

</style>