'use strict';

describe('WordCruncher', function() {
  var wc;

  beforeEach(function() {
    var text = "This is a sample text";
    wc = new WordCruncher(text);
  });

  describe('upon initialization', function() {
    it('takes a parameter in a string format', function() {
      expect(wc.text).toEqual("This is a sample text");
    });

    it('has an empty wordsArray', function() {
      expect(wc.wordsArray).toEqual([]);
    });

    it('has an empty wordCount hash', function() {
      expect(wc.wordCount).toEqual({});
    });
  });

  describe('#replaceUpperCase', function() {
    it('replaces upper case with lower case characters', function() {
      wc.replaceUpperCase();
      expect(wc.text).toEqual("this is a sample text");
    });
  });

  describe('#removeNonAlphanumerics', function() {
    it('strips everything except alphanumeric characters and whitespace', function() {
      wc.text = "This is an example of a string with punctuation .,:;!()$%";
      wc.removeNonAlphanumerics();
      expect(wc.text).toEqual("This is an example of a string with punctuation ");
    });
  });

  describe('#splitText', function() {
    it('splits text into an array of individual words', function() {
      wc.splitText();
      expect(wc.wordsArray).toEqual([ "This", "is", "a", "sample", "text" ]);
    });
  });

  describe('#countWordFrequencies', function() {
    it('counts the frequencies for each word', function() {
      wc.text = "This is a sample text";
      wc.splitText();
      expect(wc.countWordFrequencies()).toEqual({ This: 1, is: 1,
                                                a: 1, sample: 1,
                                                text: 1 });
    });
  });

  describe('#isPrime', function() {
    it('returns true if the number is a prime', function() {
      expect(wc.isPrime(11)).toEqual(true);
    });

    it('returns false if the number is not prime', function() {
      expect(wc.isPrime(4)).toEqual(false);
    });
  });

  describe('#printOutput', function() {
    it('prints the words with its frequency and whether it is a prime', function () {
      wc.wordsArray = [ "this", "this", "is", "a", "sample", "text" ];
      wc.wordCount = { this: 2, is: 1, a: 1, sample: 1, text:1 };
      expect(wc.printOutput()).toEqual([ "this: 2 (PRIME)", "is: 1",
                                        "a: 1", "sample: 1",
                                        "text: 1" ]);
    });
  });
});
