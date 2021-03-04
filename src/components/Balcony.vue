<template>
	<ClientOnly>
		<!-- Балкон с картами -->
		<div id="balcony"  class="balcony">
			<b-container>
				<span id="ad__close">×</span>
				<b-row>
					<b-col cols="7">
						<div class="balcony__show">
							<h2 class="mb-4">
								Получите бесплатно карту сценариев для вашего бизнеса
							</h2>
							<p>
								Выберите карту и введите почту. Мы пришлем вам ее бесплатно
							</p>
							<div class="checkbox__buttons">
								<div class="checkbox__container">
									<label for="checkbox_1" class="checkbox__label">
										<input id="checkbox_1" name="map" type="radio" value="saas" checked>
										<span class="checkbox__custom"></span>
										<span class="checkbox__title">SaaS-сервис</span>
									</label>
									<label for="checkbox_2" class="checkbox__label">
										<input id="checkbox_2" name="map" type="radio" value="ecom">
										<span class="checkbox__custom"></span>
										<span class="checkbox__title">e&#8209;commerce</span>
									</label>
									<label for="checkbox_3" class="checkbox__label">
										<input id="checkbox_3" name="map" type="radio" value="b2c">
										<span class="checkbox__custom"></span>
										<span class="checkbox__title">B2C</span>
									</label>
									<label for="checkbox_4" class="checkbox__label">
										<input id="checkbox_4" name="map" type="radio" value="недвижимости">
										<span class="checkbox__custom"></span>
										<span class="checkbox__title">Недвижимость</span>
									</label>
								</div>
								<form class="form">
									<div role="group" class="input-group">
										<input name="email" type="email" placeholder="Электронная почта" required="required" aria-required="true" class="p-4 form-control">
										<div class="input-group-append">
											<button type="submit" class="btn px-4 btn-primary">Получить бесплатно</button>
										</div>
									</div>
								</form>
							</div>
						</div>
						<h2 class="balcony__hidden">
							Спасибо! Мы уже отправили всё на почту
						</h2>
					</b-col>
					<b-col cols="5">
						<g-image class="mb-3 mw-100" src="@/assets/images/components/map-saas.png" width="870" alt="Для онлайн-сервисов" />
					</b-col>
				</b-row>
			</b-container>
		</div>
	</ClientOnly>
</template>

<script>
	export default {
		components: {
			
		},
	}
</script>

<style lang="scss">
	#ad__close {
		position: absolute;
		padding: 0 8px;
		font-size: 32px;
		right: 4px;
		top: 12px;
		cursor: pointer;
	}
	.balcony {
		position: fixed;
		bottom: 0; left: 0; right: 0;
		z-index: 12;
		display: none;
		padding-top: 48px;
		padding-bottom : 64px;
		background: #F8F8FF;
		box-shadow: 0px -5px 20px rgba(0, 0, 0, 0.05);

		.container {
			position: relative;
			margin-bottom: 0;
		}
		#ad__close {
			top: -38px;
			right: 12px;
		}

		&__pic {
			box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.1);
			max-width: 100%;
		}

		.checkbox__container {
			display: flex;
			flex-wrap: wrap;

			label {
				margin-right: 32px;
			}
			label:last-child {
				margin-right: 0;
			}
			input[type=checkbox] , input[type=radio] {
				position: absolute;
				visibility: hidden;
			}

			.checkbox__custom {
				display: inline-block;
				width: 16px;
				height: 16px;
				background: #FFFFFF;
				border: 1px solid #FF8246;
				border-radius: 50%;
				margin-right: 8px;
				position: relative;
				cursor: pointer;
			}
			input:checked ~ .checkbox__custom {
				&::before {
					content: "";
					width: 8px;
					height: 8px;
					display: block;
					background: #FF8246;
					border-radius: 50%;
					position: absolute;
					top: 3px;
					left: 3px;
				}
			}
			.checkbox__title {
				position: relative;
				top: -2px;
				cursor: pointer;
			}
		}

		form {
			margin-top: 16px;
			display: flex;
			box-shadow: 0px 3px 10px rgba(9, 29, 100, 0.1);
			float: left;
			.input-field {
				border: 0;
				padding: 16px 24px;
			}
			.link-button_filled {
				padding: 16px 24px !important;
			}
			.input-field::placeholder {
				color: #C4C4C4 !important;
			}
			@media (max-width: 991.98px) {
				.input-field,
				.link-button_filled {
					width: 100%;
					max-width: 100%;
				}
			}
		}

		.balcony__hidden {
			clear: both;
			display: none;
		}
		
	}
</style>