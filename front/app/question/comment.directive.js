angular.module("app").directive("comment", function () {
  return {
    restrict: "E",
    scope: {
      comment: "="
    },
    replace: true,
    templateUrl: 'question/comment.directive.html'
  };
});
