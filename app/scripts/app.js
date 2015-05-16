'use strict';

/**
 * @ngdoc overview
 * @name ProjetIhmRest
 * @description
 * # pooIhmExemplesApp
 *
 * Main module of the application.
 */
angular
  .module('ProjetIhmRest', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/users' , {
        templateUrl: 'views/Users/list.html',
        controller: 'UsersCtrl'
      })
      .when('/users/:userId', {
        templateUrl: 'views/Users/show.html',
        controller: 'UsersCtrl'
      })
      .when('/add',{
        templateUrl: 'views/add.html',
        controller: 'AddCtrl'
      })
      .when('/edit/:userId',{
        templateUrl: 'views/Users/edit.html',
        controller: 'EditCtrl'
      })
      .when('/projects',{
        templateUrl: 'views/Projects/list.html',
        controller: 'ListProjCtrl'
      })
      .when('/projects/add', {
        templateUrl: 'views/Projects/add.html',
        controller: 'AddCtrl'
      })
      .when('/projects/addRole/:projectId', {
        templateUrl: 'views/Projects/addRole.html',
        controller: 'AjoutRole'
      })
      .when('/projects/:projectId', {
        templateUrl: 'views/Projects/show.html',
        controller: 'ListProjCtrl'
      })
      .when('/projects/edit/:projectId', {
        templateUrl: 'views/Projects/edit.html',
        controller: 'EditCtrlProj'
      })
      .otherwise({
        redirectTo: '/'
      });

  });
