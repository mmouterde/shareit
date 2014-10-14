angular.module('app').filter('from', function () {
  return function (input, start) {
    return input.slice(start, input.length);
  };
});
