<template>
	<b-modal content-class="universalModal universalModal--blue" ref="open-modal-download" size="lg" hide-header hide-footer>
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
							<LidsForm @newdata="handleData($event)" :event="event" :before="before" :after="after" :button="button" :sale="sale" />
						</b-col>
					</b-row>
				</b-col>
			</b-row>
		</b-container>
	</b-modal>
</template>


<script>
	import LidsForm 	from '~/components/Forms/LidsForm.vue'
	
	export default {
		components: {
			LidsForm
		},
		data: function() {
			return {
				after: 		'Всё успешно отправлено, <br>проверьте свой email',
				before: 	'',
				button:		'Отправить',
				event: 		'',
				pic: 		'background-image: url(https://ik.imagekit.io/0nyjr4jxhmg//tr:w-400,h-400,cm-pad_resize/components/medium-15.png?ik-sdk-version=vuejs-1.0.9);',
				sale: 		false,
				title:		'Получить материал на email',

				send: 		false
			};
		},
		mounted () {
			// Ищем ссылки для открытия модалок для записи на демо
			if ( document.querySelector('a[href*="#open-modal-download"],a[href*="#open-modal-url"]') ) {
				document.querySelectorAll('a[href*="#open-modal-download"],a[href*="#open-modal-url"]').forEach(function(item) {
					item.addEventListener('click', function(e) {
						e.preventDefault()
						this.$refs['open-modal-download'].show()
						
						let addr = new URL(e.srcElement.href.replace('#open-modal-download' , '').replace('#open-modal-url' , ''))
						// Заголовок
						if (!!addr.searchParams.get('title')) {
							this.title = addr.searchParams.get('title')
						}
						// Событие
						if (!!addr.searchParams.get('cqe')) {
							this.event = addr.searchParams.get('cqe')
						}
						// Отправлять в продажи
						if (!!addr.searchParams.get('sale')) {
							this.sale = true
							this.after = 'Ксения позвонит вам с номера <NOBR>+7 (495) 105-91-69</NOBR>.<br>Если что, мы отвечаем в чате 😉'
							gtag('event' , 			'lead form',
								{'category': 		'phone, bottom of funnel',
								'subject': 			'started fill the form',
								'page_title': 		document.title,
								'page_location': 	location.host + location.pathname
							})
						} else {
							gtag('event' , 			'lead form' ,
								{'category': 		'phone, top of funnel',
								'subject': 			'started fill the form',
								'page_title': 		document.title,
								'page_location': 	location.host + location.pathname
							})
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
							if ( this.pic.indexOf('https') == -1 )
								this.pic = 'background-image: url(https://ik.imagekit.io/0nyjr4jxhmg/tr:w-494/components/' + addr.searchParams.get('pic') + '?ik-sdk-version=vuejs-1.0.9);'
							else {
								this.pic = 'background-image: url(' + addr.searchParams.get('pic') + ';'
							}
						}
					}.bind(this))
				}.bind(this))
			}
		},
		methods: {
			// Закрытие модалки
			hideModal() {
				this.$refs['open-modal-download'].hide()
			},
			// Данные из формы
			handleData: function(e) {
				this.send = e;
			},
		},
		watch: {
			// Что делать после отправки формы
			send:  function () {
				// setTimeout(() => {
				// 	this.hideModal()
				// 	this.send = false
				// }, 7000);
			}
		}
	}
</script>

<style lang="scss">
	.universalModal {
		&--blue {
			background-color: #CAC9FA !important;
		}
		.leftCol {
			min-height: 30rem;
		}
		.h3.hide , form.hide {
			transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
			opacity: 0;
		}
		.afterSend {
			position: absolute;
			top: 0;
			bottom: 3rem;
		}
	}
</style>