<template>
	<Layout class="page page-kurs-email-marketing">

		<section class="hero">
			<b-container>
				<b-row class="align-items-center">
					<b-col lg="8">
						<span>Курс</span>
						<h1 class="mt-3 mb-4">
							Email-маркетинг за 8 шагов:<br>
							все, что нужно знать<br>
							для быстрого старта
						</h1>
						<p class="mb-5">
							Новые уроки 2 раза в неделю у вас в почте. Бесплатно!
						</p>
						<b-button href="#open-modal-download?title=Получить курс «Email-маркетинг за 8 шагов»&amp;cqe=Записался на email-курс с лэндинга" variant="primary">
							Получить курс
						</b-button>
					</b-col>
				</b-row>
			</b-container>
		</section>

		<section class="about text">
			<b-container>
				<b-row class="with_lines">
					<b-col lg="6" class="mb-5">
						<h2 class="orange">
							Вы узнаете:
						</h2>
						<p>
							Этот курс — выжимка опыта, который мы получили за 5 лет внедрения автоворонок для 400 сайтов
						</p>
					</b-col>
					<b-col lg="6" class="mb-5">
						<h2 class="purple">
							Эффективно
						</h2>
						<p>
							Внедрение этих сценариев увеличивает конверсию в продажу на 25%
						</p>
					</b-col>
				</b-row>
				<b-row class="with_lines">
					<b-col lg="6" class="mb-5">
						<h2 class="yellow">
							Быстро
						</h2>
						<p>
							Все рекомендации можно внедрить за неделю. Разработчик не понадобится :)
						</p>
					</b-col>
					<b-col lg="6" class="mb-5">
						<h2 class="white">
							Коротко
						</h2>
						<p>
							Вам не придется смотреть часовые вебинары. Мы подготовили короткие, но информативные письма, которые можно читать где и когда удобно
						</p>
					</b-col>
				</b-row>
				<b-row>
					<b-col md="10" xl="8" class="mb-5">
						<h2>
							Вы сможете:
						</h2>
						<ul>
							<li>
								Построить автоворонку на сайте от посещения до покупки
							</li>
							<li>
								Настроить коммуникацию с клиентами с помощью поп-апов, емейлов и онлайн-чата
							</li>
							<li>
								Использовать проверенные сценарии для онлайн-магазинов, saas-сервисов, b2b и недвижимости
							</li>
						</ul>
					</b-col>
				</b-row>
				<b-row>
					<b-col md="10" xl="8" class="mb-5">
						<h2>
							Подойдёт всем, кто:
						</h2>
						<ul>
							<li>
								Хочет продавать больше на том же количестве клиентов
							</li>
							<li>
								Мечтает автоматизировать продажи
							</li>
							<li>
								Работает над повышением LTV своих клиентов
							</li>
						</ul>
					</b-col>
				</b-row>
				<b-row>
					<b-col>
						<b-button href="#open-modal-download?title=Получить курс «Email-маркетинг за 8 шагов»&amp;cqe=Записался на email-курс с лэндинга" variant="primary">
							Получить курс
						</b-button>
					</b-col>
				</b-row>
			</b-container>
		</section>

	</Layout>
</template>

<script>

	export default {
		data() {
			return {
				//Делаем в HEAD
				metaTitle: 'Курс | «Email-маркетинг за 8 шагов»',
				metaDescription: '8 уроков в формате email-рассылки: теория, примеры из практики, видео',
				metaCanonical: 'https://www.carrotquest.io/kurs-email-marketing/',
				metaImage: 'https://www.carrotquest.io/assets/images/cover/kurs-email-marketing.png',
			}
		}
	}	
</script>


<style lang="scss">
	.page-kurs-email-marketing {
		background: #FF8484 url(../assets/images/kurs-email-marketing/hero-bg.png) top center no-repeat; 

		.about {
		}


		@media (max-width: 991.98px) {
			background-position: top left;
		}

	}
</style>