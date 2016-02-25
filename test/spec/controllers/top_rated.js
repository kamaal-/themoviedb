'use strict';

describe('Controller: TopRatedCtrl', function () {

  // load the controller's module
  beforeEach(module('themoviedbApp'));

  var TopRatedCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TopRatedCtrl = $controller('TopRatedCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TopRatedCtrl.awesomeThings.length).toBe(3);
  });
});
