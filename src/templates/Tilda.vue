<template>
	<Layout>

		<!-- Страница из тильды -->
		<div class="tilda" v-html="$context.html" />



		<b-modal ref="open-modal-nte" hide-footer title="Получить на email">
			<b-form v-on:submit.prevent="download">
				
				<b-form-input 
					placeholder="Имя" 
					type="text" 
					required
					v-model="name"
					class="px-3 py-4"
				/>
				<b-form-input 
					placeholder="Телефон" 
					type="text" 
					required
					v-model="phone"
					class="px-3 py-4 mt-3"
				/>
				<b-form-input 
					placeholder="Email" 
					type="email" 
					required
					v-model="email"
					class="px-3 py-4 mt-3"
				/>
			
				<b-button 
					type="submit" 
					variant="primary" 
					class="px-3 py-2 mt-4">
					Отправить
				</b-button>
				
			</b-form>
		</b-modal>

		<b-modal ref="suсcess" hide-footer title="Всё успешно отправлено">
			Проверьте свой email: {{email}}
		</b-modal>

	</Layout>
</template>



<script>
	export default {
		//Делаем в HEAD
		metaInfo() {
			return {
				title: this.$context.title,
				meta: [
					{
						key: 'description',
						name: 'description',
						content: this.$context.description
					}
				]
			}
		},
		data: function() {
			return {
				name: '',
				phone: '',
				email: '',

				event: ''
			};
		},
		methods: {
			showModal() {
				this.$refs['open-modal-nte'].show()
			},
			download () {
				carrotquest.identify([
					{"op": "update_or_create", "key": "$phone", "value": this.phone},
					{"op": "update_or_create", "key": "$name", "value": this.name},
					{"op": "update_or_create", "key": "$email", "value": this.email}
				]);
				carrotquest.track("Заполнил форму на скачивание файлов", {
					'Телефон': this.phone,
					'Имя': this.name,
					'Email': this.email,
					'url': location.host + location.pathname
				})
				carrotquest.track(this.event)
				console.log(this.event)

				dataLayer.push({ event: 'UAevent', eventCategory: 'leads', eventAction: 'phone', eventLabel: location.host + location.pathname })
				fbq('trackCustom', 'get_demo', {page: location.pathname})

				this.$refs['open-modal-nte'].hide()
				this.$refs['suсcess'].show()
				setTimeout(() => {
					this.$refs['suсcess'].hide()
				}, 7000);
			}
		},
		mounted () {

			//Подгружаем стили и скрипты тильды
			for ( var value of this.$page.allTildaFiles.edges.reverse() ) {
				if (value.node.css) {
					let tildaCss = document.createElement("link")
					tildaCss.setAttribute('rel', 'stylesheet')
					tildaCss.setAttribute('href', value.node.css)
					document.head.appendChild(tildaCss)
				} else {
					if ( value.node.js ) {
						let tildaScript = document.createElement("script")
						tildaScript.src = value.node.js
						tildaScript.setAttribute('defer' , '')
						document.head.appendChild(tildaScript)
					}
				}
			}
			
			// Ищем ссылки для открытия модалок
			if ( document.querySelector('a[href*="open-modal-nte"]') ) {
				document.querySelectorAll('a[href*="open-modal-nte"]').forEach(function(item) {
					item.addEventListener('click', function(e) {
						this.$refs['open-modal-nte'].show()

						let addr = new URL(e.srcElement.href.replace('#open-modal-nte' , ''))
						this.event = addr.searchParams.get('cqe')

					}.bind(this))
				}.bind(this))
			}
		}
	}
</script>



<style lang="scss">
	.tilda {
		overflow: hidden;
		#t-header, #t-footer {
			display: none;
		}
	}
	* , *::before , *::after {
		box-sizing: border-box !important;
	}
</style>



<page-query>
	query {
		allTildaFiles {
			edges {
				node {
					css
					js
				}
			}
		}
	}
</page-query>