/**
 * Created by ca309567 on 11/05/15.
 */
angular.module("ProjetIhmRest")
  .service("lister",['$http',function lister($http){

    var urlProjet = "http://poo-ihm-2015-rest.herokuapp.com/api/Projects/";
    var retour;
    this.listerProjets = function(OnSucess,OnError){
      $http.get(urlProjet).success(function(data){
        if(data.status == "success"){
          OnSucess(data.data);
        }
        else{
          OnError(data.data);
        }
      });
    }

    this.getProjet = function(id,OnSuccess){
      $http.get(urlProjet+'/'+id).success(function(data){
        if(data.status == "success"){
          OnSuccess(data.data);
        }
      });
    }
  }]);
