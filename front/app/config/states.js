'use strict';

angular.module('app')
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: "home/home.html"
      })
      .state('question', {
        url: "/question",
        templateUrl: "question/question.html"
      });

      $urlRouterProvider.otherwise("/");
  });
