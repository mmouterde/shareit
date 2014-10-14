'use strict';

angular.module('app').controller('QuestionController', function ($scope, $state, $stateParams, ThreadService) {
  //Load data from backend
  ThreadService.getThread($stateParams.threadID).then(function (data) {
    $scope.thread = data;
    $scope.question = $scope.thread.messages[0];
    $scope.answers = $scope.thread.messages.slice(1, $scope.thread.messages.length);
  });
  $scope.page_title = $state.current.data.page_title;
  $scope.page_subtitle = $state.current.data.page_subtitle;

});
