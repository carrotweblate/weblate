<template>
	<div class="ConsultationForm">
		<b-form v-on:submit.prevent="consultation">
			<b-form-row>
				<b-col cols="12" md="6" xl="3">
					<b-form-input 
						placeholder="Имя" 
						type="text" 
						required
						v-model="name"
						class="p-4 mb-3 mb-xl-0"
					/>
				</b-col>
				<b-col cols="12" md="6" xl="3">
					<b-form-input 
						placeholder="Телефон" 
						type="text" 
						required
						v-model="phone"
						class="p-4 mb-3 mb-xl-0"
					/>
				</b-col>
				<b-col cols="12" md="6" xl="3">
					<b-form-input 
						placeholder="E-mail" 
						type="email" 
						required
						v-model="email"
						class="p-4 mb-3 mb-xl-0"
					/>
				</b-col>
				<b-col cols="12" md="6" xl="3">
					<b-button type="submit" variant="primary">Заказать консультацию</b-button>
				</b-col>
			</b-form-row>
		</b-form>
	</div>
</template>



<script>
	export default {
		props: [
			'text'
		],
		data: function() {
			return {
				name: '',
				phone: '',
				email: ''
			};
		},
		methods: {
			consultation () {
				carrotquest.track("Заказал консультацию", {
					'Телефон': this.phone,
					'Имя': this.name,
					'Email': this.email,
					'url': location.host + location.pathname
				});
				carrotquest.identify([
					{"op": "update_or_create", "key": "$phone", "value": this.phone},
					{"op": "update_or_create", "key": "$name", "value": this.name},
					{"op": "update_or_create", "key": "$email", "value": this.email}
				]);
				dataLayer.push({ event: 'UAevent', eventCategory: 'leads', eventAction: 'demo', eventLabel: location.host + location.pathname })
				fbq('trackCustom', 'get_demo', {page: location.pathname})
				carrotquest.track("Заполнил форму на демо", {
					'phone': this.phone,
					'email': this.email,
					'type': 'form',
					'url': location.host + location.pathname
				});
				
				this.name = ""
				this.phone = ""
				this.email = ""
			}
		}
	}
</script>



<style lang="scss">
	.ConsultationForm {
		width: 100%;
		.btn {
			width: 100%;
			height: 50px;
		}
	}
</style>