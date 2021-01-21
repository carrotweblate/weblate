<template>
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
</template>

<script>
	export default {
		props: [
			'button'
		],
		data: function() {
			return {
				email: ''
			};
		},
		methods: {
			subscribe () {
				alert('Подписался' + this.email + '')
				this.email = ""
			}
		}
	}
</script>