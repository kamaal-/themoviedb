'use strict';

describe('Filter: kmlDecFilter', function () {

  // load the filter's module
  beforeEach(module('themoviedbApp'));

  // initialize a new instance of the filter before each test
  var kmlDecFilter;
  beforeEach(inject(function ($filter) {
    kmlDecFilter = $filter('kmlDecFilter');
  }));

  it('should return the input prefixed with "kmlDecFilter filter:"', function () {
    var text = 'angularjs';
    expect(kmlDecFilter(text)).toBe('kmlDecFilter filter: ' + text);
  });

});
