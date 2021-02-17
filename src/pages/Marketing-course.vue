<template>
	<Layout :header="true" :footer="true"  class="page page-marketing-course">

		<section class="hero">
			<b-container>
				<b-row class="align-items-center">
					<b-col lg="8">
						<span>Курс</span>
						<h1 class="mt-3 mb-4">
							Маркетинг на сайте:
							<br> как продать в 2 раза больше, 
							<br> не увеличивая трафик
						</h1>
						<p class="mb-5">
							5 писем-инструкций с кейсами. Бесплатно!
						</p>
						<b-button href="#open-modal-download?title=Получить курс «Маркетинг на сайте»&amp;cqe=Записался на курс по маркетингу с лендинга" variant="primary" class="py-3 px-5">
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
						<h2 class="orange mb-4">
							Проверенные рекомендации 
						</h2>
						<p>
							Этот курс — выжимка опыта, который мы получили за 5 лет внедрения автоворонок для 400 сайтов
						</p>
					</b-col>
					<b-col lg="6" class="mb-5">
						<h2 class="purple mb-4">
							Эффективно
						</h2>
						<p>
							Внедрение этих сценариев увеличивает конверсию в продажу на 25%
						</p>
					</b-col>
				</b-row>
				<b-row class="with_lines">
					<b-col lg="6" class="mb-5">
						<h2 class="yellow mb-4">
							Быстро
						</h2>
						<p>
							Все рекомендации можно внедрить за неделю. Разработчик не понадобится :)
						</p>
					</b-col>
					<b-col lg="6" class="mb-5">
						<h2 class="white mb-4">
							Коротко
						</h2>
						<p>
							Вам не придется смотреть часовые вебинары. Мы подготовили короткие, но информативные письма, которые можно читать где и когда удобно
						</p>
					</b-col>
				</b-row>
				<b-row>
					<b-col md="10" xl="8" class="mb-5">
						<h2 class="mb-4">
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
						<h2 class="mb-4">
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
						<b-button href="#open-modal-download?title=Получить курс «Маркетинг на сайте»&amp;cqe=Записался на курс по маркетингу с лендинга" variant="primary" class="py-3 px-5">
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
				metaTitle: 'Курс | Маркетинг на сайте: как продать в 2 раза больше, не увеличивая трафик',
				metaDescription: '5 писем-инструкций с кейсами. Бесплатно! Курс - Маркетинг на сайте: как продать в 2 раза больше, не увеличивая трафик',
				metaCanonical: 'https://www.carrotquest.io/marketing-course/',
				metaImage: 'https://www.carrotquest.io/assets/images/cover/marketing-course.png',
			}
		}
	}	
</script>


<style lang="scss">
	.page-marketing-course {
		background: #1E1D29 url(../assets/images/marketing-course/hero.png) 50% 90px no-repeat;
		
		section {
			color: #fff;
		}

		.about {
			.with_lines {
				h2 {
					position: relative;
					display: inline-block;
				}
				h2::after {
					content: "";
					border-bottom: 2px solid #FFF;
					display: block;
					position: absolute;
					left: 0;
					right: 0;
				}
				h2.orange::after {
					border-color: #F6813E;
				}
				h2.purple::after {
					border-color: #467AFF;
				}
				h2.yellow::after {
					border-color: #F0B41B;
				}
			}
		}

		footer {
			.navbar-text , .nav-link , path {
				color: #fff;
				fill: #fff;
			}
			.nav-link:hover {
				color: #F6813E;
			}
		}

		@media (max-width: 991.98px) {
			background-position-y: 70px;
			background-position-x: left;
		}

	}
</style>