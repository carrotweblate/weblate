<template>
	<ClientOnly>

		<!-- Баннер с видео и регистрацией -->
		<section class="BannerSobirayte">
			<b-container>
				<g-link to="/">
					<b-row class="align-items-center">
						<b-col col-12 lg="6">
							<g-image class="BannerSobirayte__bg" src="~/components/BannerSobirayte/bg.png" width="680" alt="Видео" />
						</b-col>
						<b-col col-12 lg="6">
							<div class="h1 mt-4 mt-md-5 mt-lg-0">Собирайте больше лидов с&nbsp;сайта с&nbsp;помощью лид&#8209;бота, бизнес&#8209;чата и&nbsp;поп&#8209;ап окошек</div>
							<b-input-group class="align-items-center">
								<b-button type="submit" variant="primary" class="my-3 mr-3">Подключить Carrot quest</b-button>
								14&nbsp;дней&nbsp;бесплатно
							</b-input-group>
						</b-col>
					</b-row>
				</g-link>
			</b-container>
		</section>

	</ClientOnly>
</template>

<script>
	import '~/components/BannerSobirayte/BannerSobirayte.scss'
	export default {
	
	}
</script>