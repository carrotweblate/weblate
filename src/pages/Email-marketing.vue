<template>
	<Layout :header="true" :footer="true"  class="page page-email-marketing">
		
		<section class="hero">
			<b-container>
				<b-row class="align-items-center justify-content-center text-lg-center">
					<b-col lg="10" xl="9" class="col-12 col-lg-10 col-xl-9">
						<h1 class="text-white">
							Персонализированные email-рассылки с гибкой сегментацией пользователей
						</h1>
						<p class="text-white py-3">
							Повышайте конверсию и продажи, возвращайте клиентов на сайт, проводите онбординг и прогревайте с помощью email-рассылок
						</p>
						<RegistrationForm />
					</b-col>
				</b-row>

				<g-image class="hero__illustration girl d-none d-lg-block" src="@/assets/images/email-marketing/hero-girl.png" alt="Девочка с почтой" title="Ой-ой, сколько почты!" />
				<g-image class="hero__illustration airplane airplane--1" src="@/assets/images/email-marketing/hero-airplane-1.png" alt="Самолётик"  />
				<g-image class="hero__illustration airplane d-none d-lg-block airplane--2" src="@/assets/images/email-marketing/hero-airplane-2.png" alt="Самолётик"  />
				<g-image class="hero__illustration airplane d-none d-lg-block airplane--3" src="@/assets/images/email-marketing/hero-airplane-3.png" alt="Самолётик" />
				<g-image class="hero__illustration mailbox d-none d-lg-block" src="@/assets/images/email-marketing/hero-mailbox.png" alt="Ящики для почты" />
			</b-container>
		</section>

		<!-- Конструкто писем -->
		<section class="builder">
			<b-container>
				<b-row>
					<b-col>
						<g-image class="builder__bg mw-100" src="@/assets/images/email-marketing/builder-bg.png" quality="100" alt="Конструктор писем" />
						<div class="builder__text mt-md-5 mt-lg-0">
							<svg class="builder__str" width="71" height="93" viewBox="0 0 71 93" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M60.3657 85.931C58.5 50.438 38 21.4375 4.74194 12.7641" stroke="#FF6600" stroke-width="2" stroke-dasharray="2.5 2.5"/>
								<path d="M5.73438 17.603L3.71245 12.1562L9.15928 10.1343" stroke="#FF6600" stroke-width="2"/>
							</svg>
							<div class="h5">
								Простой визуальный конструктор писем
							</div>
							<p>
								<b>Соберите письмо за 5 минут без программиста</b>
							</p>
							<p>
								Не нужно ограничивать себя plain-text письмами или звать программиста, чтобы сделать что-то большее. Конструктор писем в сервисе Carrot quest позволяет выбрать шаблон для рассылки, наполнить его картинками, вставить кнопки и кастомизировать в зависимости от задач.
							</p>
						</div>
						<g-image class="builder__pic builder__pic--1" src="@/assets/images/email-marketing/builder-1.png" alt="Письмо 1" />
						<g-image class="builder__pic builder__pic--2" src="@/assets/images/email-marketing/builder-2.png" alt="Письмо 2" />
						<g-image class="builder__pic builder__pic--3" src="@/assets/images/email-marketing/builder-3.png" alt="Письмо 3" />
					</b-col> 
				</b-row>
			</b-container>
		</section>

		<!-- Повышайте конверсию в 6 раз с помощью персонализированных писем -->
		<section class="personal">
			<b-container>
				<b-row>
					<b-col lg="10" xl="8">
						<h2 class="mb-3 mb-lg-4">
							Повышайте конверсию в 6 раз с помощью персонализированных писем
						</h2>
						<p class="mb-3 mb-lg-4">
							Персонализация и гибкая сегментация позволят отправить письмо нужным пользователям в нужный момент и повысить открываемость, конверсию в заказ, регистрацию или заявку
						</p>
					</b-col>
				</b-row>
				<b-row>
					<b-col lg="4" class="text">
						<p>
							<b>Отправляем письмо целевому сегменту. Например, только тем, кто:</b>
						</p>
						<ol>
							<li>добавил товары в корзину,</li>
							<li>из Ярославля,</li>
							<li>последний раз был на сайте вчера.</li>
						</ol>
						<p class="d-lg-none">
							Автоматически подставляем имя, которое пользователь оставил в форме сбора контактов, товары из корзины и персональные промокоды.
						</p>

						<p class="personal__box personal__box--1 d-none d-lg-block">
							<svg width="173" height="32" viewBox="0 0 173 32" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M0 1C91.5 1.00056 64.5 26 169.5 26" stroke="#FF6600" stroke-width="2" stroke-dasharray="5 5"/>
								<path d="M166 21L171 26L166 31" stroke="#FF6600" stroke-width="2"/>
							</svg>
							<span>
								Автоматически подставляем имя, которое пользователь оставил в форме сбора контактов
							</span>
						</p>
						<p class="personal__box personal__box--2 d-none d-lg-block">
							<svg width="347" height="144" viewBox="0 0 347 144" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M345 138C192 138 188 1.5 0 1.5" stroke="#FF6600" stroke-width="2" stroke-dasharray="5 5"/>
								<path d="M340 133L345 138L340 143" stroke="#FF6600" stroke-width="2"/>
							</svg>
							<span>
								Товары из корзины
							</span>
						</p>
						<p class="personal__box personal__box--3 d-none d-lg-block">
							<svg width="287" height="332" viewBox="0 0 287 332" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M0 1C132.5 1 163.5 326.5 284.5 326.5" stroke="#FF6600" stroke-width="2" stroke-dasharray="5 5"/>
								<path d="M280 321L285 326L280 331" stroke="#FF6600" stroke-width="2"/>
							</svg>
							<span>
								Персональные промокоды
							</span>
						</p>
					</b-col>
					<b-col lg="8">
						<div class="personal__img__box">
							<g-image src="@/assets/images/email-marketing/personal.png" class="w-100" alt="Персонализированные письма" />
						</div>
					</b-col>
				</b-row>
			</b-container>
		</section>

		<!-- Гибкая сегментация базы прямо в нашей CRM -->
		<b-container class="success text">
			<b-row class="mb-5">
				<b-col lg="4" class="order-lg-1 mb-3">
					<h2>
						Гибкая сегментация базы прямо в нашей CRM
					</h2>
					<p class="my-4">
						Отсегментируйте базу по данным о пользователях, чтобы прицельно отправлять триггерные или массовые email-рассылки
					</p>
				</b-col>
				<b-col lg="8">
					<video autoplay loop muted playsinline class="embed-responsive-item mw-100">
						<source src="/assets/video/components/2.webm" type="video/webm">
						<source src="/assets/video/components/2.mp4" type="video/mp4">
					</video>
				</b-col>
			</b-row>
		</b-container>
		
		<!-- Решения для разных компаний -->
		<section class="solution">
			<b-container>
				<b-row>
					<b-col lg="10" xl="9">
						<div class="h1 mb-4 mb-lg-5">
							Решения для разных компаний
						</div>
					</b-col>
				</b-row>
				<div class="solution__box">
					<b-row>
						<b-col lg="4">
							<div class="h5">Интернет-магазины</div>
							<ul class="mb-4">
								<li :class="{ active : solutionIndex == 0 }" class="my-2">
									<b-link @click="solutionIndex=0">
										Работа с брошенными корзинами
									</b-link>
									<g-image src="@/assets/images/email-marketing/solution-1.png" width="844" quality="100" alt="Работа с брошенными корзинами" class="solution__box__pic d-lg-none my-4" />
								</li>
								<li :class="{ active : solutionIndex == 1 }" class="my-2">
									<b-link @click="solutionIndex=1">
										Письма с акциями
									</b-link>
									<g-image src="@/assets/images/email-marketing/solution-2.png" width="844" quality="100" alt="Письма с акциями" class="solution__box__pic d-lg-none my-4" />
								</li>
								<li :class="{ active : solutionIndex == 2 }" class="my-2">
									<b-link @click="solutionIndex=2" >
										Допродажи и кросс-продажи
									</b-link>
									<g-image src="@/assets/images/email-marketing/solution-3.png" width="844" quality="100" alt="Допродажи и кросс-продажи" class="solution__box__pic d-lg-none my-4" />
								</li>
							</ul>

							<div class="h5">Онлайн-сервисы</div>
							<ul class="mb-4">
								<li :class="{ active : solutionIndex == 3 }" class="my-2">
									<b-link @click="solutionIndex=3">
										Онбординговые цепочки
									</b-link>
									<g-image src="@/assets/images/email-marketing/solution-4.png" quality="100" alt="Онбординговые цепочки" class="solution__box__pic d-lg-none my-4" />
								</li>
								<li :class="{ active : solutionIndex == 4 }" class="my-2">
									<b-link @click="solutionIndex=4">
										Активация в регистрацию
									</b-link>
									<g-image src="@/assets/images/email-marketing/solution-5.png" quality="100" alt="Активация в регистрацию" class="solution__box__pic d-lg-none my-4" />
								</li>
								<li :class="{ active : solutionIndex == 5 }" class="my-2">
									<b-link @click="solutionIndex=5" >
										Работа с оттоком
									</b-link>
									<g-image src="@/assets/images/email-marketing/solution-6.png" quality="100" alt="Работа с оттоком" class="solution__box__pic d-lg-none my-4" />
								</li>
							</ul>

							<div class="h5">Недвижимость и строительство</div>
							<ul>
								<li :class="{ active : solutionIndex == 6 }" class="my-2">
									<b-link @click="solutionIndex=6">
										Приветственные письма
									</b-link>
									<g-image src="@/assets/images/email-marketing/solution-7.png" quality="100" alt="Приветственные письма" class="solution__box__pic d-lg-none my-4" />
								</li>
								<li :class="{ active : solutionIndex == 7 }" class="my-2">
									<b-link @click="solutionIndex=7">
										Прогревающие рассылки
									</b-link>
									<g-image src="@/assets/images/email-marketing/solution-8.png" quality="100" alt="Прогревающие рассылки" class="solution__box__pic d-lg-none my-4" />
								</li>
								<li :class="{ active : solutionIndex == 8 }" class="my-2">
									<b-link @click="solutionIndex=8" >
										Рассылки с оповещением о новых ЖК
									</b-link>
									<g-image src="@/assets/images/email-marketing/solution-9.png" quality="100" alt="Рассылки с оповещением о новых ЖК" class="solution__box__pic d-lg-none my-4" />
								</li>
							</ul>

							<div class="h5">Услуги и консалтинг</div>
							<ul>
								<li :class="{ active : solutionIndex == 9 }" class="my-2">
									<b-link @click="solutionIndex=9">
										Работа с брошенными заказами
									</b-link>
									<g-image src="@/assets/images/email-marketing/solution-10.png" quality="100" alt="Работа с брошенными заказами" class="solution__box__pic d-lg-none my-4" />
								</li>
								<li :class="{ active : solutionIndex == 10 }" class="my-2">
									<b-link @click="solutionIndex=10">
										Прогревающие рассылки
									</b-link>
									<g-image src="@/assets/images/email-marketing/solution-11.png" quality="100" alt="Прогревающие рассылки" class="solution__box__pic d-lg-none my-4" />
								</li>
								<li :class="{ active : solutionIndex == 11 }" class="my-2">
									<b-link @click="solutionIndex=11" >
										Допродажи и кросс-продажи
									</b-link>
									<g-image src="@/assets/images/email-marketing/solution-12.png" quality="100" alt="Допродажи и кросс-продажи" class="solution__box__pic d-lg-none my-4" />
								</li>
							</ul>

							<b-button href="/panel/register/" variant="primary" class="mt-4 mb-5">Создать свою рассылку</b-button>

							<div class="case">
								<div class="case__box">
									<p>
										«С помощью Carrot quest мы нашли слабые стороны интернет-магазина SkyShop и пересмотрели способы работы с пользователем. В итоге увеличили конверсию в продажи на сайте в 2,5 раза» 
										<a href="/blog/case_skyshop/">
											Читать кейс
										</a>
									</p>
								</div>
								<div class="d-flex">
									<div class="mr-4">
										<g-image src="@/assets/images/email-marketing/zubov.png" quality="100" width="100" alt="Константин Зубов" />
									</div>
									<div>
										<b>Константин Зубов</b>
										<br>
										Заместитель директора департамента торговли SkyShop
									</div>
								</div>
							</div>
							
						</b-col>
						<b-col lg="8" class="d-none d-lg-block">
							<b-tabs v-model="solutionIndex" no-nav-style>
								<b-tab active lazy>
									<g-image src="@/assets/images/email-marketing/solution-1.png" quality="100" class="solution__box__pic" alt="Работа с брошенными корзинами" />
								</b-tab>
								<b-tab>
									<g-image src="@/assets/images/email-marketing/solution-2.png" quality="100" class="solution__box__pic" alt="Письма с акциями" />
								</b-tab>
								<b-tab>
									<g-image src="@/assets/images/email-marketing/solution-3.png" quality="100" class="solution__box__pic" alt="Допродажи и кросс-продажи" />
								</b-tab>

								<b-tab>
									<g-image src="@/assets/images/email-marketing/solution-4.png" quality="100" class="solution__box__pic" alt="Онбординговые цепочки" />
								</b-tab>
								<b-tab>
									<g-image src="@/assets/images/email-marketing/solution-5.png" quality="100" class="solution__box__pic" alt="Активация в регистрацию" />
								</b-tab>
								<b-tab>
									<g-image src="@/assets/images/email-marketing/solution-6.png" quality="100" class="solution__box__pic" alt="Работа с оттоком" />
								</b-tab>

								<b-tab>
									<g-image src="@/assets/images/email-marketing/solution-7.png" quality="100" class="solution__box__pic" alt="Приветственные письма" />
								</b-tab>
								<b-tab>
									<g-image src="@/assets/images/email-marketing/solution-8.png" quality="100" class="solution__box__pic" alt="Прогревающие рассылки" />
								</b-tab>
								<b-tab>
									<g-image src="@/assets/images/email-marketing/solution-9.png" quality="100" class="solution__box__pic" alt="Рассылки с оповещением о новых ЖК" />
								</b-tab>

								<b-tab>
									<g-image src="@/assets/images/email-marketing/solution-10.png" quality="100" class="solution__box__pic" alt="Работа с брошенными заказами" />
								</b-tab>
								<b-tab>
									<g-image src="@/assets/images/email-marketing/solution-11.png" quality="100" class="solution__box__pic" alt="Прогревающие рассылки" />
								</b-tab>
								<b-tab>
									<g-image src="@/assets/images/email-marketing/solution-12.png" quality="100" class="solution__box__pic" alt="Допродажи и кросс-продажи" />
								</b-tab>
							</b-tabs>
						</b-col>
					</b-row>
				</div>
			</b-container>
		</section>

		<!-- Сравните сервисы для email‑рассылок -->
		<section >
			<b-container style="background-color: #FFF3E6; border-radius: 5px;">
				<b-col class="p-4 pb-lg-0">
					<b-row class="align-items-center justify-content-center">
						<b-col lg="4" class="d-none d-lg-block">
							<g-image src="@/assets/images/components/medium-4.png" width="494" alt="Регистрация в сервисе" title="Поехали!" class="mw-100" />
						</b-col>
						<b-col lg="8">
							<div class="h3 mb-4">Сравните сервисы для email‑рассылок</div>
							<b-button href="#open-modal-download?title=Скачать файл сравнения&amp;cqe=Скачал обзор сервисов рассылок" variant="primary">
								Скачать файл сравнения
							</b-button>
						</b-col>
					</b-row>
				</b-col>
			</b-container>
		</section>

		<!-- Собирайте контакты и данные пользователей для увеличения базы подписчиков -->
		<section class="data">
			<b-container>
				<b-row>
					<b-col lg="10" xl="8">
						<h2 class="mb-3 mb-lg-4">
							Собирайте контакты и данные пользователей для увеличения базы подписчиков
						</h2>
					</b-col>
				</b-row>
				<b-row>
					<b-col cols="12" md="6" lg="4">
						<g-link to="/lead-manager/" class="data__box box text-center p-4">
							<p>С полей и форм на вашем сайте</p>
							<g-image class="data__box__pic" src="@/assets/images/components/small-43.svg" alt="С полей и форм на вашем сайте" />
						</g-link>
					</b-col>
					<b-col cols="12" md="6" lg="4">
						<g-link to="/chatbot/" class="data__box box text-center p-4">
							<p>С помощью чат-бота</p>
							<g-image class="data__box__pic" src="@/assets/images/components/small-39.svg" alt="С помощью чат-бота" />
						</g-link>
					</b-col>
					<b-col cols="12" md="6" lg="4">
						<g-link to="/online-consultant/" class="data__box box text-center p-4">
							<p>Через чат</p>
							<g-image class="data__box__pic" src="@/assets/images/components/small-44.svg" alt="Через чат" />
						</g-link>
					</b-col>
					<b-col cols="12" md="6" lg="4">
						<g-link to="/pop-up/" class="data__box box text-center p-4">
							<p>С помощью поп-ап окон</p>
							<g-image class="data__box__pic" src="@/assets/images/components/small-41.svg" alt="Используйте поп-ап окна для сбора дополнительных контактов" />
						</g-link>
					</b-col>
					<b-col cols="12" md="6" lg="4">
						<g-link to="/integration/" class="data__box box text-center p-4">
							<p>Carrot quest легко соединяется с вашими инструментами через интеграции и по API</p>
							<g-image class="data__box__pic" src="@/assets/images/components/small-45.png" alt="Carrot quest легко соединяется с вашими инструментами через интеграции и по API" />
						</g-link>
					</b-col>
					<b-col cols="12" md="6" lg="4">
						<div class="case">
							<div class="case__box">
								<p class="mb-0">
									«Определенно видна польза от внедренных инструментов. Благодаря Carrot quest мы стабильно увеличиваем базу email»
								</p>
							</div>
							<div class="d-flex">
								<div class="mr-4">
									<g-image src="@/assets/images/email-marketing/baltacheva.png" quality="100" width="100" alt="Мария Балтачева" />
								</div>
								<div>
									<b>Мария Балтачева</b>
									<br>
									Консультант в сфере интернет-маркетинга Театра-Театра
								</div>
							</div>
						</div>
					</b-col>
				</b-row>
			</b-container>
		</section>

		<!-- Мы позаботимся, чтобы ваши письма были доставлены -->
		<section class="data2">
			<b-container>
				<b-row>
					<b-col>
						<h2 class="mb-4 mb-lg-5">
							Мы позаботимся, чтобы ваши письма были доставлены
						</h2>
					</b-col>
				</b-row>
				<b-row>
					<b-col lg="4" class="mb-4 mb-lg-0">
						<div class="data__box box text-center p-4">
							<g-image class="data__box__pic mb-3" src="@/assets/images/email-marketing/data2__pic--1.png" alt="Поможем улучшить репутацию домена" />
							<p>
								Поможем улучшить репутацию домена 
							</p>
						</div>
					</b-col>
					<b-col lg="4" class="mb-4 mb-lg-0">
						<div class="data__box box text-center p-4">
							<g-image class="data__box__pic mb-3" src="@/assets/images/email-marketing/data2__pic--2.png" alt="Следим, чтобы почтовики не отправляли вашу рассылку в спам" />
							<p>
								Следим, чтобы почтовики не отправляли вашу рассылку в спам
							</p>
						</div>
					</b-col>
					<b-col lg="4">
						<div class="data__box box text-center p-4">
							<g-image class="data__box__pic mb-3" src="@/assets/images/email-marketing/data2__pic--3.png" alt="Автоматически проверяем, что email-адреса в базе существуют" />
							<p>
								Автоматически проверяем, что email-адреса в базе существуют
							</p>
						</div>
					</b-col>
				</b-row>
			</b-container>
		</section>

		<section class="analitics container">
			<b-container>
				<b-row>
					<b-col>
						<h2 class="mb-4 mb-lg-5">
							Подробная аналитика email-рассылок
						</h2>
					</b-col>
				</b-row>
				<b-row>
					<b-col lg="4">
						<div class="inner">
							<div @click="analiticsIndex=0" :class="{ active : analiticsIndex == 0 }" class="analitics__step step--1">
								<div class="analitics__step__ico">
									<svg class="analitics__ico analitics__ico--stat" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M0 16V12.2182C0 11.4037 0.64 10.7637 1.45455 10.7637H2.90909C3.72364 10.7637 4.36364 11.4037 4.36364 12.2182V16H0Z" fill="#FF8246"/>
										<path d="M10.1818 16H5.81812V6.69087C5.81812 5.87633 6.45812 5.23633 7.27266 5.23633H8.72721C9.54175 5.23633 10.1818 5.87633 10.1818 6.69087V16Z" fill="#FF8246"/>
										<path d="M16.0001 16H11.6365L11.6365 1.45455C11.6365 0.64 12.2765 0 13.091 0H14.5456C15.3601 0 16.0001 0.64 16.0001 1.45455V16Z" fill="#FF8246"/>
									</svg>
								</div>                        
								<div class="analitics__step__inner text">
									<h4>
										Подробная статистика рассылки
									</h4>
									<ul>
										<li>Delivery rate (% доставленных писем)</li>
										<li>Open rate (% открытых писем)</li>
										<li>Click rate (% кликов в письмах)</li>
										<li>И другие метрики за всё время или выбранный период</li>
									</ul>
									<g-image class="d-lg-none mw-100 mt-3" src="@/assets/images/components/32.png" width="760" alt="Подробная статистика рассылки" />
								</div>
							</div>
							<div @click="analiticsIndex=1" :class="{ active : analiticsIndex == 1 }" class="analitics__step step--2">
								<div class="analitics__step__ico">
									<svg class="analitics__ico analitics__ico--user" width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="7.5" cy="3.5" r="3.5" fill="#FF8246"/>
										<path d="M7.5 8C3.35786 8 0 11.5817 0 16H15C15 11.5817 11.6421 8 7.5 8Z" fill="#FF8246"/>
										<path d="M9.5 16V16.5H10H12H12.5V16V14.5263C12.5 13.8517 11.8662 13.5 11.3333 13.5H10.6667C10.1338 13.5 9.5 13.8517 9.5 14.5263V16Z" fill="#FF8246" stroke="white"/>
										<path d="M15 16.5H15.5V16V11.6579C15.5 11.0071 14.9765 10.5 14.3333 10.5H13.6667C13.0235 10.5 12.5 11.0071 12.5 11.6579V16V16.5H13H15Z" fill="#FF8246" stroke="white"/>
										<path d="M18 16H16V8.71429C16 8.31429 16.2933 8 16.6667 8H17.3333C17.7067 8 18 8.31429 18 8.71429V16Z" fill="#FF8246"/>
									</svg>    
								</div>
								<div class="analitics__step__inner">
									<h4>
										Аналитика по каждому пользователю
									</h4>
									<p>
										Анализ реакции пользователя на письмо и его дальнейших действий на сайте (в карточке пользователя)
									</p>
									<video autoplay loop muted playsinline class="embed-responsive-item mw-100 d-lg-none">
										<source src="/assets/video/components/3.webm" type="video/webm">
										<source src="/assets/video/components/3.mp4" type="video/mp4">
									</video>
								</div>                        
							</div>
							<div @click="analiticsIndex=2" :class="{ active : analiticsIndex == 2 }" class="analitics__step step--3">
								<div class="analitics__step__ico">
									<svg class="analitics__ico analitics__ico--funnel" width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M7.82342 12.7185C8.09292 12.9863 8.22772 13.3938 8.22335 13.7737C8.22229 13.8656 8.22229 13.9415 8.22229 13.9779C8.22229 14.1623 8.22229 15.183 8.22229 16.0004C8.22229 16.5526 8.67 17 9.22229 17H12.1557C12.7079 17 13.1557 16.5523 13.1557 16C13.1557 15.1469 13.1557 14.1763 13.1557 13.9779C13.1557 13.8628 13.1557 13.354 13.1223 13.1862C13.1192 13.1709 13.1306 13.1557 13.1462 13.1557C13.1523 13.1557 13.1581 13.1533 13.1623 13.149L19.569 6.74228C20.7202 5.59116 21.3779 3.98781 21.3779 2.38446V1C21.3779 0.447715 20.9302 0 20.3779 0H1C0.447716 0 0 0.447715 0 1V2.38446C0 4.02892 0.657783 5.59116 1.8089 6.74228L7.82342 12.7185Z" fill="#FF8246"/>
									</svg>    
								</div>                        
								<div class="analitics__step__inner">
									<h4>
										Воронки взаимодействия с рассылками
									</h4>
									<p>
										Построение воронки с этапами и конверсиями в целевое действие на каждом этапе: открыл письмо, перешел на сайт, сделал заказ
									</p>
									<g-image class="d-lg-none mw-100" src="@/assets/images/components/34.png" width="760" alt="Воронки взаимодействия с рассылками" />
								</div>
							</div>

						</div>
					</b-col>
					<b-col md="7" lg="8">
						<b-tabs v-model="analiticsIndex" class="d-none d-lg-block" no-nav-style>
							<b-tab active lazy>
								<g-image src="@/assets/images/components/32.png" width="760" class="mw-100" alt="Подробная статистика рассылки" />
							</b-tab>
							<b-tab lazy>
								<video autoplay loop muted playsinline class="embed-responsive-item mw-100">
									<source src="/assets/video/components/3.webm" type="video/webm">
									<source src="/assets/video/components/3.mp4" type="video/mp4">
								</video>
							</b-tab>
							<b-tab lazy>
								<g-image src="@/assets/images/components/34.png" width="760" class="mw-100" alt="Воронки взаимодействия с рассылками" />
							</b-tab>
						</b-tabs>
					</b-col>
				</b-row>
			</b-container>
		</section>

		<!-- Регистрация в сервисе -->
		<b-container>
			<b-col class="p-4" style="background-color: #fff3e6; border-radius: 5px;">
				<b-row class="align-items-center justify-content-center">
					<b-col lg="6">
						<g-image src="@/assets/images/components/10.png" width="494" alt="Регистрация в сервисе" title="Поехали!" class="mw-100" />
					</b-col>
					<b-col lg="6">
						<div class="h1 mb-4">Регистрация в&nbsp;сервисе</div>
						<RegistrationForm text="14 дней бесплатно" />
					</b-col>
				</b-row>
			</b-col>
		</b-container>

		<Cases />

		<FAQ 
			title="Часто задаваемые вопросы"
			:items="[
				{
					question: 'Как моему бизнесу помогут email-рассылки?',
					answer: '<p>Email-рассылки — это удобный канал, чтобы связаться с пользователем вне сайта. Если у вас есть контакт пользователя, вы можете написать ему в любой момент. Даже если он давно не был на сайте, он все равно увидит письмо.</p><p>Email-маркетинг позволяет:</p><ul><li>вернуть пользователя на сайт, если он оставил заявку, заказ или регистрацию;</li><li>подвести пользователя к целевому действию с помощью прогревающих рассылок;</li><li>оповестить или напомнить о каком-то событии;</li><li>удержать или вернуть пользователей;</li><li>увеличить доверие к бренду благодаря регулярным массовым рассылкам;</li><li>активировать в повторные покупки или заказы;</li><li>рассказать об акциях, фичах или релизах.</li></ul>'
				},
				{
					question: 'Могу ли я отправить email-рассылку по своей базе?',
					answer: '<p>Да, можете. Для этого нужно импортировать лидов в Carrot quest. Вы также можете передать свойства лидов — например, имя, город или ссылки на соцсети.</p><p>Импортировать продвинутые свойства — например, список товаров в корзине или первый источник перехода — можно через Rest API.</p><p>Важно провалидировать базу перед импортом: так вы снизите bounce rate и вероятность попасть в спам.</p>'
				},
				{
					question: 'Как быстро я смогу запустить email-рассылку?',
					answer: '<p>Если вам не нужно ничего согласовывать, первую email-рассылку вы запустите за час: за это время вы поставите код на сайт и отправите первое тестовое письмо.</p><p>Массовую рассылку по своей базе лидов вы сможете отправить после импорта базы и активации тарифа: на это тоже потребуется около часа.</p>'
				},
				{
					question: 'Сколько стоит email-рассылка?',
					answer: '<p>В Carrot quest цена email-рассылки зависит от вашего тарифа и количества писем. Определенное количество писем включено в ваш тариф. Если превышаете квоту, нужно будет доплатить 50 ₽ за каждую дополнительную 1000 писем. Модуль «Конструктор писем» нужно подключить отдельно — это стоит 1000 ₽ в месяц.</p>'
				},
				{
					question: 'Могу ли я подключить свой домен для отправки email-рассылок?',
					answer: '<p>Да, можете. Для этого домена нужно будет прописать DNS-записи, а потом мы проверим и активируем домен.</p>'
				},
				{
					question: 'Где взять базу для email-рассылки?',
					answer: '<p>Если у вас еще нет своей базы лидов, ее нужно собрать. От качества базы зависит, дойдет рассылка до подписчиков или попадет в спам. Чтобы не попасть под спам-фильтры, не покупайте базу лидов, а собирайте ее самостоятельно.</p><p>Базу для рассылки обычно собирают с помощью:</p><ul><li>поп-апов с формами сбора контактов;</li><li>лид-форм на сайте;</li><li>сообщений в чат;</li><li>чат-бота.</li></ul><p>Подробнее читайте <a href=/blog/17-otlichnyx-sposobov-sobrat-email-bazu-dlya-rassylkis/>в статье о сборе базы подписчиков для email-рассылки</a>.</p>'
				}
			]"
			:button="{
				text: 'Запустить рассылку',
				href: '/panel/register/'
			}"
		/>

		<Study />

	</Layout>
</template>

<script>
	import RegistrationForm 	from '~/components/Forms/RegistrationForm.vue'
	import Cases 				from '~/components/Cases/Cases-email.vue'
	import FAQ 					from '~/components/FAQ.vue'
	import Study 				from '~/components/Study.vue'

	export default {
		components: {
			RegistrationForm,
			Cases,
			FAQ,
			Study
		},
		data() {
			return {
				//Делаем в HEAD
				metaTitle: 'Email-рассылки и Email-маркетинг в сервисе Carrot quest',
				metaDescription: '💌 Сервис Email-рассылок и Email-маркетинга: шаблоны, конструктор писем, формы подписки, триггерные рассылки, сегментация и валидация базы, статистика и воронки. 14 дней бесплатно в Carrot quest',
				metaCanonical: 'https://www.carrotquest.io/email-marketing/',
				metaImage: 'https://www.carrotquest.io/assets/images/cover/email-marketing.png',

				//Решения
				solutionIndex: 0,

				//Аналитика
				analiticsIndex: 0
			}
		}
	}	
</script>


<style lang="scss">
	.page-email-marketing {
		.hero {
			position: relative;
			background-color: #6A6AEE;
			.container {
				position: relative;
				z-index: 3;
			}
			&__illustration {
				position: absolute;
			}
			.girl {
				top: 50%;
				margin-top: -183px;
				left: -100px;
				z-index: 1;
			}
			.mailbox {
				top: 50%;
				margin-top: -206px;
				right: -50px;
			}
			.airplane--1 {
				top: 10%;
				left: 50%;
				margin-left: -200px;
			}
			.airplane--2 {
				top: 65%;
				left: 100px;
				z-index: 2;
			}
			.airplane--3 {
				top: 70%;
				right: 260px;
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
			@media (max-width: 1199.98px) {
				.girl {
					left: -100px;
				}
				.mailbox {
					right: -100px;
				}
			}
			@media (max-width: 991.98px) {
				.airplane-1 {
					top: -50px;
				}
			}
		}

		.builder {
			position: relative;
			padding-bottom: 1px;
			&::after {
				content: " ";
				width: 100%;
				height: 100px;
				position: absolute;
				z-index: 2;
				bottom: 10rem;
				right: 0;
				background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
			}
			&__text {
				position: absolute;
				top: 380px;
				right: 40px;
				width: 335px;
				z-index: 3;
			}
			&__pic {
				position: absolute;
				z-index: 1;
				top: 105px;
				left: 45px;
				transform: translate3d(0, 0, 0);
				animation: slides 15s infinite cubic-bezier(.36,.07,.19,.97) both;
			}
			&__pic--1 {
				animation-delay: 5s;
			}
			&__pic--2 {
				animation-delay: 10s;
			}
			@keyframes slides {
				0% , 30% , 100%{
					opacity: 1;
				}
				33% , 98% {
					opacity: 0;
				}
			}
			@media (min-width: 1200px) {
				margin-top: -15rem;
				.container {
					height: 830px;
				}
			}
			@media (min-width: 992px) and (max-width: 1199.98px) {
				.container {
					height: 680px;
				}
			}
			@media (max-width: 1199.98px) {
				padding-bottom: 1px;
				&__text {
					top: 310px;
					width: 275px;
					font-size: 0.875rem;
					svg {
						width: 40px;
						height: 60px;
					}
				}
				&__pic {
					top: 90px;
					left: 50%;
					width: 550px;
					margin-left: -433px;
				}
			}
			@media (max-width: 991.98px) {
				padding-bottom: 0;
				&::after {
					top: 340px;
				}
				&__text {
					position: relative;
					width: 100%;
					top: 20px;
					right: 0;
					font-size: 1rem;
					svg {
						display: none;
					}
				}
				&__pic {
					top: 65px;
					width: 340px;
					margin-left: -286px;
				}
			}
			@media (max-width: 767.98px) {
				.h5 {
					font-weight: bold;
					font-size: 24px;
					line-height: 28px;
					margin-bottom: 24px;
				}
				&__pic {
					top: 30px;
					width: 170px;
					margin-left: -144px;
				}
			}
		}

		.personal {
			&__img__box {
				position: relative;
				z-index: 1;
				img {
					background: #eeeeee url(../assets/images/email-marketing/solution-bg.png) no-repeat;
					background-size: 100% auto;
					padding: 120px 12% 0;
				}
				&::after {
					content: " ";
					width: 100%;
					height: 100px;
					position: absolute;
					z-index: 2;
					bottom: 0;
					right: 0;
					background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
				}
			}
			&__box {
				position: relative;
				svg {
					position: absolute;
					z-index: 2;
				}
				span {
					position: relative;
					z-index: 3;
					background-color: #fff;
					padding-right: 10px;
				}
			}
			&__box--1 {
				top: 20px;
				svg {
					top: 37px;
					right: -140px;
				}
			}
			&__box--2 {
				top: 60px;
				svg {
					top: 13px;
					right: -140px;
				}
			}
			&__box--3 {
				top: 110px;
				svg {
					top: 10px;
					right: -140px;
				}
			}
			@media (max-width: 1199.98px) {
				&__img__box {
					top: 50px;
				}
				&__box--1 {
					top: 0;
					svg {
						top: 37px;
						right: -130px;
					}
				}
				&__box--2 {
					top: 20px;
					z-index: 6;
					svg {
						top: 0;
						right: -130px;
					}
					span {
						padding-top: 10px;
					}
				}
				&__box--3 {
					top: 60px;
					z-index: 3;
					svg {
						top: -50px;
						right: -140px;
					}
					span {
						padding-top: 80px;
					}
				}
			}
		}

		.solution {
			.col-lg-4 {
				padding-top: 2rem;
				padding-bottom: 3rem;
			}
			ul {
				padding: 0;
				li {
					list-style: none;
				}
				img {
					display: none;
				}
				.active a {
					color: #000;
				}
				.active img {
					display: block;
				}
			}
			&__box__pic {
				width: 100%;
				background: #eeeeee url(../assets/images/email-marketing/solution-bg.png) no-repeat;
				background-size: 100% auto;
				padding: 80px 12% 40px;
				margin-bottom: 2rem;
			}
			@media (min-width: 1200px) {
				&__box {
					position: relative;
					left: -30px;
					width: 1160px;
					padding: 0 30px;
					box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
					border-radius: 5px;
				}
				.col-lg-4 {
					border-right: 1px solid #ECECEC;
				}
			}
		}

		.data {
			.col-md-6 {
				margin-top: 20px;
				margin-bottom: 20px;
			}
			&__box {
				background-color: #F8F8FF;
				border-radius: 5px;
				height: 100%;
				img {
					max-width: 100%;
				}
			}
		}

		.analitics {
			.analitics__step {
				display: flex;
				align-items: flex-start;
				justify-content: flex-start;
				cursor: pointer;
				&__inner {
					border-left: 1px solid #B3B3B3;
					padding-left: 30px;
					position: relative;
					z-index: 2;
					left: -12px;
					padding-bottom: 24px;
					margin-bottom: 4px;
					p , ul {
						transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
					}
					img , video {
						max-width: 100%;
					}
				}
				.analitics__step__ico {
					position: relative;
					z-index: 3;
					min-width: 24px;
					background-color: #fff;
					padding: 8px 0 12px;

					.analitics__ico {
						display: block;
						margin: 0 auto;
						&.active {display: none;}
					}
					.analitics__ico--sale {
						margin-top: -4px;
					}
				}
				svg * {
					fill: #B3B3B3;
				}
				h4 {
					color: #B3B3B3;
					cursor: pointer;
					transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
					line-height: 1.3em;
					margin-bottom: 8px;
					font-weight: normal;

				}
				p, ul {
					color: #B3B3B3;
					font-size: 14px;
					margin-top: 8px;
				}
				ul li {
					padding-left: 0;
					margin-bottom: 4px;
					position: relative;
					&:last-child {
						margin-bottom: 0;
					}
					&:before {
						content: "";
						width: 8px;
						height: 8px;
						border-radius: 50%;
						background-color: #B3B3B3;
						position: absolute;
						top: -2px;
						left: 0;
					}
					&:after {
						display: none;
					}
				}
				&.active {
					h4 {
						color: #FF6600 !important;
						cursor: inherit;
					}
					p , ul {
						color: #000 !important;
						li {
							&:before {
								background-color: #FF8246 !important;
							}
						}
					}
					svg * {
						fill: #FF6600 !important;
					}
				}
				&:last-child {
					.analitics__step__inner {
						padding-bottom: 8px;
					}
				}
			}
			&__pic {
				max-width: 100%;
				height: 0;
				opacity: 0;
				display: block;
				transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
				&:last-child {
					margin-bottom: 0;
				}
				&.active {

					height: auto;
					opacity: 1;
				}
			}
			@media (min-width: 992px) {
				.analitics__step {
					&:hover {
						h4 {
							color: #666;
						}
						p , ul {
							color: #666;
							li {
								&:before {
									background-color: #666;
								}
							}
						}
						svg * {
							fill: #666;
						}
					}
				}
			}
			@media (max-width: 991.98px) {
				.analitics__step {
					h4 {
						color: #FF6600;
						cursor: inherit;
					}
					p , ul {
						color: #000;
						li {
							&:before {
								background-color: #FF8246;
							}
						}
					}
					svg * {
						fill: #FF6600;
					}
				}
			}
		}

		.case{
			&__box {
				padding: 20px;
				border: 1px solid #E8E8E8;
				border-radius: 5px;
				position: relative;
				margin-bottom: 24px; 
				&::after {
					content: " ";
					display: block;
					width: 20px;
					height: 20px;
					background-color: #fff;
					border-radius: 0 0 5px 0;
					border: 1px solid #E8E8E8;
					border-top: 0;
					border-left: 0;
					position: absolute;
					bottom: -11px;
					transform: rotate(45deg);
				}
			}
			img {
				width: 50px;
			}
		}
		

	}

</style>





