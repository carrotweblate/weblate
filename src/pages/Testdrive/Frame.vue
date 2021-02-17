<template>
	<Layout :header="false" :footer="false">

		<img id="siteImage" :src="searchSite" width="100%" alt=" ">

	</Layout>
</template>


<script>
	export default {
		data: function() {
			return {
				searchSite: 'https://api.apiflash.com/v1/urltoimage?access_key=f883a85678514489bf673efe63f814fe&format=jpeg&full_page=true&width=1400&quality=80&url='
			}
		},
		mounted () {
			//Достаём урл
			var search = location.search.substr(1)
				.split('&')
				.reduce(function(res, a) {
					var t = a.split('=');
					res[decodeURIComponent(t[0])] = t.length == 1 ? null : decodeURIComponent(t[1]);
					return res;
				}, {});
			
			if (search.site) {
				this.searchSite = this.searchSite + search.site
			}
		}
	}
</script>