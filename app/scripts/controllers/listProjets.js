/**
 * Created by ca309567 on 11/05/15.
 */
angular.module('ProjetIhmRest')
  .controller('ListProjCtrl', ['$scope', '$http', 'lister', '$routeParams', 'suppression','$location', function ($scope,$http,lister,$routeParams,suppression,$location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    //$scope.projets = "TEST";

    function OnSucess(data) {
      $scope.projets = data;
    }

    function OnError(data) {
      alert("une erreur est survenue");
    }

    $scope.listProjets = function () {
      lister.listerProjets(OnSucess, OnError);
    }

    function OnSuccessProjet(data) {
      $scope.currentProjet = data;
    }

    $scope.getProjet = function (id) {
      lister.getProjet(id, OnSuccessProjet);
    }

    if ($routeParams.projectId) {
      $scope.getProjet($routeParams.projectId);
    }
    $scope.listProjets();

    $scope.supprimmerIdProjet = function (id) {
      suppression.supprimerProjet(id);
    }
    $scope.arrTempUser = [];

    $scope.tableauUser = [];
    $scope.tableauRoles = [];

    $scope.getUserInProject = function (id) {
      $http.get("http://poo-ihm-2015-rest.herokuapp.com/api/Projects/"+id+"/Roles").success(function (data) {
        jQuery.each(data.data, function (i, val) {
          $scope.arrTempUser.push(val.UserId);
          $scope.tableauRoles.push(val);
        });
        $scope.recupListFromArray();
      });
    }

    $scope.recupListFromArray = function () {
      jQuery.each($scope.arrTempUser, function (i,val) {
        //alert(val);
        //alert("http://poo-ihm-2015-rest.herokuapp.com/api/Users/"+this);
        $http.get("http://poo-ihm-2015-rest.herokuapp.com/api/Users/" + val).success(function (data) {
          $scope.tableauUser[i] = data.data;
        });
      });
    }

    if ($location.path() != "/projects") {
      $scope.getUserInProject($routeParams.projectId);
    }

    $scope.supprimerRole = function(id){
      suppression.supprimerRole(id);
    }

    setActiveNav("#projects");

  }]);



