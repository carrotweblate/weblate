//CQ
(function() {
    function Build(name, args) {
        return function() {
            window.carrotquestasync.push(name, arguments);
        }
    }
    if (typeof carrotquest === 'undefined') {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = '//cdn.carrotquest.io/api.min.js';
        var x = document.getElementsByTagName('head')[0];
        x.appendChild(s);
        window.carrotquest = {};
        window.carrotquestasync = [];
        carrotquest.settings = {};
        var m = ['connect', 'track', 'identify', 'auth', 'open', 'onReady', 'addCallback', 'removeCallback', 'trackMessageInteraction'];
        for (var i = 0; i < m.length; i++) carrotquest[m[i]] = Build(m[i]);
    }
})();
carrotquest.connect('100-675e2c8860097948c325b680f4da');
carrotquest.track('Зашел на лендинг', {
    'URL': location.href
});

//GTM
(function(w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
    });
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src =
        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-PHNG63V');