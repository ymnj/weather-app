(function(){

  angular
    .module('weatherApp')
    .service('locationService', locationService );

    function locationService(){
      this.location = "";
    }

})();