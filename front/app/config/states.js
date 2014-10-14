'use strict';

angular.module('app')
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: "home/home.html"
      })
      .state('question', {
        url: "/question/:threadID",
        templateUrl: "question/question.html",
        controller:"QuestionController",
        data : {
          page_subtitle :"Ask and Answer",
          page_title : "Q&A"
        }
      });

      $urlRouterProvider.otherwise("/");
  });
