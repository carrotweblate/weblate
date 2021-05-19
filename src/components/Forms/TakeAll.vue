<template>
	<div class="TakeMe">
		<b-form-group class="TakeMe__group" label="Имя:" label-class="font12px lightgrey-text">
			<b-form-input
				autofocus
				autocomplete="on"
				name="name"
				placeholder="Имя*"
				type="text" 
				required
				v-model="formData.name"
				class="px-3 py-4"
			/>
		</b-form-group>
		<b-form-group class="TakeMe__group" label="Телефон:" label-class="font12px lightgrey-text">
			<b-form-input
				autocomplete="on"
				name="phone"
				placeholder="Телефон*"
				type="text" 
				required
				v-model="formData.phone"
				class="px-3 py-4"
			/>
		</b-form-group>
		<b-form-group class="TakeMe__group" label="Email:" label-class="font12px lightgrey-text">
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
		<b-form-group class="TakeMe__group" label="Должность:" label-class="font12px lightgrey-text">
			<b-form-input
				autocomplete="on"
				name="role"
				placeholder="Должность*"
				type="text" 
				required
				v-model="formData.role"
				class="px-3 py-4"
			/>
		</b-form-group>
		<b-form-group class="TakeMe__group mb-0" label="URL вашего сайта:" label-class="font12px lightgrey-text">
			<b-form-input
				autocomplete="on"
				name="site"
				placeholder="URL вашего сайта*"
				type="text" 
				required
				v-model="formData.site"
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
					name:   '',
					phone:	'',
					email:  '',
					site:   '',
					role:   '',
					// Тестовое
					name:   'Николай',
					phone:	'+79223502719',
					email:  'addonion@gmail.com',
					site:   'test.ru',
					role:   'Котик',
				}
			};
		},
		watch: {
			formData: {
				handler: function() {
					this.$emit('newdata', [ this.formData.name, this.formData.phone, this.formData.email, this.formData.role, this.formData.site ])
				},
				deep: true
			}
		}
	}
</script>

<style lang="scss">
	.TakeMe {
		&__group {
			position: relative;
			border-radius: 5px;
			background-color: #FFF;
			legend {
				position: absolute;
				z-index: 1;
				top: 0.4rem;
				left: 1rem;
			}
			input {
				position: relative;
				z-index: 2;
				background-color: #fff;
				border: none;
				transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
				&:focus {
					background-color: transparent;
					padding-top: 1.9rem !important;
					padding-bottom: 1.1rem !important;
					box-shadow: none !important;
					font-size: 0.875rem;
					line-height: 1.4rem;
					&::placeholder {
  						color: #fff;
					}
				}
			}
		}
	}
</style>