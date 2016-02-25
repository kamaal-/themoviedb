'use strict';

describe('Filter: kmlDecTrimFilter', function () {

  // load the filter's module
  beforeEach(module('themoviedbApp'));

  // initialize a new instance of the filter before each test
  var kmlDecTrimFilter;
  beforeEach(inject(function ($filter) {
    kmlDecTrimFilter = $filter('kmlDecTrimFilter');
  }));

  it('should return the input prefixed with "kmlDecTrimFilter filter:"', function () {
    var text = 'angularjs';
    expect(kmlDecTrimFilter(text)).toBe('kmlDecTrimFilter filter: ' + text);
  });

});
