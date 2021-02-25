<template>
	
	<b-container class="pipeline outline-tabs">
		<b-row>
			<b-col lg="10" xl="8">
				<h2>
					{{ title }}
				</h2>
			</b-col>
		</b-row>
		<b-row>
			<b-col cols-12>
				<b-tabs pills class="mt-3 mt-lg-4">
					<b-tab title="Воронка для SaaS" active lazy>
						<b-row class="mt-4 mt-md-5">
							
							<!-- Зашёл на сайт -->
							<b-col cols="12" lg class="pipeline__step pipeline__step-saas mb-5 mb-lg-0">
								<div class="text-lg-center">
									<p>
										<b class="font16px d-none d-lg-inline">
											Зашёл на&nbsp;сайт
										</b>
										<b class="h2 d-lg-none">
											Зашёл на&nbsp;сайт
										</b>
									</p>
									<p class="pipeline__step__number">
										+60%<br>
										<span class="font14px">лидов</span>
									</p>
								</div>
								<p>
									<b class="font16px">
										Лид-бот
									</b> <br>
									<span class="font14px grey-text">
										вовлекайте пользователя в&nbsp;диалог и&nbsp;соберите контакты
									</span>
								</p>
								<p>
									<b class="font16px">
										Поп-ап
									</b> <br>
									<span class="font14px grey-text">
										соберите контакты и&nbsp;постройте welcome-серии
									</span>
								</p>
								<p>
									<b class="font16px">
										Онлайн-чат
									</b> <br>
									<span class="font14px grey-text">
										помогите пользователю зарегистрироваться
									</span>
								</p>
							</b-col>

							<!-- Зарегистрировался -->
							<b-col cols="12" lg class="pipeline__step pipeline__step-2 mb-5 mb-lg-0">
								<div class="text-lg-center">
									<p>
										<b class="font16px d-none d-lg-inline">
											Зарегистрировался
										</b>
										<b class="h2 d-lg-none">
											Зарегистрировался
										</b>
									</p>
									<p class="pipeline__step__number">
										+30%<br>
										<span class="font14px">лидов</span>
									</p>
								</div>
								<p>
									<b class="font16px">
										Серия писем
									</b> <br>
									<span class="font14px grey-text">
										постройте приветственную цепочку, верните в&nbsp;продукт
									</span>
								</p>
								<p>
									<b class="font16px">
										Лид-бот
									</b> <br>
									<span class="font14px grey-text">
										помогите зарегистрироваться и&nbsp;подобрать нужные инструменты в&nbsp;сервисе
									</span>
								</p>
							</b-col>

							<!-- Активировался -->
							<b-col cols="12" lg class="pipeline__step pipeline__step-3 mb-5 mb-lg-0">
								<div class="text-lg-center">
									<p>
										<b class="font16px d-none d-lg-inline">
											Активировался
										</b>
										<b class="h2 d-lg-none">
											Активировался
										</b>
									</p>
									<p class="pipeline__step__number">
										+15%<br>
										<span class="font14px">лидов</span>
									</p>
								</div>
								<p>
									<b class="font16px">
										Лид-бот
									</b> <br>
									<span class="font14px grey-text">
										помогите разобраться в&nbsp;продукте, настройте онбординг
									</span>
								</p>
								<p>
									<b class="font16px">
										Онлайн-чат
									</b> <br>
									<span class="font14px grey-text">
										помогите пользователю разобраться в&nbsp;продукте
									</span>
								</p>
								<p>
									<b class="font16px">
										Поп-ап
									</b> <br>
									<span class="font14px grey-text">
										настройте онбординг пользователя, покажите полезные функции
									</span>
								</p>
								<p>
									<b class="font16px">
										Серия писем
									</b> <br>
									<span class="font14px grey-text">
										помогите узнать о&nbsp;продукте, возвращайте в&nbsp;продукт
									</span>
								</p>
							</b-col>

							<!-- Оплатил подписку -->
							<b-col cols="12" lg class="pipeline__step pipeline__step-4 mb-5 mb-lg-0">
								<div class="text-lg-center">
									<p>
										<b class="font16px d-none d-lg-inline">
											Оплатил подписку
										</b>
										<b class="h2 d-lg-none">
											Оплатил подписку
										</b>
									</p>
									<p class="pipeline__step__number">
										+25%<br>
										<span class="font14px">продаж</span>
									</p>
								</div>
								<p>
									<b class="font16px">
										Лид-бот
									</b> <br>
									<span class="font14px grey-text">
										помогите выбрать тариф
									</span>
								</p>
								<p>
									<b class="font16px">
										Онлайн-чат
									</b> <br>
									<span class="font14px grey-text">
										помогите пользователю с&nbsp;оплатой
									</span>
								</p>
								<p>
									<b class="font16px">
										Серия писем
									</b> <br>
									<span class="font14px grey-text">
										возвращайте в&nbsp;продукт, напоминайте о&nbsp;продукте
									</span>
								</p>
							</b-col>

							<!-- Оплатил повторно -->
							<b-col cols="12" lg class="pipeline__step pipeline__step-5">
								<div class="text-lg-center">
									<p>
										<b class="font16px d-none d-lg-inline">
											Оплатил повторно
										</b>
										<b class="h2 d-lg-none">
											Оплатил повторно
										</b>
									</p>
									<p class="pipeline__step__number">
										+10%<br>
										<span class="font14px">повторных продаж</span>
									</p>
								</div>
								<p>
									<b class="font16px">
										Онлайн-чат
									</b> <br>
									<span class="font14px grey-text">
										помогайте успеху пользователя
									</span>
								</p>
								<p>
									<b class="font16px">
										Серия писем
									</b> <br>
									<span class="font14px grey-text">
										делитесь обновлениями о&nbsp;продукте
									</span>
								</p>
								<p>
									<b class="font16px">
										Лид-бот
									</b> <br>
									<span class="font14px grey-text">
										собирайте обратную связь, рассказывайте про обновления и&nbsp;платные функции
									</span>
								</p>
							</b-col>
						</b-row>
						<b-row class="d-none d-lg-block">
							<b-col>
								<g-image class="pipeline__all" src="@/assets/images/automation-marketing/pipeline-saas.png" width="1100" alt="Шаги" />
							</b-col>
						</b-row>
					</b-tab>


					<b-tab title="Воронка для eCommerce" lazy>
						<b-row class="mt-4 mt-md-5">
							
							<!-- Зашёл на сайт -->
							<b-col cols="12" lg class="pipeline__step pipeline__step-ecom mb-5 mb-lg-0">
								<div class="text-lg-center">
									<p>
										<b class="font16px d-none d-lg-inline">
											Зашёл на&nbsp;сайт
										</b>
										<b class="h2 d-lg-none">
											Зашёл на&nbsp;сайт
										</b>
									</p>
									<p class="pipeline__step__number">
										+60%<br>
										<span class="font14px">лидов</span>
									</p>
								</div>
								<p>
									<b class="font16px">
										Лид-бот
									</b> <br>
									<span class="font14px grey-text">
										квалифицируйте и&nbsp;соберите email
									</span>
								</p>
								<p>
									<b class="font16px">
										Поп-ап
									</b> <br>
									<span class="font14px grey-text">
										предложите скидку и&nbsp;соберите email
									</span>
								</p>
							</b-col>

							<!-- Посмотрел товары -->
							<b-col cols="12" lg class="pipeline__step pipeline__step-2 mb-5 mb-lg-0">
								<div class="text-lg-center">
									<p>
										<b class="font16px d-none d-lg-inline">
											Посмотрел товары
										</b>
										<b class="h2 d-lg-none">
											Посмотрел товары
										</b>
									</p>
									<p class="pipeline__step__number">
										+30%<br>
										<span class="font14px">лидов</span>
									</p>
								</div>
								<p>
									<b class="font16px">
										Лид-бот
									</b> <br>
									<span class="font14px grey-text">
										предлагайте ответы на&nbsp;частые вопросы, а&nbsp;сложные переводите на&nbsp;оператора
									</span>
								</p>
								<p>
									<b class="font16px">
										Поп-ап
									</b> <br>
									<span class="font14px grey-text">
										оперативно проконсультируйте насчёт товара
									</span>
								</p>
							</b-col>

							<!-- Добавил товары в корзину -->
							<b-col cols="12" lg class="pipeline__step pipeline__step-3 mb-5 mb-lg-0">
								<div class="text-lg-center">
									<p>
										<b class="font16px d-none d-lg-inline" style="position: relative; top: 0.9rem; line-height: 1.1rem; display: block !important;">
											Добавил товары в&nbsp;корзину
										</b>
										<b class="h2 d-lg-none">
											Добавил товары в&nbsp;корзину
										</b>
									</p>
									<p class="pipeline__step__number">
										+15%<br>
										<span class="font14px">лидов</span>
									</p>
								</div>
								<p>
									<b class="font16px">
										Лид-бот
									</b> <br>
									<span class="font14px grey-text">
										помогайте оформить заказ
									</span>
								</p>
								<p>
									<b class="font16px">
										Поп-ап с&nbsp;товарами
									</b> <br>
									<span class="font14px grey-text">
										верните пользователя к&nbsp;покупке
									</span>
								</p>
								<p>
									<b class="font16px">
										Онлайн-чат
									</b> <br>
									<span class="font14px grey-text">
										помогайте оформить заказ
									</span>
								</p>
							</b-col>

							<!-- Оформил заказ -->
							<b-col cols="12" lg class="pipeline__step pipeline__step-4 mb-5 mb-lg-0">
								<div class="text-lg-center">
									<p>
										<b class="font16px d-none d-lg-inline">
											Оформил заказ
										</b>
										<b class="h2 d-lg-none">
											Оформил заказ
										</b>
									</p>
									<p class="pipeline__step__number">
										+25%<br>
										<span class="font14px">продаж</span>
									</p>
								</div>
								<p>
									<b class="font16px">
										Автозвонок
									</b> <br>
									<span class="font14px grey-text">
										подтвердите заказ и&nbsp;уточните данные
									</span>
								</p>
								<p>
									<b class="font16px">
										СМС
									</b> <br>
									<span class="font14px grey-text">
										напомните о&nbsp;товарах
									</span>
								</p>
								<p>
									<b class="font16px">
										Серия писем
									</b> <br>
									<span class="font14px grey-text">
										напомните о&nbsp;забытых товарах
									</span>
								</p>
							</b-col>

							<!-- Оплатил заказ -->
							<b-col cols="12" lg class="pipeline__step pipeline__step-5">
								<div class="text-lg-center">
									<p>
										<b class="font16px d-none d-lg-inline">
											Оплатил заказ
										</b>
										<b class="h2 d-lg-none">
											Оплатил заказ
										</b>
									</p>
									<p class="pipeline__step__number">
										+10%<br>
										<span class="font14px">повторных продаж</span>
									</p>
								</div>
								<p>
									<b class="font16px">
										Письмо
									</b> <br>
									<span class="font14px grey-text">
										покажите новые товары, обзоры и&nbsp;продавайте повторно
									</span>
								</p>
								<p>
									<b class="font16px">
										СМС
									</b> <br>
									<span class="font14px grey-text">
										расскажите о&nbsp;поступлении новых товаров
									</span>
								</p>
							</b-col>
						</b-row>
						<b-row class="d-none d-lg-block">
							<b-col>
								<g-image class="pipeline__all" src="@/assets/images/automation-marketing/pipeline-ecom.png" width="1100" alt="Шаги" />
							</b-col>
						</b-row>
					</b-tab>
				</b-tabs>
			</b-col>
		</b-row>
	</b-container>

</template>



<script>
	export default {
		props: {
			title: String
		}
	}
</script>



<style lang="scss">
	.pipeline {
		img {
			max-width: 100%;
		}
		&__step {
			position: relative;
			
			&__number {
				color: #FF7C16;
				font-size: 32px;
				line-height: 1.8rem;
			}
		}
		&__all {
			position: absolute;
			z-index: -1;
			bottom: 140px;
			max-width: 920px !important;
		}
	}
	@media (min-width: 992px) {
		.pipeline {
			&__step {
				&-saas {
					padding-bottom: 450px;
				}
				&-ecom {
					padding-bottom: 450px;
				}
				.text-lg-center {
					position: absolute;
					bottom: 0;
					width: calc(100% - 30px);
					margin-left: -20px;
				}
			}
		}
		}
		@media (min-width: 1200px) {
			.pipeline {
				&__step {
					&-saas {
						padding-bottom: 420px;
					}
					&-ecom {
						padding-bottom: 395px;
					}
				}
				&__all {
					left: 20px;
					max-width: 100% !important;
				}
			}
		}
</style>