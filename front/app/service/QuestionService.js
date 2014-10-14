angular.module("app").service('QuestionService', function (HateaosService) {
  var service = {};

  service.getVoteURL = function (question) {
    return HateaosService.getRelHref(question,'vote');
  }

  service.getFavoriteURL = function (question) {
    return HateaosService.getRelHref(question,'favorite');
  }

  return service;
});
