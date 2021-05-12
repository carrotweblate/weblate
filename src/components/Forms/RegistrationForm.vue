<template>
	<div class="Registration">
		<b-form v-on:submit.prevent="registration">
			<b-input-group>
				<b-form-input 
					placeholder="Почта" 
					type="email" 
					required
					v-model="email"
					class="px-3 py-4"
				/>
				<b-input-group-append>
					<b-button type="submit" variant="primary" class="px-4">
						<template v-if="button">
							{{ button }}
						</template>
						<template v-else>
							Начать бесплатно
						</template>
					</b-button>
				</b-input-group-append>
			</b-input-group>
		</b-form>
		<p v-if="text" class="mt-3">
			{{ text }}
		</p>
	</div>
</template>

<script>
	export default {
		props: [
			'button',
			'text'
		],
		data: function() {
			return {
				email: ''
			};
		},
		methods: {
			registration () {
				window.open("https://carrotquest.io/panel/register/?email=" + this.email);
				this.email = ""
			}
		}
	}
</script>