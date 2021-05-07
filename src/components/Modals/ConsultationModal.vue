<template>
	<b-modal ref="open-modal-consultation" size="lg" hide-footer :title="modalData.title">
		<b-container>
			<b-row>
				<b-col col="6">
					123
				</b-col>
				<b-col col="6">
					<b-form v-on:submit.prevent="Consultation">
						<TakeAll @newdata="handleData($event)" />
						{{ modalData.name }}
						<b-button 
							type="submit" 
							variant="primary" 
							class="px-3 py-2 mt-4">
							Заказать
						</b-button>
					</b-form>
				</b-col>
			</b-row>
		</b-container>
	</b-modal>
</template>


<script>
	import TakeAll from '~/components/Forms/TakeAll.vue'
	
	export default {
		components: {
			TakeAll
		},
		data: function() {
			return {
				event:     '',

				modalData: {
					title:	'Оставить заявку на внедрение',
					name:   '',
					phone:	'',
					email:  '',
					site:   '',
					role:   '',
				}
			};
		},
		mounted () {
			this.searchHrefs()
		},
		methods: {
			// Ищем ссылки на страницах
			searchHrefs() {
				// Ищем ссылки для открытия модалок на скачивание файлов
				if ( document.querySelector('a[href*="#open-modal-consultation"]') ) {
					document.querySelectorAll('a[href*="#open-modal-consultation"]').forEach(function(item) {
						item.addEventListener('click', function(e) {
							e.preventDefault()
							this.$refs['open-modal-consultation'].show()
							let addr = new URL(e.srcElement.href.replace('#open-modal-consultation' , ''))
							//Заголовок
							if (!!addr.searchParams.get('title')) {
								this.modalData = addr.searchParams.get('title')
							}
						}.bind(this))
					}.bind(this))
				}
			},

			//Данные из формы
			handleData: function(e) {
				[ this.modalData.name, this.modalData.phone, this.modalData.email, this.modalData.role, this.modalData.site ] = e;
			},

			//Отправка формы
			Consultation() {
			// 	carrotquest.identify([
			// 		{"op": "update_or_create", "key": "$phone", "value": this.phone},
			// 		{"op": "update_or_create", "key": "$name", "value": this.name},
			// 		{"op": "update_or_create", "key": "$email", "value": this.email}
			// 	]);

			// 	dataLayer.push({ event: 'UAevent', eventCategory: 'leads', eventAction: 'phone', eventLabel: location.host + location.pathname })
			// 	fbq('trackCustom', 'get_demo', {page: location.pathname})

			// 	carrotquest.track("Заполнил форму на демо", {
			// 		'phone': this.phone,
			// 		'email': this.email,
			// 		'type': 'form',
			// 		'url': location.host + location.pathname
			// 	});
				
			// 	this.name = ""
			// 	this.phone = ""
			// 	this.email = ""

			// 	this.$refs['modalConsultation'].hide()
			// 	this.$refs['suсcessDownload'].show()
			// 	setTimeout(() => {
			// 		this.$refs['suсcessDownload'].hide()
			// 	}, 7000);
			}
		}
	}
</script>