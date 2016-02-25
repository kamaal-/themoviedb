'use strict';

/**
 * @ngdoc function
 * @name themoviedbApp.controller:UpcomingCtrl
 * @description
 * # UpcomingCtrl
 * Controller of the themoviedbApp
 */
angular.module('themoviedbApp')
  .controller('UpcomingCtrl', function ($scope, $http) {
    var 
		  service = '/movie/upcoming',
		  _this = this,
		  url;
    _this.fetchAPI = function (service){
    	url = $scope.api.base + service + '?api_key=' + $scope.api.apiKey + '&limit=6' + '&callback=' + $scope.api.callback;
    	$http.jsonp(url).then(function(response) {
			$scope.movies.sets = response.data.results.chunk_array(6);
			console.log($scope.movies);
	    },function(data) {
	      	$scope.result = JSON.stringify(data);
	    });
    };
    _this.fetchAPI(service);
     $scope.movies.selectedSlide = 0;
    $scope.nav.focused = 2;
  });
