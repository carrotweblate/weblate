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
		data() {
			return {
				//Делаем в HEAD
				metaTitle: '404 — Страница не найдена',
				metaDescription: 'Страница, которую вы ищите не найдена на сайте',
				metaCanonical: 'https://www.carrotquest.io/404/',
				metaImage: '',
			}
		}
	}	
</script>


<style lang="scss">

</style>