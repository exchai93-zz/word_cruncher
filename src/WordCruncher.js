'use strict';

function WordCruncher(text) {
  this.text = text
  this.wordList = [];
  this.wordCount = {};
}

WordCruncher.prototype.replaceUpperCase= function () {
  this.text = this.text.toLowerCase();
};

WordCruncher.prototype.removeNonAlphanumerics = function () {
  this.text = this.text.replace(/[^\w\s]|_/g, "");
};

WordCruncher.prototype.splitText = function () {
  this.wordList = this.text.split(" ");
};

WordCruncher.prototype.countWordFrequencies = function () {
  // var wordList = this.wordList
  for (var i = 0; i < this.wordList.length; i++) {
    var word = this.wordList[i];

    if (this.wordCount.hasOwnProperty(word)) {
      this.wordCount[word] += 1;
    } else {
      this.wordCount[word] = 1;
    }
  };

  return this.wordCount
};

WordCruncher.prototype.isPrime = function (number) {

  for (var i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};
