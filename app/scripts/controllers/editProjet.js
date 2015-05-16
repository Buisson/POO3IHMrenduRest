/**
 * Created by ca309567 on 14/05/15.
 */
'use strict';


angular.module('ProjetIhmRest')
  .controller('EditCtrlProj', function ($scope,$http,$routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    if($routeParams.projectId){
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + $routeParams.projectId)
        .success(function(data) {
          if (data.status == "success") {
            $scope.currentProjet = data.data;
          }
        });
    }

    $scope.edit = function edit(){
      var title = $("#title").val();
      var description = $("#description").val();
      var year = $("#year").val();

      var newProject = new Object();
      newProject.title = title;
      newProject.description = description;
      newProject.year = year;

      if(newProject.title=='' || newProject.description==''){
        alert("Veuillez remplir tout les champs.");
      }
      else {
        var reg = /\b(19[7-9][0-9]|2[0-9]{3})\b/;
        if (!reg.test(newProject.year) || newProject.year < 0) {
          alert("Veuillez rentrer une date entre 1970 et 2999");
        }
        else {
          var put = JSON.stringify(newProject);
          $http.put("http://poo-ihm-2015-rest.herokuapp.com/api/Projects/" + $routeParams.projectId, put).success(function () {
            location.href = "/#/projects/" + $routeParams.projectId;
          });
        }
      }
    }

  });
