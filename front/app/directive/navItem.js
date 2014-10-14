angular.module("app").directive("navItem", function () {
  return {
    restrict: "E",
    transclude: true,
    scope: {label: "@",
      iconClass: "@",
      isOpen: "="},
    controller: function ($scope) {
      $scope.displayIcon = function(){
        return angular.isDefined($scope.isOpen);
      }
    },
    replace: true,
    templateUrl: 'directive/navItem.html'
  };
});
