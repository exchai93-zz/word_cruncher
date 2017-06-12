'use strict';

function WordCruncher(text) {
  this.text = text
}

WordCruncher.prototype.removeNonAlphanumerics = function () {
  this.text = this.text.replace(/[^\w\s]|_/g, "");
};

WordCruncher.prototype.replaceUpperCase= function () {
  this.text = this.text.toLowerCase();
};

WordCruncher.prototype.splitText = function () {
  this.text = this.text.split(" ");
};

WordCruncher.prototype.countWordFrequencies = function (words) {

  var wordCount = {};

  this.text.forEach(function(n) {
    if (this.wordCount[this.text[n]] !== undefined) {
      this.wordCount[this.text[n]] ++;
    } else {
      this.wordCount[this.text[n]] == 1;
    }
  })
};
