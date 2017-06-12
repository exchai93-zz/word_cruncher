'use strict';

describe('WordCruncher', function() {
  var wc;

  beforeEach(function() {
    var text = "This is a sample text"
    wc = new WordCruncher(text);
  });

  describe('initialize', function() {
    it('contains text', function() {
      expect(wc.text).toEqual(text);
    });
  });


});
