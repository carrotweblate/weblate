<template>
	<Layout class="page">

		//Главный экран
		<b-container class="hero">
			<div class="about row">
				<div class="col-12">
					<div class="h1" id="text">
						<h1 class="h1"><b>Библиотека Carrot quest.</b></h1>
						<p>
							Полезные <span class="book"></span>&nbsp;материалы про маркетинг и&nbsp;<span class="plane"></span>&nbsp;развитие продуктов, 
							а также инсайты от наших экспертов — всё это вы найдете в <span class="db"></span>&nbsp;библиотеке
						</p>
					</div>
					<p>
						Подпишитесь, чтобы получать еженедельный дайджест Carrot quest
					</p>
					<form class="library__form form-row__form form" action="javascript: void(0);">
						<input type="email" autocomplete="on" class="input-field form__field form__field__right-button" required name="email" placeholder="Введите электронную почту" />
						<input type="submit" value="Подписаться" class="btn btn-primary" />
					</form>
				</div> 
			</div>

			<div class="bg">
				<ul class="circles-container">
					<li class="circle"></li>
					<li class="circle"></li>
					<li class="circle"></li>
					<li class="circle"></li>
					<li class="circle"></li>
					<li class="circle"></li>
					<li class="circle"></li>
					<li class="circle"></li>
					<li class="circle"></li>
					<li class="circle"></li>
				</ul>
			</div>
		</b-container>

		//Книги
		<b-container class="books">
			<div class="row">
				<div class="col-12 col-lg-8 col-xl-7">
					<p class="h1">
						Книги
					</p>
					<p>
						Собрали всю экспертизу команды Carrot quest в пошаговых руководствах по автоматизации 
						маркетинга и коммуникаций для интернет-магазинов и онлайн-сервисов.
					</p>
				</div>
			</div>

			<div class="row">
				<div class="col-12 col-lg-6">
					<div class="books__wrapper">
						<p>
							Полное руководство по коммуникациям и автоматизации воронки пользователей в интернет-магазинах
						</p>
						<g-link to="/ecom-book/">Посмотреть книгу</g-link>
						<g-link to="/ecom-book/">
							<g-image src="~/assets/images/library/book_ecom.png" width="360" alt="Полное руководство по коммуникациям и автоматизации воронки пользователей в интернет-магазинах" />
						</g-link>
					</div>
				</div>
				<div class="col-12 col-lg-6">
					<div class="books__wrapper peach">
						<p>
							Самый подробный гайд по автоматизации маркетинга для продакт-маркетологов и CEO онлайн-продуктов
						</p>
						<a href="/book-saas">Посмотреть книгу</a>
						<g-image src="~/assets/images/library/book_scripts.png" width="384" alt="Самый подробный гайд по автоматизации маркетинга для продакт-маркетологов и CEO онлайн-продуктов" />
					</div>
				</div>
			</div>
		</b-container>

		//Книги
		<b-container class="books">

	</Layout>
</template>

<script>
	import '~/assets/scss/library/1_hero.scss'
	import '~/assets/scss/library/2_books.scss'

	export default {
		metaInfo: {
			title: 'Библиотека | Полезные материалы про маркетинг'
		},
		methods: {
        }
	}
</script>