<template>
	<Layout class="page page-partner">

		<section class="hero">
			<b-container>
				<b-row class="align-items-center">
					<b-col lg="5" class="d-none d-lg-block">
						<g-image src="@/assets/images/partner/hero.png" width="1060" quality="100" class="mw-100" alt="Партнерская программа Carrot quest" title="Фытыщщщ" />
					</b-col>
					<b-col lg="7">
						<h1>
							Партнерская программа Carrot quest
						</h1>
						<p class="pt-3 pb-4">
							Зарабатывайте за каждое внедрение Carrot quest от 50 000 до 200 000 рублей в месяц или получайте дополнительный доход от реферальной программы
						</p>
						<b-button href="/partner/register/" variant="primary" class="mr-4">Стать партнером</b-button>
						<b-button href="/partner/direct/" variant="outline-primary">Партнерский логин</b-button>
					</b-col>
				</b-row>
			</b-container>
		</section>

		<section class="advantages">
			<b-container>
				<b-row>
					<b-col lg="9" xl="7">
						<div class="h2 mb-5">
							Carrot&nbsp;quest дает вам инструменты для повышения продаж ваших клиентов без привлечения дополнительного трафика
						</div>
					</b-col>
				</b-row>
				<b-row>
					<b-col lg="6" class="mb-5 mb-lg-0">
						<b-row>
							<b-col cols="3">
								<g-image src="@/assets/images/components/small-5.png" width="300" height="300" fit="contain" background="#fff" position="left top" class="mw-100" alt="Больше 50 функций и интеграций" />
							</b-col>
							<b-col cols="9">
								<div class="h5">Больше 50 функций и интеграций</div>
								<p>формируют мощный инструмент для решения задач диджитал-маркетинга, клиентской поддержки и&nbsp;лидогенерации</p>
							</b-col>
						</b-row>
					</b-col>
					<b-col lg="6">
						<b-row>
							<b-col cols="3">
								<g-image src="@/assets/images/components/small-11.png" width="300" height="300" fit="contain" background="#fff" position="left top" class="mw-100" alt="Готовые кейсы применения" />
							</b-col>
							<b-col cols="9">
								<div class="h5">Готовые кейсы применения</div>
								<p>А&nbsp;множество <a href="/cases/" target="_blank" rel="noopener">кейсов</a> использования позволит сразу найти подходящий вариант решения задачи и&nbsp;использовать его как источник вдохновения</p>
							</b-col>
						</b-row>
					</b-col>
				</b-row>
			</b-container>
		</section>

		<Study />

		<FAQ 
			title="Часто задаваемые вопросы"
			:items="[
				{
					question: 'Как стать партнёром?',
					answer: 'Для того, чтобы стать партнером нужно сначала зарегистрироваться в&nbsp;партнерском кабинете. После регистрации мы&nbsp;свяжемся с&nbsp;вами, чтобы обсудить дальнейшие действия и&nbsp;проконсультировать по&nbsp;всем вопросам.'
				},
				{
					question: 'Как я буду зарабатывать?',
					answer: 'Вы&nbsp;будете получать комиссию с&nbsp;каждого платежа клиента, которого вы&nbsp;подключили к&nbsp;Carrot quest. А&nbsp;еще вы&nbsp;можете профессионально освоить сервис, стать сертифицированным партнером и&nbsp;зарабатывать на&nbsp;внедрении автоматизации маркетинга вашим клиентам от&nbsp;30&nbsp;000 до&nbsp;150&nbsp;000&nbsp;рублей.'
				},
				{
					question: 'Какие варианты партнерства есть?',
					answer: 'Мы&nbsp;предлагаем два варианта партнерского взаимодействия: подключение клиентов по&nbsp;реферальной ссылке и&nbsp;прямое подключение через партнера. С&nbsp;каждой оплаты реферального клиента вы&nbsp;получаете&nbsp;10%, а&nbsp;с&nbsp;платежей прямых клиентов&nbsp;20%.'
				},
				{
					question: 'Чем отличаются реферальные и прямые клиенты?',
					answer: 'Реферальные клиенты взаимодействуют с&nbsp;сервисом самостоятельно, сами настраивают сервис, сами его оплачивают. Клиентам, с&nbsp;которыми вы&nbsp;работаете в&nbsp;рамках партнерской программы, вы&nbsp;помогаете настраивать сервис, и&nbsp;все платежи по&nbsp;подписке тоже проходят через вас. В&nbsp;таком случае &nbsp;20% от&nbsp;каждого платежа клиента являются вашей комиссией.'
				},
				{
					question: 'Может ли мой клиент получить скидку?',
					answer: 'Ваши клиенты могут получить скидку на оплату сервиса в соответствии с нашей <a href=/price/>тарифной сеткой</a>. При оплате на 3 месяца скидка составит 10%, на 6 месяцев - 20%, на 12 месяцев - 30%. Вы при этом получаете партнерскую скидку в размере 20% на все тарифы. Скидки суммируются между собой.'
				},
				{
					question: 'Могу&nbsp;ли я&nbsp;получить эксклюзивные права в&nbsp;своём регионе (white label)?',
					answer: 'Нет, партнерская программа не&nbsp;предусматривает эксклюзивные права на&nbsp;внедрение продукта.'
				},
				{
					question: 'Где я&nbsp;могу посмотреть полезные материалы?',
					answer: 'Полезные материалы для партнеров вы&nbsp;можете найти в&nbsp;партнерском кабинете, <a href=/cases/>в&nbsp;разделе кейсы</a>, <a href=/blog/>в&nbsp;нашем блоге</a> и&nbsp;написав нам на&nbsp;<a href=mailto:komarov@carrotquest.ru>komarov@carrotquest.ru</a>. А&nbsp;еще мы&nbsp;разрабатываем обучающий курс для партнеров, следите за&nbsp;обновлениями.'
				},
				{
					question: 'У&nbsp;меня проблемы с&nbsp;настройкой сервиса, что делать?',
					answer: 'Если вы&nbsp;столкнулись со&nbsp;сложностями при настройке сервиса, напишите в&nbsp;чат на&nbsp;нашем сайте и&nbsp;отзывчивая техподдержка поможет.'
				},
				{
					question: 'У&nbsp;меня есть клиент, но&nbsp;я&nbsp;сам не&nbsp;хочу разбираться в&nbsp;сервисе, что делать?',
					answer: 'Мы&nbsp;можем взять настройку сервиса для вашего клиента на&nbsp;себя. При этом процент со&nbsp;всех оплат привлеченного клиента получите&nbsp;вы. Для того, чтобы обсудить условия, напишите нам в&nbsp;чат или на&nbsp;почту.'
				},
				{
					question: 'Как получать от&nbsp;Вас клиентов?',
					answer: 'Для того, что&nbsp;бы мы&nbsp;передавали вам клиентов, вы&nbsp;должны быть сертифицированным партнером и&nbsp;написать совместно с&nbsp;нами кейс о&nbsp;внедрении вашим клиентам автоматизации маркетинга на&nbsp;базе сервиса Carrot quest. Чтобы узнать подробнее о&nbsp;том, как пройти сертификацию, напишите на&nbsp;<a href=mailto:komarov@carrotquest.ru>komarov@carrotquest.ru</a>'
				},
				{
					question: 'У&nbsp;меня есть еще вопросы!',
					answer: 'Если у&nbsp;вас еще остались вопросы, можете задать их&nbsp;на&nbsp;почту <a href=mailto:komarov@carrotquest.ru>komarov@carrotquest.ru</a> или написать в&nbsp;чат на&nbsp;нашем сайте.'
				}
			]"
			:button="{
				text: 'Стать партнером',
				href: '/partner/register/'
			}"
		/>

		<section class="connect">    
			<b-container>
				<b-row>
					<b-col lg="3">
						<figure class="connect__photo-inner">
							<g-image src="@/assets/images/partner/IvanKomаrov.jpg" quality="100" alt="Иван Комаров" title="Привет!" />
						</figure>
					</b-col>
					<b-col class="text">
						<p class="h3">Иван Комаров, руководитель направления по&nbsp;работе с&nbsp;партнерами</p>
						<p>
							Отвечу на&nbsp;ваши вопросы, помогу с&nbsp;документами, подскажу по&nbsp;сервису или передам вопрос разработчикам
						</p>
						<ul>
							<li>
								<a href="mailto:komarov@carrotquest.ru" rel="nofollow">komarov@carrotquest.ru</a>
							</li>
							<li>
								<a href="skype:partner_carrot_quest" rel="nofollow">Skype: partner_carrot_quest</a>
							</li>
							<li>
								<a href="tel:+79194848347" rel="nofollow">+7 (919) 48-48-347</a>
							</li>
						</ul>
					</b-col>
				</b-row>
			</b-container>
		</section>

	</Layout>
</template>

<script>
	import Study 			from '~/components/Study.vue'
	import FAQ 			from '~/components/FAQ.vue'

	export default {
		components: {
			Study,
			FAQ
		},
		data() {
			return {
				//Делаем в HEAD
				metaTitle: 'Партнерская программа',
				metaDescription: 'Зарабатывайте за каждое внедрение Carrot quest от 50 000 р. до 200 000 р. или получайте дополнительный доход от реферальной программы',
				metaCanonical: 'https://www.carrotquest.io/partner/',
				metaImage: 'https://www.carrotquest.io/assets/images/cover/index.gif',
			}
		}
	}	
</script>


<style lang="scss">
	.page-partner {
		.hero {
			background-color: #fef8ea;
		}

		.connect {
			&__photo-inner {
				width: 240px;
				height: 240px;
				overflow: hidden;
				border-radius: 50%;
			}
			&__photo {
				width: 426px;
				margin-top: -77px;
				margin-left: -130px;
				transform: scale(0.83);
			}
		}
	}
</style>