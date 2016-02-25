'use strict';

/**
 * @ngdoc filter
 * @name themoviedbApp.filter:kmlDecTrimFilter
 * @function
 * @description
 * # kmlDecTrimFilter
 * Filter in the themoviedbApp.
 */
angular.module('themoviedbApp')
  .filter('kmlDecTrimFilter', function () {
    return function (text, length, replacer){
    if (text !== undefined){
      if (isNaN(length)){
        length = 10;
      }

      if (replacer === undefined){
        replacer = "...";
      }

      if (text.length <= length || text.length - replacer.length <= length){
        return text;
      }else{
        return String(text).substring(0, length - replacer.length) + replacer;
      }
    }
  };
  });
