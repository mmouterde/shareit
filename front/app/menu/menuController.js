'use strict';

angular.module('app').controller('MenuController', function ($scope,$location) {
  $scope.goto = function (url) {
    $location.path(url);
  }

});
