angular.module("app").directive("dropdown", function(){
  return {
    restrict: "E",
    replace:true,
    transclude:true,
    scope:{
      iconClass:"@",
      text:"@",
      showCaret:"="
    },
    template:'<span class="dropdown notificationIcon"><a href class="dropdown-toggle"><span ng-if="iconClass" class="{{iconClass}}"></span><span class="hidden-sm hidden-xs"> {{text}} </span><span class="caret"></span></a><ul class="dropdown-menu" ng-transclude></ul></span>'
  };
});


