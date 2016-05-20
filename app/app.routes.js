
(function(){

  angular
    .module('weatherApp')
    .config(config);


  function config($routeProvider, $locationProvider){

    $routeProvider
      .when( '/', {
        templateUrl: 'components/home/home.html',
        controller: 'homeController'
      })
      .when( '/forecast', {
        templateUrl: 'components/forecast/forecast.html',
        controller: 'forecastController'
      })
      .when( '/forecast/:days', {
        templateUrl: 'components/forecast/forecast.html',
        controller: 'forecastController'
      });

  }

})();