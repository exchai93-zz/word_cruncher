'use strict';

function WordCruncher(text) {
  this.text = text
}

WordCruncher.prototype.splitWords = function () {
  this.text = this.text.split(" ");
};
