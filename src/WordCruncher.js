'use strict';

function WordCruncher(text) {
  this.text = text;
  this.wordsArray = [];
  this.wordCount = {};
  this.countedWords = [];
  this.sortedWords = [];
}

WordCruncher.prototype.convertUpperCase= function () {
  this.text = this.text.toLowerCase();
};

WordCruncher.prototype.removePunctuation = function () {
  this.text = this.text.replace(/[^\w\s]|_/g, "");
};

WordCruncher.prototype.splitText = function () {
  this.wordsArray = this.text.split(" ");
};

WordCruncher.prototype.countWordFrequencies = function () {
  var wordsArray = this.wordsArray;

  for (var i = 0; i < wordsArray.length; i++) {
    var word = this.wordsArray[i];

    if (this.wordCount.hasOwnProperty(word)) {
      this.wordCount[word] += 1;
    } else {
      this.wordCount[word] = 1;
      this.countedWords.push(word);
    }
  }

  return this.wordCount;
};

WordCruncher.prototype.isPrime = function (number) {

  for (var i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

WordCruncher.prototype.printOutput = function () {

  for (var i = 0; i < this.countedWords.length; i++) {
    var word = this.countedWords[i];

    if(this.isPrime(this.wordCount[word])) {
      this.sortedWords.push(word + ': ' + this.wordCount[word] + ' (PRIME)');
    } else {
      this.sortedWords.push(word + ': ' + this.wordCount[word]);
    }
  }

  return this.sortedWords;
};

WordCruncher.prototype.runAnalysis = function () {
  this.convertUpperCase();
  this.removePunctuation();
  this.splitText();
  this.countWordFrequencies();
  this.printOutput();
};

var requirejs = require('requirejs');
requirejs.config({
  require('fs');
  nodeRequire: require
});

requirejs(['err', 'data'],
var fs = require('fs') {
  fs.readfile('text_files/the_railway_children.txt', 'utf8', function (err, data) {
    if (err) throw err;

    var wordCruncher = new WordCruncher(data);
    wordCruncher.runAnalysis();
    }
  });
});
