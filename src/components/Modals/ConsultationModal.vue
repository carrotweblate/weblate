<template>
	<b-modal content-class="universalModal" ref="open-modal-consultation" size="lg" hide-header hide-footer>
		<b-button @click="hideModal" class="universalModal__close font12px">
			<span>Закрыть</span>
		</b-button>
		<b-container>
			<b-row>
				<b-col lg="6" class="leftCol d-none d-lg-block" style="background-image: url(https://ik.imagekit.io/0nyjr4jxhmg/tr:w-494/components/10.png?ik-sdk-version=vuejs-1.0.9);" />
				<b-col lg="6" class="rightCol">

					<div class="h3 mb-4" v-html="modalData.title" :class="{ 'hide' : this.send }" />

					<b-form v-on:submit.prevent="Consultation" class="mb-4" :class="{ 'hide' : this.send }">
						<TakeAll @newdata="handleData($event)" />
						<b-button 
							type="submit" 
							variant="primary" 
							class="px-3 py-2 mt-4 w-100">
							Отправить
						</b-button>
					</b-form>

					<div class="afterSend row align-items-center" :class="{ 'd-none' : !this.send }">
						<b-col>
							<div class="h3 mb-3">Спасибо</div>
							<p>
								Ксения позвонит вам с номера +7 (495) 105-91-69. Если что, мы отвечаем в чате 😉
							</p>
						</b-col>
					</div>

					<ContactsHrefs />

				</b-col>
			</b-row>
		</b-container>
	</b-modal>
</template>


<script>
	import TakeAll 			from '~/components/Forms/TakeAll.vue'
	import ContactsHrefs 	from '~/components/ContactsHrefs.vue'
	
	export default {
		components: {
			TakeAll,
			ContactsHrefs
		},
		data: function() {
			return {
				event:     '',

				modalData: {
					title:	'Оставить заявку на внедрение',
					name:   '',
					phone:	'',
					email:  '',
					role:   '',
					site:   '',
				},

				send: 		false
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

			hideModal() {
				this.$refs['open-modal-consultation'].hide()
			},

			//Данные из формы
			handleData: function(e) {
				[ this.modalData.name, this.modalData.phone, this.modalData.email, this.modalData.role, this.modalData.site ] = e;
			},

			//Отправка формы
			Consultation() {
				carrotquest.identify([
					{"op": "update_or_create", "key": "$phone", "value": this.modalData.name},
					{"op": "update_or_create", "key": "$name", 	"value": this.modalData.phone},
					{"op": "update_or_create", "key": "$email", "value": this.modalData.email},
					{"op": "update_or_create", "key": "$email", "value": this.modalData.role},
					{"op": "update_or_create", "key": "$email", "value": this.modalData.site}
				]);
				dataLayer.push({ event: 'UAevent', eventCategory: 'leads', eventAction: 'phone', eventLabel: location.host + location.pathname })
				fbq('trackCustom', 'get_demo', {page: location.pathname})
				carrotquest.track("Заполнил форму на демо", {
					'Имя': 			this.modalData.name,
					'Телефон': 		this.modalData.phone,
					'Email': 		this.modalData.email,
					'Должность': 	this.modalData.role,
					'Сайт': 		this.modalData.site,
					'type': 		'form',
					'url': 			location.host + location.pathname
				});

				this.send = true
				setTimeout(() => {
					this.hideModal()
				}, 7000);
			}
		}
	}
</script>

<style lang="scss">
	.universalModal {
		.h3.hide , form.hide {
			transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
			opacity: 0;
		}
		.afterSend {
			position: absolute;
			top: 0;
			bottom: 6rem;
		}
		.ContactsHrefs {
			flex-wrap: wrap;
			&__phone {
				width: 100%;
				margin-bottom: 0 !important;
			}
			&__icons {
				flex-wrap: wrap;
				br {
					display: none;
				}
			}
			&__icon {
				margin-top: 1rem;
				a {
					margin-right: 0.5rem;
				}
			}
			@media (min-width: 768px) {
				&__icon {
					margin-top: 1rem;
				}
			}
		}
	}
</style>