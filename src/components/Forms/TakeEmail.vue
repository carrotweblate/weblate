<template>
	<div class="TakeMe TakeMe--email d-flex">
		<b-form-group class="TakeMe__group mr-md-3 flex-grow-1 mb-md-0" label="Email:" label-class="font12px lightgrey-text">
			<b-form-input
				autocomplete="on"
				name="email"
				placeholder="Email*"
				type="text" 
				required
				v-model="formData.email"
				class="px-3 py-4"
			/>
		</b-form-group>
		<b-button type="submit" variant="primary" class="mt-0 px-4" v-html="button" />
	</div>
</template>

<script>
	export default {
		props: {
			button: String,
		},
		data: function() {
			return {
				formData: {
					email:  '',
					// Тестовое
					// email:  'addonion@gmail.com'
				}
			};
		},
		watch: {
			formData: {
				handler: function() {
					this.$emit('newdata', [ this.formData.email ])
				},
				deep: true
			}
		}
	}
</script>

<style lang="scss">
	.TakeMe--email {
		@media (max-width: 767.98px) {
			flex-wrap: wrap;
			.TakeMe--email {
				width: 100%;
			}
		}
	}
</style>