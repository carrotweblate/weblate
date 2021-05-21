<template>
	<Layout :header="true" :footer="true"  class="page page-ecommerce">

		<section class="hero blue">
			<b-container>
				<b-row class="align-items-center justify-content-center">
					<b-col lg="9" class="text-lg-center"> 
						<h1>
							Выжимайте из трафика вашего интернет&#8209;магазина максимум. Увеличивайте конверсию на каждом этапе воронки сайта
						</h1>
						<p class="py-3">
							Комплекс продуктов для общения с клиентами, сбора лидов, уменьшения количества брошенных корзин и возвращения пользователей
						</p>
						<RegistrationForm text="14 дней бесплатно. Регистрируйтесь" />
					</b-col>
				</b-row>
			</b-container>
			<div class="hero__pic d-none d-lg-block">
				<g-image src="@/assets/images/ecommerce/hero.png" width="3000" quality="100" alt="Hero" />
			</div>
		</section>

		<section class="numbers">
			<b-container>
				<b-row class="align-items-center">
					<b-col lg="4" class="mb-5 mb-lg-0 d-flex align-items-center">
						<g-image src="@/assets/images/components/small-5.png" class="mr-4" alt="Более 8 000 пользователей сервиса" width="176" />
						<p class="mb-0">
							Более 8&nbsp;000 пользователей сервиса
						</p>
					</b-col>
					<b-col lg="4" class="mb-5 mb-lg-0 d-flex align-items-center">
						<g-link to="/introduction-carrotquest/">
							<g-image src="@/assets/images/components/small-11.png" class="mr-4" alt="Более 570 проектов внедрения" width="176" />
						</g-link>
						<p class="mb-0">
							Более 570 проектов <g-link to="/introduction-carrotquest/">внедрения</g-link>
						</p>
					</b-col>
					<b-col lg="4" class="d-flex align-items-center">
						<g-link to="/cases/">
							<g-image src="@/assets/images/components/small-6.png" class="mr-4" alt="Более 60 написанных кейсов" width="176" />
						</g-link>
						<p class="mb-0">
							Более <g-link to="/cases/">60&nbsp;написанных кейсов</g-link> с&nbsp;интернет&#8209;магазинами
						</p>
					</b-col>
				</b-row>
			</b-container>
		</section>

		<section class="stat">
			<b-container>
				<b-row class="justify-content-center">
					<b-col lg="10" xl="9">
						<h3 class="h1 text-lg-center mb-4 mb-lg-5">
							По статистике наших пользователей
						</h3>
					</b-col>
				</b-row>
				<b-row>
					<b-col lg="4" class="mb-5 mb-lg-0">
						<div class="h4 mb-4">
							На 50% увеличиваем количество собираемых контактов с сайта
						</div>
						<div class="stat__buble mb-4">
							Добились ROI 1744% благодаря автоматизации воронки.
							<g-link to="/blog/case-westfalika/">
								Кейс
							</g-link>
						</div>
						<g-image src="/assets/images/logos/westfalika.svg" alt="westfalika" style="max-width: 102px;" /> 
					</b-col>
					<b-col lg="4" class="mb-5 mb-lg-0">
						<div class="h4 mb-4">
							На 30% увеличиваем количество вернувшихся клиентов
						</div>
						<div class="stat__buble mb-4">
							Увеличили число заказов в 2 раза с помощью чата
						</div>
						<g-image src="/assets/images/logos/armani-beauty.svg" alt="Armani-beauty" style="max-width: 76px" /> 
					</b-col>
					<b-col lg="4">
						<div class="h4 mb-4">
							На 10-30% увеличиваем количество повторных продаж
						</div>
						<div class="stat__buble mb-4">
							Увеличили конверсию в заказ в 2,5 раза. 
							<g-link to="/blog/case-skyshop/">
								Кейс
							</g-link>
						</div>
						<img src="/assets/images/logos/skyshop.svg" alt="Skyshop" style="max-width: 80px;"> 
					</b-col>
				</b-row>
			</b-container>
		</section>

		<section class="instruments">
			<b-container>
				<b-row class="justify-content-center">
					<b-col lg="10" xl="9">
						<h3 class="h1 text-lg-center">
							Инструменты для повышения продаж в&nbsp;интернет-магазинах, собранные в&nbsp;сервисе Carrot quest
						</h3>
					</b-col>
				</b-row>
				<b-row>
					<b-col md="6" lg="3" class="mt-4 mt-md-5">
						<g-link to="/online-consultant/" class="box box-shadow h-100">
							<g-image src="@/assets/images/components/small-5.png" width="160" рeight="96" fit="contain" background="#fff" alt="Онлайн-чат с персонализацией аудио- и видеозвонками для лучших отношений с клиентами" />
							<p class="mb-0">
								Онлайн-чат с&nbsp;персонализацией аудио- и&nbsp;видеозвонками для лучших отношений с&nbsp;клиентами
							</p>
						</g-link>
					</b-col>
					<b-col md="6" lg="3" class="mt-4 mt-md-5">
						<g-link to="/chatbot/" class="box box-shadow h-100">
							<g-image src="@/assets/images/components/small-2.png" width="160" рeight="96" fit="contain" background="#fff"  alt="Лид-бот на сайте для генерации и квалификации лидов" />
							<p class="mb-0">
								Лид-бот на&nbsp;сайте для генерации и&nbsp;квалификации лидов
							</p>
						</g-link>
					</b-col>
					<b-col md="6" lg="3" class="mt-4 mt-md-5">
						<g-link to="/pop-up/" class="box box-shadow h-100">
							<g-image src="@/assets/images/components/small-3.png" width="160" рeight="96" fit="contain" background="#fff"  alt="Pop-up окна работающие на основе поведения пользователей" />
							<p class="mb-0">
								Поп-ап окна, работающие на&nbsp;основе поведения пользователей
							</p>
						</g-link>
					</b-col>
					<b-col md="6" lg="3" class="mt-4 mt-md-5">
						<g-link to="/email-marketing/" class="box box-shadow h-100">
							<g-image src="@/assets/images/components/small-38.png" width="160" рeight="96" fit="contain" background="#fff"  alt="Триггерные email-кампании для удержания и возвращения клиентов" />
							<p class="mb-0">
								Триггерные email-кампании для удержания и&nbsp;возвращения клиентов
							</p>
						</g-link>
					</b-col>
				</b-row>
			</b-container>
		</section>

		<section class="blue">
			<b-container>
				<b-row class="features">

					<!-- Продавайте на сайте, в почте, в соцсетях или мессенджерах. Удерживайте лояльную аудиторию -->
					<MegaTabs 
						title="Продавайте на&nbsp;сайте, в&nbsp;почте, в&nbsp;соцсетях или мессенджерах. Удерживайте лояльную аудиторию"
						:tabs="[
							{
								title: 'Продавайте с&nbsp;помощью онлайн-чата, консультируйте о&nbsp;товарах и&nbsp;доставке',
								pic: '/assets/video/components/4.mp4'
							},
							{
								title: 'Объедините каналы общения с&nbsp;клиентами: чат, почта, соцсети, мессенджеры. Не&nbsp;теряйте ни&nbsp;одного клиента',
								pic: '/assets/video/components/7.mp4'
							},
							{
								title: 'Созванивайтесь с&nbsp;потенциальными клиентами в&nbsp;Zoom. Помогите им&nbsp;с&nbsp;выбором',
								pic: '/assets/video/components/6.mp4'
							},
							{
								title: 'Знайте о&nbsp;клиентах все: какие товары он&nbsp;сейчас смотрит, какие добавляет в&nbsp;корзину. Это помогает менеджерам продавать',
								pic: '26.png'
							}
						]"
						:more="{
							href: '/online-consultant/', 
							text: 'Подробнее про онлайн‑консультант'
						}"
						text="
							<p>
								«Мы в интернет-магазине SkyShop в 2,5 раза увеличили конверсию в заказ с помощью триггерных поп-апов, писем и чата»
								<a href=/blog/case-skyshop/>Читать кейс</a>
							</p>
							<p>
								Цепков Сергей <br>
								Менеджер интернет-проектов <a href=https://skyshop.aeromar.ru/ rel=nofollow>SkyShop</a>
							</p>
						"
					/>

					<!-- Получайте из вашего трафика максимум с помощью лид-бота и поп-ап окон -->
					<MegaTabs 
						title="Получайте из вашего трафика максимум с помощью лид-бота и поп-ап окон"
						:tabs="[
							{
								title: 'Лид-бот помогает собрать лиды, квалифицировать их и направить на нужного менеджера',
								pic: '19.png'
							},
							{
								title: 'Поп-ап окна помогают рассказать о ваших акциях, спецпредложениях и квалифицировать лиды',
								pic: '27.png'
							}
						]"
						:more="{
							href: '/chatbot/', 
							text: 'Подробнее про лид-бота'
						}"
						text="
							<p>
								«Дом.ru увеличил конверсию сайта на 30% благодаря автоматизации и экспериментам» 
								<a href=/blog/case-dom-ru-konversii/>Читать кейс</a>
							</p>
							<p>
								Андрей Шубин <br>
								Руководитель <a href=https://domru.ru/>Дом.ru Digital</a>
							</p>
						"
					/>

					<!-- Уменьшайте количество брошенных корзин и незавершенных заказов с помощью автоматизации -->
					<MegaTabs 
						title="Уменьшайте количество брошенных корзин и незавершенных заказов с помощью автоматизации"
						:tabs="[
							{
								title: 'Триггерные письма возвращают часть клиентов, которые ушли, бросив корзину или просмотр товаров',
								pic: '28.png'
							},
							{
								title: 'Поп-ап окна на уход из корзины/сайта помогают остановить часть клиентов',
								pic: '29.png'
							}
						]"
						:more="{
							href: '/pop-up/', 
							text: 'Подробнее про поп-ап окна'
						}"
						text="
							<p>
								«Westfalika настроила триггерные сообщения в Carrot quest с ROI 1744%»
								<a href=/blog/case-westfalika/>Читать кейс</a>
							</p>
							<p>
								Виктория Малышкина <br>
								интернет-маркетолог в <a href=https://www.westfalika.ru/ rel=nofollow>Westfalika</a>
							</p>
						"
					/>

					<!-- Автоматически собирайте все данные о клиентах и возвращайте их для повторных покупок -->
					<MegaTabs 
						title="Автоматически собирайте все данные о клиентах и возвращайте их для повторных покупок"
						:tabs="[
							{
								title: 'Сегментируйте клиентов и отправляйте им письма с рекомендациями для доп. продаж',
								pic: '/assets/video/components/2.mp4'
							},
							{
								title: 'Все клиенты автоматически собираются в eCRM. Ни один не будет потерян',
								pic: '30.png'
							}
						]"
						:more="{
							href: '/lead-manager/', 
							text: 'Подробнее про данные о клиентах'
						}"
					/>

				</b-row>
			</b-container>
		</section>

		<Consultation 
			title="Запишитесь на бесплатную демонстрацию сервиса" 
			text="Мы познакомимся, определим ваши задачи, за 30 минут обучим продукту и&nbsp;🎁&nbsp;бесплатно настроим базовый сценарий сбора лидов на вашем сайте"
			pic="medium-13.png"
			alt="Девочка, живущая в сети"
			bg="#fff3e6"
		/>

		<Integrations />

		<Cases />

		<Study />

	</Layout>
</template>

<script>
	import RegistrationForm 	from '~/components/Forms/RegistrationForm.vue'
	import MegaTabs 			from '~/components/MegaTabs.vue'
	import Consultation 		from '~/components/Consultation.vue'
	import Integrations 		from '~/components/Integrations.vue'
	import Cases 				from '~/components/Cases/Cases.vue'
	import Study 				from '~/components/Study.vue'

	export default {
		components: {
			RegistrationForm,
			MegaTabs,
			Consultation,
			Integrations,	
			Cases,
			Study
		},
		data() {
			return {
				//Делаем в HEAD
				metaTitle: 'Решение для интернет-магазинов: виджет чата, чат-бот, поп-ап окна и триггерные email-компании',
				metaDescription: 'Сервисы Carrot quest для повышения продаж в E-commerce — получайте от трафика максимум, сократите количество брошенных корзин, собирайте данные о клиентах',
				metaCanonical: 'https://www.carrotquest.io/ecommerce/',
				metaImage: 'https://www.carrotquest.io/assets/images/cover/ecommerce.png',
			}
		}
	}	
</script>


<style lang="scss">
	.page-ecommerce {
		.hero {
			.Registration {
				width: 480px;
				margin: 0 auto;
			}
			&.blue  {
				padding-top: 0;
			}
			.container {
				position: relative;
				z-index: 2;
			}
			&__pic {
				position: absolute;
				z-index: 1;
				margin-top: -250px;
				top: 50%;
				width: 100%;
				text-align: center;
				img {
					width: 100%;
					max-width: 1500px;
					min-width: 1200px;
				}
			}
			@media (min-width: 1200px) {
				p {
					max-width: 80%;
				}
				p , form .input-group {
					margin-left: auto;
					margin-right: auto;
				}
			}
		}
		

		.numbers {
			img {
				max-width: 88px;
			}
		}

		.stat {
			&__buble {
				border: 1px solid #E2E2E2;
				border-radius: 5px;
				padding: 16px;
				position: relative;
				&::after {
					content: " ";
					display: block;
					width: 20px;
					height: 20px;
					background-color: #fff;
					border-radius: 0 0 5px;
					border: 1px solid #E2E2E2;
					border-top: 0;
					border-left: 0;
					position: absolute;
					bottom: -11px;
					transform: rotate(45deg);
				}
			}
			img {
				filter: grayscale(100%);
			}
			@media (min-width: 992px) {
				.col-lg-4 {
					margin-bottom: 40px;
				}
				img {
					position: absolute;
				}
			}
		}

		&>.instruments {
			a {
				display: block;
				padding: 2rem 1rem 1.5rem;
				background-color: #fff;
				border-radius: 5px;
				text-align: center;
				color: #000;
				height: 100%;
				img {
					width: auto;
					height: 96px;
					margin-bottom: 1.5rem;
				}
				p {
					text-align: left;
				}
				@media (max-width: 575.98px) {
					font-size: 0.875rem;
					line-height: 1.5rem;
				}
			}
		}
		

		.blue {
			padding-top: 5rem;
			background-color: #F3F3FF;
		}
	}
</style>
