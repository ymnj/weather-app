(function(){

  angular
    .module('weatherApp')
    .controller('homeController', [ '$scope', 'locationService', homeController]);

    function homeController($scope, locationService){

      $scope.location = locationService.location;

      $scope.$watch('location', function(){
        locationService.location = $scope.location;
      })
    }

})();