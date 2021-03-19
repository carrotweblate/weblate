<template>
	<Layout :header="true" :footer="true"  class="page page-404">

		<div class="hero">
			<b-container>
				<b-row class="align-items-center">
					<b-col lg="4" class="d-none d-lg-block">
						<g-image src="@/assets/images/components/medium-6.png" width="680" quality="100" class="mw-100" alt="Что-то пошло не так." title="Бип-пип-пуап" />
					</b-col>
					<b-col lg="8">
						<h1>
							Что-то пошло не так!<br>
							Этой страницы не существует
						</h1>
						<p class="py-3">
							Перейдите на <g-link to="/">главную страницу</g-link>, или напишите в чат в правом нижнем углу
						</p>
					</b-col>
				</b-row>
			</b-container>
		</div>

	</Layout>
</template>

<script>
	export default {
		data() {
			return {
				//Делаем в HEAD
				visibleDDMenu: '123',
				metaTitle: '404 — Страница не найдена',
				metaDescription: 'Страница, которую вы ищите не найдена на сайте',
				metaCanonical: 'https://www.carrotquest.io/404/',
				metaImage: '',
			}
		}
	}	
</script>


<style lang="scss">
	.page-404 {
		.hero {
			background-color: #F3F3FF;
		}
	}
</style>