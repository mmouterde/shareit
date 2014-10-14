angular.module("app").directive("answer", function () {
  return {
    restrict: "E",
    scope: {
      message: "="
    },
    replace: true,
    templateUrl: 'question/answer.directive.html'
  };
});
