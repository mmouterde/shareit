angular.module("app").directive("notificationIcon", function(){
  return {
    restrict: "E",
    replace:true,
    transclude:true,
    scope:{
      iconClass:"@",
      numberClass:"@",
      number:"="
    },
    template:'<span class="dropdown notificationIcon">' +
      ' <a href class="dropdown-toggle">' +
      '  <span class="{{iconClass}}"></span>' +
      '  <span class="notificationLabel label {{numberClass}}" ng-if="number">{{number}}</span>' +
      ' </a>' +
      ' <ul class="dropdown-menu" ng-transclude></ul>' +
      '</span>'
  };
});


