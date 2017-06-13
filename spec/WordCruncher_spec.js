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

  describe('#convertUpperCase', function() {
    it('converts upper case to lower case characters', function() {
      wc.convertUpperCase();
      expect(wc.text).toEqual("this is a sample text");
    });
  });

  describe('#removePunctuation', function() {
    it('strips everything except alphanumeric characters and whitespace', function() {
      wc.text = "This is an example of a string with punctuation .,:;!()$%";
      wc.removePunctuation();
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
      wc.text = "This This is a sample text";
      wc.convertUpperCase();
      wc.removePunctuation();
      wc.splitText();
      wc.countWordFrequencies();
      expect(wc.printOutput()).toEqual([ "this: 2 (PRIME)", "is: 1",
                                        "a: 1", "sample: 1",
                                        "text: 1" ]);
    });
  });
});
