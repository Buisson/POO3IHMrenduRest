/**
 * Created by ca309567 on 14/05/15.
 */
'use strict';


angular.module('ProjetIhmRest')
  .controller('AjoutRole', function ($scope,$http,$routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.currentProjet = $routeParams.projectId;

    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users')
      .success(function(data) {
        $scope.users = data.data;
      });



    $scope.ajoutRole = function(idProjet){

      var idUser = jQuery("#selectedId").children(":selected").attr("id");
      var role = new Object();
      role.name = jQuery("#name").val();
      role.UserId = idUser;
      role.ProjectId = idProjet;
      var put = JSON.stringify(role);
      if(role.UserId=="NULL"){
        alert("Veuillez selectionner un utilisateur dans la liste.");
      }
      else if(role.name==''){
        alert("veuillez rentrer un nom de role");
      }
      else{
        $http.post(" http://poo-ihm-2015-rest.herokuapp.com/api/Roles",put).success(function(){
          location.href="/#/projects/"+idProjet;
        });
      }

    }

  });
