<template>
	<Layout :header="true" :footer="true" class="page page-testdrive-result">

		<div class="hero">
			<b-container>
				<b-row class="align-items-center justify-content-center">
					<b-col lg="7" xl="9">
						<div class="h4 text-center mb-3">
							Вот так выглядит ваш сайт <b>{{ this.site }}</b> c чатом Carrot quest. Пообщайтесь с лид-ботом 💬 и узнайте про другие инструменты
						</div>
					</b-col>
					<b-col cols="12" class="text-center">
						<div id="progress"><div class="in"></div></div>
						<div id="fit__site"></div>
						
						<svg class="browser" width="1200" height="743" viewBox="0 0 1200 743" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d)"><path d="M20 42H1180V708C1180 710.761 1177.76 713 1175 713H25C22.2386 713 20 710.761 20 708V42Z" fill="white"/><rect x="62" y="157" width="103" height="12" rx="5" fill="#EEEFF1"/><rect x="62" y="75" width="40" height="39" rx="5" fill="#EEEFF1"/><rect x="258" y="157" width="323" height="154" fill="#FBFBFB"/><rect x="258" y="341" width="323" height="154" fill="#FBFBFB"/><rect x="258" y="525" width="323" height="154" fill="#FBFBFB"/><rect x="611" y="157" width="323" height="154" fill="#FBFBFB"/><rect x="611" y="341" width="323" height="154" fill="#FBFBFB"/><rect x="611" y="525" width="323" height="154" fill="#FBFBFB"/><rect x="966" y="157" width="57" height="54" rx="5" fill="#FBFBFB"/><rect x="966" y="233" width="57" height="54" rx="5" fill="#FBFBFB"/><rect x="966" y="307" width="57" height="54" rx="5" fill="#FBFBFB"/><rect x="62" y="191" width="161" height="5" rx="2.5" fill="#EEEFF1"/><rect x="274" y="235" width="290" height="5" rx="2.5" fill="#EEEFF1"/><rect x="274" y="419" width="290" height="5" rx="2.5" fill="#EEEFF1"/><rect x="274" y="603" width="290" height="5" rx="2.5" fill="#EEEFF1"/><rect x="627" y="235" width="290" height="5" rx="2.5" fill="#EEEFF1"/><rect x="627" y="419" width="290" height="5" rx="2.5" fill="#EEEFF1"/><rect x="627" y="603" width="290" height="5" rx="2.5" fill="#EEEFF1"/><rect x="339" y="176" width="183" height="11" rx="5" fill="#EEEFF1"/><rect x="339" y="360" width="183" height="11" rx="5" fill="#EEEFF1"/><rect x="339" y="544" width="183" height="11" rx="5" fill="#EEEFF1"/><rect x="692" y="176" width="183" height="11" rx="5" fill="#EEEFF1"/><rect x="692" y="360" width="183" height="11" rx="5" fill="#EEEFF1"/><rect x="692" y="544" width="183" height="11" rx="5" fill="#EEEFF1"/><rect x="1036" y="169" width="87" height="11" rx="5" fill="#EEEFF1"/><rect x="1036" y="245" width="87" height="11" rx="5" fill="#EEEFF1"/><rect x="1036" y="319" width="87" height="11" rx="5" fill="#EEEFF1"/><rect x="1036" y="192" width="53" height="11" rx="5" fill="#EEEFF1"/><rect x="1036" y="268" width="53" height="11" rx="5" fill="#EEEFF1"/><rect x="1036" y="342" width="53" height="11" rx="5" fill="#EEEFF1"/><rect x="339" y="200" width="108" height="11" rx="5" fill="#EEEFF1"/><rect x="339" y="384" width="108" height="11" rx="5" fill="#EEEFF1"/><rect x="339" y="568" width="108" height="11" rx="5" fill="#EEEFF1"/><rect x="692" y="200" width="108" height="11" rx="5" fill="#EEEFF1"/><rect x="692" y="384" width="108" height="11" rx="5" fill="#EEEFF1"/><rect x="692" y="568" width="108" height="11" rx="5" fill="#EEEFF1"/><rect x="274" y="253" width="290" height="5" rx="2.5" fill="#EEEFF1"/><rect x="274" y="437" width="290" height="5" rx="2.5" fill="#EEEFF1"/><rect x="274" y="621" width="290" height="5" rx="2.5" fill="#EEEFF1"/><rect x="627" y="253" width="290" height="5" rx="2.5" fill="#EEEFF1"/><rect x="627" y="437" width="290" height="5" rx="2.5" fill="#EEEFF1"/><rect x="627" y="621" width="290" height="5" rx="2.5" fill="#EEEFF1"/><rect x="275" y="270" width="290" height="5" rx="2.5" fill="#EEEFF1"/><rect x="275" y="454" width="290" height="5" rx="2.5" fill="#EEEFF1"/><rect x="275" y="638" width="290" height="5" rx="2.5" fill="#EEEFF1"/><rect x="628" y="270" width="290" height="5" rx="2.5" fill="#EEEFF1"/><rect x="628" y="454" width="290" height="5" rx="2.5" fill="#EEEFF1"/><rect x="628" y="638" width="290" height="5" rx="2.5" fill="#EEEFF1"/><rect x="275" y="287" width="172" height="5" rx="2.5" fill="#EEEFF1"/><rect x="275" y="471" width="172" height="5" rx="2.5" fill="#EEEFF1"/><rect x="275" y="655" width="172" height="5" rx="2.5" fill="#EEEFF1"/><rect x="628" y="287" width="172" height="5" rx="2.5" fill="#EEEFF1"/><rect x="628" y="471" width="172" height="5" rx="2.5" fill="#EEEFF1"/><rect x="628" y="655" width="172" height="5" rx="2.5" fill="#EEEFF1"/><rect x="170" y="92" width="82" height="5" rx="2.5" fill="#EEEFF1"/><rect x="274" y="92" width="82" height="5" rx="2.5" fill="#EEEFF1"/><rect x="378" y="92" width="82" height="5" rx="2.5" fill="#EEEFF1"/><rect x="482" y="92" width="82" height="5" rx="2.5" fill="#EEEFF1"/><rect x="586" y="92" width="82" height="5" rx="2.5" fill="#EEEFF1"/><rect x="690" y="92" width="82" height="5" rx="2.5" fill="#EEEFF1"/><rect x="62" y="237" width="161" height="5" rx="2.5" fill="#EEEFF1"/><rect x="62" y="283" width="161" height="5" rx="2.5" fill="#EEEFF1"/><rect x="62" y="214" width="161" height="5" rx="2.5" fill="#EEEFF1"/><rect x="62" y="260" width="161" height="5" rx="2.5" fill="#EEEFF1"/><rect x="62" y="306" width="161" height="5" rx="2.5" fill="#EEEFF1"/><circle cx="298" cy="194" r="23" fill="#EEEFF1"/><circle cx="298" cy="378" r="23" fill="#EEEFF1"/><circle cx="298" cy="562" r="23" fill="#EEEFF1"/><circle cx="651" cy="194" r="23" fill="#EEEFF1"/><circle cx="651" cy="378" r="23" fill="#EEEFF1"/><circle cx="651" cy="562" r="23" fill="#EEEFF1"/><path d="M20 15C20 12.2386 22.2386 10 25 10H1175C1177.76 10 1180 12.2386 1180 15V42H20V15Z" fill="#E6E6E6"/><path d="M86 23C86 20.2386 88.2386 18 91 18H188C190.761 18 193 20.2386 193 23V42H86V23Z" fill="white"/><circle cx="35" cy="26" r="5" fill="white"/><circle cx="51" cy="26" r="5" fill="white"/><circle cx="67" cy="26" r="5" fill="white"/></g><defs><filter id="filter0_d" x="0" y="0" width="1200" height="743" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="10"/><feGaussianBlur stdDeviation="10"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>

						<b-button href="#Consultation" variant="primary" class="mt-5">
							Записаться на бесплатную демонстрацию
						</b-button>
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
		mounted: function () {
			//Передаём адрес, для открытия страницы
			var search = location.search.substr(1)
				.split('&')
				.reduce(function(res, a) {
					var t = a.split('=');
					res[decodeURIComponent(t[0])] = t.length == 1 ? null : decodeURIComponent(t[1]);
					return res;
				}, {});
			this.site = search.site.replace('http://','').replace('https://','').replace('www.','')

			//Открываем в iFrame
			if (search.site) {
				this.openUrl = search.site
				if (!!this.openUrl.search('http')) {
					if (!this.openUrl.search('http://')) {
						this.openUrl = this.openUrl.replace('http://','https://')
					} else {
						this.openUrl = 'https://' + this.openUrl
					}
				}
				//Открываем сайт в айфрэйм
				console.log(this.openUrl)
				let iframe = document.createElement('iframe') 
				iframe.id = 'fit__site__iframe'
				iframe.src = 'https://www.carrotquest.io/testdrive/frame/?site='  + this.openUrl
				document.getElementById('fit__site').appendChild(iframe)
				carrotquest.track('Тестдрайв - сайт загрузился')
				function onCarrotReady() {
					document.querySelector('.carrotquest-css-reset').style.display = 'none'		//Выключаем лишний бабл
					document.querySelector('iframe').muted = true								//Выключить звук окна, чтоб неслышать автосообщения бота
				};
				carrotquest.onReady(onCarrotReady)
			}
		}
	}	
</script>


<style lang="scss">
	.page-testdrive-result {
		.hero {
			background-color: #F8F8FF;
			min-height: 1000px;
			max-height: auto;
			.h4 {
				font-weight: normal;
				margin-top: 0;
				margin-bottom: 40px;
				b {
					color: #FF7C16;
					font-weight: normal;
				}
			}
			.btn {
				margin: 0 auto;
			}
			#progress {
				position: absolute;
				z-index: 2;
				top: 40%;
				left: 50%;
				width: 400px;
				margin-left: -200px;
				border: 1px solid #FF7C16;
				background-color: #fff;
				border-radius: 5px;
				height: 10px;
				.in {
					animation: fill 10s cubic-bezier(.55,1.09,.7,-0.02);
					height: 100%;
					background-color: #FF7C16;
				}
			}
			@keyframes fill {
				0% {
					width: 0%;
				}
				100% {
					width: 100%;
				}
			}
			.browser {
				position: absolute;
				z-index: 1;
				top: -43px;
				left: 50%;
				margin-left: -600px;
				z-index: 1;
				max-width: initial;
			}
			#fit__site {
				position: relative;
				left: -29px;
				z-index: 2;
				width: 1158px;
				height: 668px;
				border-radius: 0 0 5px 5px;
				iframe {
					width: 100%;
					height: 100%;
					border: none;
					
					img {
						width: 100% !important;
					}
				}
			}
			@media (max-width: 1199.98px) {
				.browser {
					top: -37px;
					margin-left: -500px !important;
					width: 1000px;
				}
				#fit__site {
					margin-top: 68px !important;
					left: -22px !important;
					width: 964px !important;
					height: 558px !important;

					iframe {
						width: 100%;
						height: 100%;
						border: none;
						background: #fff url(https://cdn-www.carrotquest.io/static/img/testdrive/loading.gif)  center no-repeat;	
						
						img {
							width: 100% !important;
						}
					}
				}
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