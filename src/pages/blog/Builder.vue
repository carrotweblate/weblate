<template>
	<Layout :header="true" :footer="true"  class="page blog-index">

		<b-container>
			<b-row>
				<b-col>
					<h1 class="my-5">
						Конструктор модалки
					</h1>
				</b-col>
			</b-row>
			<b-row>
				<b-col cols="6">
					<form v-on:submit.prevent="build" >
						<b-form-select :options="type" v-model="href" class="mb-4"></b-form-select>

						<label :for="title">Заголовок модалки:</label>
						<b-form-input id="title" v-model="title" placeholder="" class="mb-4"></b-form-input>

						<template v-if="href != '#open-modal-consultation'">
							<label :for="cqe">Событие лидформы:</label>
							<b-form-input id="cqe" v-model="cqe" placeholder="" class="mb-4"></b-form-input>
						</template>

						<b-button type="submit" variant="primary" class="px-3 py-2 mt-4 w-100">
							Сделать ссылку
						</b-button>
					</form>					
				</b-col>
				<b-col v-if="finalHref != ''" cols="6">
					<form v-on:submit.prevent="copy" >
						<b-form-input id="finalHref" v-model="finalHref" />
						<b-button type="submit" variant="primary" class="px-3 py-2 mt-4 w-100">
							Скопировать ссылку
						</b-button>
					</form>
				</b-col>	
			</b-row>
		</b-container>

	</Layout>
</template>

<script>
	import { BFormSelect } from 'bootstrap-vue'

	export default {
		components: {
			BFormSelect
		},
		data() {
			return {
				type: [
					{ value: '#open-modal-consultation' , text: 'Запись на консультацию (демо)' , selected : 'selected' },
					{ value: '#open-modal-mini' , text: 'Лид-форма малая (Email)' },
					{ value: '#open-modal-download' , text: 'Лид-форма большая (5 полей)' },
				],
				title: '',
				cqe: '',
				after: '',
				before: '',
				pic: '',
				button: '',
				sale: false,

				href: '#open-modal-consultation',
				finalHref: ''
			}
		},
		methods: {
			build() {
				this.finalHref = this.href

				if (this.title != '') {
					this.finalHref = this.href + '?title=' + this.title
				}
			},
			copy() {
				let copyHref = document.querySelector('#finalHref')
				copyHref.select()
				document.execCommand('copy')
			}
		}
	}	
</script>