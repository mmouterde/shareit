'use strict';

angular.module('app', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
      url: "/",
      templateUrl: "home/home.html"
    });

    $urlRouterProvider.otherwise("/");
  });
