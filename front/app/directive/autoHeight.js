angular.module('app').directive('autoHeight', function() {
  return function (scope, element, attrs) {
    var resize = function() {
      element.height($(window).height() - $('header').outerHeight());
    }
    $(window).resize(function(){
      resize();
    });
    resize();
  }
});
