'use strict';

describe('Controller: NowPlayingCtrl', function () {

  // load the controller's module
  beforeEach(module('themoviedbApp'));

  var NowPlayingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NowPlayingCtrl = $controller('NowPlayingCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NowPlayingCtrl.awesomeThings.length).toBe(3);
  });
});
