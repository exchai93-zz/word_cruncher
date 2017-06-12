'use strict';

describe('WordCruncher', function() {
  var wc;

  beforeEach(function() {
    var text = "This is a sample text"
    wc = new WordCruncher(text);
  });

  describe('initialize', function() {
    it('takes a parameter in a string format', function() {
      expect(wc.text).toEqual("This is a sample text");
    });
  });

  describe('string format', function() {
    it('strips everything except alphanumeric characters and whitespace', function() {
      wc.text = "This is an example of a string with punctuation .,:;!()$%";
      wc.removeNonAlphanumerics();
      expect(wc.text).toEqual("This is an example of a string with punctuation ");
    });

    it('replaces upper case with lower case characters', function() {
      wc.replaceUpperCase();
      expect(wc.text).toEqual("this is a sample text");
    });

    it('splits text into an array of individual words', function() {
      wc.splitText();
      expect(wc.text[0]).toEqual("This");
      expect(wc.text[1]).toEqual("is");
    });
  });

  describe('counting number of words', function() {
    it('returns values of one', function() {
      wc.removeNonAlphanumerics();
      wc.replaceUpperCase();
      wc.splitText();
      wc.countWordFrequencies();
      expect(wc.wordCount).toEqual({"this": 1, "is": 1,
                                    "a": 1, "sample": 1,
                                    "text": 1});
    });
  });


});
