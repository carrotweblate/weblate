<template>
	<ClientOnly>

		<!-- Запрос консультации -->
		<b-container>
			<b-col class="Consultation" :style=" 'background-color: ' + bg ">
				<b-row class="align-items-center justify-content-center">
					<b-col cols="8" md="6" lg="4">
						<g-image
							:src="require(`!!assets-loader?width=280!@/assets/images/components/${pic}`)"
							:alt="alt"
							:title="alt"
						/>
					</b-col>
					<b-col cols="12" lg="8">
						<div class="h1 mb-4" v-html="title" />
						<p class="font20px" v-html="text" />
					</b-col>
				</b-row>
				<b-row class="mt-4 mb-5">
					<b-col>
						<ConsultationForm />
					</b-col>
				</b-row>
				<b-row>
					<b-col>
						Связаться с нами: 
						<a href="tel:+74951059169" class="ml-md-2 my-3 my-md-0">+7 (495) 105 91 69</a>
						<a href="tg://resolve?domain=carrotquestbot" class="ml-md-4">
							<svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M16.7196 16.0413L19.6529 2.19645C19.7507 1.61554 19.7507 1.22827 19.4574 0.937823C19.164 0.647372 18.8707 0.647372 18.4796 0.841006L0.879981 7.42457C0.586654 7.6182 0.293327 7.71502 0.0977757 7.90865C0 8.19911 0 8.29592 0 8.48956C0.0977757 8.58637 0.293327 8.78001 0.68443 8.87682L5.18211 10.2323L15.6441 3.6487C15.9374 3.45507 16.133 3.45507 16.3285 3.55188C16.4263 3.6487 16.4263 3.6487 16.2308 3.84234L7.82205 11.4909L7.43095 16.1381C7.72428 16.1381 8.01761 16.0413 8.40871 15.7508L10.5598 13.6209L15.0575 16.9126C15.9374 17.3967 16.4263 17.1063 16.7196 16.0413Z" fill="#FF6600"/>
							</svg>
						</a>
						<a href="https://m.me/carrotquest" class="ml-4">
							<svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.95163H2.91342V4.48492C2.91342 1.56972 4.70984 0 7.2922 0C8.15804 0 8.9687 0.0551076 9.45337 0.0880548C9.66004 0.102103 9.80743 0.112123 9.87455 0.112123V3.13944H8.07813C6.61854 3.13944 6.39399 3.81218 6.39399 4.82129V6.95163H9.76228L9.31317 10.3153H6.39399V19.076H2.91342V10.3153H0V6.95163Z" fill="#FF6600"/>
							</svg>
						</a>
						<a href="https://vk.me/carrotquest" class="ml-4">
							<svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M23 0.9C23.2 0.4 23 0 22.3 0H19.7C19 0 18.7 0.3 18.6 0.7C18.6 0.7 17.3 3.9 15.4 6C14.8 6.6 14.5 6.8 14.2 6.8C14 6.8 13.8 6.6 13.8 6.1V0.9C13.8 0.3 13.6 0 13 0H9C8.6 0 8.3 0.3 8.3 0.6C8.3 1.2 9.2 1.4 9.3 3.1V6.9C9.3 7.7 9.1 7.9 8.8 7.9C8 7.9 5.9 4.7 4.6 1C4.4 0.3 4.1 0 3.5 0H0.9C0.1 0 0 0.3 0 0.7C0 1.4 0.9 4.8 4.1 9.3C6.2 12.4 9.2 14 12 14C13.6 14 13.8 13.6 13.8 13V10.7C13.8 10 14 9.8 14.5 9.8C14.9 9.8 15.5 10 17.1 11.5C18.8 13.2 19.1 14 20.1 14H22.7C23.4 14 23.8 13.6 23.6 12.9C23.4 12.2 22.5 11.1 21.4 9.9C20.8 9.2 19.9 8.4 19.6 8C19.2 7.5 19.3 7.3 19.6 6.9C19.6 6.9 22.7 2.5 23 0.9Z" fill="#FF6600"/>
							</svg>
						</a>
					</b-col>
				</b-row>
			</b-col>
		</b-container>

	</ClientOnly>
</template>

<script>
	import ConsultationForm from '~/components/Forms/ConsultationForm.vue'
	export default {
		components: {
			ConsultationForm
		},
		props: [ 'title' , 'text' , 'pic' , 'alt' , 'bg' ]
	}
</script>

<style lang="scss">
	.Consultation {
		border-radius: 5px;
		padding: 4.5rem 6rem;
		img {
			max-width: 100%;
		}
		@media (max-width: 575.98px) {
			padding: 2rem 20px;
			a:first-child {
				display: block;
			}
		}
	}
</style>