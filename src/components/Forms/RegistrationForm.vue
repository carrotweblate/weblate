<template>
	<div class="Registration">
		<b-form v-on:submit.prevent="registration">
			<TakeEmail @newdata="handleData($event)" :button="button" />
		</b-form>
		<p v-if="text" class="mt-3">
			{{ text }}
		</p>
	</div>
</template>

<script>
	import TakeEmail 			from '~/components/Forms/TakeEmail.vue'

	export default {
		props: {
			button: {
				default: 'Начать бесплатно',
				type: String
			},
			text: {
				type: String
			}
		},
		components: { 
			TakeEmail
		},
		data: function() {
			return {
				email: ''
			};
		},
		methods: {
			//Перебрасываем в админку и передаём введённый email
			registration () {
				gtag('event' , 'lead form' , {
					'category'     	: 'reg',
					'subject'      	: 'started fill the form',
					'page_title' 	: document.title,
					'page_location' : location.host + location.pathname
				})
				window.open("https://carrotquest.io/panel/register/?email=" + this.email);
				this.email = ""
			},
			//Данные из формы
			handleData: function(e) {
				[ this.email ] = e;
			},
		}
	}
</script>