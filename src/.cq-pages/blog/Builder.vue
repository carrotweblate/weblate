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
							<label :for="cqe">Событие лидформы (если пусто, то просто подписка):</label>
							<b-form-input id="cqe" v-model="cqe" placeholder="" class="mb-4"></b-form-input>
						</template>

						<label :for="before">Текст перед формой:</label>
						<b-form-input id="before" v-model="before" placeholder="" class="mb-4"></b-form-input>

						<template v-if="href != '#open-modal-consultation'">
							<label :for="after">Текст после отправки:</label>
							<b-form-input id="after" v-model="after" placeholder="" class="mb-4"></b-form-input>
						</template>

						<label :for="pic">Изображение (до 500×500 пикселей):</label>
						<b-form-input id="pic" v-model="pic" placeholder="" class="mb-4"></b-form-input>

						<label :for="button">Текст кнопки:</label>
						<b-form-input id="button" v-model="button" placeholder="" class="mb-4"></b-form-input>

						<template v-if="href != '#open-modal-consultation' && href != '#open-modal-mini' ">
							<b-form-checkbox
								id="sale"
								v-model="sale"
								value="true"
								>
								Отправлять в продажи
							</b-form-checkbox>
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
	import { BFormSelect , BFormCheckbox } from 'bootstrap-vue'

	export default {
		components: {
			BFormSelect , BFormCheckbox
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
					this.finalHref = this.finalHref + '?title=' + this.title
				}

				if (this.cqe != '') {
					this.finalHref = this.finalHref + '?cqe=' + this.cqe
				}

				if (this.before != '') {
					this.finalHref = this.finalHref + '?before=' + this.before
				}

				if (this.after != '') {
					this.finalHref = this.finalHref + '?after=' + this.after
				}

				if (this.pic != '') {
					this.finalHref = this.finalHref + '?pic=' + this.pic
				}

				if (this.button != '') {
					this.finalHref = this.finalHref + '?button=' + this.button
				}

				if (this.sale != '') {
					this.finalHref = this.finalHref + '?sale=true'
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