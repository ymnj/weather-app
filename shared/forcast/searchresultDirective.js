
(function(){

  angular
    .module('weatherApp')
    .directive('searchResults', searchResults );

  function searchResults(){
    return {
      restrict: 'E',  
      templateUrl: 'shared/forcast/searchresultView.html',
      replace: true,
      scope: {
        weatherDay: '=',
        dateToStandard: '&',
        convertToCelsius: '&'
      }
    }
  }

})();