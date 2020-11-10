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
					<b-form v-on:submit.prevent="registration">
						<b-input-group>
							<b-form-input 
								placeholder="Введите ваш e-mail" 
								type="email" 
								required
								v-model="email"
								class="p-4"
							/>
							<b-input-group-append>
								<b-button type="submit" variant="primary">Начать бесплатно</b-button>
							</b-input-group-append>
						</b-input-group>
					</b-form>
					<p class="mt-3">
						14 дней бесплатно. Регистрируйтесь
					</p>
				</b-col>
			</b-row>
		</b-container>
	</section>

</template>

<script>
	import '~/components/VideoRegistration/VideoRegistration.scss'

	export default {
		data: function() {
			return {
				email: ''
			};
		},
		methods: {
			registration () {
				window.open("https://carrotquest.io/panel/register/?email=" + this.email);
				this.email = ""
			}
		}
	}
</script>