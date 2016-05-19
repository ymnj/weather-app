(function(){

  angular
    .module('weatherApp')
    .controller('forcastController', ['$scope', '$resource', '$routeParams', 'locationService', forcastController]);


    function forcastController($scope, $resource, $routeParams, locationService){

      $scope.location = locationService.location;
      //$scope.numOfDays = 7;
      $scope.numOfDays = $routeParams.days || 2;

      // Retrieve weather object from openweathermap API
      $scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily?&appid=5e95d6de79d8a5ac30309cc7a445c737', { callback: "JSON_CALLBACK" }, 
          {get: { method: "JSONP" }});

      $scope.weatherResult = $scope.weatherAPI.get({
        q: $scope.location,
        cnt: $scope.numOfDays
      });

      // Convert date
      $scope.dateConvert = function(date){
        return new Date(date * 1000);
      }

      //Convert temperatures
      $scope.toCelsius = function(temp){
        return Math.round(temp - 273.15);
      }

    }

})();