
(function(){

  angular
    .module('weatherApp')
    .directive('searchResults', searchResults );

  function searchResults(){
    return {
      restrict: 'E',  
      templateUrl: 'shared/forecast/searchresultView.html',
      replace: true,
      scope: {
        weatherDay: '=',
        dateFormat: '@',
        dateToStandard: '&',
        convertToCelsius: '&',
        weatherIcon: '&'
      }
    }
  }

})();