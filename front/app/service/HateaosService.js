angular.module("app").service('HateaosService', function () {
  var service = {};

  service.getRelHref = function (elem, rel) {
    var result = undefined;
    if (angular.isDefined(elem) && angular.isDefined(elem.links) && angular.isArray(elem.links)) {
      elem.links.every(function (elem) {
        if (elem.rel === rel) {
          result = elem.href;
          return false;
        }
        return true;
      });
    }
    return result;
  }

  return service;
});
