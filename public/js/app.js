'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.wordServices',
  'myApp.gameServices',
  'myApp.directives',
  'ngRoute'
]).config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'partials/home.html',
    controller: 'MyCtrl1'
  }).when('/game', {
    templateUrl: 'partials/game.html',
    controller: 'GameCtrl'
  }).otherwise({
    redirectTo: '/home'
  });

  $locationProvider.html5Mode(true);
});