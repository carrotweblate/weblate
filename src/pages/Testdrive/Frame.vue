<template>
	<Layout :header="false" :footer="false">
		
		<img v-if="site" id="siteImage" :src="site" width="100%" :alt="site">

	</Layout>
</template>


<script>
	import axios from 'axios'

	export default {
		data: function() {
			return {
				//searchSite: 'https://api.apiflash.com/v1/urltoimage?access_key=f883a85678514489bf673efe63f814fe&format=jpeg&full_page=true&width=1400&quality=80&url='
				searchSite: '',
				site: ''
			}
		},
		created: function () {
			//Достаём урл
			var search = location.search.substr(1)
				.split('&')
				.reduce(function(res, a) {
					var t = a.split('=');
					res[decodeURIComponent(t[0])] = t.length == 1 ? null : decodeURIComponent(t[1]);
					return res;
				}, {});
			this.searchSite = search.site
			if (!!this.searchSite.search('http')) {
				if (!this.searchSite.search('http://')) {
					this.searchSite = this.searchSite.replace('http://','https://')
				} else {
					this.searchSite = 'https://' + this.searchSite
				}
			}
		},
		//Грузим изображение
		async mounted() {
			try {
				axios.get('https://cors-anywhere.herokuapp.com/https://services.eu-central-1.v2.cloudbrowser-api.com/image?output_return_method=2&client_width=1400&capture_full_page=1&key=h5QYilxGGJ2dRWV48GCn4yK0i4GFLbNFphtxGgdnCop26nj9bZ1wGVUvdJ0mwRoviPLa3ZcB&source=' + this.searchSite).then(ref => {
					this.site = ref.data.location
				})
			} catch (error) {
				console.log(error)
			}
		}
	}
</script>