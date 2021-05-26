<template>
	<div class="LidsMiniForm">
		<!-- Текст перед отправкой -->
		<p v-html="before" :class="{ 'hide' : this.send }" />
		<!-- Форма для сбора данных -->
		<b-form v-on:submit.prevent="Subscribe" :class="{ 'hide' : this.send }" class="mt-4">
			<TakeEmail @newdata="handleData($event)" :button="button" />
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
	import TakeEmail from '~/components/Forms/TakeEmail.vue'

	export default {
		components: { 
			TakeEmail
		},
		props: {
			before: String,
			event: String,
			button: {
				default: 'Отправить',
				type: String
			},
			after: {
				default: 'Всё успешно отправлено, проверьте свой email',
				type: String
			}
		},
		data: function() {
			return {
				email:  '',
				send:	false
			};
		},
		methods: {
			//Данные из формы
			handleData: function(e) {
				[ this.email ] = e;
			},

			//Отправка формы
			Subscribe() {
				if ( this.event != '' ) {
					carrotquest.track(this.event)
				}
				carrotquest.identify([
					{"op": "update_or_create", "key": "$email", "value": this.email},
					{ doubleSubscribe: true } // Включение подписки, если отписывался ранее
				])

				dataLayer.push({ event: 'UAevent', eventCategory: 'leads', eventAction: 'email', eventLabel: location.host + location.pathname })
				gtag('event' , 			'lead form' ,
					{'category': 		'email, top of funnel',
					'subject': 			'finished fill the form',
					'page_title': 		document.title,
					'page_location': 	location.host + location.pathname
				})
				fbq('trackCustom', 'get_lead', {page: location.pathname})
				
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
	.LidsMiniForm {
		position: relative;
		.hide {
			transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
			opacity: 0;
		}
		.afterSend {
			position: absolute;
			top: 0;
		}
	}
</style>