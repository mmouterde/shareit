angular.module("app").directive("question", function () {
  return {
    restrict: "E",
    scope: {
      message: "="
    },
    replace: true,
    templateUrl: 'question/question.directive.html',
    controller : function($scope,QuestionService){
      $scope.getVoteUrl = function(){ return QuestionService.getVoteURL($scope.message)};
      $scope.getFavoriteUrl = function(){ return QuestionService.getFavoriteURL($scope.message)};

      $scope.isVoteEnable = function(){
        return angular.isDefined($scope.getVoteUrl($scope.message))
      };
      $scope.isFavorite = function(){
        return angular.isDefined($scope.getFavoriteUrl($scope.message))
      };
    }
  };
});
