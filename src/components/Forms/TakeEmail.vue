<template>
	<div class="TakeMe TakeMe--email mr-3">
		<b-form-group class="TakeMe__group mb-lg-0" label="Email:" label-class="font12px lightgrey-text">
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
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				formData: {
					email:  '',
					// Тестовое
					email:  'addonion@gmail.com'
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
		flex-grow: 1;
	}
</style>