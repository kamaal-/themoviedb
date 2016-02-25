'use strict';

describe('Filter: kmlFindId', function () {

  // load the filter's module
  beforeEach(module('themoviedbApp'));

  // initialize a new instance of the filter before each test
  var kmlFindId;
  beforeEach(inject(function ($filter) {
    kmlFindId = $filter('kmlFindId');
  }));

  it('should return the input prefixed with "kmlFindId filter:"', function () {
    var text = 'angularjs';
    expect(kmlFindId(text)).toBe('kmlFindId filter: ' + text);
  });

});
