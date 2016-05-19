
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
      .when( '/forcast', {
        templateUrl: 'components/forcast/forcast.html',
        controller: 'forcastController'
      })
      .when( '/forcast/:days', {
        templateUrl: 'components/forcast/forcast.html',
        controller: 'forcastController'
      });

  }

})();