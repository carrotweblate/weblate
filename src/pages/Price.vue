<template>
	<Layout :header="true" :footer="true"  class="page page-price">

		<div class="calculate">
			<b-container>
				<b-row>
					<b-col>
						<div class="h2 mt-5 mb-3 mb-lg-5">
							Мы правращаем ваш трафик в лидов. <br>
							Лидов в продажи. Продажи в повторные продажи
						</div>
					</b-col>
				</b-row>
				<b-row>
					<b-col class="calc mb-5">
						<div class="calc__select">
							<h5>
								Цена тарифа зависит от количества уникальных посетителей сайта в месяц
							</h5>
							<div class="calc__select__lids font24px d-none d-md-block my-4">
								<b v-if="billingIndex < ( billing.length - 1 )">
									до {{ billing[billingIndex].toLocaleString('ru') }}
								</b>
								<b v-else>
									более 2 500 000
								</b>
								<br>
								посетителей в месяц
								<svg id="lidsHelp" class="ml-2" width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="8.5" cy="10.5" r="8" stroke="#C4C4C4"></circle>
									<path d="M7.69336 12.6387V12.3223C7.69336 11.8652 7.76367 11.4902 7.9043 11.1973C8.04492 10.9004 8.30664 10.5879 8.68945 10.2598C9.2207 9.81055 9.55469 9.47266 9.69141 9.24609C9.83203 9.01953 9.90234 8.74609 9.90234 8.42578C9.90234 8.02734 9.77344 7.7207 9.51562 7.50586C9.26172 7.28711 8.89453 7.17773 8.41406 7.17773C8.10547 7.17773 7.80469 7.21484 7.51172 7.28906C7.21875 7.35938 6.88281 7.49023 6.50391 7.68164L6.1582 6.89062C6.89648 6.50391 7.66797 6.31055 8.47266 6.31055C9.21875 6.31055 9.79883 6.49414 10.2129 6.86133C10.627 7.22852 10.834 7.74609 10.834 8.41406C10.834 8.69922 10.7949 8.95117 10.7168 9.16992C10.6426 9.38477 10.5312 9.58984 10.3828 9.78516C10.2344 9.97656 9.91406 10.2871 9.42188 10.7168C9.02734 11.0527 8.76562 11.332 8.63672 11.5547C8.51172 11.7773 8.44922 12.0742 8.44922 12.4453V12.6387H7.69336ZM7.40625 14.3789C7.40625 13.8477 7.64062 13.582 8.10938 13.582C8.33594 13.582 8.50977 13.6504 8.63086 13.7871C8.75586 13.9238 8.81836 14.1211 8.81836 14.3789C8.81836 14.6289 8.75586 14.8242 8.63086 14.9648C8.50586 15.1016 8.33203 15.1699 8.10938 15.1699C7.90625 15.1699 7.73828 15.1094 7.60547 14.9883C7.47266 14.8633 7.40625 14.6602 7.40625 14.3789Z" fill="#717171"></path>
								</svg>
								<b-tooltip target="lidsHelp" placement="right">
									<div class="font12px text-left">
										Если вы превысите лимит уникальных посетителей, Carrot quest продолжит работать, но будет взиматься плата за каждого посетителя сверх лимита
									</div>
								</b-tooltip>
							</div>
							<div class="d-none d-md-block">
								<b-form-input v-model="billingIndex" type="range" min="0" :max="billing.length-1"></b-form-input>
							</div>
							<div class="d-block d-md-none">
								<select name="select" v-model="billingIndex" class="calc__select__mobile w-100 mt-3 p-2">
									<option value="0">до 1 000 посетителей в месяц</option>
									<option value="1">до 10 000 посетителей в месяц</option>
									<option value="2">до 30 000 посетителей в месяц</option>
									<option value="3">до 60 000 посетителей в месяц</option>
									<option value="4">до 100 000 посетителей в месяц</option>
									<option value="5">до 150 000 посетителей в месяц</option>
									<option value="6">до 200 000 посетителей в месяц</option>
									<option value="7">до 300 000 посетителей в месяц</option>
									<option value="8">до 400 000 посетителей в месяц</option>
									<option value="9">до 500 000 посетителей в месяц</option>
									<option value="9">до 700 000 посетителей в месяц</option>
									<option value="9">до 900 000 посетителей в месяц</option>
									<option value="9">до 1 000 000 посетителей в месяц</option>
									<option value="9">до 1 500 000 посетителей в месяц</option>
									<option value="9">до 2 000 000 посетителей в месяц</option>
									<option value="9">до 2 500 000 посетителей в месяц</option>
									<option value="10">более 2 500 000 посетителей в месяц</option>
								</select>
							</div>
							<b-row>
								<b-col cols="12" md="6" xl="12">
									<div class="calc__select__time font14px my-4">
										<b-form-group label="Варианты оплаты:" v-model="ratioIndex">
											<b-form-radio v-model="ratioIndex" value="0">
												Раз в месяц
											</b-form-radio>
											<b-form-radio v-model="ratioIndex" value="1">
												Раз в 3 месяца <span>скидка 10%</span>
											</b-form-radio>
											<b-form-radio v-model="ratioIndex" value="2">
												Раз в 6 месяцев <span>скидка 15%</span>
											</b-form-radio>
											<b-form-radio v-model="ratioIndex" value="3" class="year">
												Раз в год <span>скидка 20%</span>
											</b-form-radio>
										</b-form-group>
									</div>
								</b-col>
								<b-col cols="12" md="6" xl="12">
									<div class="add-ons font14px mb-4">
										<p class="mb-2">
											Дополнительные модули:
										</p>
										<b-form-checkbox v-model="noBranding" value="1000" unchecked-value="0">
											Без брендинга: 1 000 ₽ в месяц
										</b-form-checkbox>
										<svg id="addonsHelp" class="ml-2" width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<circle cx="8.5" cy="10.5" r="8" stroke="#C4C4C4"></circle>
											<path d="M7.69336 12.6387V12.3223C7.69336 11.8652 7.76367 11.4902 7.9043 11.1973C8.04492 10.9004 8.30664 10.5879 8.68945 10.2598C9.2207 9.81055 9.55469 9.47266 9.69141 9.24609C9.83203 9.01953 9.90234 8.74609 9.90234 8.42578C9.90234 8.02734 9.77344 7.7207 9.51562 7.50586C9.26172 7.28711 8.89453 7.17773 8.41406 7.17773C8.10547 7.17773 7.80469 7.21484 7.51172 7.28906C7.21875 7.35938 6.88281 7.49023 6.50391 7.68164L6.1582 6.89062C6.89648 6.50391 7.66797 6.31055 8.47266 6.31055C9.21875 6.31055 9.79883 6.49414 10.2129 6.86133C10.627 7.22852 10.834 7.74609 10.834 8.41406C10.834 8.69922 10.7949 8.95117 10.7168 9.16992C10.6426 9.38477 10.5312 9.58984 10.3828 9.78516C10.2344 9.97656 9.91406 10.2871 9.42188 10.7168C9.02734 11.0527 8.76562 11.332 8.63672 11.5547C8.51172 11.7773 8.44922 12.0742 8.44922 12.4453V12.6387H7.69336ZM7.40625 14.3789C7.40625 13.8477 7.64062 13.582 8.10938 13.582C8.33594 13.582 8.50977 13.6504 8.63086 13.7871C8.75586 13.9238 8.81836 14.1211 8.81836 14.3789C8.81836 14.6289 8.75586 14.8242 8.63086 14.9648C8.50586 15.1016 8.33203 15.1699 8.10938 15.1699C7.90625 15.1699 7.73828 15.1094 7.60547 14.9883C7.47266 14.8633 7.40625 14.6602 7.40625 14.3789Z" fill="#717171"></path>
										</svg>
										<b-tooltip target="addonsHelp" placement="right">
											<div class="font12px text-left">
												Модуль убирает все упоминания Carrot quest из чата, поп-апов и писем, а так же даёт возможность подключить свой домен для писем
											</div>
										</b-tooltip>
									</div>
									<p class="peace font14px">
										✌️ <i>Количество подключенных операторов не влияет на цену подписки</i>
									</p>
								</b-col>
							</b-row>
						</div>
						<div class="calc__rate">
							<div class="row__box">
								<b-row>
									<!-- Бизнес-чат -->
									<b-col cols="12" lg="4" class="buisness">
										<div class="calc__top">
											<g-image src="@/assets/images/components/small-5.png" fit="contain" background="transparent" position="left" height="66" alt="business" />
											<div class="h5 my-3">
												Бизнес-чат
											</div>
											<div class="font14px grey-text">
												Лучше всего подходит для общения: продажи на сайте, поддержка в продукте
											</div>
										</div>
										<div class="calc__rate__price mb-4">
											<template v-if="billingIndex < (billing.length-1)">
												<span>
													<b class="font20px">
														{{ ( buisness[billingIndex].price * ratio[ratioIndex] + parseInt(noBranding) ).toLocaleString('ru') }} ₽
													</b>
													в месяц
												</span>
												<span v-if="parseInt(ratioIndex)" class="beforeSale grey-text ml-2">
													{{ buisness[billingIndex].price.toLocaleString('ru') }} ₽
												</span>
												<div class="font14px">
													{{ buisness[billingIndex].emails.toLocaleString('ru') }} писем в месяц
												</div>
											</template>
											<template v-else>
												<a href="#" class="open-chat" v-on:click.prevent>Связаться с нами в чате</a>
											</template>
										</div>
										<b-button :href="'/panel/register/?cq_event=clickedOnStartTrial&cq_event_plan=busineschat&cq_event_traffic=' + billing[billingIndex]" variant="outline-primary" class="font14px py-2 mb-lg-4 w-100">
											Выбрать этот тариф
										</b-button>
										<a href="#" class="show d-lg-none my-4" v-on:click="showMoreBuisness=!showMoreBuisness">
											Подробнее
										</a>
										<div class="d-lg-block font14px text" :class="{ 'd-none' : !showMoreBuisness }">
											<p>
												<b>Основные особенности:</b>
											</p>
											<ul>
												<li>
													Чат на сайте и в вашем приложении
												</li>
												<li>
													Соцсети, мессенджеры и почта в одном окне
												</li>
												<li class="dashed-underline">
													<span id="buisness-1">
														Командное общение с клиентом
													</span>
													<b-tooltip target="buisness-1" placement="top">
														<div class="font12px text-left">
															Когда лиды пишут в чат, все диалоги приходят в общий канал и менеджеры могут помочь друг другу, подхватить или увидеть проблему
														</div>
													</b-tooltip>
												</li>
												<hr class="my-4">
												<li class="dashed-underline">
													<span id="buisness-2">
														Базовые данные о лидах
													</span>
													<b-tooltip target="buisness-2" placement="top">
														<div class="font12px text-left">
															Свойства: имя, email, email, местоположение, UTM-метки. События: начал сессию, имя/email/телефон изменён, начал диалог в чате, прочитал сообщение
														</div>
													</b-tooltip>
												</li>
												<li class="dashed-underline">
													<span id="buisness-3">
														Lite-версия базы знаний
													</span>
													<b-tooltip target="buisness-3" placement="top">
														<div class="font12px text-left">
															Когда в поддержку валится много однотипных вопросов, база знаний помогает разгрузить операторов. А еще клиент может почитать её самостоятельно (например, ночью). Ограничение: до 30 статей и нет SEO-настроек
														</div>
													</b-tooltip>
												</li>
												<li class="dashed-underline">
													<span id="buisness-4">
														Lite-версия аналитики диалогов
													</span>
													<b-tooltip target="buisness-4" placement="top">
														<div class="font12px text-left">
															Отслеживайте самые загруженные периоды работы, самые распространённые проблемы клиентов, скорость первого ответа, количество ответов на диалог и многое другое. Ограничение: только общий отчет без детальной аналитики и оценок работы операторов.
														</div>
													</b-tooltip>
												</li>
												<li class="dashed-underline">
													<span id="buisness-5">
														1 активный триггерный сценарий
													</span>
													<b-tooltip target="buisness-5" placement="top">
														<div class="font12px text-left">
															Когда посетители сайта или лиды совершают событие (триггер), запускается сценарий из сообщений в чат, поп-апов или писем, который собирает больше лидов или удерживает клиентов
														</div>
													</b-tooltip>
												</li>
												<li class="dashed-underline">
													<span id="buisness-6">
														1 активный лид-бот
													</span>
													<b-tooltip target="buisness-6" placement="top">
														<div class="font12px text-left">
															Квалифицируйте лиды автоматически при помощи лид-бота. Лид-бот проактивно вовлекает клиентов в диалог, собирает первичную информацию и передаёт операторам. В результате ваша команда получит квалифицированные лиды с необходимой информацией.
														</div>
													</b-tooltip>
												</li>
											</ul>
										</div>
									</b-col>

									<!-- Автоматизация -->
									<b-col cols="12" lg="4" class="automatization">
										<div class="calc__top">
											<g-image src="@/assets/images/components/small-48.png" fit="contain" background="transparent" position="left" height="66" alt="business" />
											<div class="h5 my-3">
												Автоматизация
											</div>
											<div class="font14px grey-text">
												Идеально подходит для продвинутого общения: квалификация лидов, адаптация кампании, консультация и аналитика
											</div>
										</div>
										<div class="calc__rate__price mb-4">
											<template v-if="billingIndex < (billing.length-1)">
												<span>
													<b class="font20px">
														{{ ( automatisation[billingIndex].price * ratio[ratioIndex] + parseInt(noBranding) ).toLocaleString('ru') }} ₽
													</b>
													в месяц
												</span>
												<span v-if="parseInt(ratioIndex)" class="beforeSale grey-text ml-2">
													{{ automatisation[billingIndex].price.toLocaleString('ru') }} ₽
												</span>
												<div class="font14px">
													{{ automatisation[billingIndex].emails.toLocaleString('ru') }} писем в месяц
												</div>
											</template>
											<template v-else>
												<a href="#" class="open-chat" v-on:click.prevent>Связаться с нами в чате</a>
											</template>
										</div>
										<b-button :href="'/panel/register/?cq_event=clickedOnStartTrial&cq_event_plan=automatization&cq_event_traffic=' + billing[billingIndex]" variant="primary" class="font14px py-2 mb-lg-4 w-100">
											Выбрать этот тариф
										</b-button>
										<a href="#" class="show d-lg-none my-4" v-on:click="showMoreAutomatization=!showMoreAutomatization">
											Подробнее
										</a>
										<div class="d-lg-block font14px text" :class="{ 'd-none' : !showMoreAutomatization }">
											<p>
												<b>Все, что входит в «Бизнес-чат», а также:</b>
											</p>
											<ul>
												<li class="dashed-underline">
													<span id="automatization-1">
														Персонализированные емейл-рассылки
													</span>
													<b-tooltip target="automatization-1" placement="top">
														<div class="font12px text-left">
															Когда вам нужно вернуть лидов на сайт или рассказать новости, вы выделяете нужный сегмент лидов и отправляете персонализированные email-рассылки
														</div>
													</b-tooltip>
												</li>
												<li class="dashed-underline">
													<span id="automatization-2">
														Автоназначение диалогов на операторов
													</span>
													<b-tooltip target="automatization-2" placement="top">
														<div class="font12px text-left">
															Когда у вас много операторов и вам надо распределить входящие диалоги по ним, настраиваете правила назначения диалогов. И пьете смузи в шезлонге ;)
														</div>
													</b-tooltip>
												</li>
												<li class="dashed-underline">
													<span id="automatization-3">
														А/Б-тесты и аналитика
													</span>
													<b-tooltip target="automatization-3" placement="top">
														<div class="font12px text-left">
															Когда вы запускаете сценарий, вам надо проверить какой сценарий дает лучшие результаты. Чтобы отключить неработающие сценарии или запустить новый эксперимент. С помощью А/Б-тестов автоматизации, контрольных групп и воронок сайта
														</div>
													</b-tooltip>
												</li>
												<hr class="my-4">
												<li class="dashed-underline">
													<span id="automatization-4">
														Запись любых данных о лидах
													</span>
													<b-tooltip target="automatization-4" placement="top">
														<div class="font12px text-left">
															Позволит строить более сложные сегменты аудитории для ваших рассылок. Вы сможете отслеживать посещение любых страниц сайта, нажатия на кнопки, а также передавать данные о пользователях с вашего сайта или сервиса через API.
														</div>
													</b-tooltip>
												</li>
												<li class="dashed-underline">
													<span id="automatization-5">
														Pro-версия базы знаний
													</span>
													<b-tooltip target="automatization-5" placement="top">
														<div class="font12px text-left">
															Когда в поддержку валится много однотипных вопросов, база знаний помогает разгрузить операторов. А еще клиент может почитать её самостоятельно (например, ночью). В Pro-версии не ограничено количество статей и доступны SEO-настройки
														</div>
													</b-tooltip>
												</li>
												<li class="dashed-underline">
													<span id="automatization-6">
														Pro-версия аналитики диалогов
													</span>
													<b-tooltip target="automatization-6" placement="top">
														<div class="font12px text-left">
															Когда надо оптимизировать работу менеджеров, нужны какие-то данные, на которые можно опереться: статистика запросов, распределение диалогов по времени. В Pro-версии: аналитика работы каждого менеджера и отзывы клиентов.
														</div>
													</b-tooltip>
												</li>
												<li class="dashed-underline">
													<span id="automatization-7">
														Неограниченное количество триггерных сценариев
													</span>
													<b-tooltip target="automatization-7" placement="top">
														<div class="font12px text-left">
															Когда посетители сайта или лиды совершают событие (триггер), запускается сценарий из сообщений в чат, поп-апов или писем, который собирает больше лидов или удерживает клиентов
														</div>
													</b-tooltip>
												</li>
												<li class="dashed-underline">
													<span id="automatization-8">
														Неограниченное количество лид-ботов
													</span>
													<b-tooltip target="automatization-8" placement="top">
														<div class="font12px text-left">
															Квалифицируйте лиды автоматически при помощи лид-бота. Лид-бот проактивно вовлекает клиентов в диалог, собирает первичную информацию и передаёт операторам. В результате ваша команда получит квалифицированные лиды с необходимой информацией.
														</div>
													</b-tooltip>
												</li>
											</ul>
										</div>
									</b-col>

									<!-- Премиум -->
									<b-col cols="12" lg="4" class="premium">
										<div class="calc__top">
											<g-image src="@/assets/images/components/small-47.png" fit="contain" background="transparent" position="left"  height="66" alt="premium" />
											<div class="h5 my-3">
												Премиум
											</div>
											<div class="calc__rate__description font14px grey-text">
												Получите экспертную поддержку наших специалистов по внедрению — они помогут вам настроить продвинутую коммуникацию
											</div>
										</div>
										<div class="calc__rate__price mb-4">
											<b class="font20px">Индивидуальная цена</b>
											<div class="font14px">
												+7 (495) 105-91-69
											</div>
										</div>
										<b-button :href="'/panel/register/?cq_event=clickedOnStartTrial&cq_event_plan=premium&cq_event_traffic=' + billing[billingIndex]" variant="outline-primary" v-on:click.prevent class="open-chat font14px py-2 mb-lg-4 w-100">
											Связаться с нами
										</b-button>
										<a href="#" class="show d-lg-none my-4" v-on:click="showMorePremium=!showMorePremium">
											Подробнее
										</a>
										<div class="font14px d-lg-block text" :class="{ 'd-none' : !showMorePremium }">
											<p>
												<b>Все, что входит в «Автоматизацию», плюс:</b>
											</p>
											<ul>
												<li>
													К вашему проекту подключится эксперт в тестировании гипотез и автоматизации маркетинга
												</li>
												<li>
													Персональная поддержка в интеграции сервиса
												</li>
												<li>
													Обучение работе с сервисом для вашей команды
												</li>
												<li>
													Ежемесячный разбор результатов и рекомендации от эксперта
												</li>
											</ul>
										</div>
									</b-col>
								</b-row>
								<b-row>
									<b-col>
										<a href="#all_features">Полное сравнение всех тарифов ↓</a>
									</b-col>
								</b-row>
							</div>
						</div>
					</b-col>
				</b-row>
			</b-container>
		</div>

		<!-- Контакты -->
		<b-container class="contacts">
			<b-col class="contacts__box">
				<b-row class="justify-content-center">
					<b-col cols="12" lg="10" class="text-lg-center">
						<div class="h4">
							Не знаете какой тариф выбрать? Свяжитесь с нами, мы поможем
						</div>
						<p class="my-4">
							Позвоните по телефону: <a href="tel:+74951059169">+7 (495) 105 91 69</a>
						</p>
						<div class="contacts__hrefs justify-content-lg-center d-flex">
							<div>
								<a href="https://m.me/carrotquest" aria-label="Facebook">
									<svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.95163H2.91342V4.48492C2.91342 1.56972 4.70984 0 7.2922 0C8.15804 0 8.9687 0.0551076 9.45337 0.0880548C9.66004 0.102103 9.80743 0.112123 9.87455 0.112123V3.13944H8.07813C6.61854 3.13944 6.39399 3.81218 6.39399 4.82129V6.95163H9.76228L9.31317 10.3153H6.39399V19.076H2.91342V10.3153H0V6.95163Z" fill="#FF7C16"/>
									</svg>
								</a>
								<a href="https://m.me/carrotquest">
									Фейсбук
								</a>
							</div>
							<div class="mx-4">
								<a href="tg://resolve?domain=carrotquestbot" aria-label="Telegram">
									<svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M16.7196 16.0413L19.6529 2.19645C19.7507 1.61554 19.7507 1.22827 19.4574 0.937823C19.164 0.647372 18.8707 0.647372 18.4796 0.841006L0.879981 7.42457C0.586654 7.6182 0.293327 7.71502 0.0977757 7.90865C0 8.19911 0 8.29592 0 8.48956C0.0977757 8.58637 0.293327 8.78001 0.68443 8.87682L5.18211 10.2323L15.6441 3.6487C15.9374 3.45507 16.133 3.45507 16.3285 3.55188C16.4263 3.6487 16.4263 3.6487 16.2308 3.84234L7.82205 11.4909L7.43095 16.1381C7.72428 16.1381 8.01761 16.0413 8.40871 15.7508L10.5598 13.6209L15.0575 16.9126C15.9374 17.3967 16.4263 17.1063 16.7196 16.0413Z" fill="#FF7C16"/>
									</svg>
								</a>
								<a href="tg://resolve?domain=carrotquestbot">
									Телеграм
								</a>
							</div>
							<div>
								<a href="#open-chat" aria-label="Carrot quest chat">
									<svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M0 2.71797C0 0.905555 1 0 3 0H15C17 0 18 0.905555 18 2.71667V9.96111C18 11.7722 17 12.6778 15 12.6778H6C5.33333 13.2815 3.52632 14.7737 2 16.3C1 17.3 0 16.3 0 15.5V2.71797Z" fill="#FF7C16"/>
										<circle cx="5" cy="6.5" r="1" fill="white"/>
										<circle cx="9" cy="6.5" r="1" fill="white"/>
										<circle cx="13" cy="6.5" r="1" fill="white"/>
									</svg>
								</a>
								<a href="#open-chat">
									Чат на сайте
								</a>
							</div>
						</div>
					</b-col>
				</b-row>
			</b-col>
		</b-container>

		<!-- Таблица фичей -->
		<b-container id="all_features" class="all_features font14px">
			<b-row>
				<b-col cols="12" class="add_scroll">
					<b-row class="line color">
						<b-col cols="5" class="d-flex align-items-center">
							<div class="line__pic d-none d-lg-block mr-3">
								<g-image src="@/assets/images/components/small-5.png" fit="contain" background="transparent" position="left" width="45" height="45" alt="business" />
							</div>
							<div>
								<b>Общайтесь с клиентами в онлайн-чате</b>
							</div>
						</b-col>
						<b-col cols="7">
							<b-row class="grey-text align-items-center">
								<b-col cols="4">
									<b>Бизнес-чат</b>
								</b-col>
								<b-col cols="4">
									<b>Автоматизация</b>
								</b-col>
								<b-col cols="4">
									<b>Премиум</b>
								</b-col>
							</b-row>
						</b-col>
					</b-row>
					<b-row class="line bordered">
						<b-col cols="5" class="d-flex align-items-center">
							<div class="dashed-underline line__title">
								<span id="all_features-1">
									Чат на сайте и в вашем приложении
								</span>
								<b-tooltip target="all_features-1" placement="top">
									<div class="font12px text-left">
										Общайтесь с пользователями, совершайте продажи и собирайте запросы при помощи чата на сайте и в вашем приложении через SDK
									</div>
								</b-tooltip>
							</div>
						</b-col>
						<b-col cols="7">
							<b-row class="grey-text align-items-center">
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
							</b-row>
						</b-col>
					</b-row>
					<b-row class="line bordered">
						<b-col cols="5" class="d-flex align-items-center">
							<div class="dashed-underline line__title">
								<span id="all_features-2">
									Командное общение с клиентом
								</span>
								<b-tooltip target="all_features-2" placement="top">
									<div class="font12px text-left">
										Когда лиды пишут в чат, все диалоги приходят в общий канал и менеджеры могут помочь друг другу, подхватить или увидеть проблему
									</div>
								</b-tooltip>
							</div>
						</b-col>
						<b-col cols="7">
							<b-row class="grey-text align-items-center">
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
							</b-row>
						</b-col>
					</b-row>
					<b-row class="line bordered">
						<b-col cols="5" class="d-flex align-items-center">
							<div class="line__title">
								Хранение чатов и данных о клиенте
							</div>
						</b-col>
						<b-col cols="7">
							<b-row class="grey-text align-items-center">
								<b-col cols="4">
									Последние 3 месяца
								</b-col>
								<b-col cols="4">
									Без ограничений
								</b-col>
								<b-col cols="4">
									Без ограничений
								</b-col>
							</b-row>
						</b-col>
					</b-row>
					<b-row class="line bordered">
						<b-col cols="5" class="d-flex align-items-center">
							<div class="dashed-underline line__title">
								<span id="all_features-3">
									Соцсети, мессенджеры и почта в одном окне
								</span>
								<b-tooltip target="all_features-3" placement="top">
									<div class="font12px text-left">
										Подключите Telegram, Facebook, Viber, ВКонтакте к чату и отвечайте на все обращения клиентов в одном окне
									</div>
								</b-tooltip>
							</div>
						</b-col>
						<b-col cols="7">
							<b-row class="grey-text align-items-center">
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
							</b-row>
						</b-col>
					</b-row>
					<b-row class="line bordered">
						<b-col cols="5" class="d-flex align-items-center">
							<div class="dashed-underline line__title">
								<span id="all_features-4">
									Сообщения из чата догоняют клиента в почте
								</span>
								<b-tooltip target="all_features-4" placement="top">
									<div class="font12px text-left">
										Когда посетитель уходит с сайта, сервис автоматически дублирует сообщения ему в почту, чтобы не потерять связь с клиентом
									</div>
								</b-tooltip>
							</div>
						</b-col>
						<b-col cols="7">
							<b-row class="grey-text align-items-center">
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
							</b-row>
						</b-col>
					</b-row>
					<b-row class="line">
						<b-col cols="5" class="d-flex align-items-center">
							<div class="dashed-underline line__title">
								<span id="all_features-5">
									Отсутствие брендинга Carrot quest
								</span>
								<b-tooltip target="all_features-5" placement="top">
									<div class="font12px text-left">
										Брендинг Carrot quest включает в себя надпись «Работает на Carrot quest» в чате, поп-апах и письмах
									</div>
								</b-tooltip>
							</div>
						</b-col>
						<b-col cols="7">
							<b-row class="grey-text align-items-center">
								<b-col cols="4">
									Доступно с модулем<br>
									«Без брендинга»
								</b-col>
								<b-col cols="4">
									Доступно с модулем<br>
									«Без брендинга»
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
							</b-row>
						</b-col>
					</b-row>

					<b-row class="line color">
						<b-col cols="5" class="d-flex align-items-center">
							<div class="line__pic d-none d-lg-block mr-3">
								<g-image src="@/assets/images/components/small-21.png" fit="contain" background="transparent" position="left" width="45" height="45" alt="business" />
							</div>
							<div>
								<b>Ускоряйте работу операторов</b>
							</div>
						</b-col>
						<b-col cols="7">
							<b-row class="grey-text align-items-center">
								<b-col cols="4">
									<b>Бизнес-чат</b>
								</b-col>
								<b-col cols="4">
									<b>Автоматизация</b>
								</b-col>
								<b-col cols="4">
									<b>Премиум</b>
								</b-col>
							</b-row>
						</b-col>
					</b-row>
					<b-row class="line bordered">
						<b-col cols="5" class="d-flex align-items-center">
							<div class="dashed-underline line__title">
								<span id="all_features-6">
									Сохранённые ответы
								</span>
								<b-tooltip target="all_features-6" placement="top">
									<div class="font12px text-left">
										Создавайте шаблоны ответов для быстрой реакции операторов на частые вопросы клиентов
									</div>
								</b-tooltip>
							</div>
						</b-col>
						<b-col cols="7">
							<b-row class="grey-text align-items-center">
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
							</b-row>
						</b-col>
					</b-row>
					<b-row class="line bordered">
						<b-col cols="5" class="d-flex align-items-center">
							<div class="dashed-underline line__title">
								<span id="all_features-7">
									Интеграция чата с Zoom и Calendly
								</span>
								<b-tooltip target="all_features-7" placement="top">
									<div class="font12px text-left">
										Назначайте встречи с клиентами в календаре и приглашайте на видеозвонки прямо в чате на вашем сайте или в приложении
									</div>
								</b-tooltip>
							</div>
						</b-col>
						<b-col cols="7">
							<b-row class="grey-text align-items-center">
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
							</b-row>
						</b-col>
					</b-row>
					<b-row class="line bordered">
						<b-col cols="5" class="d-flex align-items-center">
							<div class="dashed-underline line__title">
								<span id="all_features-8">
									Добавление тегов и заметок к диалогам
								</span>
								<b-tooltip target="all_features-8" placement="top">
									<div class="font12px text-left">
										Группируйте обращения по тематикам при помощи тегов и оставляйте комментарии для коллег в заметках
									</div>
								</b-tooltip>
							</div>
						</b-col>
						<b-col cols="7">
							<b-row class="grey-text align-items-center">
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
							</b-row>
						</b-col>
					</b-row>
					<b-row class="line bordered">
						<b-col cols="5" class="d-flex align-items-center">
							<div class="dashed-underline line__title">
								<span id="all_features-9">
									База знаний для ваших клиентов
								</span>
								<b-tooltip target="all_features-9" placement="top">
									<div class="font12px text-left">
										Соберите все инструкции и ответы на вопросы по вашему сайту в одном месте и отправляйте статьи в чате, чтобы уменьшить нагрузку на операторов
									</div>
								</b-tooltip>
							</div>
						</b-col>
						<b-col cols="7">
							<b-row class="grey-text align-items-center">
								<b-col cols="4">
									Lite-версия
									<svg id="all_features-9-1" class="ml-2" width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="8.5" cy="10.5" r="8" stroke="#C4C4C4"></circle>
										<path d="M7.69336 12.6387V12.3223C7.69336 11.8652 7.76367 11.4902 7.9043 11.1973C8.04492 10.9004 8.30664 10.5879 8.68945 10.2598C9.2207 9.81055 9.55469 9.47266 9.69141 9.24609C9.83203 9.01953 9.90234 8.74609 9.90234 8.42578C9.90234 8.02734 9.77344 7.7207 9.51562 7.50586C9.26172 7.28711 8.89453 7.17773 8.41406 7.17773C8.10547 7.17773 7.80469 7.21484 7.51172 7.28906C7.21875 7.35938 6.88281 7.49023 6.50391 7.68164L6.1582 6.89062C6.89648 6.50391 7.66797 6.31055 8.47266 6.31055C9.21875 6.31055 9.79883 6.49414 10.2129 6.86133C10.627 7.22852 10.834 7.74609 10.834 8.41406C10.834 8.69922 10.7949 8.95117 10.7168 9.16992C10.6426 9.38477 10.5312 9.58984 10.3828 9.78516C10.2344 9.97656 9.91406 10.2871 9.42188 10.7168C9.02734 11.0527 8.76562 11.332 8.63672 11.5547C8.51172 11.7773 8.44922 12.0742 8.44922 12.4453V12.6387H7.69336ZM7.40625 14.3789C7.40625 13.8477 7.64062 13.582 8.10938 13.582C8.33594 13.582 8.50977 13.6504 8.63086 13.7871C8.75586 13.9238 8.81836 14.1211 8.81836 14.3789C8.81836 14.6289 8.75586 14.8242 8.63086 14.9648C8.50586 15.1016 8.33203 15.1699 8.10938 15.1699C7.90625 15.1699 7.73828 15.1094 7.60547 14.9883C7.47266 14.8633 7.40625 14.6602 7.40625 14.3789Z" fill="#717171"></path>
									</svg>
									<b-tooltip target="all_features-9-1" placement="top">
										<div class="font12px text-left">
											Только 30 статей, возможность размещения на собственном домене и в вашем фирменном стиле
										</div>
									</b-tooltip>
								</b-col>
								<b-col cols="4">
									Pro-версия
									<svg id="all_features-9-2" class="ml-2" width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="8.5" cy="10.5" r="8" stroke="#C4C4C4"></circle>
										<path d="M7.69336 12.6387V12.3223C7.69336 11.8652 7.76367 11.4902 7.9043 11.1973C8.04492 10.9004 8.30664 10.5879 8.68945 10.2598C9.2207 9.81055 9.55469 9.47266 9.69141 9.24609C9.83203 9.01953 9.90234 8.74609 9.90234 8.42578C9.90234 8.02734 9.77344 7.7207 9.51562 7.50586C9.26172 7.28711 8.89453 7.17773 8.41406 7.17773C8.10547 7.17773 7.80469 7.21484 7.51172 7.28906C7.21875 7.35938 6.88281 7.49023 6.50391 7.68164L6.1582 6.89062C6.89648 6.50391 7.66797 6.31055 8.47266 6.31055C9.21875 6.31055 9.79883 6.49414 10.2129 6.86133C10.627 7.22852 10.834 7.74609 10.834 8.41406C10.834 8.69922 10.7949 8.95117 10.7168 9.16992C10.6426 9.38477 10.5312 9.58984 10.3828 9.78516C10.2344 9.97656 9.91406 10.2871 9.42188 10.7168C9.02734 11.0527 8.76562 11.332 8.63672 11.5547C8.51172 11.7773 8.44922 12.0742 8.44922 12.4453V12.6387H7.69336ZM7.40625 14.3789C7.40625 13.8477 7.64062 13.582 8.10938 13.582C8.33594 13.582 8.50977 13.6504 8.63086 13.7871C8.75586 13.9238 8.81836 14.1211 8.81836 14.3789C8.81836 14.6289 8.75586 14.8242 8.63086 14.9648C8.50586 15.1016 8.33203 15.1699 8.10938 15.1699C7.90625 15.1699 7.73828 15.1094 7.60547 14.9883C7.47266 14.8633 7.40625 14.6602 7.40625 14.3789Z" fill="#717171"></path>
									</svg>
									<b-tooltip target="all_features-9-2" placement="top">
										<div class="font12px text-left">
											Неограниченное количество статей, настройки аналитики и SEO, отсутствие брендинга Carrot quest
										</div>
									</b-tooltip>
								</b-col>
								<b-col cols="4">
									Pro-версия
									<svg id="all_features-9-3" class="ml-2" width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="8.5" cy="10.5" r="8" stroke="#C4C4C4"></circle>
										<path d="M7.69336 12.6387V12.3223C7.69336 11.8652 7.76367 11.4902 7.9043 11.1973C8.04492 10.9004 8.30664 10.5879 8.68945 10.2598C9.2207 9.81055 9.55469 9.47266 9.69141 9.24609C9.83203 9.01953 9.90234 8.74609 9.90234 8.42578C9.90234 8.02734 9.77344 7.7207 9.51562 7.50586C9.26172 7.28711 8.89453 7.17773 8.41406 7.17773C8.10547 7.17773 7.80469 7.21484 7.51172 7.28906C7.21875 7.35938 6.88281 7.49023 6.50391 7.68164L6.1582 6.89062C6.89648 6.50391 7.66797 6.31055 8.47266 6.31055C9.21875 6.31055 9.79883 6.49414 10.2129 6.86133C10.627 7.22852 10.834 7.74609 10.834 8.41406C10.834 8.69922 10.7949 8.95117 10.7168 9.16992C10.6426 9.38477 10.5312 9.58984 10.3828 9.78516C10.2344 9.97656 9.91406 10.2871 9.42188 10.7168C9.02734 11.0527 8.76562 11.332 8.63672 11.5547C8.51172 11.7773 8.44922 12.0742 8.44922 12.4453V12.6387H7.69336ZM7.40625 14.3789C7.40625 13.8477 7.64062 13.582 8.10938 13.582C8.33594 13.582 8.50977 13.6504 8.63086 13.7871C8.75586 13.9238 8.81836 14.1211 8.81836 14.3789C8.81836 14.6289 8.75586 14.8242 8.63086 14.9648C8.50586 15.1016 8.33203 15.1699 8.10938 15.1699C7.90625 15.1699 7.73828 15.1094 7.60547 14.9883C7.47266 14.8633 7.40625 14.6602 7.40625 14.3789Z" fill="#717171"></path>
									</svg>
									<b-tooltip target="all_features-9-3" placement="top">
										<div class="font12px text-left">
											Неограниченное количество статей, настройки аналитики и SEO, отсутствие брендинга Carrot quest
										</div>
									</b-tooltip>
								</b-col>
							</b-row>
						</b-col>
					</b-row>
					<b-row class="line bordered">
						<b-col cols="5" class="d-flex align-items-center">
							<div class="dashed-underline line__title">
								<span id="all_features-10">
									Автоматическое назначение диалогов на операторов
								</span>
								<b-tooltip target="all_features-10" placement="top">
									<div class="font12px text-left">
										Распределяйте диалоги между операторами или каналами автоматически в зависимости от свойств/событий клиента или от страницы, с которой он написал
									</div>
								</b-tooltip>
							</div>
						</b-col>
						<b-col cols="7">
							<b-row class="grey-text align-items-center">
								<b-col cols="4">
									
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
							</b-row>
						</b-col>
					</b-row>
					<b-row class="line">
						<b-col cols="5" class="d-flex align-items-center">
							<div class="dashed-underline line__title">
								<span id="all_features-11">
									Аналитика работы команды
								</span>
								<b-tooltip target="all_features-11" placement="top">
									<div class="font12px text-left">
										Оценивайте качество работы поддержки и оптимизируйте её, опираясь на общую статистику и показатели конкретных операторов
									</div>
								</b-tooltip>
							</div>
						</b-col>
						<b-col cols="7">
							<b-row class="grey-text align-items-center">
								<b-col cols="4">
									Lite-версия
									<svg id="all_features-11-1" class="ml-2" width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="8.5" cy="10.5" r="8" stroke="#C4C4C4"></circle>
										<path d="M7.69336 12.6387V12.3223C7.69336 11.8652 7.76367 11.4902 7.9043 11.1973C8.04492 10.9004 8.30664 10.5879 8.68945 10.2598C9.2207 9.81055 9.55469 9.47266 9.69141 9.24609C9.83203 9.01953 9.90234 8.74609 9.90234 8.42578C9.90234 8.02734 9.77344 7.7207 9.51562 7.50586C9.26172 7.28711 8.89453 7.17773 8.41406 7.17773C8.10547 7.17773 7.80469 7.21484 7.51172 7.28906C7.21875 7.35938 6.88281 7.49023 6.50391 7.68164L6.1582 6.89062C6.89648 6.50391 7.66797 6.31055 8.47266 6.31055C9.21875 6.31055 9.79883 6.49414 10.2129 6.86133C10.627 7.22852 10.834 7.74609 10.834 8.41406C10.834 8.69922 10.7949 8.95117 10.7168 9.16992C10.6426 9.38477 10.5312 9.58984 10.3828 9.78516C10.2344 9.97656 9.91406 10.2871 9.42188 10.7168C9.02734 11.0527 8.76562 11.332 8.63672 11.5547C8.51172 11.7773 8.44922 12.0742 8.44922 12.4453V12.6387H7.69336ZM7.40625 14.3789C7.40625 13.8477 7.64062 13.582 8.10938 13.582C8.33594 13.582 8.50977 13.6504 8.63086 13.7871C8.75586 13.9238 8.81836 14.1211 8.81836 14.3789C8.81836 14.6289 8.75586 14.8242 8.63086 14.9648C8.50586 15.1016 8.33203 15.1699 8.10938 15.1699C7.90625 15.1699 7.73828 15.1094 7.60547 14.9883C7.47266 14.8633 7.40625 14.6602 7.40625 14.3789Z" fill="#717171"></path>
									</svg>
									<b-tooltip target="all_features-11-1" placement="top">
										<div class="font12px text-left">
											Только общие данные по всем обращениям: количество и длина обращений, скорость ответа, загруженность по часам
										</div>
									</b-tooltip>
								</b-col>
								<b-col cols="4">
									Pro-версия
									<svg id="all_features-11-2" class="ml-2" width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="8.5" cy="10.5" r="8" stroke="#C4C4C4"></circle>
										<path d="M7.69336 12.6387V12.3223C7.69336 11.8652 7.76367 11.4902 7.9043 11.1973C8.04492 10.9004 8.30664 10.5879 8.68945 10.2598C9.2207 9.81055 9.55469 9.47266 9.69141 9.24609C9.83203 9.01953 9.90234 8.74609 9.90234 8.42578C9.90234 8.02734 9.77344 7.7207 9.51562 7.50586C9.26172 7.28711 8.89453 7.17773 8.41406 7.17773C8.10547 7.17773 7.80469 7.21484 7.51172 7.28906C7.21875 7.35938 6.88281 7.49023 6.50391 7.68164L6.1582 6.89062C6.89648 6.50391 7.66797 6.31055 8.47266 6.31055C9.21875 6.31055 9.79883 6.49414 10.2129 6.86133C10.627 7.22852 10.834 7.74609 10.834 8.41406C10.834 8.69922 10.7949 8.95117 10.7168 9.16992C10.6426 9.38477 10.5312 9.58984 10.3828 9.78516C10.2344 9.97656 9.91406 10.2871 9.42188 10.7168C9.02734 11.0527 8.76562 11.332 8.63672 11.5547C8.51172 11.7773 8.44922 12.0742 8.44922 12.4453V12.6387H7.69336ZM7.40625 14.3789C7.40625 13.8477 7.64062 13.582 8.10938 13.582C8.33594 13.582 8.50977 13.6504 8.63086 13.7871C8.75586 13.9238 8.81836 14.1211 8.81836 14.3789C8.81836 14.6289 8.75586 14.8242 8.63086 14.9648C8.50586 15.1016 8.33203 15.1699 8.10938 15.1699C7.90625 15.1699 7.73828 15.1094 7.60547 14.9883C7.47266 14.8633 7.40625 14.6602 7.40625 14.3789Z" fill="#717171"></path>
									</svg>
									<b-tooltip target="all_features-11-2" placement="top">
										<div class="font12px text-left">
											Данные по каждому оператору, аналитика по темам обращений, оценка работы операторов
										</div>
									</b-tooltip>
								</b-col>
								<b-col cols="4">
									Pro-версия
									<svg id="all_features-11-3" class="ml-2" width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="8.5" cy="10.5" r="8" stroke="#C4C4C4"></circle>
										<path d="M7.69336 12.6387V12.3223C7.69336 11.8652 7.76367 11.4902 7.9043 11.1973C8.04492 10.9004 8.30664 10.5879 8.68945 10.2598C9.2207 9.81055 9.55469 9.47266 9.69141 9.24609C9.83203 9.01953 9.90234 8.74609 9.90234 8.42578C9.90234 8.02734 9.77344 7.7207 9.51562 7.50586C9.26172 7.28711 8.89453 7.17773 8.41406 7.17773C8.10547 7.17773 7.80469 7.21484 7.51172 7.28906C7.21875 7.35938 6.88281 7.49023 6.50391 7.68164L6.1582 6.89062C6.89648 6.50391 7.66797 6.31055 8.47266 6.31055C9.21875 6.31055 9.79883 6.49414 10.2129 6.86133C10.627 7.22852 10.834 7.74609 10.834 8.41406C10.834 8.69922 10.7949 8.95117 10.7168 9.16992C10.6426 9.38477 10.5312 9.58984 10.3828 9.78516C10.2344 9.97656 9.91406 10.2871 9.42188 10.7168C9.02734 11.0527 8.76562 11.332 8.63672 11.5547C8.51172 11.7773 8.44922 12.0742 8.44922 12.4453V12.6387H7.69336ZM7.40625 14.3789C7.40625 13.8477 7.64062 13.582 8.10938 13.582C8.33594 13.582 8.50977 13.6504 8.63086 13.7871C8.75586 13.9238 8.81836 14.1211 8.81836 14.3789C8.81836 14.6289 8.75586 14.8242 8.63086 14.9648C8.50586 15.1016 8.33203 15.1699 8.10938 15.1699C7.90625 15.1699 7.73828 15.1094 7.60547 14.9883C7.47266 14.8633 7.40625 14.6602 7.40625 14.3789Z" fill="#717171"></path>
									</svg>
									<b-tooltip target="all_features-11-3" placement="top">
										<div class="font12px text-left">
											Данные по каждому оператору, аналитика по темам обращений, оценка работы операторов
										</div>
									</b-tooltip>
								</b-col>
							</b-row>
						</b-col>
					</b-row>

					<b-row class="line color">
						<b-col cols="5" class="d-flex align-items-center">
							<div class="line__pic d-none d-lg-block mr-3">
								<g-image src="@/assets/images/components/small-2.png" fit="contain" background="transparent" position="left" width="45" height="45" alt="business" />
							</div>
							<div>
								<b>Вовлекайте посетителей и собирайте лиды</b>
							</div>
						</b-col>
						<b-col cols="7">
							<b-row class="grey-text align-items-center">
								<b-col cols="4">
									<b>Бизнес-чат</b>
								</b-col>
								<b-col cols="4">
									<b>Автоматизация</b>
								</b-col>
								<b-col cols="4">
									<b>Премиум</b>
								</b-col>
							</b-row>
						</b-col>
					</b-row>
					<b-row class="line bordered">
						<b-col cols="5" class="d-flex align-items-center">
							<div class="dashed-underline line__title">
								<span id="all_features-12">
									База лидов с сегментацией
								</span>
								<b-tooltip target="all_features-12" placement="top">
									<div class="font12px text-left">
										Когда посетитель приходит на сайт и оставляет где-то контакты или пишет в чат, он сохраняется в базу лидов, чтобы вы не потеряли ни одного клиента и могли дальше с ними работать
									</div>
								</b-tooltip>
							</div>
						</b-col>
						<b-col cols="7">
							<b-row class="grey-text align-items-center">
								<b-col cols="4">
									Базовые параметры
									<svg id="all_features-12-1" class="ml-2" width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="8.5" cy="10.5" r="8" stroke="#C4C4C4"></circle>
										<path d="M7.69336 12.6387V12.3223C7.69336 11.8652 7.76367 11.4902 7.9043 11.1973C8.04492 10.9004 8.30664 10.5879 8.68945 10.2598C9.2207 9.81055 9.55469 9.47266 9.69141 9.24609C9.83203 9.01953 9.90234 8.74609 9.90234 8.42578C9.90234 8.02734 9.77344 7.7207 9.51562 7.50586C9.26172 7.28711 8.89453 7.17773 8.41406 7.17773C8.10547 7.17773 7.80469 7.21484 7.51172 7.28906C7.21875 7.35938 6.88281 7.49023 6.50391 7.68164L6.1582 6.89062C6.89648 6.50391 7.66797 6.31055 8.47266 6.31055C9.21875 6.31055 9.79883 6.49414 10.2129 6.86133C10.627 7.22852 10.834 7.74609 10.834 8.41406C10.834 8.69922 10.7949 8.95117 10.7168 9.16992C10.6426 9.38477 10.5312 9.58984 10.3828 9.78516C10.2344 9.97656 9.91406 10.2871 9.42188 10.7168C9.02734 11.0527 8.76562 11.332 8.63672 11.5547C8.51172 11.7773 8.44922 12.0742 8.44922 12.4453V12.6387H7.69336ZM7.40625 14.3789C7.40625 13.8477 7.64062 13.582 8.10938 13.582C8.33594 13.582 8.50977 13.6504 8.63086 13.7871C8.75586 13.9238 8.81836 14.1211 8.81836 14.3789C8.81836 14.6289 8.75586 14.8242 8.63086 14.9648C8.50586 15.1016 8.33203 15.1699 8.10938 15.1699C7.90625 15.1699 7.73828 15.1094 7.60547 14.9883C7.47266 14.8633 7.40625 14.6602 7.40625 14.3789Z" fill="#717171"></path>
									</svg>
									<b-tooltip target="all_features-12-1" placement="top">
										<div class="font12px text-left">
											Свойства: имя, email, email, местоположение, UTM-метки. События: зашел на сайт, написал в чат, сделал заказ и оплатил
										</div>
									</b-tooltip>
								</b-col>
								<b-col cols="4">
									Собственные параметры
									<svg id="all_features-12-2" class="ml-2" width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="8.5" cy="10.5" r="8" stroke="#C4C4C4"></circle>
										<path d="M7.69336 12.6387V12.3223C7.69336 11.8652 7.76367 11.4902 7.9043 11.1973C8.04492 10.9004 8.30664 10.5879 8.68945 10.2598C9.2207 9.81055 9.55469 9.47266 9.69141 9.24609C9.83203 9.01953 9.90234 8.74609 9.90234 8.42578C9.90234 8.02734 9.77344 7.7207 9.51562 7.50586C9.26172 7.28711 8.89453 7.17773 8.41406 7.17773C8.10547 7.17773 7.80469 7.21484 7.51172 7.28906C7.21875 7.35938 6.88281 7.49023 6.50391 7.68164L6.1582 6.89062C6.89648 6.50391 7.66797 6.31055 8.47266 6.31055C9.21875 6.31055 9.79883 6.49414 10.2129 6.86133C10.627 7.22852 10.834 7.74609 10.834 8.41406C10.834 8.69922 10.7949 8.95117 10.7168 9.16992C10.6426 9.38477 10.5312 9.58984 10.3828 9.78516C10.2344 9.97656 9.91406 10.2871 9.42188 10.7168C9.02734 11.0527 8.76562 11.332 8.63672 11.5547C8.51172 11.7773 8.44922 12.0742 8.44922 12.4453V12.6387H7.69336ZM7.40625 14.3789C7.40625 13.8477 7.64062 13.582 8.10938 13.582C8.33594 13.582 8.50977 13.6504 8.63086 13.7871C8.75586 13.9238 8.81836 14.1211 8.81836 14.3789C8.81836 14.6289 8.75586 14.8242 8.63086 14.9648C8.50586 15.1016 8.33203 15.1699 8.10938 15.1699C7.90625 15.1699 7.73828 15.1094 7.60547 14.9883C7.47266 14.8633 7.40625 14.6602 7.40625 14.3789Z" fill="#717171"></path>
									</svg>
									<b-tooltip target="all_features-12-2" placement="top">
										<div class="font12px text-left">
											Абсолютно любые свойства и события. Например: сумма покупок клиента, имя менеджера, клик на любой элемент, регистрация на вашем сайте и другие
										</div>
									</b-tooltip>
								</b-col>
								<b-col cols="4">
									Собственные параметры
									<svg id="all_features-12-3" class="ml-2" width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="8.5" cy="10.5" r="8" stroke="#C4C4C4"></circle>
										<path d="M7.69336 12.6387V12.3223C7.69336 11.8652 7.76367 11.4902 7.9043 11.1973C8.04492 10.9004 8.30664 10.5879 8.68945 10.2598C9.2207 9.81055 9.55469 9.47266 9.69141 9.24609C9.83203 9.01953 9.90234 8.74609 9.90234 8.42578C9.90234 8.02734 9.77344 7.7207 9.51562 7.50586C9.26172 7.28711 8.89453 7.17773 8.41406 7.17773C8.10547 7.17773 7.80469 7.21484 7.51172 7.28906C7.21875 7.35938 6.88281 7.49023 6.50391 7.68164L6.1582 6.89062C6.89648 6.50391 7.66797 6.31055 8.47266 6.31055C9.21875 6.31055 9.79883 6.49414 10.2129 6.86133C10.627 7.22852 10.834 7.74609 10.834 8.41406C10.834 8.69922 10.7949 8.95117 10.7168 9.16992C10.6426 9.38477 10.5312 9.58984 10.3828 9.78516C10.2344 9.97656 9.91406 10.2871 9.42188 10.7168C9.02734 11.0527 8.76562 11.332 8.63672 11.5547C8.51172 11.7773 8.44922 12.0742 8.44922 12.4453V12.6387H7.69336ZM7.40625 14.3789C7.40625 13.8477 7.64062 13.582 8.10938 13.582C8.33594 13.582 8.50977 13.6504 8.63086 13.7871C8.75586 13.9238 8.81836 14.1211 8.81836 14.3789C8.81836 14.6289 8.75586 14.8242 8.63086 14.9648C8.50586 15.1016 8.33203 15.1699 8.10938 15.1699C7.90625 15.1699 7.73828 15.1094 7.60547 14.9883C7.47266 14.8633 7.40625 14.6602 7.40625 14.3789Z" fill="#717171"></path>
									</svg>
									<b-tooltip target="all_features-12-3" placement="top">
										<div class="font12px text-left">
											Абсолютно любые свойства и события. Например: сумма покупок клиента, имя менеджера, клик на любой элемент, регистрация на вашем сайте и другие
										</div>
									</b-tooltip>
								</b-col>
							</b-row>
						</b-col>
					</b-row>
					<b-row class="line bordered">
						<b-col cols="5" class="d-flex align-items-center">
							<div class="dashed-underline line__title">
								<span id="all_features-13">
									Квалифицирующий лид-бот
								</span>
								<b-tooltip target="all_features-13" placement="top">
									<div class="font12px text-left">
										Вовлекайте больше посетителей в диалог, собирайте их контакты и распределяйте их по нужным отделам
									</div>
								</b-tooltip>
							</div>
						</b-col>
						<b-col cols="7">
							<b-row class="grey-text align-items-center">
								<b-col cols="4">
									1 активный бот
								</b-col>
								<b-col cols="4">
									Неограниченное количество
									<svg id="all_features-13-2" class="ml-2" width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="8.5" cy="10.5" r="8" stroke="#C4C4C4"></circle>
										<path d="M7.69336 12.6387V12.3223C7.69336 11.8652 7.76367 11.4902 7.9043 11.1973C8.04492 10.9004 8.30664 10.5879 8.68945 10.2598C9.2207 9.81055 9.55469 9.47266 9.69141 9.24609C9.83203 9.01953 9.90234 8.74609 9.90234 8.42578C9.90234 8.02734 9.77344 7.7207 9.51562 7.50586C9.26172 7.28711 8.89453 7.17773 8.41406 7.17773C8.10547 7.17773 7.80469 7.21484 7.51172 7.28906C7.21875 7.35938 6.88281 7.49023 6.50391 7.68164L6.1582 6.89062C6.89648 6.50391 7.66797 6.31055 8.47266 6.31055C9.21875 6.31055 9.79883 6.49414 10.2129 6.86133C10.627 7.22852 10.834 7.74609 10.834 8.41406C10.834 8.69922 10.7949 8.95117 10.7168 9.16992C10.6426 9.38477 10.5312 9.58984 10.3828 9.78516C10.2344 9.97656 9.91406 10.2871 9.42188 10.7168C9.02734 11.0527 8.76562 11.332 8.63672 11.5547C8.51172 11.7773 8.44922 12.0742 8.44922 12.4453V12.6387H7.69336ZM7.40625 14.3789C7.40625 13.8477 7.64062 13.582 8.10938 13.582C8.33594 13.582 8.50977 13.6504 8.63086 13.7871C8.75586 13.9238 8.81836 14.1211 8.81836 14.3789C8.81836 14.6289 8.75586 14.8242 8.63086 14.9648C8.50586 15.1016 8.33203 15.1699 8.10938 15.1699C7.90625 15.1699 7.73828 15.1094 7.60547 14.9883C7.47266 14.8633 7.40625 14.6602 7.40625 14.3789Z" fill="#717171"></path>
									</svg>
									<b-tooltip target="all_features-13-2" placement="top">
										<div class="font12px text-left">
											Активируйте сразу несколько лидботов на разных страницах для разных целей: квалификация, ответы на вопросы
										</div>
									</b-tooltip>
								</b-col>
								<b-col cols="4">
									Неограниченное количество
									<svg id="all_features-13-3" class="ml-2" width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="8.5" cy="10.5" r="8" stroke="#C4C4C4"></circle>
										<path d="M7.69336 12.6387V12.3223C7.69336 11.8652 7.76367 11.4902 7.9043 11.1973C8.04492 10.9004 8.30664 10.5879 8.68945 10.2598C9.2207 9.81055 9.55469 9.47266 9.69141 9.24609C9.83203 9.01953 9.90234 8.74609 9.90234 8.42578C9.90234 8.02734 9.77344 7.7207 9.51562 7.50586C9.26172 7.28711 8.89453 7.17773 8.41406 7.17773C8.10547 7.17773 7.80469 7.21484 7.51172 7.28906C7.21875 7.35938 6.88281 7.49023 6.50391 7.68164L6.1582 6.89062C6.89648 6.50391 7.66797 6.31055 8.47266 6.31055C9.21875 6.31055 9.79883 6.49414 10.2129 6.86133C10.627 7.22852 10.834 7.74609 10.834 8.41406C10.834 8.69922 10.7949 8.95117 10.7168 9.16992C10.6426 9.38477 10.5312 9.58984 10.3828 9.78516C10.2344 9.97656 9.91406 10.2871 9.42188 10.7168C9.02734 11.0527 8.76562 11.332 8.63672 11.5547C8.51172 11.7773 8.44922 12.0742 8.44922 12.4453V12.6387H7.69336ZM7.40625 14.3789C7.40625 13.8477 7.64062 13.582 8.10938 13.582C8.33594 13.582 8.50977 13.6504 8.63086 13.7871C8.75586 13.9238 8.81836 14.1211 8.81836 14.3789C8.81836 14.6289 8.75586 14.8242 8.63086 14.9648C8.50586 15.1016 8.33203 15.1699 8.10938 15.1699C7.90625 15.1699 7.73828 15.1094 7.60547 14.9883C7.47266 14.8633 7.40625 14.6602 7.40625 14.3789Z" fill="#717171"></path>
									</svg>
									<b-tooltip target="all_features-13-3" placement="top">
										<div class="font12px text-left">
											Активируйте сразу несколько лидботов на разных страницах для разных целей: квалификация, ответы на вопросы
										</div>
									</b-tooltip>
								</b-col>
							</b-row>
						</b-col>
					</b-row>
					<b-row class="line bordered">
						<b-col cols="5" class="d-flex align-items-center">
							<div class="dashed-underline line__title">
								<span id="all_features-14">
									Триггерные сообщения в чат, поп-апы или письма
								</span>
								<b-tooltip target="all_features-14" placement="top">
									<div class="font12px text-left">
										Отправляйте сообщения, всплывающие окна, письма пользователям автоматически, после совершения действия на сайте
									</div>
								</b-tooltip>
							</div>
						</b-col>
						<b-col cols="7">
							<b-row class="grey-text align-items-center">
								<b-col cols="4">
									1 активное сообщение, поп-ап или письмо
								</b-col>
								<b-col cols="4">
									Неограниченное количество
									<svg id="all_features-14-2" class="ml-2" width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="8.5" cy="10.5" r="8" stroke="#C4C4C4"></circle>
										<path d="M7.69336 12.6387V12.3223C7.69336 11.8652 7.76367 11.4902 7.9043 11.1973C8.04492 10.9004 8.30664 10.5879 8.68945 10.2598C9.2207 9.81055 9.55469 9.47266 9.69141 9.24609C9.83203 9.01953 9.90234 8.74609 9.90234 8.42578C9.90234 8.02734 9.77344 7.7207 9.51562 7.50586C9.26172 7.28711 8.89453 7.17773 8.41406 7.17773C8.10547 7.17773 7.80469 7.21484 7.51172 7.28906C7.21875 7.35938 6.88281 7.49023 6.50391 7.68164L6.1582 6.89062C6.89648 6.50391 7.66797 6.31055 8.47266 6.31055C9.21875 6.31055 9.79883 6.49414 10.2129 6.86133C10.627 7.22852 10.834 7.74609 10.834 8.41406C10.834 8.69922 10.7949 8.95117 10.7168 9.16992C10.6426 9.38477 10.5312 9.58984 10.3828 9.78516C10.2344 9.97656 9.91406 10.2871 9.42188 10.7168C9.02734 11.0527 8.76562 11.332 8.63672 11.5547C8.51172 11.7773 8.44922 12.0742 8.44922 12.4453V12.6387H7.69336ZM7.40625 14.3789C7.40625 13.8477 7.64062 13.582 8.10938 13.582C8.33594 13.582 8.50977 13.6504 8.63086 13.7871C8.75586 13.9238 8.81836 14.1211 8.81836 14.3789C8.81836 14.6289 8.75586 14.8242 8.63086 14.9648C8.50586 15.1016 8.33203 15.1699 8.10938 15.1699C7.90625 15.1699 7.73828 15.1094 7.60547 14.9883C7.47266 14.8633 7.40625 14.6602 7.40625 14.3789Z" fill="#717171"></path>
									</svg>
									<b-tooltip target="all_features-14-2" placement="top">
										<div class="font12px text-left">
											Активируйте сразу несколько сценариев на вашем сайте: сбор контактов, призыв в чат, брошенная корзина
										</div>
									</b-tooltip>
								</b-col>
								<b-col cols="4">
									Неограниченное количество
									<svg id="all_features-14-3" class="ml-2" width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="8.5" cy="10.5" r="8" stroke="#C4C4C4"></circle>
										<path d="M7.69336 12.6387V12.3223C7.69336 11.8652 7.76367 11.4902 7.9043 11.1973C8.04492 10.9004 8.30664 10.5879 8.68945 10.2598C9.2207 9.81055 9.55469 9.47266 9.69141 9.24609C9.83203 9.01953 9.90234 8.74609 9.90234 8.42578C9.90234 8.02734 9.77344 7.7207 9.51562 7.50586C9.26172 7.28711 8.89453 7.17773 8.41406 7.17773C8.10547 7.17773 7.80469 7.21484 7.51172 7.28906C7.21875 7.35938 6.88281 7.49023 6.50391 7.68164L6.1582 6.89062C6.89648 6.50391 7.66797 6.31055 8.47266 6.31055C9.21875 6.31055 9.79883 6.49414 10.2129 6.86133C10.627 7.22852 10.834 7.74609 10.834 8.41406C10.834 8.69922 10.7949 8.95117 10.7168 9.16992C10.6426 9.38477 10.5312 9.58984 10.3828 9.78516C10.2344 9.97656 9.91406 10.2871 9.42188 10.7168C9.02734 11.0527 8.76562 11.332 8.63672 11.5547C8.51172 11.7773 8.44922 12.0742 8.44922 12.4453V12.6387H7.69336ZM7.40625 14.3789C7.40625 13.8477 7.64062 13.582 8.10938 13.582C8.33594 13.582 8.50977 13.6504 8.63086 13.7871C8.75586 13.9238 8.81836 14.1211 8.81836 14.3789C8.81836 14.6289 8.75586 14.8242 8.63086 14.9648C8.50586 15.1016 8.33203 15.1699 8.10938 15.1699C7.90625 15.1699 7.73828 15.1094 7.60547 14.9883C7.47266 14.8633 7.40625 14.6602 7.40625 14.3789Z" fill="#717171"></path>
									</svg>
									<b-tooltip target="all_features-14-3" placement="top">
										<div class="font12px text-left">
											Активируйте сразу несколько сценариев на вашем сайте: сбор контактов, призыв в чат, брошенная корзина
										</div>
									</b-tooltip>
								</b-col>
							</b-row>
						</b-col>
					</b-row>
					<b-row class="line bordered">
						<b-col cols="5" class="d-flex align-items-center">
							<div class="line__title">
								Конструктор поп-апов
							</div>
						</b-col>
						<b-col cols="7">
							<b-row class="grey-text align-items-center">
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
							</b-row>
						</b-col>
					</b-row>
					<b-row class="line bordered">
						<b-col cols="5" class="d-flex align-items-center">
							<div class="dashed-underline line__title">
								<span id="all_features-15">
									Цепочки триггерных сообщений
								</span>
								<b-tooltip target="all_features-15" placement="top">
									<div class="font12px text-left">
										Создайте сценарий из нескольких триггерных сообщений, чтобы привлекать новых клиентов или помочь потенциальному покупателю купить у вас
									</div>
								</b-tooltip>
							</div>
						</b-col>
						<b-col cols="7">
							<b-row class="grey-text align-items-center">
								<b-col cols="4">
									
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
							</b-row>
						</b-col>
					</b-row>
					<b-row class="line bordered">
						<b-col cols="5" class="d-flex align-items-center">
							<div class="line__title">
								Триггерные JavaScript- и Webhook-сообщения
							</div>
						</b-col>
						<b-col cols="7">
							<b-row class="grey-text align-items-center">
								<b-col cols="4">
									
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
							</b-row>
						</b-col>
					</b-row>
					<b-row class="line bordered">
						<b-col cols="5" class="d-flex align-items-center">
							<div class="line__title">
								А/Б-тесты триггерных сообщений, поп-апов и писем
							</div>
						</b-col>
						<b-col cols="7">
							<b-row class="grey-text align-items-center">
								<b-col cols="4">
									
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
							</b-row>
						</b-col>
					</b-row>

					<b-row class="line color">
						<b-col cols="5" class="d-flex align-items-center">
							<div class="line__pic d-none d-lg-block mr-3">
								<g-image src="@/assets/images/components/small-4.png" fit="contain" background="transparent" position="left" width="45" height="45" alt="business" />
							</div>
							<div>
								<b>Подогревайте клиентов через рассылки</b>
							</div>
						</b-col>
						<b-col cols="7">
							<b-row class="grey-text align-items-center">
								<b-col cols="4">
									<b>Бизнес-чат</b>
								</b-col>
								<b-col cols="4">
									<b>Автоматизация</b>
								</b-col>
								<b-col cols="4">
									<b>Премиум</b>
								</b-col>
							</b-row>
						</b-col>
					</b-row>
					<b-row class="line bordered">
						<b-col cols="5" class="d-flex align-items-center">
							<div class="line__title">
								Базовый и HTML-редактор писем
							</div>
						</b-col>
						<b-col cols="7">
							<b-row class="grey-text align-items-center">
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
							</b-row>
						</b-col>
					</b-row>
					<b-row class="line bordered">
						<b-col cols="5" class="d-flex align-items-center">
							<div class="dashed-underline line__title">
								<span id="all_features-16">
									Продвинутый конструктор писем
								</span>
								<b-tooltip target="all_features-16" placement="top">
									<div class="font12px text-left">
										Создавайте более сложные письма в визуальном редакторе без помощи разработчиков
									</div>
								</b-tooltip>
							</div>
						</b-col>
						<b-col cols="7">
							<b-row class="grey-text align-items-center">
								<b-col cols="4">
									
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
							</b-row>
						</b-col>
					</b-row>
					<b-row class="line bordered">
						<b-col cols="5" class="d-flex align-items-center">
							<div class="dashed-underline line__title">
								<span id="all_features-17">
									Рассылки по сегментам
								</span>
								<b-tooltip target="all_features-17" placement="top">
									<div class="font12px text-left">
										Отфильтруйте свою аудиторию по свойствам и событиям, чтобы создать сегмент и запускайте по нему сценарии из сообщений в чат, поп-апов или писем, которые собирают больше лидов или удерживают клиентов
									</div>
								</b-tooltip>
							</div>
						</b-col>
						<b-col cols="7">
							<b-row class="grey-text align-items-center">
								<b-col cols="4">
									Базовые сегменты
									<svg id="all_features-17-1" class="ml-2" width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="8.5" cy="10.5" r="8" stroke="#C4C4C4"></circle>
										<path d="M7.69336 12.6387V12.3223C7.69336 11.8652 7.76367 11.4902 7.9043 11.1973C8.04492 10.9004 8.30664 10.5879 8.68945 10.2598C9.2207 9.81055 9.55469 9.47266 9.69141 9.24609C9.83203 9.01953 9.90234 8.74609 9.90234 8.42578C9.90234 8.02734 9.77344 7.7207 9.51562 7.50586C9.26172 7.28711 8.89453 7.17773 8.41406 7.17773C8.10547 7.17773 7.80469 7.21484 7.51172 7.28906C7.21875 7.35938 6.88281 7.49023 6.50391 7.68164L6.1582 6.89062C6.89648 6.50391 7.66797 6.31055 8.47266 6.31055C9.21875 6.31055 9.79883 6.49414 10.2129 6.86133C10.627 7.22852 10.834 7.74609 10.834 8.41406C10.834 8.69922 10.7949 8.95117 10.7168 9.16992C10.6426 9.38477 10.5312 9.58984 10.3828 9.78516C10.2344 9.97656 9.91406 10.2871 9.42188 10.7168C9.02734 11.0527 8.76562 11.332 8.63672 11.5547C8.51172 11.7773 8.44922 12.0742 8.44922 12.4453V12.6387H7.69336ZM7.40625 14.3789C7.40625 13.8477 7.64062 13.582 8.10938 13.582C8.33594 13.582 8.50977 13.6504 8.63086 13.7871C8.75586 13.9238 8.81836 14.1211 8.81836 14.3789C8.81836 14.6289 8.75586 14.8242 8.63086 14.9648C8.50586 15.1016 8.33203 15.1699 8.10938 15.1699C7.90625 15.1699 7.73828 15.1094 7.60547 14.9883C7.47266 14.8633 7.40625 14.6602 7.40625 14.3789Z" fill="#717171"></path>
									</svg>
									<b-tooltip target="all_features-17-1" placement="top">
										<div class="font12px text-left">
											Сегментировать можно по базовым свойствам и событиям: имя, телефон, email, последняя активность, источник захода на сайт, количество сессий, количество диалогов
										</div>
									</b-tooltip>
								</b-col>
								<b-col cols="4">
									Сложные сегменты
									<svg id="all_features-17-2" class="ml-2" width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="8.5" cy="10.5" r="8" stroke="#C4C4C4"></circle>
										<path d="M7.69336 12.6387V12.3223C7.69336 11.8652 7.76367 11.4902 7.9043 11.1973C8.04492 10.9004 8.30664 10.5879 8.68945 10.2598C9.2207 9.81055 9.55469 9.47266 9.69141 9.24609C9.83203 9.01953 9.90234 8.74609 9.90234 8.42578C9.90234 8.02734 9.77344 7.7207 9.51562 7.50586C9.26172 7.28711 8.89453 7.17773 8.41406 7.17773C8.10547 7.17773 7.80469 7.21484 7.51172 7.28906C7.21875 7.35938 6.88281 7.49023 6.50391 7.68164L6.1582 6.89062C6.89648 6.50391 7.66797 6.31055 8.47266 6.31055C9.21875 6.31055 9.79883 6.49414 10.2129 6.86133C10.627 7.22852 10.834 7.74609 10.834 8.41406C10.834 8.69922 10.7949 8.95117 10.7168 9.16992C10.6426 9.38477 10.5312 9.58984 10.3828 9.78516C10.2344 9.97656 9.91406 10.2871 9.42188 10.7168C9.02734 11.0527 8.76562 11.332 8.63672 11.5547C8.51172 11.7773 8.44922 12.0742 8.44922 12.4453V12.6387H7.69336ZM7.40625 14.3789C7.40625 13.8477 7.64062 13.582 8.10938 13.582C8.33594 13.582 8.50977 13.6504 8.63086 13.7871C8.75586 13.9238 8.81836 14.1211 8.81836 14.3789C8.81836 14.6289 8.75586 14.8242 8.63086 14.9648C8.50586 15.1016 8.33203 15.1699 8.10938 15.1699C7.90625 15.1699 7.73828 15.1094 7.60547 14.9883C7.47266 14.8633 7.40625 14.6602 7.40625 14.3789Z" fill="#717171"></path>
									</svg>
									<b-tooltip target="all_features-17-2" placement="top">
										<div class="font12px text-left">
											Кроме базовых свойств и событий можно создать любые свои и сегментировать по ним: посещение специфических страниц, клик по ключевым кнопкам, события, передаваемые через API
										</div>
									</b-tooltip>
								</b-col>
								<b-col cols="4">
									Сложные сегменты
									<svg id="all_features-17-3" class="ml-2" width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="8.5" cy="10.5" r="8" stroke="#C4C4C4"></circle>
										<path d="M7.69336 12.6387V12.3223C7.69336 11.8652 7.76367 11.4902 7.9043 11.1973C8.04492 10.9004 8.30664 10.5879 8.68945 10.2598C9.2207 9.81055 9.55469 9.47266 9.69141 9.24609C9.83203 9.01953 9.90234 8.74609 9.90234 8.42578C9.90234 8.02734 9.77344 7.7207 9.51562 7.50586C9.26172 7.28711 8.89453 7.17773 8.41406 7.17773C8.10547 7.17773 7.80469 7.21484 7.51172 7.28906C7.21875 7.35938 6.88281 7.49023 6.50391 7.68164L6.1582 6.89062C6.89648 6.50391 7.66797 6.31055 8.47266 6.31055C9.21875 6.31055 9.79883 6.49414 10.2129 6.86133C10.627 7.22852 10.834 7.74609 10.834 8.41406C10.834 8.69922 10.7949 8.95117 10.7168 9.16992C10.6426 9.38477 10.5312 9.58984 10.3828 9.78516C10.2344 9.97656 9.91406 10.2871 9.42188 10.7168C9.02734 11.0527 8.76562 11.332 8.63672 11.5547C8.51172 11.7773 8.44922 12.0742 8.44922 12.4453V12.6387H7.69336ZM7.40625 14.3789C7.40625 13.8477 7.64062 13.582 8.10938 13.582C8.33594 13.582 8.50977 13.6504 8.63086 13.7871C8.75586 13.9238 8.81836 14.1211 8.81836 14.3789C8.81836 14.6289 8.75586 14.8242 8.63086 14.9648C8.50586 15.1016 8.33203 15.1699 8.10938 15.1699C7.90625 15.1699 7.73828 15.1094 7.60547 14.9883C7.47266 14.8633 7.40625 14.6602 7.40625 14.3789Z" fill="#717171"></path>
									</svg>
									<b-tooltip target="all_features-17-3" placement="top">
										<div class="font12px text-left">
											Кроме базовых свойств и событий можно создать любые свои и сегментировать по ним: посещение специфических страниц, клик по ключевым кнопкам, события, передаваемые через API
										</div>
									</b-tooltip>
								</b-col>
							</b-row>
						</b-col>
					</b-row>
					<b-row class="line bordered">
						<b-col cols="5" class="d-flex align-items-center">
							<div class="dashed-underline line__title">
								<span id="all_features-18">
									Планирование рассылок
								</span>
								<b-tooltip target="all_features-18" placement="top">
									<div class="font12px text-left">
										Создайте и настройте рассылку заранее — она отправится в нужное время автоматически
									</div>
								</b-tooltip>
							</div>
						</b-col>
						<b-col cols="7">
							<b-row class="grey-text align-items-center">
								<b-col cols="4">
									
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
							</b-row>
						</b-col>
					</b-row>
					<b-row class="line bordered">
						<b-col cols="5" class="d-flex align-items-center">
							<div class="dashed-underline line__title">
								<span id="all_features-19">
									Собственный почтовый домен
								</span>
								<b-tooltip target="all_features-19" placement="top">
									<div class="font12px text-left">
										Отправляйте пользователям рассылки от имени вашего корпоративного или персонального домена (example@mydomain.ru)
									</div>
								</b-tooltip>
							</div>
						</b-col>
						<b-col cols="7">
							<b-row class="grey-text align-items-center">
								<b-col cols="4">
									Доступно с модулем<br>
									«Без брендинга»
								</b-col>
								<b-col cols="4">
									Доступно с модулем<br>
									«Без брендинга»
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
							</b-row>
						</b-col>
					</b-row>
					<b-row class="line bordered">
						<b-col cols="5" class="d-flex align-items-center">
							<div class="line__title">
								Количество писем в тарифе
							</div>
						</b-col>
						<b-col cols="7">
							<b-row class="grey-text align-items-center">
								<b-col cols="4">
									<template v-if="billingIndex < (billing.length-1)">
										{{ buisness[billingIndex].emails.toLocaleString('ru') }} писем в месяц
										<svg id="all_features-20-1" class="ml-2" width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<circle cx="8.5" cy="10.5" r="8" stroke="#C4C4C4"></circle>
											<path d="M7.69336 12.6387V12.3223C7.69336 11.8652 7.76367 11.4902 7.9043 11.1973C8.04492 10.9004 8.30664 10.5879 8.68945 10.2598C9.2207 9.81055 9.55469 9.47266 9.69141 9.24609C9.83203 9.01953 9.90234 8.74609 9.90234 8.42578C9.90234 8.02734 9.77344 7.7207 9.51562 7.50586C9.26172 7.28711 8.89453 7.17773 8.41406 7.17773C8.10547 7.17773 7.80469 7.21484 7.51172 7.28906C7.21875 7.35938 6.88281 7.49023 6.50391 7.68164L6.1582 6.89062C6.89648 6.50391 7.66797 6.31055 8.47266 6.31055C9.21875 6.31055 9.79883 6.49414 10.2129 6.86133C10.627 7.22852 10.834 7.74609 10.834 8.41406C10.834 8.69922 10.7949 8.95117 10.7168 9.16992C10.6426 9.38477 10.5312 9.58984 10.3828 9.78516C10.2344 9.97656 9.91406 10.2871 9.42188 10.7168C9.02734 11.0527 8.76562 11.332 8.63672 11.5547C8.51172 11.7773 8.44922 12.0742 8.44922 12.4453V12.6387H7.69336ZM7.40625 14.3789C7.40625 13.8477 7.64062 13.582 8.10938 13.582C8.33594 13.582 8.50977 13.6504 8.63086 13.7871C8.75586 13.9238 8.81836 14.1211 8.81836 14.3789C8.81836 14.6289 8.75586 14.8242 8.63086 14.9648C8.50586 15.1016 8.33203 15.1699 8.10938 15.1699C7.90625 15.1699 7.73828 15.1094 7.60547 14.9883C7.47266 14.8633 7.40625 14.6602 7.40625 14.3789Z" fill="#717171"></path>
										</svg>
										<b-tooltip target="all_features-20-1" placement="top">
											<div class="font12px text-left">
												В квоту писем входят ручные рассылки, дублирование сообщений пользователям на почту и уведомления операторам. После превышения квоты каждое следующее письмо будет стоить 0,05 рубля
											</div>
										</b-tooltip>
									</template>
									<template v-else>
										Индивидуальные условия
									</template>
								</b-col>
								<b-col cols="4">
									<template v-if="billingIndex < (billing.length-1)">
										{{ automatisation[billingIndex].emails.toLocaleString('ru') }} писем в месяц
										<svg id="all_features-20-2" class="ml-2" width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<circle cx="8.5" cy="10.5" r="8" stroke="#C4C4C4"></circle>
											<path d="M7.69336 12.6387V12.3223C7.69336 11.8652 7.76367 11.4902 7.9043 11.1973C8.04492 10.9004 8.30664 10.5879 8.68945 10.2598C9.2207 9.81055 9.55469 9.47266 9.69141 9.24609C9.83203 9.01953 9.90234 8.74609 9.90234 8.42578C9.90234 8.02734 9.77344 7.7207 9.51562 7.50586C9.26172 7.28711 8.89453 7.17773 8.41406 7.17773C8.10547 7.17773 7.80469 7.21484 7.51172 7.28906C7.21875 7.35938 6.88281 7.49023 6.50391 7.68164L6.1582 6.89062C6.89648 6.50391 7.66797 6.31055 8.47266 6.31055C9.21875 6.31055 9.79883 6.49414 10.2129 6.86133C10.627 7.22852 10.834 7.74609 10.834 8.41406C10.834 8.69922 10.7949 8.95117 10.7168 9.16992C10.6426 9.38477 10.5312 9.58984 10.3828 9.78516C10.2344 9.97656 9.91406 10.2871 9.42188 10.7168C9.02734 11.0527 8.76562 11.332 8.63672 11.5547C8.51172 11.7773 8.44922 12.0742 8.44922 12.4453V12.6387H7.69336ZM7.40625 14.3789C7.40625 13.8477 7.64062 13.582 8.10938 13.582C8.33594 13.582 8.50977 13.6504 8.63086 13.7871C8.75586 13.9238 8.81836 14.1211 8.81836 14.3789C8.81836 14.6289 8.75586 14.8242 8.63086 14.9648C8.50586 15.1016 8.33203 15.1699 8.10938 15.1699C7.90625 15.1699 7.73828 15.1094 7.60547 14.9883C7.47266 14.8633 7.40625 14.6602 7.40625 14.3789Z" fill="#717171"></path>
										</svg>
										<b-tooltip target="all_features-20-2" placement="top">
											<div class="font12px text-left">
												В квоту писем входят ручные рассылки, дублирование сообщений пользователям на почту и уведомления операторам. После превышения квоты каждое следующее письмо будет стоить 0,05 рубля
											</div>
										</b-tooltip>
									</template>
									<template v-else>
										Индивидуальные условия
									</template>
								</b-col>
								<b-col cols="4">
									Индивидуальные условия
								</b-col>
							</b-row>
						</b-col>
					</b-row>

					<b-row class="line color">
						<b-col cols="5" class="d-flex align-items-center">
							<div class="line__pic d-none d-lg-block mr-3">
								<g-image src="@/assets/images/components/small-10.png" fit="contain" background="transparent" position="left" width="45" height="45" alt="business" />
							</div>
							<div>
								<b>Знайте о действиях ваших клиентов</b>
							</div>
						</b-col>
						<b-col cols="7">
							<b-row class="grey-text align-items-center">
								<b-col cols="4">
									<b>Бизнес-чат</b>
								</b-col>
								<b-col cols="4">
									<b>Автоматизация</b>
								</b-col>
								<b-col cols="4">
									<b>Премиум</b>
								</b-col>
							</b-row>
						</b-col>
					</b-row>
					<b-row class="line bordered">
						<b-col cols="5" class="d-flex align-items-center">
							<div class="dashed-underline line__title">
								<span id="all_features-21">
									Сбор данных о поведении пользователей
								</span>
								<b-tooltip target="all_features-21" placement="top">
									<div class="font12px text-left">
										Отслеживайте, какие события совершали посетители вашего сайта: какие страницы посещали, на что кликали, где оставляли данные, и так далее
									</div>
								</b-tooltip>
							</div>
						</b-col>
						<b-col cols="7">
							<b-row class="grey-text align-items-center">
								<b-col cols="4">
									Базовые данные
									<svg id="all_features-21-1" class="ml-2" width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="8.5" cy="10.5" r="8" stroke="#C4C4C4"></circle>
										<path d="M7.69336 12.6387V12.3223C7.69336 11.8652 7.76367 11.4902 7.9043 11.1973C8.04492 10.9004 8.30664 10.5879 8.68945 10.2598C9.2207 9.81055 9.55469 9.47266 9.69141 9.24609C9.83203 9.01953 9.90234 8.74609 9.90234 8.42578C9.90234 8.02734 9.77344 7.7207 9.51562 7.50586C9.26172 7.28711 8.89453 7.17773 8.41406 7.17773C8.10547 7.17773 7.80469 7.21484 7.51172 7.28906C7.21875 7.35938 6.88281 7.49023 6.50391 7.68164L6.1582 6.89062C6.89648 6.50391 7.66797 6.31055 8.47266 6.31055C9.21875 6.31055 9.79883 6.49414 10.2129 6.86133C10.627 7.22852 10.834 7.74609 10.834 8.41406C10.834 8.69922 10.7949 8.95117 10.7168 9.16992C10.6426 9.38477 10.5312 9.58984 10.3828 9.78516C10.2344 9.97656 9.91406 10.2871 9.42188 10.7168C9.02734 11.0527 8.76562 11.332 8.63672 11.5547C8.51172 11.7773 8.44922 12.0742 8.44922 12.4453V12.6387H7.69336ZM7.40625 14.3789C7.40625 13.8477 7.64062 13.582 8.10938 13.582C8.33594 13.582 8.50977 13.6504 8.63086 13.7871C8.75586 13.9238 8.81836 14.1211 8.81836 14.3789C8.81836 14.6289 8.75586 14.8242 8.63086 14.9648C8.50586 15.1016 8.33203 15.1699 8.10938 15.1699C7.90625 15.1699 7.73828 15.1094 7.60547 14.9883C7.47266 14.8633 7.40625 14.6602 7.40625 14.3789Z" fill="#717171"></path>
									</svg>
									<b-tooltip target="all_features-21-1" placement="top">
										<div class="font12px text-left">
											Свойства: имя, email, email, местоположение, UTM-метки. События: зашел на сайт, написал в чат, сделал заказ и оплатил.
										</div>
									</b-tooltip>
								</b-col>
								<b-col cols="4">
									Любые данные
									<svg id="all_features-21-2" class="ml-2" width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="8.5" cy="10.5" r="8" stroke="#C4C4C4"></circle>
										<path d="M7.69336 12.6387V12.3223C7.69336 11.8652 7.76367 11.4902 7.9043 11.1973C8.04492 10.9004 8.30664 10.5879 8.68945 10.2598C9.2207 9.81055 9.55469 9.47266 9.69141 9.24609C9.83203 9.01953 9.90234 8.74609 9.90234 8.42578C9.90234 8.02734 9.77344 7.7207 9.51562 7.50586C9.26172 7.28711 8.89453 7.17773 8.41406 7.17773C8.10547 7.17773 7.80469 7.21484 7.51172 7.28906C7.21875 7.35938 6.88281 7.49023 6.50391 7.68164L6.1582 6.89062C6.89648 6.50391 7.66797 6.31055 8.47266 6.31055C9.21875 6.31055 9.79883 6.49414 10.2129 6.86133C10.627 7.22852 10.834 7.74609 10.834 8.41406C10.834 8.69922 10.7949 8.95117 10.7168 9.16992C10.6426 9.38477 10.5312 9.58984 10.3828 9.78516C10.2344 9.97656 9.91406 10.2871 9.42188 10.7168C9.02734 11.0527 8.76562 11.332 8.63672 11.5547C8.51172 11.7773 8.44922 12.0742 8.44922 12.4453V12.6387H7.69336ZM7.40625 14.3789C7.40625 13.8477 7.64062 13.582 8.10938 13.582C8.33594 13.582 8.50977 13.6504 8.63086 13.7871C8.75586 13.9238 8.81836 14.1211 8.81836 14.3789C8.81836 14.6289 8.75586 14.8242 8.63086 14.9648C8.50586 15.1016 8.33203 15.1699 8.10938 15.1699C7.90625 15.1699 7.73828 15.1094 7.60547 14.9883C7.47266 14.8633 7.40625 14.6602 7.40625 14.3789Z" fill="#717171"></path>
									</svg>
									<b-tooltip target="all_features-21-2" placement="top">
										<div class="font12px text-left">
											Абсолютно любые свойства и события. Например: сумма покупок клиента, имя менеджера, клик на любой элемент, регистрация на вашем сайте и другие
										</div>
									</b-tooltip>
								</b-col>
								<b-col cols="4">
									Любые данные
									<svg id="all_features-21-3" class="ml-2" width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="8.5" cy="10.5" r="8" stroke="#C4C4C4"></circle>
										<path d="M7.69336 12.6387V12.3223C7.69336 11.8652 7.76367 11.4902 7.9043 11.1973C8.04492 10.9004 8.30664 10.5879 8.68945 10.2598C9.2207 9.81055 9.55469 9.47266 9.69141 9.24609C9.83203 9.01953 9.90234 8.74609 9.90234 8.42578C9.90234 8.02734 9.77344 7.7207 9.51562 7.50586C9.26172 7.28711 8.89453 7.17773 8.41406 7.17773C8.10547 7.17773 7.80469 7.21484 7.51172 7.28906C7.21875 7.35938 6.88281 7.49023 6.50391 7.68164L6.1582 6.89062C6.89648 6.50391 7.66797 6.31055 8.47266 6.31055C9.21875 6.31055 9.79883 6.49414 10.2129 6.86133C10.627 7.22852 10.834 7.74609 10.834 8.41406C10.834 8.69922 10.7949 8.95117 10.7168 9.16992C10.6426 9.38477 10.5312 9.58984 10.3828 9.78516C10.2344 9.97656 9.91406 10.2871 9.42188 10.7168C9.02734 11.0527 8.76562 11.332 8.63672 11.5547C8.51172 11.7773 8.44922 12.0742 8.44922 12.4453V12.6387H7.69336ZM7.40625 14.3789C7.40625 13.8477 7.64062 13.582 8.10938 13.582C8.33594 13.582 8.50977 13.6504 8.63086 13.7871C8.75586 13.9238 8.81836 14.1211 8.81836 14.3789C8.81836 14.6289 8.75586 14.8242 8.63086 14.9648C8.50586 15.1016 8.33203 15.1699 8.10938 15.1699C7.90625 15.1699 7.73828 15.1094 7.60547 14.9883C7.47266 14.8633 7.40625 14.6602 7.40625 14.3789Z" fill="#717171"></path>
									</svg>
									<b-tooltip target="all_features-21-3" placement="top">
										<div class="font12px text-left">
											Абсолютно любые свойства и события. Например: сумма покупок клиента, имя менеджера, клик на любой элемент, регистрация на вашем сайте и другие
										</div>
									</b-tooltip>
								</b-col>
							</b-row>
						</b-col>
					</b-row>
					<b-row class="line bordered">
						<b-col cols="5" class="d-flex align-items-center">
							<div class="line__title">
								Настройка сбора данных без помощи разработчиков
							</div>
						</b-col>
						<b-col cols="7">
							<b-row class="grey-text align-items-center">
								<b-col cols="4">
									
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
							</b-row>
						</b-col>
					</b-row>
					<b-row class="line bordered">
						<b-col cols="5" class="d-flex align-items-center">
							<div class="dashed-underline line__title">
								<span id="all_features-22">
									Воронка сайта
								</span>
								<b-tooltip target="all_features-22" placement="top">
									<div class="font12px text-left">
										Разбивайте текущие процессы на этапы, визуализируйте и отслеживайте где провалы конверсии и есть узкие места
									</div>
								</b-tooltip>
							</div>
						</b-col>
						<b-col cols="7">
							<b-row class="grey-text align-items-center">
								<b-col cols="4">
									
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
							</b-row>
						</b-col>
					</b-row>
					<b-row class="line bordered">
						<b-col cols="5" class="d-flex align-items-center">
							<div class="dashed-underline line__title">
								<span id="all_features-23">
									График частоты совершения событий
								</span>
								<b-tooltip target="all_features-23" placement="top">
									<div class="font12px text-left">
										Отслеживайте, сколько раз совершалось то или иное событие по часам, дням, неделям для определения популярности разделов или функций
									</div>
								</b-tooltip>
							</div>
						</b-col>
						<b-col cols="7">
							<b-row class="grey-text align-items-center">
								<b-col cols="4">
									
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
							</b-row>
						</b-col>
					</b-row>

					<b-row class="line color">
						<b-col cols="5" class="d-flex align-items-center">
							<div class="line__pic d-none d-lg-block mr-3">
								<g-image src="@/assets/images/components/small-9.png" fit="contain" background="transparent" position="left" width="45" height="45" alt="business" />
							</div>
							<div>
								<b>Интегрируйте Carrot quest в свою экосистему</b>
							</div>
						</b-col>
						<b-col cols="7">
							<b-row class="grey-text align-items-center">
								<b-col cols="4">
									<b>Бизнес-чат</b>
								</b-col>
								<b-col cols="4">
									<b>Автоматизация</b>
								</b-col>
								<b-col cols="4">
									<b>Премиум</b>
								</b-col>
							</b-row>
						</b-col>
					</b-row>
					<b-row class="line bordered">
						<b-col cols="5" class="d-flex align-items-center">
							<div class="dashed-underline line__title">
								<span id="all_features-24">
									Интеграция с почтой
								</span>
								<b-tooltip target="all_features-24" placement="top">
									<div class="font12px text-left">
										Получайте и отвечайте на письма из вашей корпоративной почты прямо в разделе Диалоги
									</div>
								</b-tooltip>
							</div>
						</b-col>
						<b-col cols="7">
							<b-row class="grey-text align-items-center">
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
							</b-row>
						</b-col>
					</b-row>
					<b-row class="line bordered">
						<b-col cols="5" class="d-flex align-items-center">
							<div class="dashed-underline line__title">
								<span id="all_features-25">
									Соцсети: Facebook, ВКонтакте
								</span>
								<b-tooltip target="all_features-25" placement="top">
									<div class="font12px text-left">
										Подключите ваши страницы в соцсетях и отвечайте на сообщения из них в разделе Диалоги
									</div>
								</b-tooltip>
							</div>
						</b-col>
						<b-col cols="7">
							<b-row class="grey-text align-items-center">
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
							</b-row>
						</b-col>
					</b-row>
					<b-row class="line bordered">
						<b-col cols="5" class="d-flex align-items-center">
							<div class="dashed-underline line__title">
								<span id="all_features-26">
									Мессенджеры: Viber, Telegram
								</span>
								<b-tooltip target="all_features-26" placement="top">
									<div class="font12px text-left">
										Отвечайте на сообщения из Telegram или Viber в разделе Диалоги
									</div>
								</b-tooltip>
							</div>
						</b-col>
						<b-col cols="7">
							<b-row class="grey-text align-items-center">
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
							</b-row>
						</b-col>
					</b-row>
					<b-row class="line bordered">
						<b-col cols="5" class="d-flex align-items-center">
							<div class="line__title">
								Zoom, Calendly, Slack, Яндекс Диалоги
							</div>
						</b-col>
						<b-col cols="7">
							<b-row class="grey-text align-items-center">
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
							</b-row>
						</b-col>
					</b-row>
					<b-row class="line bordered">
						<b-col cols="5" class="d-flex align-items-center">
							<div class="dashed-underline line__title">
								<span id="all_features-28">
									CMS: 1С-Битрикс, InSales, OpenCart, PrestaShop, WordPress
								</span>
								<b-tooltip target="all_features-28" placement="top">
									<div class="font12px text-left">
										Собирайте всю информацию о действиях клиентов вашего интернет-магазина без дополнительных настроек
									</div>
								</b-tooltip>
							</div>
						</b-col>
						<b-col cols="7">
							<b-row class="grey-text align-items-center">
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
							</b-row>
						</b-col>
					</b-row>
					<b-row class="line bordered">
						<b-col cols="5" class="d-flex align-items-center">
							<div class="dashed-underline line__title">
								<span id="all_features-29">
									CRM: amoCRM, Битрикс24, retailCRM
								</span>
								<b-tooltip target="all_features-29" placement="top">
									<div class="font12px text-left">
										Синхронизируйте данные о контактах и сделках между вашей CRM и Carrot quest
									</div>
								</b-tooltip>
							</div>
						</b-col>
						<b-col cols="7">
							<b-row class="grey-text align-items-center">
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
							</b-row>
						</b-col>
					</b-row>
					<b-row class="line bordered">
						<b-col cols="5" class="d-flex align-items-center">
							<div class="dashed-underline line__title">
								<span id="all_features-30">
									Аналитика: Mixpanel, Roistat, Яндекс Метрика, Google Analytics
								</span>
								<b-tooltip target="all_features-30" placement="top">
									<div class="font12px text-left">
										Отправляйте данные о событиях пользователей из Carrot quest для более удобного анализа
									</div>
								</b-tooltip>
							</div>
						</b-col>
						<b-col cols="7">
							<b-row class="grey-text align-items-center">
								<b-col cols="4">
									
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
							</b-row>
						</b-col>
					</b-row>
					<b-row class="line bordered">
						<b-col cols="5" class="d-flex align-items-center">
							<div class="dashed-underline line__title">
								<span id="all_features-31">
									Тикетные системы: Zendesk, Omnidesk, Usedesk
								</span>
								<b-tooltip target="all_features-31" placement="top">
									<div class="font12px text-left">
										Создавайте тикеты прямо из раздела Диалоги
									</div>
								</b-tooltip>
							</div>
						</b-col>
						<b-col cols="7">
							<b-row class="grey-text align-items-center">
								<b-col cols="4">
									
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
							</b-row>
						</b-col>
					</b-row>
					<b-row class="line">
						<b-col cols="5" class="d-flex align-items-center">
							<div class="dashed-underline line__title">
								<span id="all_features-32">
									API
								</span>
								<b-tooltip target="all_features-32" placement="top">
									<div class="font12px text-left">
										Используйте API Carrot quest, чтобы настраивать более сложные интеграции с бэкендом вашего сервиса или сайта
									</div>
								</b-tooltip>
							</div>
						</b-col>
						<b-col cols="7">
							<b-row class="grey-text align-items-center">
								<b-col cols="4">
									
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
							</b-row>
						</b-col>
					</b-row>
					
					<b-row class="line color">
						<b-col cols="5" class="d-flex align-items-center">
							<div class="line__pic d-none d-lg-block mr-3">
								<g-image src="@/assets/images/components/small-49.png" fit="contain" background="transparent" position="left" width="45" height="45" alt="business" />
							</div>
							<div>
								<b>Поддержка, помощь и другие услуги</b>
							</div>
						</b-col>
						<b-col cols="7">
							<b-row class="grey-text align-items-center">
								<b-col cols="4">
									<b>Бизнес-чат</b>
								</b-col>
								<b-col cols="4">
									<b>Автоматизация</b>
								</b-col>
								<b-col cols="4">
									<b>Премиум</b>
								</b-col>
							</b-row>
						</b-col>
					</b-row>
					<b-row class="line bordered">
						<b-col cols="5" class="d-flex align-items-center">
							<div class="line__title">
								Дружелюбная поддержка в чате
							</div>
						</b-col>
						<b-col cols="7">
							<b-row class="grey-text align-items-center">
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
							</b-row>
						</b-col>
					</b-row>
					<b-row class="line bordered">
						<b-col cols="5" class="d-flex align-items-center">
							<div class="line__title">
								Анализ вашего сайта и предложение гипотез роста от эксперта
							</div>
						</b-col>
						<b-col cols="7">
							<b-row class="grey-text align-items-center">
								<b-col cols="4">
									
								</b-col>
								<b-col cols="4">
									
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
							</b-row>
						</b-col>
					</b-row>
					<b-row class="line bordered">
						<b-col cols="5" class="d-flex align-items-center">
							<div class="line__title">
								Персональная помощь в настройке сервиса
							</div>
						</b-col>
						<b-col cols="7">
							<b-row class="grey-text align-items-center">
								<b-col cols="4">
									
								</b-col>
								<b-col cols="4">
									
								</b-col>
								<b-col cols="4">
									<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 6.5L6 11.5L16 1.5" stroke="#717171" stroke-width="2"></path>
									</svg>
								</b-col>
							</b-row>
						</b-col>
					</b-row>


					<b-row class="color registration">
						<b-col cols="5">
							<div class="h4">
								Зарегистрируйтесь и попробуйте сервис бесплатно
							</div>
							Заплатите только если сервис понравится. Банковская карта не требуется.
						</b-col>
						<b-col cols="7">
							<div class="row">
								<b-col cols="4">
									<p class="mb-1">
										Бизнес-чат
									</p>
									<template v-if="billingIndex < (billing.length-1)">
										<b>
											{{ ( buisness[billingIndex].price * ratio[ratioIndex] + parseInt(noBranding) ).toLocaleString('ru') }} ₽ в месяц
										</b>
										<span v-if="parseInt(ratioIndex)" class="beforeSale grey-text ml-2">
											{{ buisness[billingIndex].price.toLocaleString('ru') }} ₽
										</span>
									</template>
									<template v-else>
										<a href="#" class="open-chat" v-on:click.prevent>Связаться с нами в чате</a>
									</template>
									<b-button :href="'/panel/register/?cq_event=clickedOnStartTrial&cq_event_plan=busineschat&cq_event_traffic=' + billing[billingIndex]" variant="outline-primary" class="font14px py-2 mt-3 w-100">
										Выбрать этот тариф
									</b-button>
								</b-col>
								<b-col cols="4" class="automatization">
									<p class="mb-1">
										Автоматизация
									</p>
									<template v-if="billingIndex < (billing.length-1)">
										<b>
											{{ ( automatisation[billingIndex].price * ratio[ratioIndex] + parseInt(noBranding) ).toLocaleString('ru') }} ₽ в месяц
										</b>
										<span v-if="parseInt(ratioIndex)" class="beforeSale grey-text ml-2">
											{{ automatisation[billingIndex].price.toLocaleString('ru') }} ₽
										</span>
									</template>
									<template v-else>
										<a href="#" class="open-chat" v-on:click.prevent>Связаться с нами в чате</a>
									</template>
									<b-button :href="'/panel/register/?cq_event=clickedOnStartTrial&cq_event_plan=automatization&cq_event_traffic=' + billing[billingIndex]" variant="primary" class="font14px py-2 mt-3 w-100">
										Выбрать этот тариф
									</b-button>
								</b-col>
								<b-col cols="4">
									<p class="mb-1">
										Премиум
									</p>
									<b>
										Индивидуальная цена
									</b>
									<b-button :href="'/panel/register/?cq_event=clickedOnStartTrial&cq_event_plan=premium&cq_event_traffic=' + billing[billingIndex]" variant="outline-primary" v-on:click.prevent class="open-chat font14px py-2 mt-3 w-100">
										Связаться с нами
									</b-button>
								</b-col>
							</div>
						</b-col>
					</b-row>
				</b-col>
			</b-row>
		</b-container>

		<Consultation 
			title="Запишитесь на консультацию по тарифам и демонстрацию сервиса" 
			text="За 30 минут мы расскажем, в чем ключевые отличия тарифов и расскажем, как решить вашу задачу"
			pic="medium-8.png"
			alt="Есть идеи!"
			bg="#fff3e6"
		/>

		<FAQ
			title="Часто задаваемые вопросы"
		   	:items="this.faq"
		/>

	</Layout>
</template>

<script>
	import Contacts 		from '~/components/Contacts.vue'
	import FAQ 				from '~/components/FAQ.vue'
	import Consultation 	from '~/components/Consultation.vue'
	import { BTooltip , BFormCheckbox , BFormCheckboxGroup } 	from 'bootstrap-vue'

	export default {
		components: {
			Contacts,
			FAQ,
			Consultation,
			BTooltip, BFormCheckbox, BFormCheckboxGroup
		},
		metaInfo() {
			return {
				script: [
					{ 
						type: 'application/ld+json', 
						json: {
							"@context": "https://schema.org",
							"@type": "FAQPage",
							"mainEntity": this.faq
						}
					}
				]
			}
		},
		data() {
			return {
				//Делаем в HEAD
				metaTitle: 'Тарифы | Стоимость сервиса Carrot quest. 20% скидки при оплате за год',
				metaDescription: 'Полный комплект сервисов по автоматизации маркетинга и коммуникаций с пользователями от 800 ₽ в месяц',
				metaCanonical: 'https://www.carrotquest.io/price/',
				metaImage: 'https://www.carrotquest.io/assets/images/cover/price.jpg',

				//Калькулятор
				ratio:  [ 1 , 0.9 , 0.85 , 0.8 ],
				ratioIndex: 3,
				billing: [
					1000,
					10000,
					30000,
					60000,
					100000,
					150000,
					200000,
					300000,
					400000,
					500000,
					700000,
					900000,
					1000000,
					1500000,
					2000000,
					2500000,
					0
				],
				buisness: [
					{ emails: 250, 		price: 1000 	},
					{ emails: 1250, 	price: 2100 	},
					{ emails: 5000, 	price: 4200 	},
					{ emails: 7500, 	price: 7000 	},
					{ emails: 10000, 	price: 10500 	},
					{ emails: 15000, 	price: 14000 	},
					{ emails: 20000, 	price: 18200 	},
					{ emails: 25000, 	price: 25200 	},
					{ emails: 30000, 	price: 33600 	},
					{ emails: 40000, 	price: 38500 	},
					{ emails: 50000, 	price: 49000 	},
					{ emails: 60000, 	price: 63000 	},
					{ emails: 70000, 	price: 70000 	},
					{ emails: 95000, 	price: 105000 	},
					{ emails: 125000, 	price: 140000 	},
					{ emails: 160000, 	price: 175000 	},
					{ emails: 0, 		price: 0 		}
				],
				automatisation: [
					{ emails: 500, 		price: 1500 	},
					{ emails: 2500, 	price: 4500 	},
					{ emails: 10000, 	price: 9000 	},
					{ emails: 15000, 	price: 15000 	},
					{ emails: 20000, 	price: 22500 	},
					{ emails: 30000, 	price: 30000 	},
					{ emails: 40000, 	price: 39000 	},
					{ emails: 50000, 	price: 54000 	},
					{ emails: 60000, 	price: 72000 	},
					{ emails: 80000, 	price: 82500 	},
					{ emails: 100000, 	price: 105000 	},
					{ emails: 120000, 	price: 135000 	},
					{ emails: 140000, 	price: 150000 	},
					{ emails: 190000, 	price: 225000 	},
					{ emails: 250000, 	price: 300000 	},
					{ emails: 320000, 	price: 375000 	},
					{ emails: 0, 		price: 0 		}
				],
				billingIndex: 1,
				noBranding: 0,
				showMoreBuisness: false,
				showMoreAutomatization: false,
				showMorePremium: false,

				//FAQ
				faq: [
					{
						'@type': "Question",
						name: 'Чем отличаются тарифы? Какой мне подойдёт? ',
						acceptedAnswer: {
							'@type': 'Answer',
							text: '<p> Стоимость тарифа зависит от трафика на вашем сайте. В зависимости от тарифа вам предоставляется квота писем, которые вы можете отправлять через сервис. Функциональные возможности Carrot quest одинаковы для всех тарифов. </p> <p> Вы можете дополнить инструменты тарифа, подключив дополнительные модули. </p>'
						}
					},
					{
						'@type': "Question",
						name: 'Я не планирую пользоваться всеми инструментами. Можно подключить только чат? ',
						acceptedAnswer: {
							'@type': 'Answer',
							text: '<p> Нет, Carrot quest — это комплексный инструмент, и мы верим, что вы получаете максимальную пользу, используя весь набор инструментов. Если вам нужна консультация по инструментам, напишите нам в чат, мы подскажем. </p>'
						}
					},
					{
						'@type': "Question",
						name: 'Как считаются уникальные пользователи? ',
						acceptedAnswer: {
							'@type': 'Answer',
							text: '<p> Уникальный посетитель — это посетитель сайта либо загруженный пользователь с определенным набором параметров: cookies, браузер, ОС и другие свойства или события. Если один и тот же человек зашел один раз вчера и два раза сегодня — это все равно один уникальный посетитель. </p> <p> <a href=https://help.carrotquest.io/article/217>Подробнее</a> о подсчёте уникальных посетителей. </p>'
						}
					},
					{
						'@type': "Question",
						name: 'Сколько писем можно отправить на каждом тарифе? ',
						acceptedAnswer: {
							'@type': 'Answer',
							text: '<p>В каждый тариф включена квота писем, которые вы можете рассылать:</p> <ul> <li>1000 уникальных посетителей = 500 писем в месяц</li> <li>10 000 уникальных посетителей = 2500 писем в месяц</li> <li>30 000 уникальных посетителей = 10 000 писем в месяц</li> <li>60 000 уникальных посетителей = 15 000 писем в месяц</li> <li>100 000 уникальных посетителей = 20 000 писем в месяц</li> <li>150 000 уникальных посетителей = 30 000 писем в месяц</li> <li>200 000 уникальных посетителей = 40 000 писем в месяц</li> <li>300 000 уникальных посетителей = 50 000 писем в месяц</li> </ul> <p> Если вы превысите квоту, то за каждую следующую 1000 писем вы заплатите 50 рублей. </p>'
						}
					},
					{
						'@type': "Question",
						name: 'Что если у меня несколько сайтов? ',
						acceptedAnswer: {
							'@type': 'Answer',
							text: '<p> Вы можете подключить все свои сайты к одному аккаунту. К каждому сайту будет отдельный доступ и группа операторов/администраторов. Каждый сайт оплачивается отдельно. </p> <p> Если сайты находятся в рамках одного домена, рекомендуем на каждый из них разместить один и тот же код сервиса, тогда оплата будет как за один сайт. </p>'
						}
					},
					{
						'@type': "Question",
						name: 'Что произойдёт, если я превышу квоты по тарифу? ',
						acceptedAnswer: {
							'@type': 'Answer',
							text: '<p> Работа сервиса не остановится. Мы пришлём вам счет на перерасход, который считается пропорционально вашему тарифу, или предложим перейти на новый тариф. </p> <p> Мы всегда отталкиваемся от более выгодного для вас варианта. </p>'
						}
					},
					{
						'@type': "Question",
						name: 'Как можно оплатить сервис? ',
						acceptedAnswer: {
							'@type': 'Answer',
							text: '<ul> <li> По карте Visa, Mastercard<br> <span> Если вы оплатили сервис картой, подключается автоплатёж, и деньги автоматически спишутся в конце оплаченного периода. Так вы не пропустите случайно срок оплаты и не останетесь без инструментов сервиса.</span> </li> <li>Через электронный кошелёк</li> <li>Оплата через банк</li> <li>По безналичному расчету</li> </ul>'
						}
					}
				]
			}
		}
	}	
</script>

<style lang="scss">	
	@import "~/assets/scss/base.scss";
	@import "~bootstrap/scss/tooltip";
	@import "~bootstrap-vue/src/components/tooltip/index";

	.page-price {
		.calculate .container , .contacts , .all_features {
			max-width: 1320px;
		}
		.dashed-underline {
			span {
				cursor: pointer;
				border-bottom: 1px dashed #9b9b9b;
				&:hover {
					border-bottom: 1px dashed #fff;
				}
			}
		}
		.beforeSale {
			text-decoration: line-through;
		}
		.calculate {
			background-color: #F3F3FF;
			.container {
				margin-bottom: 4rem;
			}
			.calc {
				&__select {
					padding: 0 1.25rem 1.5rem 0;
					&__time {
						.custom-control-label {
							line-height: 32px;
							&:hover{
								cursor: pointer;
							}
							&::before , &::after {
								margin-top:3px;
							}
						}
						span {
							display: inline-block;
							font-size: 12px;
							background: no-repeat right url("data:image/svg+xml,%3Csvg width='92' height='34' viewBox='0 0 92 34' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg filter='url(%23filter0_d)'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.6416 6.42925L6.50004 13.4292C4.49999 15.3896 4.49999 18.6104 6.50004 20.5708L13.6416 27.5708C14.5763 28.4869 15.8328 29 17.1416 29H81.9996C84.7611 29 86.9996 26.7614 86.9996 24V10C86.9996 7.23858 84.7611 5 81.9996 5H17.1416C15.8328 5 14.5763 5.51314 13.6416 6.42925ZM10.8571 19C11.9616 19 12.8571 18.1046 12.8571 17C12.8571 15.8954 11.9616 15 10.8571 15C9.75249 15 8.85706 15.8954 8.85706 17C8.85706 18.1046 9.75249 19 10.8571 19Z' fill='%23FBFBFB'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_d' x='0' y='0' width='91.9996' height='34' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'/%3E%3CfeOffset/%3E%3CfeGaussianBlur stdDeviation='2.5'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'/%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E%0A");
							padding: 0 8px 0 16px;
						}
						.year span {
							background: no-repeat right url("data:image/svg+xml,%3Csvg width='82' height='24' viewBox='0 0 82 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8.64162 1.42925L1.50004 8.42925C-0.500013 10.3896 -0.500013 13.6104 1.50004 15.5708L8.64162 22.5708C9.57627 23.4869 10.8328 24 12.1416 24H76.9996C79.7611 24 81.9996 21.7614 81.9996 19V5C81.9996 2.23858 79.7611 0 76.9996 0H12.1416C10.8328 0 9.57626 0.513136 8.64162 1.42925ZM5.85706 14C6.96163 14 7.85706 13.1046 7.85706 12C7.85706 10.8954 6.96163 10 5.85706 10C4.75249 10 3.85706 10.8954 3.85706 12C3.85706 13.1046 4.75249 14 5.85706 14Z' fill='%23FF6600'/%3E%3C/svg%3E%0A");
							padding: 0 4px 0 18px;
							color: #fff;
						}
					}
					.add-ons {
						.custom-checkbox {
							display: inline-block;
							line-height: 1.5rem;
							* {
								cursor: pointer;
							}
						}
						svg {
							margin-top: -4px;
						}
					}
					.peace {
						display: block;
						padding: 1rem;
						border-radius: 5px;
						border: 1px dashed #c6c6c6;
					}
					&__mobile {
						font-size: 18px;
						border: 1px solid #D5DDF3;
						border-radius: 5px;
					}
				}
				&__rate {
					.row__box {
						background-color: #fff;
						border-radius: 5px;
						box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
						padding: 1.5rem 20px 0;
						margin-left: -20px;
						margin-right: -20px;
					}
					&__price {
						height: 50px;
						margin-bottom: 1rem;
					}
					.automatization::before , .premium::before {
						content: " ";
						display: block;
						position: absolute;
						left: 0;
						top: -1.5rem;
						bottom: 0;
						width: 1px;
						background-color: #E8E8E8;
					}
					.show {
						text-decoration: none;
						border-bottom: 1px dashed #FF7C16;
						position: relative;
						display: inline-block;
						&::after {
							content: " ";
							display: block;
							position: absolute;
							right: -16px;
							top: 10px;
							width: 10px;
							height: 6px;
							background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%23FF6600'/%3E%3C/svg%3E%0A");
						}
					}
					.text {
						margin-bottom: 2rem;
						li {
							margin: 0.75rem 0;
						}
					}
					.row:last-child {
						padding: 1rem;
						border-top: 1px solid #e8e8e8;
						text-align: center;
					}
				}
				
				@media (min-width: 1320px) {
					&__top {
						height: 220px;
					}
					&__select {
						width: 310px;
						float: left;
					}
					&__rate {
						float: right;
						width: 940px;
						padding-right: 20px;
					}
				}
				@media (max-width: 1319.98px) {
					&__top {
						height: 220px;
					}
					&__select {
						width: 310px;
						float: left;
					}
					&__rate {
						float: right;
						width: 900px;
						padding-right: 20px;
					}
				}
				@media (max-width: 1199.98px) {
					&__select {
						width: 100%;
						float: none;
						&__lids {
							margin-top: 16px;
							br {
								display: none;
							}
						}
					}
					&__rate {
						width: 100%;
						float: none;
						padding-left: 20px;
						padding-right: 20px;
					}
				}
				@media (max-width: 991.98px) {
					&__rate {
						.row__box {
							background-color: transparent;
							box-shadow: none;

							&>.row>.col-12 {
								box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
								background-color: #fff;
								padding: 24px 20px;
								border-radius: 5px;
								margin-bottom: 2rem;
								&::before {
									display: none;
								}
								.calc__top {
									height: auto;
									margin-bottom: 1rem;
								}
							}
						}
						.row:first-child {
							padding-top: 0;
							padding-bottom: 0;
						}
						.row:last-child {
							padding: 0;
							border-top: none;
							text-align: center;
						}
					}
				}
				@media (max-width: 575.98px) {
					&__select {
						padding: 0;
					}
				}
			}
		}

		.contacts {
			margin-bottom: 0;
			&__box {
				background-color: #FFF3E6;
				border-radius: 5px;
				padding: 3rem 20px;
				border-radius: 5px;
			}
			&__hrefs {
				width: 100%;
				text-align: center;
			}
			@media (max-width: 767.98px) {
				padding: 1.25rem;
				&__hrefs {
					flex-wrap: wrap;
					.flex-grow-1 {
						width: 100%;
					}
				}
			}
			@media (max-width: 1199.98px) {
				&__hrefs .flex-grow-1 {
					text-align: left;
				}
			}
		}

		.all_features {
			padding-top: 4rem;
			.color {
				border-radius: 5px;
				padding: 16px !important;
				& , &:hover {
					background-color: #F8F8FF !important;
				}
			}
			.bordered {
				border-bottom: 1px solid #EDEDED;
				
			}
			.line {
				padding: 8px 16px;
				&::after {
					display: block;
					content: "";
					clear: both;
				}
				&:hover {
					background-color: #FCFCFF;
				}

				.line__title , .col-4 {
					height: 44px;
					display: flex;
					align-items: center;
					padding-right: 0;
				}
			}
			.registration {
				margin-top: 4rem;
				padding: 2rem 20px !important;
			}
			
			@media (max-width: 991.98px) {
				overflow-x: scroll;
				scroll-snap-type: x mandatory;
				max-width: 100%;
				.add_scroll {
					min-width: 920px;
					position: relative;
					padding-left: 0;
					padding-right: 0;
				}
				.col-5 {
					scroll-snap-align: start;
				}
				.col-4 {
					scroll-snap-align: center;
				}
			}
		}

		.calculate {
			ul {
				li {
					&:last-child {
						border-bottom: 0;
					}
					&::before {
						content: "";
						width: 9px;
						height: 5px;
						border: 1px solid #333;
						background-color: transparent;
						border-top: none;
						border-right: none;
						transform: rotate(-45deg);
						margin-top: 0.5rem;
					}
				}
			}
		}
	}
</style>
