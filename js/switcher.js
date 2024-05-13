window.console =
  window.console ||
  (function () {
    var e = {};
    e.log =
      e.warn =
      e.debug =
      e.info =
      e.error =
      e.time =
      e.dir =
      e.profile =
      e.clear =
      e.exception =
      e.trace =
      e.assert =
        function () {};
    return e;
  })();

window.console =
  window.console ||
  (function () {
    var x = {};
    x.log =
      x.warn =
      x.debug =
      x.info =
      x.error =
      x.time =
      x.dir =
      x.profile =
      x.clear =
      x.exception =
      x.trace =
      x.assert =
        function () {};
    return x;
  })();

$(document).ready(function () {
  var x = '<div class="divider"></div>';

  $(".header-grid").append(x);
});
