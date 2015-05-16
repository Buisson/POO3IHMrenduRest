/**
 * Created by ca309567 on 22/04/15.
 */
'use strict';


angular.module('ProjetIhmRest')
  .controller('EditCtrl', function ($scope,$http,$routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    if($routeParams.userId){
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $routeParams.userId)
      .success(function(data) {
        if (data.status == "success") {
          $scope.currentUser = data.data;
        }
      });
    }

    $scope.edit = function edit(){
      var name = $("#name").val();
      var surname = $("#surname").val();
      var email = $("#email").val();

      var newPerson = new Object();
      newPerson.name = name;
      newPerson.surname = surname;
      newPerson.email = email;

      var reg = new RegExp('^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$', 'i');
      if(!reg.test(newPerson.email) && newPerson.email!=""){
        alert("mail mal formée veuillez rentrer une adresse mail valide");
      }
      else {
        //alert(email);
        var put = JSON.stringify(newPerson);
        $http.put("http://poo-ihm-2015-rest.herokuapp.com/api/Users/" + $routeParams.userId, put).success(function (data) {
          if(data.status == "success") {
            location.href = "/#/users/" + $routeParams.userId;
          }
          else{
            alert("cet adresse mail est deja utilisé sur le site. Veuillez la modifier.");
          }
        });
      }
    }
  });
