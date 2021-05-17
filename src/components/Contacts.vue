<template>
	<ClientOnly>
		<!-- Запрос консультации -->
		<b-container>
			<b-col class="Contacts" :style=" 'background-color: ' + bg ">
				<b-row class="align-items-center">
					<b-col cols="12" xl="6">
						<div class="h3" v-html="title" />
						<div v-if="consultation" class="mt-3 mb-4 mb-lg-0">
							<MiniConsultationForm />
						</div>
					</b-col>
					<b-col cols="12" lg="8" xl="6">
						<ContactsHrefs />
					</b-col>
				</b-row>
			</b-col>
		</b-container>
	</ClientOnly>
</template>

<script>
	import MiniConsultationForm 	from '~/components/Forms/MiniConsultationForm.vue'
	import ContactsHrefs 			from '~/components/ContactsHrefs.vue'

	export default {
		props: { 
			title: String,
			bg: String, 
			consultation: Boolean
		},
		components: {
			MiniConsultationForm,
			ContactsHrefs
		}
	}
</script>

<style lang="scss">
	.Contacts {
		padding: 2.5rem;
		border-radius: 5px;
		@media (max-width: 767.98px) {
			padding: 1.25rem;
		}
	}
</style>