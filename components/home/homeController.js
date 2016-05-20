(function(){

  angular
    .module('weatherApp')
    .controller('homeController', [ '$scope', '$location', 'locationService', homeController]);

    function homeController($scope, $location, locationService){

      $scope.location = locationService.location;

      $scope.$watch('location', function(){
        locationService.location = $scope.location;
      })

      $scope.locationSubmit = function(){
        $location.path('/forecast');
      }

    }

})();