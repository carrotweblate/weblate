<template>
	<div class="LidsForm">
		{{this.sale}}
		<!-- Форма для сбора данных -->
		<b-form v-on:submit.prevent="Lidgeneration" :class="{ 'hide' : this.send }">
			<TakeAll @newdata="handleData($event)" :button="button" />
		</b-form>
		<!-- Текст после отправки -->
		<div class="afterSend row align-items-center" :class="{ 'd-none' : !this.send }">
			<b-col>
				<div class="h3 mb-3">Спасибо</div>
				<p v-html="after" />
			</b-col>
		</div>
	</div>
</template>

<script>
	import TakeAll 			from '~/components/Forms/TakeAll.vue'

	export default {
		components: { 
			TakeAll
		},
		props: {
			after: {
				default: 'Всё успешно отправлено, проверьте свой email',
				type: String
			},
			before: String,
			button: {
				default: 'Отправить',
				type: String
			},
			event: String,
			sale: Boolean
		},
		data: function() {
			return {
				name:   '',
				phone:	'',
				email:  '',
				role:   '',
				site:   '',
				sale: 	false,

				send:	false
			};
		},
		methods: {
			//Данные из формы
			handleData: function(e) {
				[ this.name, this.phone, this.email, this.role, this.site , this.sale ] = e;
			},

			//Отправка формы
			Lidgeneration() {
				carrotquest.identify([
					{'op': 'update_or_create', 'key': '$name', 				'value': this.name },
					{'op': 'update_or_create', 'key': '$phone', 			'value': this.phone },
					{'op': 'update_or_create', 'key': '$email', 			'value': this.email },
					{'op': 'update_or_create', 'key': 'Должность', 			'value': this.role },
					{'op': 'update_or_create', 'key': 'Адрес сайта', 		'value': this.site },
				])
				carrotquest.track(
					this.event, {
						'Имя': 			this.name,
						'Телефон': 		this.phone,
						'Email': 		this.email,
						'Должность': 	this.role,
						'Сайт': 		this.site,
						'type': 		'form',
						'url': 			location.host + location.pathname
					}
				)
				if (this.sale == true) {
					carrotquest.track(
						'Скачал лид-магнит', {
							'Имя': 			this.name,
							'Телефон': 		this.phone,
							'Email': 		this.email,
							'Должность': 	this.role,
							'Сайт': 		this.site,
							'type': 		'form',
							'url': 			location.host + location.pathname
						}
					)
					carrotquest.identify([
						{'op': 'update_or_create', 'key': 'Тип заявки', 		'value': 'Скачал лид-магнит' },
						{'op': 'update_or_create', 'key': 'Источник заявки', 	'value': location.host + location.pathname }
					])

					dataLayer.push({ event: 'UAevent', eventCategory: 'leads', eventAction: 'phone', eventLabel: location.host + location.pathname })
					gtag('event' , 			'lead form' ,
						{'category': 		'phone, bottom of funnel',
						'subject': 			'finished fill the form',
						'page_title': 		document.title,
						'page_location': 	location.host + location.pathname
					})
					fbq('trackCustom', 'get_lead', {page: location.pathname})
				} else {
					dataLayer.push({ event: 'UAevent', eventCategory: 'leads', eventAction: 'phone', eventLabel: location.host + location.pathname })
					gtag('event' , 			'lead form' ,
						{'category': 		'phone, top of funnel',
						'subject': 			'finished fill the form',
						'page_title' : 		document.title,
						'page_location' : 	location.host + location.pathname
					})
					fbq('trackCustom', 'get_lead', {page: location.pathname})
				}

				this.send = true
			}
		},
		watch: {
			send: {
				handler: function() {
					this.$emit('newdata', [ this.send ])
				},
				deep: true
			}
		}
	}
</script>



<style lang="scss">
	.ConsultationForm {
		width: 100%;
		position: relative;
		form.hide {
			transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
			opacity: 0;
		}
		.afterSend {
			position: absolute;
			top: 0;
			bottom: 6rem;
		}
		.btn {
			width: 100%;
			height: 50px;
		}
	}
</style>