'use strict';

/**
 * @ngdoc filter
 * @name themoviedbApp.filter:kmlFindId
 * @function
 * @description
 * # kmlFindId
 * Filter in the themoviedbApp.
 */
angular.module('themoviedbApp')
  .filter('kmlFindId', function () {
    return function (input) {
      return 'kmlFindId filter: ' + input;
    };
  });
