!(function () {
  function t(t, e) {
    return function () {
      window.dashlyasync.push(t, arguments);
    };
  }
  if ("undefined" == typeof dashly) {
    var e = document.createElement("script");
    (e.type = "text/javascript"),
      (e.async = !0),
      (e.src = "//cdn.dashly.app/api.min.js"),
      document.getElementsByTagName("head")[0].appendChild(e),
      (window.dashly = {}),
      (window.dashlyasync = []),
      (dashly.settings = {});
    for (
      var n = [
          "connect",
          "track",
          "identify",
          "auth",
          "oth",
          "onReady",
          "addCallback",
          "removeCallback",
          "trackMessageInteraction",
        ],
        a = 0;
      a < n.length;
      a++
    )
      dashly[n[a]] = t(n[a]);
  }
})(),
  dashly.connect("4-d6a24bda4c9f625f882871078a5f01");
