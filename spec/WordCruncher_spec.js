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

  describe('string format', function() {
    it('splits text into individual words', function() {
      wc.splitWords();
      expect(wc.text[1]).toEqual("is");
    });
    it('strips string of all punctuation', function() {
      wc.text = "This is an example of a string with punctuation .,:;!()$%";
      wc.removePunctuation();
      expect(wc.text).toEqual("This is an example of a string with punctuation ");
    });
    it('strips string of all upper case characters', function() {
      wc.removeCapitals();
      expect(wc.text).toEqual("this is a sample text");
    });
  });


});
