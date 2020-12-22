<template>
	<div class="ConsultationForm">
		<b-form v-on:submit.prevent="consultation">
			<b-form-row>
				<b-col cols="12" md="6">
					<b-form-input 
						placeholder="Телефон" 
						type="text" 
						required
						v-model="phone"
						class="p-4 mb-3 mb-xl-0"
					/>
				</b-col>
				<b-col cols="12" md="6">
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
				phone: '',
			};
		},
		methods: {
			consultation () {
				carrotquest.track("Заказал консультацию", {
					'Телефон': this.phone,
					'url': location.host + location.pathname
				});
				carrotquest.identify([
					{"op": "update_or_create", "key": "$phone", "value": this.phone}
				]);

				dataLayer.push({ event: 'UAevent', eventCategory: 'leads', eventAction: 'phone', eventLabel: location.host + location.pathname })
				fbq('trackCustom', 'get_demo', {page: location.pathname})

				carrotquest.track("Заполнил форму на демо", {
					'phone': this.phone,
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