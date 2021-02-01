<template>
	<Layout class="page page-pop-up">

		<section class="hero">
			<b-container>
				<b-row class="align-items-center justify-content-center">
					<b-col lg="9" class="text-lg-center"> 
						<h1>
							Больше лидов и продаж с помощью поп‑ап окон c гиперсегментацией
						</h1>
						<p class="py-3">
							Легко запускайте поп‑ап окна на&nbsp;вашем сайте, на&nbsp;основе поведения пользователей. Собирайте лиды, сегментируйте их&nbsp;для дальнейших коммуникаций
						</p>
						<b-button href="/panel/register/" variant="primary">Начать бесплатно</b-button>
					</b-col>
				</b-row>
			</b-container>
		</section>

		<section class="pop_ups_accordeon">
			<b-container>
				<b-row>
					<div class="left_col col-12 col-lg-8">
						<g-image id="pop--1" class="left_col__pop active" src="@/assets/images/pop-up/1.png" alt="Pop up 1" @click="next_pop" data-pop="1" />
						<g-image id="pop--2" class="left_col__pop" src="@/assets/images/pop-up/2.png" alt="Pop up 2" @click="next_pop" data-pop="2" />
						<g-image id="pop--3" class="left_col__pop" src="@/assets/images/pop-up/3.png" alt="Pop up 3" @click="next_pop" data-pop="3" />
						<g-image id="pop--4" class="left_col__pop" src="@/assets/images/pop-up/4.png" alt="Pop up 4" @click="next_pop" data-pop="4" />
						<g-image id="pop--5" class="left_col__pop" src="@/assets/images/pop-up/5.png" alt="Pop up 5" @click="next_pop" data-pop="5" />
						<g-image id="pop--6" class="left_col__pop" src="@/assets/images/pop-up/6.png" alt="Pop up 6" @click="next_pop" data-pop="6" />
						<g-image id="pop--7" class="left_col__pop" src="@/assets/images/pop-up/7.png" alt="Pop up 7" @click="next_pop" data-pop="7" />
						<g-image id="pop--8" class="left_col__pop" src="@/assets/images/pop-up/8.png" alt="Pop up 8" @click="next_pop" data-pop="8" />
						<g-image id="pop--9" class="left_col__pop" src="@/assets/images/pop-up/9.png" alt="Pop up 9" @click="next_pop" data-pop="9" />
						<g-image id="pop--10" class="left_col__pop" src="@/assets/images/pop-up/10.png" alt="Pop up 10" @click="next_pop" data-pop="10" />
						<g-image id="pop--11" class="left_col__pop" src="@/assets/images/pop-up/11.png" alt="Pop up 11" @click="next_pop" data-pop="11" />
						<g-image id="pop--12" class="left_col__pop" src="@/assets/images/pop-up/12.png" alt="Pop up 12" @click="next_pop" data-pop="12" />
						<g-image id="pop--13" class="left_col__pop" src="@/assets/images/pop-up/13.png" alt="Pop up 13" @click="next_pop" data-pop="13" />
						<g-image id="pop--14" class="left_col__pop" src="@/assets/images/pop-up/14.png" alt="Pop up 14" @click="next_pop" data-pop="14" />
						<g-image id="pop--15" class="left_col__pop" src="@/assets/images/pop-up/15.png" alt="Pop up 15" @click="next_pop" data-pop="15" />
						<g-image id="pop--16" class="left_col__pop" src="@/assets/images/pop-up/16.png" alt="Pop up 16" @click="next_pop" data-pop="16" />
						<a v-b-modal.popupVideo>
							<g-image class="left_col__watch" src="@/assets/images/pop-up/hero_watch.svg" alt="Смотреть видео" />
						</a>
						<b-modal id="popupVideo" size="xl" hide-header hide-footer>
							<b-embed type="video" aspect="16by9" autoplay loop muted playsinline>
								<source src="/assets/video/pop-up/edit.webm" type="video/webm">
								<source src="/assets/video/pop-up/edit.mp4" type="video/mp4">
							</b-embed>
						</b-modal>
						<g-image class="left_col__bg" src="@/assets/images/pop-up/hero_browser_bg.png" alt="Фон, браузер" />
					</div>
					<b-col lg="4" class="right_col d-none d-lg-block">
						<div class="accordion-item">
							<h3 class="accordion-item-head active" @click="accordion">
								Сбор лидов
							</h3>
							<div class="accordion-item-body">
								<ul>
									<li><a data-show="1" @click="change_pop" class="active">Для сбора обратной связи</a></li>
									<li><a data-show="2" @click="change_pop">Со скидкой на получение лида с квалификацией</a></li>
									<li><a data-show="3" @click="change_pop">На сбор контактов с определением геолокации</a></li>
									<li><a data-show="4" @click="change_pop">Для лидогенерации со сбором предпочтений пользователя</a></li>
								</ul>
							</div>
						</div>
						<div class="accordion-item">
							<h3 class="accordion-item-head" @click="accordion">
								Квалификация лидов
							</h3>
							<div class="accordion-item-body">
								<ul>
									<li><a data-show="6" @click="change_pop">Со скидкой на получение лида с квалификацией</a></li>
									<li><a data-show="7" @click="change_pop">Со скидкой или промокодом</a></li>
									<li><a data-show="8" @click="change_pop">С квалификацией пользователя по потребностям или интересам</a></li>
								</ul>
							</div>
						</div>
			
						<div class="accordion-item">
							<h3 class="accordion-item-head" @click="accordion">
								Увеличение конверсии
							</h3>
							<div class="accordion-item-body">
								<ul>
									<li><a data-show="9" @click="change_pop">С квизом для увеличения вовлеченности</a></li>
									<li><a data-show="10" @click="change_pop">На увеличение среднего чека</a></li>
									<li><a data-show="11" @click="change_pop">Для увеличения конверсии в регистрацию</a></li>
								</ul>
							</div>
						</div>
						<div class="accordion-item">
							<h3 class="accordion-item-head" @click="accordion">
								Активация и удержание пользователей
							</h3>
							<div class="accordion-item-body">
								<ul>
									<li><a data-show="12" @click="change_pop">Для напоминания о сроке оплаты</a></li>
									<li><a data-show="13" @click="change_pop">Для обучающей серии в продукте</a></li>
									<li><a data-show="14" @click="change_pop">Мотивирующий на общение и консультацию</a></li>
									<li><a data-show="15" @click="change_pop">На увеличение подписчиков в соц-сетях</a></li>
									<li><a data-show="16" @click="change_pop">Для вовлечения и обучения пользователя с помощью контента</a></li>
								</ul>
							</div>
						</div>
					</b-col>
				</b-row>
			</b-container>
		</section>

		<section class="tasks">
			<b-container>
				<b-row class="align-items-center justify-content-center tasks__about">
					<b-col lg="8" xl="5" class="text-center">
						<div class="h1 mb-4">
							Какие задачи решают <span>pop-up окна</span>
						</div>
						<p>
							Используйте конструктор pop-up окон, чтобы создать любое pop-up окно. Вам не нужно писать код - все можно сделать в сервисе
						</p>
					</b-col>
				</b-row>
				<b-row>
					<div class="d-none d-md-block pop--1">
						<g-image src="@/assets/images/pop-up/1.png" alt="Pop-up 1" />
					</div>
					<div class="d-none d-xl-block pop--5">
						<g-image src="@/assets/images/pop-up/5.png" alt="Pop-up 5" />
					</div>
					<div class="d-none d-md-block pop--14">
						<g-image src="@/assets/images/pop-up/14.png" alt="Pop-up 14" />
					</div>
					<div class="d-none d-lg-block pop--4">
						<g-image src="@/assets/images/pop-up/4.png" alt="Pop-up 4" />
					</div>
					<div class="d-none d-md-block pop--7">
						<g-image src="@/assets/images/pop-up/7.png" alt="Pop-up 7" />
					</div>
					<div class="d-none d-md-block pop--11">
						<g-image src="@/assets/images/pop-up/11.png" alt="Pop-up 11" />
					</div>
					<div class="d-none d-xl-block pop--8">
						<g-image src="@/assets/images/pop-up/8.png" alt="Pop-up 8" />
					</div>
				</b-row>
			</b-container>
		</section>

		<section class="analitics">  
			<b-container>
				<b-row>
					<b-col lg="8" class="order-2 order-lg-1">
						<g-image src="@/assets/images/components/32.png" quality="100" class="mw-100" alt="Анализируйте результат" />
					</b-col>
					<b-col lg="4" class="order-lg-2 order-1 text">
						<p class="h1 mb-4">
							Анализируйте результат
						</p>
						<ul>
							<li>Сколько посетителей увидели поп-ап</li>
							<li>Сколько ответили на него</li>
							<li>Сколько совершили целевое действие</li>
							<li>Сколько денег принес поп-ап</li>
							<li>Как его результативность отображается в воронке продаж</li>
						</ul>
					</b-col>
				</b-row>
			</b-container>
		</section>

		<section class="ab_tests">
			<b-container>
				<b-row>
					<b-col lg="4" class="mb-4">
						<p class="h1 mb-4">
							Запускайте А/Б тесты
						</p>
						<p>
							Кроме тестов самих сообщений сравнивайте между собой разные каналы (типы сообщений). 
							Что эффективнее? Например, сравните письмо со всплывающим окном или сообщением в чат
						</p>
					</b-col>
					<b-col lg="8">
						<g-image src="@/assets/images/components/31.png" quality="100" class="mw-100" alt="Запускайте А/Б тесты" />
					</b-col>
				</b-row>
			</b-container>
		</section>

		<Integrations />

		<Consultation 
			title="Запишитесь на бесплатную демонстрацию сервиса" 
			text="Мы познакомимся, определим ваши задачи, за 30 минут обучим продукту и&nbsp;🎁&nbsp;бесплатно настроим базовый сценарий сбора лидов на вашем сайте"
			pic="medium-2.png"
			alt="Девочка, живущая в сети"
			bg="#F3F3FF"
		/>

		<Cases />

		<Logos />

		<Study />

	</Layout>
</template>

<script>
	import Integrations 		from '~/components/Integrations.vue'
	import Consultation 		from '~/components/Consultation.vue'
	import Cases 				from '~/components/Cases/Cases.vue'
	import Logos 				from '~/components/Logos.vue'
	import Study 				from '~/components/Study.vue'

	export default {
		components: {
			Integrations,
			Consultation,
			Cases,
			Logos,
			Study
		},
		//Делаем в HEAD
		metaInfo() {
			return {
				title: 'Поп-ап окна: эффективный инструмент коммуникации с пользователями',
				meta: [
					{
						key: 'description',
						name: 'description',
						content: 'Получайте больше лидов и заявок с помощью триггерных всплывающих окон. Используйте pop up окна для сбора лидов, коммуникации с пользователями и оповещений о акциях'
					},
					{
						property: "og:image",
						content: 'https://www.carrotquest.io/assets/images/cover/pop-up.png'
					},
				],
				link: [
					{
						rel: 'canonical',
						href: 'https://www.carrotquest.io/pop-up/'
					}
				]
			}
		},
		data() {
    		return {
				isActive: false
			}
		},
		methods: {
            disableHrefs: function() {
                var hrefs = document.querySelectorAll('.accordion-item a')
                for (var i = 0; i < hrefs.length; i++) {
                    hrefs[i].classList.remove('active')
                }
                var pics = document.querySelectorAll('.left_col__pop')
                for (var i = 0; i < pics.length; i++) {
                    pics[i].classList.remove('active')
                }
            },
            accordion: function(element) {
                var matches = document.querySelectorAll('.accordion-item-head')
                for (var i = 0; i < matches.length; i++) {
                    matches[i].classList.remove('active')
                }
                this.disableHrefs()
                element.target.classList.toggle('active')
                element.target.parentElement.querySelector('a').classList.toggle('active')
                var pic = '#pop--' + element.target.parentElement.querySelector('a').dataset.show
                document.querySelector('' + pic + '').classList.toggle('active')
            },
            change_pop: function(href) {
                this.disableHrefs()
                href.target.classList.toggle('active')
                var pic = '#pop--' + href.target.dataset.show
                document.querySelector('' + pic + '').classList.toggle('active')
            },
            next_pop: function(pop) {
				const mq = window.matchMedia( "(min-width: 991.98px)" );
                if (!mq.matches) {
                    this.disableHrefs()
                    var thisPop = pop.target.dataset.pop
                    var pics = document.querySelectorAll('.left_col__pop')
                    if (thisPop == pics.length) {
                        thisPop = 0
                    }
                    for (var i = 0; i < pics.length; i++) {
                        pics[thisPop].classList.add('active')
                    }
                }
            },

        }
	}	
</script>


<style lang="scss">
	.page-pop-up {
		background: url('../assets/images/pop-up/hero_bg.svg') 50% -50px no-repeat;
		.pop_ups_accordeon {
			margin-top: -15rem;
			.left_col__bg {
				position: relative;
				z-index: 1;
				max-width: 100%;
				top: -5px;
			}
			.left_col__watch {
				position: absolute;
				top: 400px;
				left: 65px;
				z-index: 2;
			}
			.left_col__pop {
				position: absolute;
				top: 90px;
				right: 45px;
				z-index: 3;
				opacity: 0;
				transition-property: all;
				transition-duration: .3s;
			}
			.left_col__pop.active {
				z-index: 4;
				display: block;
				opacity: 1;
				@media (max-width: 991.98px) {
					cursor: pointer;
				}
			}
			.right_col__accordions {
				padding-left: 40px;
			}
			.accordion-item {
				background: #fff;
				border-radius: 5px;
				margin-bottom: 8px;
				box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
			}
			.accordion-item-head {
				margin: 0;
				padding: 16px;
				cursor: pointer;
				text-transform: uppercase;
				color: #808080;
				font-family: 'Open Sans', Arial,sans-serif;
				font-size: 14px;
				font-weight: normal;
			}
			.accordion-item-body {
				overflow: hidden;
				max-height: 0;
				transition-property: all;
				transition-duration: .3s;
				padding: 0 16px;
				ul li:before, ul li:after {
					display: none;
				}
				a {
					text-decoration: none !important;
					font-size: 14px;
				}
			}
			.accordion-item-head.active+.accordion-item-body {
				max-height: 300px;
				padding: 0 16px 20px;
			}
			.accordion-item-body ul,
			.accordion-item-body li {
				list-style: none;
				margin: 0;
				padding: 0;
			}
			.accordion-item-body li {
				margin-bottom: 12px;
			}
			.accordion-item-body li:last-child {
				margin-bottom: 0;
			}
			.accordion-item-body a {
				text-decoration: underline;
				color: #000 !important;
				cursor: pointer;
			}
			.accordion-item-body a.active {
				color: #FF8246 !important;
			}
			@media (max-width: 1199.98px) {
				margin-top: -8rem;
				.left_col__watch {
					width: 240px;
					left: 50px;
					top: 340px;
				}
				.left_col__pop {
					max-width: 50%;
					top: 60px;
				}
			}
			@media (max-width: 991.98px) {
				.left_col__watch {
					width: 240px;
					top: inherit;
					bottom: 40px;
					left: 50px;
				}
				.left_col__pop {
					max-width: 50%;
				}
			}
			@media (max-width: 767.98px) {
				background-position: bottom;
			}
			@media (max-width: 575.98px) {
				margin-top: 0;
				.about, .left_col {
					margin-bottom: 3rem;
				}
				.left_col__watch {
					width: 160px;
					left: 35px;
					bottom: 20px;
				}
				.left_col__pop {
					max-width: 40%;
					max-height: 80%;
					top: 30px;
					right: 35px;
				}
			}
		}

		.tasks {
			background: url("data:image/svg+xml,%0A%3Csvg width='731' height='731' viewBox='0 0 731 731' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='365.5' cy='365.5' r='365.5' fill='url(%23paint0_linear)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear' x1='365.5' y1='731' x2='365.5' y2='0' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23F3F3FF'/%3E%3Cstop offset='1' stop-color='%23F3F3FF' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A") 50% -50px no-repeat;
			.container {
				position: relative;
			}
			&__about {
				position: relative;
				height: 680px;
			}
			[class*="pop"] {
				position: absolute;
				overflow: hidden;
				bottom: 0;
				img {
					position: relative;
					top: -20px;
				}
			}

			.pop--1 {
				top: 70px;
				left: 0;
				img {
					width: 280px;
				}
				@media (max-width: 991.98px) {
					top: 20px;
				}
			}
			.pop--5 {
				top: 0px;
				left: 370px;
				img {
					width: 100px;
				}
			}
			.pop--14 {
				top: -80px;
				left: 570px;
				img {
					width: 230px;
				}
				@media (max-width: 1199.98px) {
					top: -50px;
					left: 380px;
				}
				@media (max-width: 991.98px) {
					top: -30px;
					left: 480px;
				}
			}
			.pop--4 {
				top: 160px;
				right: 0;
				img {
					width: 250px;
				}
				@media (max-width: 1199.98px) {
					top: 90px;
				}
			}
			.pop--7 {
				bottom: 10px;
				right: 30px;
				img {
					width: 360px;
				}
				@media (max-width: 1199.98px) {
					right: 70px;
					bottom: 30px;
				}
				@media (max-width: 991.98px) {
					right: -10px;
					bottom: -20px;
				}
			}
			.pop--11 {
				bottom: -50px;
				right: 470px;
				img {
					width: 300px;
				}
				@media (max-width: 1199.98px) {
					right: inherit;
					left: 80px;
					bottom: 0;
				}
				@media (max-width: 991.98px) {
					left: 10px;
					bottom: 20px;
				}
			}
			.pop--8 {
				bottom: 60px;
				left: 50px;
				img {
					width: 230px;
				}
			}
		}
	}
</style>