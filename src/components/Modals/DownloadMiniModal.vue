<template>
	<b-modal content-class="universalModal universalModal--mini universalModal--blue" ref="open-modal-download-mini" size="lg" hide-header hide-footer>
		<!-- Кнопка закрытия модалки -->
		<b-button @click="hideModal" class="universalModal__close font12px">
			<span>Закрыть</span>
		</b-button>
		<b-container>
			<b-row>
				<b-col lg="6" class="leftCol d-none d-lg-block" :style="pic" />
				<b-col lg="6" class="rightCol">
					<b-row class="h-100 align-items-center">
						<b-col>
							<!-- Заголовок модалки -->
							<div class="h3 mb-4" v-html="title" :class="{ 'd-none' : this.send }" />

							<!-- Форма для сбора данных -->
							<LidsMiniForm @newdata="handleData($event)" :event="event" :before="before" :after="after" :button="button" />

						</b-col>
					</b-row>
				</b-col>
			</b-row>
		</b-container>
	</b-modal>
</template>


<script>
	import LidsMiniForm 	from '~/components/Forms/LidsMiniForm.vue'
	
	export default {
		components: {
			LidsMiniForm
		},
		data: function() {
			return {
				title:		'Получить материал на email',
				before: 	'',
				after: 		'Спасибо. Всё успешно отправлено, проверьте свой email',
				button:		'Отправить',
				event: 		'',
				pic: 		'background-image: url(https://ik.imagekit.io/0nyjr4jxhmg//tr:w-300,h-300,cm-pad_resize/components/medium-10.png?ik-sdk-version=vuejs-1.0.9);',
				send: 		false
			};
		},
		mounted () {
			// Ищем ссылки для открытия модалок для записи на демо
			if ( document.querySelector('a[href*="#open-modal-mini"]') ) {
				document.querySelectorAll('a[href*="#open-modal-mini"]').forEach(function(item) {
					item.addEventListener('click', function(e) {
						e.preventDefault()
						this.$refs['open-modal-download-mini'].show()
						
						let addr = new URL(e.srcElement.href.replace('#open-modal-mini' , ''))
						// Заголовок
						if (!!addr.searchParams.get('title')) {
							this.title = addr.searchParams.get('title')
						}
						// Событие
						if (!!addr.searchParams.get('cqe')) {
							this.event = addr.searchParams.get('cqe')
						}
						// Текст перед отправкой
						if (!!addr.searchParams.get('before')) {
							this.before = addr.searchParams.get('before')
						}
						// Текст после отправки
						if (!!addr.searchParams.get('after')) {
							this.after = addr.searchParams.get('after')
						}
						// Текст кнопки
						if (!!addr.searchParams.get('button')) {
							this.button = addr.searchParams.get('button')
						}
						// Изображения
						if (!!addr.searchParams.get('pic')) {
							this.pic = 'background-image: url(https://ik.imagekit.io/0nyjr4jxhmg/tr:w-494/components/' + addr.searchParams.get('pic') + '?ik-sdk-version=vuejs-1.0.9);'
						}

						gtag('event' , 			'lead form' ,
							{'category': 		'email, top of funnel',
							'subject': 			'started fill the form',
							'page_title': 		document.title,
							'page_location': 	location.host + location.pathname
						})
					}.bind(this))
				}.bind(this))
			}
		},
		methods: {
			// Закрытие модалки
			hideModal() {
				this.$refs['open-modal-download-mini'].hide()
			},
			// Данные из формы
			handleData: function(e) {
				this.send = e;
			},
		},
		watch: {
			// Что делать после отправки формы
			send:  function () {
				setTimeout(() => {
					this.hideModal()
					this.send = false
				}, 7000);
			}
		}
	}
</script>

<style lang="scss">
	.universalModal--mini {
		.TakeMe--email {
			flex-wrap: wrap;
			.TakeMe__group {
				width: 100%;
				margin-right: 0 !important;
				margin-bottom: 1rem !important;
			}
			.btn {
				width: 100%;
				height: 50px;
			}
		}
	}
</style>