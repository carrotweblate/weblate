<template>
	<Layout :header="true" :footer="true" class="page page-testdrive">

		<div class="hero">
			<b-container>
				<b-row class="align-items-center justify-content-center">
					<b-col class="text-lg-center">
						<h1>
							Примерьте Carrot quest на своем сайте
						</h1>
						<p class="my-4">
							Примерьте чат, лид-бота и поп-апы. <b>Carrot quest на вашем сайте без установки кода</b>
						</p>
						<b-form v-on:submit.prevent="fit">
							<b-input-group>
								<b-form-input 
									placeholder="Введите адрес вашего сайта" 
									type="text" 
									required
									v-model="site"
									class="p-4"
								/>
								<b-input-group-append>
									<b-button type="submit" variant="primary" class="px-4">
										Примерить
									</b-button>
								</b-input-group-append>
							</b-input-group>
						</b-form>
					</b-col>
					<b-col cols="12" class="more">
						<b-row class="row">
							<b-col lg="7">
								<video autoplay="autoplay" loop="loop" muted="muted" playsinline="" class="embed-responsive-item mw-100">
									<source src="/assets/video/components/13.webm" type="video/webm">
									<source src="/assets/video/components/13.mp4" type="video/mp4">
								</video>
							</b-col>
							<b-col lg="5" class="mt-3 mt-lg-0 mt-xl-5">
								<p class="h4">
									Carrot quest помогает увеличивать продажи на сайте без привлечения нового трафика и обеспечивать лучшую поддержку пользователей
								</p>
								<div id="fit__silent"></div>
							</b-col>
						</b-row>
					</b-col>
				</b-row>
				
			</b-container>
		</div>

		<Logos />

		<!-- Готовые решения -->
		<section class="ready">
			<b-container>
				<b-row>
					<b-col lg="9" xl="7">
						<div class="h1">Готовые решения для разных типов бизнеса</div>
					</b-col>
				</b-row>
				<b-row>
					<b-col lg="4" class="mb-5 mb-lg-0">
						<div class="box h-100">
							<g-image src="@/assets/images/components/small-15.png" fit="contain" background="transparent" height="222" alt="Для интернет магазинов" class="mb-4" />
							<div class="h5 mb-3">Для интернет-магазинов</div>
							<ul>
								<li>Увеличение количества лидов на&nbsp;том&nbsp;же трафике</li>
								<li>Борьба с&nbsp;брошенными корзинами</li>
								<li>Возвращение уходящих пользователей</li>
								<li>Увеличение повторных продаж</li>
							</ul>
							<b-button href="/ecommerce/" variant="primary">Подробнее</b-button>
						</div>
					</b-col>
					<b-col lg="4" class="mb-5 mb-lg-0">
						<div class="box h-100">
							<g-image src="@/assets/images/components/small-24.png" fit="contain" background="transparent" height="222" alt="Для интернет сервисов (SaaS)" class="mb-4" />
							<div class="h5 mb-3">Для онлайн-сервисов (SaaS)</div>
							<ul>
								<li>Увеличение количества лидов на&nbsp;том&nbsp;же трафике сайта</li>
								<li>Организация поддержки пользователей</li>
								<li>Вовлечение и&nbsp;удержание пользователей в&nbsp;продукте</li>
								<li>Аналитика поведения пользователей в&nbsp;продукте и&nbsp;использования фичей</li>
							</ul>
							<b-button href="/saas/" variant="primary">Подробнее</b-button>
						</div>
					</b-col>
					<b-col lg="4">
						<div class="box h-100">
							<g-image src="@/assets/images/components/small-25.png" fit="contain" background="transparent" height="222" alt="Для крупных компаний" class="mb-4" />
							<div class="h5 mb-3">Для крупных компаний</div>
							<ul>
								<li>Весь сервис без ограничений</li>
								<li>Подключим нашего эксперта</li>
								<li>Поделимся экспертизой по&nbsp;автоматизации маркетинга и&nbsp;построению процесса тестирования гипотез</li>
								<li>Запустим гипотезы на&nbsp;увеличение конверсии на&nbsp;вашем сайте (на&nbsp;сбор лидов, на&nbsp;удержание клиентов, на&nbsp;возвращение клиентов)</li>
							</ul>
							<b-button href="/introduction-carrotquest/" variant="primary">Подробнее</b-button>
						</div>
					</b-col>
				</b-row>
			</b-container>
		</section>

		<Consultation 
			title="Запишитесь на бесплатную демонстрацию сервиса" 
			text="Мы познакомимся, определим ваши задачи, за 30 минут обучим продукту и&nbsp;🎁&nbsp;бесплатно настроим базовый сценарий сбора лидов на вашем сайте"
			pic="medium-2.png"
			alt="Девочка, живущая в сети"
			bg="#fff3e6"
		/>

	</Layout>
</template>

<script>
	import Logos 				from '~/components/Logos.vue'
	import Consultation 		from '~/components/Consultation.vue'

	export default {
		components: {
			Logos,
			Consultation,
		},
		data() {
			return {
				//Делаем в HEAD
				metaTitle: 'Примерка чата Carrot quest на своем сайте без строчки кода',
				metaDescription: 'Посмотрите как будут выглядеть и работать инструменты Carrot quest на вашем сайте',
				metaCanonical: 'https://www.carrotquest.io/testdrive/',
				metaImage: 'https://www.carrotquest.io/assets/images/cover/testdrive.png',
				
				//Тестдрайв
				site: '',
				openUrl: '',
			}
		},
		methods: {
			fit: function (event) {
				//Какой сайт запросил
				carrotquest.track('Тестдрайв - ввёл адрес сайта', {
					'URL': this.site
				})				
				carrotquest.identify([
					{op: 'update_or_create', key: 'Сайт', value: this.site }]
				)
				if (!!this.site.search('http')) {
					if (!this.site.search('http://')) {
						this.openUrl = this.site.replace('http://','https://')
					} else {
						this.openUrl = 'https://' + this.site
					}
				}
				this.openUrl = 'https://api.apiflash.com/v1/urltoimage?access_key=f883a85678514489bf673efe63f814fe&format=jpeg&full_page=true&width=1200&quality=80&url=' + this.site
				let iframe = document.createElement('iframe') 
				iframe.id = 'fit__site__iframe'
				iframe.src = this.openUrl
				iframe.style.width = '10px'
				iframe.style.height = '10px'
				iframe.style.opacity = '0'
				document.getElementById('fit__silent').appendChild(iframe)
				console.log(this.openUrl)
				this.site = ''
			}
		},
		created: function () {
			//Редирект для мобильника на Онлайн-консультант
			if (typeof window !== 'undefined') {
				if (window.innerWidth < 992) {
					document.location = "/online-consultant/";
				} else {
					carrotquest.track('Тестдрайв - зашёл')
				}
			}
		}
	}	
</script>


<style lang="scss">
	.page-testdrive {
		.hero {
			background-color: #F8F8FF;
			height: 80vh;
			min-height: 800px;
			form .input-group {
				margin: 0 auto;
			}
		}

		.ready {
			.box {
				background: #FFFFFF;
				box-shadow: 0 5px 10px rgba(0,0,0,.1);
				border-radius: 5px;
				padding: 1.5rem 1.25rem;
			}
			img {
				display: block;
				margin: -5rem auto 0;
				width: auto;
				height: 111px;
			}
			.h1 {
				margin-bottom: 5rem;
			}
			ul {
				padding: 0;
				margin-bottom: 3.5rem;
				li {
					margin: 0;
					margin-bottom: 8px;
					padding-left: 1.5rem !important;
					position: relative;
					list-style: none;
				}
				li::before {
					content: url("data:image/svg+xml,%3Csvg width='16' height='2' viewBox='0 0 16 2' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.640625 1.30469V0.117188H15.3594V1.30469H0.640625Z' fill='%23FF7C16'/%3E%3C/svg%3E%0A") !important;
					top: -4px !important;
					left: 0;
					position: absolute;
				}
			}
			.btn {
				position: absolute;
				bottom: 20px;
			}
		}
	}
</style>