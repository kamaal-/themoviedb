'use strict';

/**
 * @ngdoc directive
 * @name themoviedbApp.directive:errSrc
 * @description
 * # errSrc
 */
angular.module('themoviedbApp')
  .directive('errSrc', function () {
    return {
	    link: function(scope, element, attrs) {

	      	scope.$watch(function() {
	          	return attrs.ngSrc;
	        }, function (value) {
	          if (!value) {
	            element.attr('src', attrs.errSrc);  
	          }
	      });

	      element.bind('error', function() {
	        element.attr('src', attrs.errSrc);
	      });
	    }
	};
});
