angular.module('app').directive('autoHeight', function () {
  return function (scope, element, attrs) {
    var resize = function () {
      var maxHeight = $(window).height();
      var documentHeight = $(document).height();
      if (maxHeight < documentHeight)
        maxHeight = documentHeight;
      element.height(maxHeight - $('header').outerHeight() - $('footer').outerHeight());
    }
    $(window).resize(function () {
      resize();
    });
    resize();
  }
});
