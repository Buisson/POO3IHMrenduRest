/**
 * Created by ca309567 on 22/04/15.
 */
'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pooIhmExemplesApp
 */
angular.module('ProjetIhmRest')
  .controller('AddCtrl', function ($scope,$http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.add = function add(){
      var name = $("#name").val();
      var surname = $("#surname").val();
      var email = $("#email").val();

      var newPerson = new Object();
      newPerson.name = name;
      newPerson.surname = surname;
      newPerson.email = email;
      //alert(email);
      if(newPerson.name=='' || newPerson.surname==''){
        alert("Veuillez remplir les champs nom et prénom.");
      }
      else {
        var reg = new RegExp('^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$', 'i');
        if (!reg.test(newPerson.email) && newPerson.email != "") {
          alert("mail mal formée veuillez rentrer une adresse mail valide");
        }
        else {
          if(newPerson.email==''){
            newPerson.email=null;
          }
          var put = JSON.stringify(newPerson);

          $http.post("http://poo-ihm-2015-rest.herokuapp.com/api/Users/", put).success(function (data) {
            if (data.status == "success") {
              location.href = "#/users/" + data.data.id;
            }
            else {
              //alert(JSON.stringify(data));
              alert("une erreur est survenue veuillez réessayer ultérieurement");
            }
          });
        }
      }
    }

    $scope.addProject = function add() {
      var title = jQuery("#title").val();
      var description = jQuery("#description").val();
      var year = jQuery("#year").val();

      var newProject = new Object();
      newProject.title = title;
      newProject.description = description;
      newProject.year = year;

      var send = JSON.stringify(newProject);

      if(newProject.title=='' || newProject.description==''){
        alert("Veuillez remplir tout les champs.");
      }
      else {
        var reg = /\b(19[7-9][0-9]|2[0-9]{3})\b/;
        if (!reg.test(newProject.year) || newProject.year < 0) {
          alert("Veuillez rentrer une date entre 1970 et 2999");
        }
        else {

          $http.post("http://poo-ihm-2015-rest.herokuapp.com/api/Projects/", send).success(function (data) {
            if (data.status == "success") {
              location.href = "#/projects/" + data.data.id;
            }
            else {
              alert("une erreur est survenue veuillez réessayer ultérieurement");
            }
          });
        }
      }
    }



  });
