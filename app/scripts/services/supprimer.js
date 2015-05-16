/**
 * Created by ca309567 on 11/05/15.
 */
angular.module("ProjetIhmRest")
  .service("suppression",['$http',function suppression($http){

    var urlUsers = "http://poo-ihm-2015-rest.herokuapp.com/api/Users/";

    this.supprimerUser = function(id){
      if(confirm("Voullez-vous vraiment supprimer l'utilisateur ?")){
        $http.delete("http://poo-ihm-2015-rest.herokuapp.com/api/Users/"+id);
        jQuery("#blockIDUser"+id).hide("clip");//cache l'élément qui a été supprimé.
      }
    }

    this.supprimerProjet = function(id){
      if(confirm("Voullez-vous vraiment supprimer le projet ?")){
        $http.delete("http://poo-ihm-2015-rest.herokuapp.com/api/Projects/"+id);
        jQuery("#blockIDProject"+id).hide("clip");//cache l'élément qui a été supprimé.
      }
    }

    this.supprimerRole = function(id){
      if(confirm("Voullez-vous vraiment supprimer cette utilisateur du projet ?")){
        $http.delete("http://poo-ihm-2015-rest.herokuapp.com/api/Roles/"+id);
        jQuery("#blockRole"+id).hide("clip");//cache l'élément qui a été supprimé.
      }
    }


  }]);
