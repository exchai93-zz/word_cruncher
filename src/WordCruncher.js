'use strict';

function WordCruncher(text) {
  this.text = text
}

WordCruncher.prototype.splitWords = function () {
  this.text = this.text.split(" ");
};

WordCruncher.prototype.removePunctuation = function () {
  this.text = this.text.replace(/[^\w\s]|_/g, "");
};

WordCruncher.prototype.removeCapitals= function () {
  this.text = this.text.toLowerCase();
};
