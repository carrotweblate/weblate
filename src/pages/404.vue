<template>
	<Layout class="page page-404">

		<b-container>
			<b-row>
				<b-col class="pt-5">
					<h1>
						Страница не найдена
					</h1>
				</b-col>
			</b-row>
		</b-container>

	</Layout>
</template>

<script>

	export default {
		//Делаем в HEAD
		metaInfo() {
			return {
				title: '404 — Страница не найдена',
				meta: [
					{
						key: 'description',
						name: 'description',
						content: 'Carrot quest — сервис для увеличения продаж, автоматизации маркетинга, улучшения коммуникации с клиентами ✔️онлайн-консультант ✔️чат-боты ✔️поп-ап окна ✔️триггерные письма ✔️eCRM'
					},
					{
						property: "og:image",
						content: 'https://www.carrotquest.io/assets/images/cover/index.gif'
					},
				],
				link: [
					{
						rel: 'canonical',
						href: 'https://www.carrotquest.io/404/'
					}
				]
			}
		}
	}	
</script>


<style lang="scss">

</style>