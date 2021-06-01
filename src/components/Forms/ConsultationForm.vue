<template>
	<div class="ConsultationForm">
		<!-- Текст перед отправкой -->
		<p v-html="before" :class="{ 'hide' : this.send }" />
		<!-- Форма для сбора данных -->
		<b-form v-on:submit.prevent="Consultation" :class="{ 'hide' : this.send }">
			<TakeAll @newdata="handleData($event)" :button="button" />
		</b-form>
		<!-- Текст после отправки -->
		<div class="afterSend row align-items-center" :class="{ 'd-none' : !this.send }">
			<b-col>
				<div class="h3 mb-3">Спасибо</div>
				<p>
					Ксения позвонит вам с номера <NOBR>+7 (495) 105-91-69</NOBR>.<br>
					Если что, мы отвечаем в чате 😉
				</p>
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
			before: String,
			button: {
				default: 'Отправить',
				type: String
			}
		},
		data: function() {
			return {
				name:   '',
				phone:	'',
				email:  '',
				role:   '',
				site:   '',

				send:	false
			};
		},
		methods: {
			//Данные из формы
			handleData: function(e) {
				[ this.name, this.phone, this.email, this.role, this.site ] = e;
			},

			//Отправка формы
			Consultation() {
				carrotquest.identify([
					{'op': 'update_or_create', 'key': '$name', 				'value': this.name },
					{'op': 'update_or_create', 'key': '$phone', 			'value': this.phone },
					{'op': 'update_or_create', 'key': '$email', 			'value': this.email },
					{'op': 'update_or_create', 'key': 'Должность', 			'value': this.role },
					{'op': 'update_or_create', 'key': 'Адрес сайта', 		'value': this.site },
					{'op': 'update_or_create', 'key': 'Тип заявки', 		'value': 'Заполнил форму на демо' },
					{'op': 'update_or_create', 'key': 'Источник заявки', 	'value': location.host + location.pathname }
				]);
				carrotquest.track(
					'Заполнил форму на демо', {
						'Имя': 			this.name,
						'Телефон': 		this.phone,
						'Email': 		this.email,
						'Должность': 	this.role,
						'Сайт': 		this.site,
						'type': 		'form',
						'url': 			location.host + location.pathname
					}
				);

				dataLayer.push({ event: 'UAevent', eventCategory: 'leads', eventAction: 'phone', eventLabel: location.host + location.pathname })
				gtag('event' , 			'lead form' ,
					{'category': 		'demo',
					'subject': 			'finished fill the form',
					'page_title': 		document.title,
					'page_location': 	location.host + location.pathname
				})
				fbq('trackCustom', 'get_demo', {page: location.pathname})
				ym(25430054,'reachGoal','get_demo')
				VK.Goal('conversion')
				
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