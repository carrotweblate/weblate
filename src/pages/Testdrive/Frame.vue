<template>
	<Layout :header="false" :footer="false">

		<img id="siteImage" :src="searchSite" width="100%" alt=" ">

	</Layout>
</template>


<script>
	import axios from 'axios'

	export default {
		data: function() {
			return {
				//searchSite: 'https://api.apiflash.com/v1/urltoimage?access_key=f883a85678514489bf673efe63f814fe&format=jpeg&full_page=true&width=1400&quality=80&url='
				searchSite: ''
			}
		},
		//Грузим изображение
		async mounted() {
			try {
				axios.get('https://services.eu-central-1.v2.cloudbrowser-api.com/image?source=http://yandex.ru&key=h5QYilxGGJ2dRWV48GCn4yK0i4GFLbNFphtxGgdnCop26nj9bZ1wGVUvdJ0mwRoviPLa3ZcB', {
					headers: {
						'Access-Control-Allow-Origin': '*',
						'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
						'Access-Control-Allow-Headers': 'Authorization'
					}
					}).then(function (response) {
						console.log('response is : ' + response.data);
					}).catch(function (error) {
					}
				);
			} catch (error) {
			}
		},
		// mounted () {
		// 	//Достаём урл
		// 	var search = location.search.substr(1)
		// 		.split('&')
		// 		.reduce(function(res, a) {
		// 			var t = a.split('=');
		// 			res[decodeURIComponent(t[0])] = t.length == 1 ? null : decodeURIComponent(t[1]);
		// 			return res;
		// 		}, {});
			
		// 	// if (search.site) {
		// 	// 	this.searchSite = this.searchSite + search.site
		// 	// }
		// }
	}
</script>