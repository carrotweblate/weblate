<template>
	<Layout class="page page-sdk">

    </Layout>
</template>

<script>
//Код для sdk (ваще шляпа какая-то, часть удалиться, при переносе страницы на JAM сделаем)
// if (location.href.indexOf('carrotquest.io/sdk') > 0 && typeof jQuery!='undefined') {

// 	jQuery(document).on('click', '.api-send-button-link', function() {
// 		carrotquest.track("Лендинг SDK - перешел на github"); 
// 	});
// 	function getClosest(el, s) {
// 		var r = undefined;
// 		while (el) {
// 			if (el.matches(s)) {
// 				r = el;
// 				break;
// 			} else if (el.tagName.toLowerCase()=='body') {
// 				break;
// 			};
// 			el = el.parentElement;
// 		};
// 		return r;
// 	};
// 	var name, app, phone, email;
// 	document.addEventListener('mousedown', function(e) {
// 		if (e.target.matches('form.lead-info__form button')) {
// 			var form = getClosest(e.target, 'form');
// 				name = form.querySelector('input[name="name"]').value;
// 				app = form.querySelector('input[name="app"]').value;
// 				phone = form.querySelector('input[name="phone"]').value;
// 				email = form.querySelector('input[name="email"]').value;
// 		};
// 	});
// 	document.addEventListener('submit', function(e) {
// 		if (e.target.matches('form.lead-info__form')) {
// 			carrotquest.track("Лендинг SDK - записался на демо", {
// 				'$app': app,
// 				'$name': name,
// 				'$phone': phone,
// 				'$email': email
// 			});
// 			carrotquest.identify({
// 				'$app': app,
// 				'$name': name,
// 				'$phone': phone,
// 				'$email': email
// 			});
// 		};
// 	});
// }
</script>