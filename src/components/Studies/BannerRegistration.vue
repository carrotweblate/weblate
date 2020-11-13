<template>

	<!-- Баннер с видео и регистрацией -->
	<section class="videoRegistration">
		<b-container>
			<b-row >
				<b-col col-12 lg="6">
					<a v-b-modal.youtubeCQ class="videoRegistration__play">
						<g-image class="videoRegistration__bg" src="~/components/VideoRegistration/bg.png" width="680" alt="Видео" />
					</a>
					<b-modal id="youtubeCQ" size="xl" hide-header hide-footer>
						<b-embed
							type="iframe"
							aspect="16by9"
							src="https://www.youtube.com/embed/RNOS-68LaSk?autoplay=1"
							allowfullscreen
						></b-embed>
					</b-modal>
				</b-col>
				<b-col col-12 lg="6">
					<div class="h1 mt-4 mt-md-5 mt-lg-0">Продавайте больше на&nbsp;том&nbsp;же объеме трафика с&nbsp;помощью онлайн-чата и&nbsp;автоматизации</div>
					<p class="mt-4">
						Инструменты Carrot quest помогают увеличить продажи на&nbsp;сайтах 
						без привлечения нового трафика и&nbsp;обеспечивать лучший поддержки пользователей
					</p>
					<Registration text="14 дней бесплатно. Регистрируйтесь" />
				</b-col>
			</b-row>
		</b-container>
	</section>

</template>

<script>
	import '~/components/VideoRegistration/VideoRegistration.scss'
	import Registration from '~/components/Forms/Registration.vue'

	export default {
		components: {
			Registration
		},
	}
</script>