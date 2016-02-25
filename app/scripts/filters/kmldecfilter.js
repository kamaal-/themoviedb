'use strict';

/**
 * @ngdoc filter
 * @name themoviedbApp.filter:kmlDecFilter
 * @function
 * @description
 * # kmlDecFilter
 * Filter in the themoviedbApp.
 */
angular.module('themoviedbApp')
  .filter('kmlDecFilter', function () {
    return function (input, places) {
      	if (isNaN(input)){ return input; }
      	var factor = "1" + new Array(+(places > 0 && places + 1)).join("0");
        return Math.round(input * factor) / factor;
    };
  });
