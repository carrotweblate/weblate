<template>
    <!-- Модалка для скачивания файлов -->
    <b-modal ref="modalConsultation" hide-footer :title="modalTitle">
        <b-form v-on:submit.prevent="modalConsultation">
            <b-form-input 
                placeholder="Имя" 
                type="text" 
                required
                v-model="modalName"
                class="px-3 py-4"
            />
            <b-form-input 
                placeholder="Телефон" 
                type="text" 
                required
                v-model="modalPhone"
                class="px-3 py-4 mt-3"
            />
            <b-form-input 
                placeholder="Email" 
                type="email" 
                required
                v-model="modalEmail"
                class="px-3 py-4 mt-3"
            />
            <b-button 
                type="submit" 
                variant="primary" 
                class="px-3 py-2 mt-4">
                Заказать
            </b-button>
        </b-form>
    </b-modal>
</template>


<script>
    export default {
		data: function() {
			return {
				modalTitle: 'Заказать консультацию',
				modalName: '',
				modalPhone: '',
				modalEmail: '',
			};
		},
		methods: {
            modalConsultation() {
               carrotquest.track("Заказал консультацию", {
					'Телефон': this.phone,
					'Имя': this.name,
					'Email': this.email,
					'url': location.host + location.pathname
				});
				carrotquest.identify([
					{"op": "update_or_create", "key": "$phone", "value": this.phone},
					{"op": "update_or_create", "key": "$name", "value": this.name},
					{"op": "update_or_create", "key": "$email", "value": this.email}
				]);

				dataLayer.push({ event: 'UAevent', eventCategory: 'leads', eventAction: 'phone', eventLabel: location.host + location.pathname })
				fbq('trackCustom', 'get_demo', {page: location.pathname})

				carrotquest.track("Заполнил форму на демо", {
					'phone': this.phone,
					'email': this.email,
					'type': 'form',
					'url': location.host + location.pathname
				});
				
				this.name = ""
				this.phone = ""
				this.email = ""

				this.$refs['modalConsultation'].hide()
				this.$refs['suсcessDownload'].show()
				setTimeout(() => {
					this.$refs['suсcessDownload'].hide()
				}, 7000);
            }
        }
    }
</script>