<template>
	<Layout class="page page-marketing-course">

		<div class="hero">
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
						<b-button href="#open-modal-download?title=Получить курс «Маркетинг на сайте»&amp;cqe=Записался на курс по маркетингу с лендинга" variant="primary">
							Получить курс
						</b-button>
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
		background-color: #1E1D29;
		color: #fff;
		footer {
			.navbar-text , .nav-link , path {
				color: #fff;
				fill: #fff;
			}
		}
	}
</style>