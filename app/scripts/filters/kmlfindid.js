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
    return function (input, id) {
      var i,
          len=input.length;
      for (i=0; i<len; i++) {
          if (+input[i].id === +id) {
              return input[i];
          }
      }
      return null;
    };
  });
