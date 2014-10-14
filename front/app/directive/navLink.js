angular.module("app").directive("navLink", function () {
  return {
    restrict: "E",
    transclude:true,
    scope: {href: "@",
      label: "@"},

    replace: true,
    templateUrl: 'directive/navLink.html'
  };
});
