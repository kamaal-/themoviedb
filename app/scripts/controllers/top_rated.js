'use strict';

/**
 * @ngdoc function
 * @name themoviedbApp.controller:TopRatedCtrl
 * @description
 * # TopRatedCtrl
 * Controller of the themoviedbApp
 */
angular.module('themoviedbApp')
  .controller('TopRatedCtrl', function ($scope, $http) {
    var 
		  service = '/movie/top_rated',
		  _this = this,
		  url;
    _this.fetchAPI = function (service){
    	url = $scope.api.base + service + '?api_key=' + $scope.api.apiKey + '&limit=6' + '&callback=' + $scope.api.callback;
    	$http.jsonp(url).then(function(response) {
			$scope.movies.sets = response.data.results.chunk_array(6);
	    },function(data) {
	      	$scope.result = JSON.stringify(data);
	    });
    };
    _this.fetchAPI(service);
     $scope.movies.selectedSlide = 0;
    $scope.nav.focused = 1;
  });
