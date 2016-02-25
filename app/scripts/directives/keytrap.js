'use strict';

/**
 * @ngdoc directive
 * @name themoviedbApp.directive:keyTrap
 * @description
 * # keyTrap
 */
angular.module('themoviedbApp')
  .directive('keyTrap', function () {
    return function( $scope, elem ) {
      elem.bind('keydown', function( event ) {
        $scope.$broadcast('keydown', { code: event.keyCode } );
      });
    };
  });
