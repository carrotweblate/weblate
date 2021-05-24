<template>
	<Layout :header="true" :footer="true"  class="page page-kurs-email-marketing">

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
						<b-button href="#open-modal-download?title=Получить курс «Email-маркетинг за 8 шагов»&cqe=Записался на email-курс с лэндинга&sale=" variant="primary" class="py-3 px-5">
							Получить курс
						</b-button>
					</b-col>
				</b-row>
				<g-image src="@/assets/images/kurs-email-marketing/hero-left.png" alt="Дерево слева" class="d-none d-md-block hero__bg_left" />
				<g-image src="@/assets/images/kurs-email-marketing/hero-right.png" alt="Дерево справа" class="hero__bg_right" />
			</b-container>
		</section>

		<section class="about text">
			<b-container>
				<b-row>
					<b-col lg="6" class="mb-5">
						<h2 class="mb-4">
							Вы узнаете:
						</h2>
						<ul>
							<li>Как создать письмо без разработчиков и магии</li>
							<li>4 способа для быстрого (и легального!) сбора базы</li>
							<li>Как не попасть в спам</li>
							<li>Как запустить триггерные цепочки писем</li>
							<li>За какими метриками следить</li>
						</ul>
					</b-col>
					<b-col lg="6" class="mb-5">
						<h2 class="mb-4">
							Курс подойдет всем, кто:
						</h2>
						<ul>
							<li>Хочет запустить email-рассылки, но ничего об этом не знает</li>
							<li>Уже работает с письмами, но не видит результата</li>
						</ul>
					</b-col>
				</b-row>
				<b-row>
					<b-col>
						<b-button href="#open-modal-download?title=Получить курс «Email-маркетинг за 8 шагов»&cqe=Записался на email-курс с лэндинга" variant="primary" class="py-3 px-5">
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
		background: #FF8484 url(../assets/images/kurs-email-marketing/hero-bg.png) no-repeat;
		background-position-y: 90px;
		background-position-x: 30%;

		.hero {
			.row {
				position: relative;
				z-index: 2;
			}
			&__bg_right,
			&__bg_left {
				position: absolute;
				top: 0;
				right: 50%;
				z-index: 0;
			}
			&__bg_left {
				top: 0;
				width: 564px;
				height: 593px;
				margin: 0;
				right: auto;
				left: 0;
			}
			&__bg_right {
				top: 0;
				width: 620px;
				height: 579px;
				margin: 0;
				right: 0;
			}
		}
		

		.btn-primary {
			background-color: #F0E045;
			border: 0;
			color: black !important;
			&:hover {
				background-color: #FFE700;
			}
		}

		.text ul li::before {
			background-color: #fff;
		}

		footer .nav-item a:hover {
			color: #fff !important;
		}

		@media (max-width: 991.98px) {
			background-position-y: 70px;
			background-position-x: left;
			.hero {
				&__bg_left {
					left: -20px;
				}
				&__bg_right {
					right: -50px;
				}
			}
		}
		@media (min-width: 1980px) {
			background-position-x: right;
		}

	}
</style>