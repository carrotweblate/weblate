<template>
	<div>
		<b-form-input 
			placeholder="Имя*" 
			type="text" 
			required
			v-model="formData.name"
			class="px-3 py-4"
		/>
		<b-form-input 
			placeholder="Телефон*" 
			type="text" 
			pattern="^[^A-zА-я]{5,}"
			required
			v-model="formData.phone"
			class="px-3 py-4 mt-3"
		/>
		<b-form-input 
			placeholder="Email*" 
			type="email" 
			required
			v-model="formData.email"
			class="px-3 py-4 mt-3"
		/>
		<b-form-input 
			placeholder="Должность*" 
			type="text"
			required
			v-model="formData.role"
			class="px-3 py-4 mt-3"
		/>
		<b-form-input 
			placeholder="URL вашего сайта*" 
			type="text"
			pattern=".+\.+.+"
			required
			v-model="formData.site"
			class="px-3 py-4 mt-3"
		/>
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
					// // Тестовое
					// name:   '123',
					// phone:	'3213123',
					// email:  'addonion@gmail.com',
					// site:   'test.ru',
					// role:   'Котик',
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