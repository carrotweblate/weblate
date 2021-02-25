<template>
	<Layout :header="true" :footer="true"  class="page introduction-carrotquest-page">

		<div class="blue">
			<div class="hero">
				<b-container>
					<b-row class="align-items-center">
						<b-col lg="8">
							<h1>
								Внедрим автоматизацию маркетинга и&nbsp;продаж для вашего сайта на&nbsp;базе Carrot quest
							</h1>
							<p class="py-3">
								Разработаем и&nbsp;реализуем стратегии коммуникации с&nbsp;вашими пользователями. Увеличим конверсию на&nbsp;каждом этапе воронки
							</p>
							<b-button v-on:click="showModal" href="#" variant="primary" class="px-4">Отправить заявку на&nbsp;внедрение</b-button>
						</b-col>
					</b-row>
					<g-image class="hero__pic d-none d-lg-block" src="@/assets/images/introduction-carrotquest/hero.png" width="872" quality="100" alt="Hero" style="max-width: 436px;" />
				</b-container>
			</div>

			<b-container class="blue__cases d-none d-lg-block">
				<b-col cols="12" class="mb-4">
					<h2>
						Более 450 проектов запустили с&nbsp;2014 года
					</h2>
				</b-col>
				<div class="blue__cases__box">
					<Case v-for="item in cases" :key="item.logo"
						:number="item.number" 
						:logo='item.logo'
						:title="item.title"
						:text="item.text" 
						:href="item.href" 
					/>
					<Case v-for="item in cases" :key="item.logo"
						:number="item.number" 
						:logo='item.logo'
						:title="item.title"
						:text="item.text" 
						:href="item.href" 
					/>
				</div>
			</b-container>
		</div>

		<!-- Трудности -->
		<b-container class="hard">
			<b-row>
				<b-col lg="10" xl="8">
					<h2 class="h1">
						С&nbsp;какими трудностями сталкиваются компании в&nbsp;организации онлайн‑продаж:
					</h2>
				</b-col>
			</b-row>
			<b-row class="font20px">
				<b-col md="6" lg="4">
					<div class="hard__box" style="background-color: #FFF1E5;">
						Оборот трафика увеличивается, а&nbsp;прибыль нет 🤔
					</div>
				</b-col>
				<b-col md="6" lg="4">
					<div class="hard__box" style="background-color: #EDEDFD;">
						Менеджеры тратят много времени на&nbsp;квалификацию пользователей и 👻 нецелевых клиентов 
					</div>
				</b-col>
				<b-col md="6" lg="4">
					<div class="hard__box" style="background-color: #FEE6EC;">
						Клиенты 😾 не&nbsp;возвращаются за&nbsp;повторными покупками
					</div>
				</b-col>
				<b-col md="6" lg="4">
					<div class="hard__box" style="background-color: #F0FDF0;">
						Конверсия в&nbsp;заявку или в&nbsp;первую 📦 покупку не&nbsp;растет
					</div>
				</b-col>
				<b-col md="6" lg="4">
					<div class="hard__box" style="background-color: #FEF8EA;">
						Пользователи не&nbsp;всегда завершают регистрацию 🔥 или оформляют заказ
					</div>
				</b-col>
			</b-row>
			<b-row>
				<b-col lg="10" xl="8" class="mt-4">
					<p>
						Решение этих узких мест в&nbsp;процессах поможет вам зарабатывать больше денег и&nbsp;вывести компанию на&nbsp;новый уровень
					</p>
				</b-col>
			</b-row>
		</b-container>

		<Contacts 
			title="Хотите обсудить свой проект? Свяжитесь с нами"
			bg="#FFF3E6"
			consultation
		/>

		<!-- Как мы решаем эти задачи -->
		<b-container class="success text">
			<b-row class="mb-4">
				<b-col lg="10" xl="8">
					<h2 class="h1">
						Как мы&nbsp;решаем эти задачи
					</h2>
				</b-col>
			</b-row>
			<b-row class="mb-5">
				<b-col lg="4" class="order-lg-1 mb-3">
					<h3 class="h4 mb-3">
						Собираем данные о&nbsp;пользователях
					</h3>
					<p>
						В&nbsp;специальной CRM для онлайн-бизнеса в&nbsp;реальном времени сохраняется каждый лид с&nbsp;вашего сайта, со&nbsp;всей историей его действий и&nbsp;коммуникаций с&nbsp;ним, используйте это для дальнейшего общения
					</p>
					<b-button v-on:click="showModal" href="#" variant="primary" class="px-4">Хочу решить эту задачу</b-button>
				</b-col>
				<b-col lg="8" class="order-lg-2">
					<g-image src="@/assets/images/introduction-carrotquest/1.png" width="1440" quality="100" alt="Собираем данные о пользователях" />
				</b-col>
			</b-row>
			<b-row class="mb-5">
				<b-col lg="4" class="order-lg-2 mb-3">
					<h3 class="h4 mb-3">
						Увеличиваем конверсию на 20-100% с&nbsp;помощью поп-апов
					</h3>
					<ul>
						<li>Эффективность зависит от&nbsp;ниши и&nbsp;текущей проработки форм лидогенерации</li>
						<li>Не&nbsp;показываем одному пользователю несколько поп-апов за&nbsp;раз. Показываем тогда, когда это актуально и&nbsp;эффективно</li>
						<li>Следим, чтобы поп-апы не&nbsp;снижали поведенческие метрики (процент отказов, время первой сессии, глубина просмотров)</li>
						<li>Проводим А/Б тесты офферов в&nbsp;поп-апах, чтобы увеличить конверсию</li>
						<li>Стилизуем под ваш дизайн</li>
					</ul>
					<b-button v-on:click="showModal" href="#" variant="primary" class="px-4">Хочу решить эту задачу</b-button>
				</b-col>
				<b-col lg="8" class="order-lg-1">
					<g-image src="@/assets/images/introduction-carrotquest/2.png" width="1440" quality="100" alt="Увеличиваемконверсиюна 20-100% с помощью поп-апов" />
				</b-col>
			</b-row>
			<b-row class="mb-5">
				<b-col lg="4" class="order-lg-1 mb-3">
					<h3 class="h4 mb-3">
						Поднимаем ретеншн и&nbsp;повторные визиты с&nbsp;помощью триггерных рассылок
					</h3>
					<ul>
						<li>Так настроим триггерное письмо, чтобы оно пришло в&nbsp;нужный момент и&nbsp;подходило под запрос пользователя. Это увеличит Open Rate и&nbsp;Click Rate</li>
						<li>Вставляем в&nbsp;письма блоки с&nbsp;похожими/рекомендованными товарами при наличии их&nbsp;на&nbsp;сайте</li>
						<li>Увеличиваем выручку от&nbsp;email-канала за&nbsp;счет тестирования разных гипотез и&nbsp;А/Б тестов</li>
					</ul>
					<b-button v-on:click="showModal" href="#" variant="primary" class="px-4">Хочу решить эту задачу</b-button>
				</b-col>
				<b-col lg="8" class="order-lg-2">
					<g-image src="@/assets/images/introduction-carrotquest/3.png" width="1440" quality="100" alt="Поднимаем ретеншн и повторные визиты с помощью триггерных рассылок" />
				</b-col>
			</b-row>
			<b-row class="mb-5">
				<b-col lg="4" class="order-lg-2 mb-3">
					<h3 class="h4 mb-3">
						Настраиваем бизнес-чат на&nbsp;вашем сайте и&nbsp;обучаем команду менеджеров
					</h3>
					<p>
						Продавайте с&nbsp;помощью онлайн-чата на&nbsp;сайте, консультируйте клиентов о&nbsp;товарах и&nbsp;услугах
					</p>
					<ul>
						<li>Помогаем объединить все каналы коммуникаций</li>
						<li>Используем триггерные сообщения в&nbsp;чате для повышения конверсии в&nbsp;начало диалога</li>
						<li>Консультируем по&nbsp;внедрению чата в&nbsp;компанию, учитывая бизнес-процессы</li>
					</ul>
					<b-button v-on:click="showModal" href="#" variant="primary" class="px-4">Хочу решить эту задачу</b-button>
				</b-col>
				<b-col lg="8" class="order-lg-1">
					<g-image src="@/assets/images/introduction-carrotquest/4.png" width="1440" quality="100" alt="Настраиваем бизнес-чат на вашем сайте и обучаем команду менеджеров" />
				</b-col>
			</b-row>
			<b-row>
				<b-col lg="4" class="order-lg-1 mb-3">
					<h3 class="h4 mb-3">
						Увеличиваем количество качественных лидов с&nbsp;помощью квалифицирующего лид-бота
					</h3>
					<ul class="mb-4">
						<li>Увеличиваем конверсию в&nbsp;лида на&nbsp;20-100% в&nbsp;зависимости от&nbsp;ниши (по&nbsp;аналогии с&nbsp;поп-апами)</li>
						<li>Настраиваем лид-бот кампанию для квалификации по&nbsp;различным сегментам</li>
					</ul>
					<b-button v-on:click="showModal" href="#" variant="primary" class="px-4">Хочу решить эту задачу</b-button>
				</b-col>
				<b-col lg="8" class="order-lg-2">
					<g-image src="@/assets/images/introduction-carrotquest/5.png" width="1440" quality="100" alt="Увеличиваем количество качественных лидов с помощью квалифицирующего лид-бота" />
				</b-col>
			</b-row>
		</b-container>

		<!-- Что мы делаем во время внедрения -->
		<b-container class="steps">
			<b-row class="mb-4">
				<b-col lg="10" xl="8">
					<h2>
						Что мы&nbsp;делаем во&nbsp;время внедрения
					</h2>
				</b-col>
			</b-row>
			<b-row class="font20px">
				<b-col lg="4">
					<div class="steps__box steps__box-1">
						<g-image src="@/assets/images/components/small-22.png" class="steps__box__pic" height="72" fit="inside" alt="1 этап" />
						<p>
							<b>1&nbsp;этап</b>
						</p>
						<p>
							Знакомимся и&nbsp;определяем задачи и&nbsp;направления сценариев
						</p>
					</div>
				</b-col>
				<b-col lg="4">
					<div class="steps__box steps__box-1">
						<g-image src="@/assets/images/components/small-23.png" class="steps__box__pic" height="72" fit="inside" alt="2 этап" />
						<p>
							<b>2&nbsp;этап</b>
						</p>
						<p>
							Анализируем сайт, метрики, созваниваемся в&nbsp;скайпе
						</p>
					</div>
				</b-col>
				<b-col lg="4">
					<div class="steps__box steps__box-1">
						<g-image src="@/assets/images/components/small-21.png" class="steps__box__pic" height="72" fit="inside" alt="3 этап" />
						<p>
							<b>3&nbsp;этап</b>
						</p>
						<p>
							Настройка сценариев и&nbsp;подготовка креативов
						</p>
					</div>
				</b-col>
				<b-col lg="4">
					<div class="steps__box steps__box-1">
						<g-image src="@/assets/images/components/small-11.png" class="steps__box__pic" height="72" fit="inside" alt="4 этап" />
						<p>
							<b>4&nbsp;этап</b>
						</p>
						<p>
							Тестирование стратегии и&nbsp;запуск
						</p>
					</div>
				</b-col>
				<b-col lg="4">
					<div class="steps__box steps__box-1">
						<g-image src="@/assets/images/components/small-20.png" class="steps__box__pic" height="72" fit="inside" alt="5 этап" />
						<p>
							<b>5&nbsp;этап</b>
						</p>
						<p>
							Подробный отчет с&nbsp;результатами и&nbsp;рекомендациями
						</p>
					</div>
				</b-col>
			</b-row>
		</b-container>

		<Contacts 
			title="Хотите обсудить свой проект? Свяжитесь с нами"
			bg="#FFF3E6"
			consultation
		/>

		<Pipeline title="Автоворонка увеличивает конверсию на каждом этапе" />

		<!-- Что мы делаем во время внедрения -->
		<b-container class="result">
			<b-row class="mb-4">
				<b-col lg="6" class="mb-4">
					<h2>
						Что вы&nbsp;получаете после внедрения
					</h2>
					<p class="my-4">
						Чтобы проанализировать запущенные сценарии, мы&nbsp;настроим аналитику. По&nbsp;каждому сценарию и&nbsp;по&nbsp;основным показателям сайта создадим воронки. 
						Наглядность этих воронок поможет и&nbsp;дальше оценивать эффективность и&nbsp;защищать результаты перед коллегами и&nbsp;руководством.
					</p>
					<!-- <b-button href="123" variant="primary" class="px-4">Посмотреть пример отчета</b-button> -->
				</b-col>
				<b-col lg="6">
					<g-image src="@/assets/images/introduction-carrotquest/6.png" width="1060" alt="Что вы получаете после внедрения" />
				</b-col>
			</b-row>
		</b-container>

		<!-- Наша команда -->
		<b-container class="team">
			<b-row class="mb-4">
				<b-col lg="6" class="order-lg-2 mb-4">
					<h2>
						Наша команда с&nbsp;2014 года внедряет автоматизацию воронок для онлайн бизнеса
					</h2>
					<p class="mt-4">
						Мы&nbsp;построили эффективные процессы и&nbsp;собрали множество успешных и&nbsp;не&nbsp;очень кейсов в&nbsp;разных сегментах бизнеса.
					</p>
				</b-col>
				<b-col lg="6" class="order-lg-1">
					<g-image src="@/assets/images/introduction-carrotquest/7.png" width="1060" alt="Команда внедрения" />
				</b-col>
			</b-row>
		</b-container>

		<!-- Пакеты -->
		<div class="blue">
			<b-container class="plans">
				<b-row class="mb-5">
					<b-col lg="10" xl="8">
						<h2>
							Выберите для себя удобный пакет услуг:
						</h2>
					</b-col>
				</b-row>
				<b-row>
					<b-col></b-col>
					<b-col class="text-center">
						<div class="h4">
							Экспресс-внедрение
						</div>
						<div class="plans__box plans__box-express"></div>
					</b-col>
					<b-col class="text-center">
						<div class="h4">
							Полное погружение
						</div>
						<div class="plans__box plans__box-full"></div>
					</b-col>
				</b-row>
				<b-row class="plans__steps align-items-center">
					<b-col>
						<p>
							Анализ сайта и&nbsp;основных метрик, выявление узких мест в&nbsp;воронке
						</p>
					</b-col>
					<b-col class="text-center">
						<p>
							<svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1 7.5L7 13.5L19.5 1" stroke="black" stroke-width="2"/>
							</svg>
						</p>
					</b-col>
					<b-col class="text-center">
						<p>
							<svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1 7.5L7 13.5L19.5 1" stroke="black" stroke-width="2"/>
							</svg>
						</p>
					</b-col>
				</b-row>
				<b-row class="plans__steps align-items-center">
					<b-col>
						<p>
							Разработка персональной стратегии автоматизации маркетинга
						</p>
					</b-col>
					<b-col class="text-center">
						<p>
							<svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1 7.5L7 13.5L19.5 1" stroke="black" stroke-width="2"/>
							</svg>
						</p>
					</b-col>
					<b-col class="text-center">
						<p>
							<svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1 7.5L7 13.5L19.5 1" stroke="black" stroke-width="2"/>
							</svg>
						</p>
					</b-col>
				</b-row>
				<b-row class="plans__steps align-items-center">
					<b-col>
						<p>
							Настройка сбора данных о&nbsp;ваших пользователях
						</p>
					</b-col>
					<b-col class="text-center">
						<p>
							<svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1 7.5L7 13.5L19.5 1" stroke="black" stroke-width="2"/>
							</svg>
						</p>
					</b-col>
					<b-col class="text-center">
						<p>
							<svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1 7.5L7 13.5L19.5 1" stroke="black" stroke-width="2"/>
							</svg>
						</p>
					</b-col>
				</b-row>
				<b-row class="plans__steps align-items-center">
					<b-col>
						<p>
							Сегментация пользователей и&nbsp;отправка ручных емейл-рассылок
						</p>
					</b-col>
					<b-col class="text-center"></b-col>
					<b-col class="text-center">
						<p>
							<svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1 7.5L7 13.5L19.5 1" stroke="black" stroke-width="2"/>
							</svg>
						</p>
					</b-col>
				</b-row>
				<b-row class="plans__steps align-items-center">
					<b-col>
						<p>
							Внедрение сценариев автоматизации
						</p>
					</b-col>
					<b-col class="text-center">
						<p>
							До&nbsp;5
						</p>
					</b-col>
					<b-col class="text-center">
						<p>
							До&nbsp;10
						</p>
					</b-col>
				</b-row>
				<b-row class="plans__steps align-items-center">
					<b-col>
						<p>
							Полная настройка триггерных сообщений по&nbsp;сценариям
						</p>
					</b-col>
					<b-col class="text-center">
						<p>
							До&nbsp;15&nbsp;триггерных сообщений
						</p>
					</b-col>
					<b-col class="text-center">
						<p>
							до&nbsp;25 + А/Б тесты
						</p>
					</b-col>
				</b-row>
				<b-row class="plans__steps align-items-center">
					<b-col>
						<p>
							Дополнительный ресурс по&nbsp;дизайну и&nbsp;вёрстке макетов нестандартных решений на&nbsp;HTML и&nbsp;JS
						</p>
					</b-col>
					<b-col class="text-center"></b-col>
					<b-col class="text-center">
						<p>
							<svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1 7.5L7 13.5L19.5 1" stroke="black" stroke-width="2"/>
							</svg>
						</p>
					</b-col>
				</b-row>
				<b-row class="plans__steps align-items-center">
					<b-col>
						<p>
							Настройка сложных каналов взаимодействия (квизы, подмена контента на&nbsp;сайте, интеграция с&nbsp;CRM и&nbsp;аналитикой)
						</p>
					</b-col>
					<b-col class="text-center"></b-col>
					<b-col class="text-center">
						<p>
							<svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1 7.5L7 13.5L19.5 1" stroke="black" stroke-width="2"/>
							</svg>
						</p>
					</b-col>
				</b-row>
				<b-row class="plans__steps align-items-center">
					<b-col>
						<p>
							Отчет и&nbsp;аналитика результатов
						</p>
					</b-col>
					<b-col class="text-center">
						<p>
							<svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1 7.5L7 13.5L19.5 1" stroke="black" stroke-width="2"/>
							</svg>
						</p>
					</b-col>
					<b-col class="text-center">
						<p>
							<svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1 7.5L7 13.5L19.5 1" stroke="black" stroke-width="2"/>
							</svg>
							+ промежуточные отчеты
						</p>
					</b-col>
				</b-row>
				<b-row class="plans__steps pt-4">
					<b-col></b-col>
					<b-col class="text-center">
						<p>
							<b-button v-on:click="showModal" href="#" variant="primary" class="px-4">Отправить заявку</b-button>
						</p>
						<p>
							<b>Над проектом будут работать:</b> <br>
							персональный менеджер, разработчик, маркетолог
						</p>
					</b-col>
					<b-col class="text-center">
						<p>
							<b-button v-on:click="showModal" href="#" variant="primary" class="px-4">Отправить заявку</b-button>
						</p>
						<p>
							<b>Над проектом будут работать:</b> <br>
							персональный менеджер, разработчик, аналитик, маркетолог, копирайтер, дизайнер
						</p>
						<p>
							<i>
								Первые сценарии уже через одну или две недели.
							</i>
						</p>
					</b-col>
				</b-row>
			</b-container>
		</div>

		<!-- Карты сценариев -->
		<b-container class="maps text">
			<b-row class="mb-4 mb-lg-5">
				<b-col lg="10" xl="8">
					<h2>
						Мы&nbsp;поможем разработать такие карты под ваш бизнес и&nbsp;настроим все под ключ
					</h2>
				</b-col>
			</b-row>
			<b-row class="mb-3">
				<b-col lg="4" class="order-lg-1">
					<p>
						<b>Для интернет-магазинов</b>
					</p>
					<ul>
						<li>Увеличение количества лидов на&nbsp;том&nbsp;же трафике</li>
						<li>Борьба с&nbsp;брошенными корзинами</li>
						<li>Возвращение уходящих пользователей</li>
						<li>Увеличение повторных продаж</li>
					</ul>
				</b-col>
				<b-col lg="4" class="mb-5 mb-lg-0 order-lg-4">
					<a href="/assets/docs/map-ecom.pdf">
						<g-image class="mb-3" src="@/assets/images/components/map-ecom.png" width="680" alt="Для интернет-магазинов" />
					</a>
					<a href="/assets/docs/map-ecom.pdf">
						<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M18 18L24 24" stroke="#FF7C16"/>
							<circle cx="9.5" cy="9.5" r="9" stroke="#FF7C16"/>
							<line x1="9.5" y1="5" x2="9.5" y2="14" stroke="#FF7C16"/>
							<line x1="5" y1="9.5" x2="14" y2="9.5" stroke="#FF7C16"/>
						</svg>
						Посмотреть
					</a>
				</b-col>

				<b-col lg="4" class="order-lg-2">
					<p>
						<b>Для онлайн-сервисов</b>
					</p>
					<ul>
						<li>Увеличение количества лидов на&nbsp;том&nbsp;же трафике</li>
						<li>Организация удаленной команды продаж</li>
						<li>Оптимизация поддержки пользователей</li>
						<li>Удержание пользователей</li>
					</ul>
				</b-col>
				<b-col lg="4" class="mb-5 mb-lg-0 order-lg-5">
					<a href="/assets/docs/map-saas.pdf">
						<g-image class="mb-3" src="@/assets/images/components/map-saas.png" width="680" alt="Для онлайн-сервисов" />
					</a>
					<a href="/assets/docs/map-saas.pdf">
						<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M18 18L24 24" stroke="#FF7C16"/>
							<circle cx="9.5" cy="9.5" r="9" stroke="#FF7C16"/>
							<line x1="9.5" y1="5" x2="9.5" y2="14" stroke="#FF7C16"/>
							<line x1="5" y1="9.5" x2="14" y2="9.5" stroke="#FF7C16"/>
						</svg>
						Посмотреть
					</a>
				</b-col>

				<b-col lg="4" class="order-lg-3">
					<p>
						<b>Для интернет-магазинов с&nbsp;использованием чат-бота на&nbsp;сайте</b>
					</p>
					<ul>
						<li>Увеличение количества качественных лидов</li>
						<li>Поддержка пользователей</li>
						<li>Автоматическое распределение диалогов по&nbsp;операторам</li>
					</ul>
				</b-col>
				<b-col lg="4" class="order-lg-6">
					<a href="/assets/docs/map-ecom-bot.pdf">
						<g-image class="mb-3" src="@/assets/images/components/map-ecom-bot.png" width="680" alt="Для интернет-магазинов с использованием чат-бота на сайте" />
					</a>
					<a href="/assets/docs/map-ecom-bot.pdf">
						<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M18 18L24 24" stroke="#FF7C16"/>
							<circle cx="9.5" cy="9.5" r="9" stroke="#FF7C16"/>
							<line x1="9.5" y1="5" x2="9.5" y2="14" stroke="#FF7C16"/>
							<line x1="5" y1="9.5" x2="14" y2="9.5" stroke="#FF7C16"/>
						</svg>
						Посмотреть
					</a>
				</b-col>
			</b-row>
		</b-container>

		<Cases />

		<Study />
		
		<Logos />

		<Contacts 
			title="Хотите обсудить свой проект? Свяжитесь с нами"
			bg="#FFF3E6"
			consultation
		/>

		<!-- Модалка для заявки на внедрение -->
		<b-modal ref="open-modal-client" hide-footer title="Оставить заявку на внедрение">
			<b-form v-on:submit.prevent="modalClient">
				<b-form-input 
					placeholder="Имя" 
					type="text" 
					required
					v-model="modalName"
					class="px-3 py-4"
				/>
				<b-form-input 
					placeholder="Телефон" 
					type="text" 
					required
					v-model="modalPhone"
					class="px-3 py-4 mt-3"
				/>
				<b-form-input 
					placeholder="Email" 
					type="email" 
					required
					v-model="modalEmail"
					class="px-3 py-4 mt-3"
				/>
				<b-form-input 
					placeholder="Ваш сайт" 
					type="text" 
					required
					v-model="modalSite"
					class="px-3 py-4 mt-3"
				/>
				<b-button 
					type="submit" 
					variant="primary" 
					class="px-3 py-2 mt-4">
					Отправить
				</b-button>
			</b-form>
		</b-modal>

		<b-modal ref="suсcess" hide-header hide-footer>
			Заявка отправлена, в&nbsp;ближайшее время мы&nbsp;свяжемся с&nbsp;вами.
		</b-modal>

	</Layout>
</template>

<script>
	import Pipeline 			from '~/components/Pipeline.vue'
	import Case 				from '~/components/Cases/Case.vue'
	import Contacts 			from '~/components/Contacts.vue'
	import Cases 				from '~/components/Cases/Cases.vue'
	import Study 				from '~/components/Study.vue'
	import Logos 				from '~/components/Logos.vue'

	export default {
		components: {
			Pipeline,
			Case,
			Contacts,
			Cases,
			Study,
			Logos
		},
		data() {
			return {
				//Делаем в HEAD
				metaTitle: 'Внедрение автоматизации маркетинга',
				metaDescription: 'Хотите полный комплекс инструментов Carrot quest? Мы готовы помочь вам увеличивать конверсию. Запустили уже более 20 проектов автоматизации маркетинга - станьте следующим',
				metaCanonical: 'https://www.carrotquest.io/introduction-carrotquest/',
				metaImage: 'https://www.carrotquest.io/assets/images/cover/introduction-carrotquest.png',

				//Кейсы в Hero
				cases: [
					{ 
						number: '200-250',
						logo: 'modulbank.svg',
						title: 'обращений в чат обрабатывают ежедневно',
						text: '<p>Carrot quest помогает Модульбанку организовать поддержку и&nbsp;продажи через чат. Благодаря распределению диалогов и&nbsp;объединению каналов в&nbsp;одном месте команда Модульбанка снизила скорость первого ответа до&nbsp;10&nbsp;минут.</p>',
						href: '/blog/kak-organizovana-sluzhba-podderzhki-v-modulbank-i-pochemu-oni-ne-boyatsya-davat-obeshhaniya-o-skorosti-otveta/'
					},
					{ 
						number: 'На 30%' ,
						logo: 'domru.svg',
						title: 'увеличилась конверсия сайта',
						text: '<p>Carrot&nbsp;quest помогает <a href="https://domru.ru">Дом.ru</a> собирать лиды и&nbsp;увеличивать продажи с&nbsp;помощью триггерных поп-апов, писем и&nbsp;пуш-уведомлений. В&nbsp;ходе работы внедрили больше 49&nbsp;сценариев, а&nbsp;количество заявок увеличилось на&nbsp;30%.</p>',
						href: '/blog/kejs-kak-dom-ru-uvelichil-konversiyu-sajta-na-30-s-pomoshhyu-carrot-quest/'
					},
					{ 
						number: '31,3%',
						logo: 'skyshop.svg',
						title: 'сделали заказ из рассылки с акциями SkyShop',
						text: '<p>Carrot quest помогает SkyShop найти слабые стороны и пересмотреть способы работы с пользователями. После настройки ручной рассылки с акциями 31,3% пользователя сделали заказ. Еще 20564 пользовался оставили email в поп-апах.</p>',
						href: '/blog/case_skyshop/'
					},
					{ 
						number: 'На 40%',
						logo: 'nagorniy.svg',
						title: 'выросла конверсия сайта',
						text: '<p>Carrot quest помогает сайту жилого квартала бизнес-класса «Нагорный» увеличивать конверсию на сайте за счет поп-апов. Конверсия сайта выросла с 0.85% до 1,2%.</p>',
						href: '/blog/case-nagorniy/' 
					},
					{ 
						number: 'на 25%',
						logo: 'teatr-teatr.svg',
						title: 'увеличили конверсию в покупку',
						text: '<p>Carrot quest помогает Театру-Театру квалифицировать и собирать лидов. 1676 пользователей оставили данные о своих предпочтениях. 3809 клиентов совершили повторные покупки.</p>',
						href: '/blog/case-teatr/' 
					},
					{ 
						number: '78%',
						logo: 'introvert.png',
						title: 'конверсия в лида',
						text: '<p>Carrot quest помогает собирать с помощью сценариев Лидов. Около половины Лидов на сайте собрано с помощью Carrot quest.</p>',
						href: '/blog/case-nagorniy/' 
					}
				],

				//Модалки для скачивания файлов
				modalName: '',
				modalPhone: '',
				modalEmail: '',
				modalSite: '',
			}
		},

		methods: {
			showModal() {
				// e.preventDefault()
				this.$refs['open-modal-client'].show()
			},
			modalClient () {
				carrotquest.identify([
					{'op': 'update_or_create', 'key': '$phone', 'value': this.modalPhone},
					{'op': 'update_or_create', 'key': '$name', 'value': this.modalName},
					{'op': 'update_or_create', 'key': '$email', 'value': this.modalEmail},
					{'op': 'update_or_create', 'key': 'Адрес сайта', 'value': this.modalSite},
					{'Заявка': 'внедрение'}
				])
				carrotquest.track('Отправил заявку на внедрение' , {
					'Email': this.modalEmail,
					'Адрес сайта': this.modalSite,
					'Имя': this.modalName,
					'Телефон': this.modalPhone
				})

				this.$refs['open-modal-client'].hide()
				this.$refs['suсcess'].show()
				setTimeout(() => {
					this.$refs['suсcess'].hide()
				}, 7000);
			}
		},

		mounted() {
			//Перемешиваем кейсы в HERO
			this.cases = this.cases.sort(() => Math.random() - 0.5)
		}
	}	
</script>

<style lang="scss">
	.introduction-carrotquest-page {
		.hero {
			&__pic {
				position: absolute;
				z-index: 0;
				top: 50%;
				left: 64%;
				margin-top: -222px;
			}
		}

		.blue__cases {
			margin-top: -6rem;
			padding-bottom: 26rem;
			
			&__box {
				position: absolute;
				justify-content: center;
				display: flex;
				z-index: 1;
				left: 0;
				right: 0;
				padding-top: 10px;
				overflow-x: auto;
				scroll-snap-type: x mandatory;
				scroll-behavior: smooth;
				-webkit-overflow-scrolling: touch;
				-ms-overflow-style: none;  /* IE and Edge */
				scrollbar-width: none;  /* Firefox */
				&::-webkit-scrollbar {
					display: none;
				}
					
				.box {
					background-color: #FFF;
					color: #000;
					padding: 1.5rem 1.5rem 3.5rem;
					border-radius: 5px;
					height: 100%;
				}
				.row {
					height: auto;
				}
				.col-lg-6 {
					max-width: 570px;
					scroll-snap-align: start;
				}
				.number {
					color: #FF7C16;
				}
				.logo {
					text-align: right;
					img {
						max-width: 100%;
						max-height: 50px;
					}
				}
				.link {
					position: absolute;
					bottom: 1.5rem;
					color: #FF7C16;
				}
			}
		}
		
		.hard {
			.col-md-6 {
				margin-top: 1.5rem;
				margin-bottom: 1rem;
			}
			&__box {
				padding: 20px;
				height: 100%;
				min-height: 12rem;
				border-radius: 5px;
			}
		}

		.success {
			img {
				max-width: 100%;
				border-radius: 5px;
			}
		}

		.steps {
			margin-bottom: calc(10rem - 40px);
			.col-lg-4 {
				margin-top: 40px;
				margin-bottom: 40px;
			}
			&__box {
				height: 100%;
				padding: 50px 20px 20px;
				box-shadow: 0 3px 10px rgba(0,0,0,.1);
				&__pic {
					position: absolute;
					margin-top: -90px;
				}
			}
		}

		.result , .team {
			img {
				max-width: 100%;
			}
		}

		.plans {
			padding-top: 5rem;
			padding-bottom: 6rem;
			.row , .h4 {
				position: relative;
				z-index: 2;
			}
			&__box {
				position: absolute;
				z-index: 1;
				top: -20px;
				left: 10px;
				background-color: #fff;
				border-radius: 10px;
				width: calc(100% - 20px);
				height: 1160px;
				&-full {
					border: 3px solid #FF7C16;
				}
			}
			&__steps {
				padding-top: 1rem;
				&::after {
					position: absolute;
					left: 20px;
					bottom: -1px;
					width: calc(100% - 30px);
					content: " ";
					border-bottom: 1px solid  rgba(0, 0, 0, 0.08);
				}
			}
			&__steps:last-child::after {
				display: none;
			}
		}

		.maps {
			img {
				max-width: 100%;
				border-radius: 5px;
			}
		}

		.blue {
			background-color: #F3F3FF;
		}

		@media (max-width: 575.98px) {
			
		}
		@media (max-width: 767.98px) {
			.hard .col-md-6 {
				margin-top: 1rem;
				margin-bottom: 0.5rem;
			}
			.steps {
				margin-bottom: calc(5rem - 30px);
				.font20px {
					font-size: 0.875rem;
					line-height: 1rem;
				}
				.col-lg-4 {
					margin-top: 30px;
					margin-bottom: 30px;
				}
				&__box__pic {
					width: inherit;
					height: 60px;
					margin-top: -80px;
				}
			}
			.plans {
				overflow-x: scroll;
				scroll-snap-type: x mandatory;
				.row {
					min-width: 720px;
				}
			}
		}
		@media (max-width: 991.98px) {
			.plans {
				.h4 {
					font-size: 1.25rem;
					line-height: 1.8rem;
				}
				&__box {
					height: 1030px;
				}
				&__steps {
					font-size: 0.875rem;
					line-height: 1rem;
				}
			}
		}
		@media (min-width: 992px) {
			.success {
				.row.mb-5 {
					margin-bottom: 6rem !important;
				}
			}
		}
		@media (min-width: 1200px) {
			.plans {
				&__box {
					height: 1060px;
				}
			}
		}
	}
</style>