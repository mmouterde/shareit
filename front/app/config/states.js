'use strict';

angular.module('app')
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: "home/home.html"
      })
      $urlRouterProvider.otherwise("/");
  });
