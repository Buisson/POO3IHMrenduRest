'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pooIhmExemplesApp
 */
angular.module('ProjetIhmRest')
  .controller('UsersCtrl', ['$scope', '$http', '$routeParams','suppression', function ($scope, $http, $routeParams, suppression) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users')
      .success(function(data) {
        $scope.users = data.data;
      });

    if($routeParams.userId) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $routeParams.userId)
      .success(function(data) {
        if (data.status == "success") {
          $scope.currentUser = data.data;
        }
      });

      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $routeParams.userId + "/Projects")
        .success(function(data) {
          if (data.status == "success") {
            $scope.currentUserProjects = data.data;
          }
        });

    }

    $scope.supprimmerId = function(id){
      suppression.supprimerUser(id);
    }

    setActiveNav("#users");

  }]);
