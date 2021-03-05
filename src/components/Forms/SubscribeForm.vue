<template>
	<div>
		<div class="SubscribeForm">
			<b-form v-on:submit.prevent="subscribe">
				<b-input-group>
					<b-form-input 
						placeholder="Почта" 
						type="email" 
						required
						v-model="email"
						class="p-4"
					/>
					<b-input-group-append>
						<b-button type="submit" variant="primary" class="px-4">
							<template v-if="button">
								{{ button }}
							</template>
							<template v-else>
								Подписаться
							</template>
						</b-button>
					</b-input-group-append>
				</b-input-group>
			</b-form>
		</div>
		<b-modal ref="suсcessSubscribe" hide-footer title="Подписка оформлена">
			Проверьте свой email: {{email}}
		</b-modal>
	</div>
</template>

<script>
	export default {
		props: [
			'button',
			'event'
		],
		data: function() {
			return {
				email: ''
			};
		},
		methods: {
			subscribe () {
				carrotquest.identify({
					'$email': this.email
				},{ 
					doubleSubscribe: true
				})
				carrotquest.identify([
					{"op": "update_or_create", "key": "$email", "value": this.email},
					{ doubleSubscribe: true }
				])
				if ( this.event != '' ) {
					carrotquest.track(this.event)
				}

				dataLayer.push({ event: 'UAevent', eventCategory: 'leads', eventAction: 'email', eventLabel: location.host + location.pathname });
				fbq('trackCustom', 'get_lead', {page: location.pathname})

				this.$refs['suсcessSubscribe'].show()
				setTimeout(() => {
					this.$refs['suсcessSubscribe'].hide()
					this.email = ''
				}, 7000);

				
			}
		}
	}
</script>