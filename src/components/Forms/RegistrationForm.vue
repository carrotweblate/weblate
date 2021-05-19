<template>
	<div class="Registration">
		<b-form v-on:submit.prevent="registration" class="d-flex">
				<TakeEmail @newdata="handleData($event)" />
				<b-button type="submit" variant="primary" class="px-4">
					<template v-if="button">
						{{ button }}
					</template>
					<template v-else>
						Начать бесплатно
					</template>
				</b-button>
		</b-form>
		<p v-if="text" class="mt-3">
			{{ text }}
		</p>
	</div>
</template>

<script>
	import TakeEmail 			from '~/components/Forms/TakeEmail.vue'

	export default {
		props: [
			'button',
			'text'
		],
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

<style lang="scss">
	.Registration {
		.TakeMe__group {
			border: 1px solid $grey-text;
		}
	}
</style>